'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  label?: string; // e.g. "1 PACK"
  savingsAmount?: number;
  variantId?: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string | number) => void;
  updateQuantity: (id: string | number, quantity: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cartCount: number;
  cartTotal: number;
  cartTotalSavings: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('koala-cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('koala-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addItem = (newItem: CartItem) => {
    // Generate deduplication ID for both Client & Server Pixels
    const eventId = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2);

    // 1. TikTok Client-Side Tracking
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('AddToCart', {
        content_id: String(newItem.id),
        content_name: newItem.name,
        value: newItem.price,
        currency: 'SEK',
        quantity: newItem.quantity
      }, { event_id: eventId });
    }

    // 2. TikTok Server-Side Tracking
    if (typeof window !== 'undefined') {
      fetch('/api/tiktok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventName: 'AddToCart',
          eventId: eventId,
          pageUrl: window.location.href,
          contents: [{
            content_id: String(newItem.id),
            content_name: newItem.name,
            quantity: newItem.quantity,
            price: newItem.price
          }],
          value: newItem.price * newItem.quantity,
          currency: 'SEK'
        })
      }).catch(err => console.error('TikTok CAPI error:', err));
    }

    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === newItem.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prev, newItem];
    });
    setIsCartOpen(true);
  };

  const removeItem = (id: string | number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string | number, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartTotalSavings = cartItems.reduce((acc, item) => acc + (item.savingsAmount || 0) * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addItem,
      removeItem,
      updateQuantity,
      isCartOpen,
      setIsCartOpen,
      cartCount,
      cartTotal,
      cartTotalSavings
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
