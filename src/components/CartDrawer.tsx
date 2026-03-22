'use client';

import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeItem, updateQuantity, cartTotal, cartTotalSavings } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCheckout = () => {
    // 1. TikTok InitiateCheckout Tracking
    if (typeof window !== 'undefined' && (window as any).ttq) {
      (window as any).ttq.track('InitiateCheckout', {
        value: cartTotal,
        currency: 'SEK',
        contents: cartItems.map(item => ({
          content_id: item.variantId || String(item.id),
          content_name: item.name,
          quantity: item.quantity,
          price: item.price
        }))
      });
    }

    // 2. Redirect to Shopify Checkout
    if (cartItems.length > 0) {
      const checkoutItems = cartItems
        .filter(item => item.variantId)
        .map(item => `${item.variantId}:${item.quantity}`)
        .join(',');
      
      if (checkoutItems) {
        window.location.href = `https://try.koalarituals.com/cart/${checkoutItems}`;
      } else {
        window.location.href = 'https://try.koalarituals.com';
      }
    }
  };

  // Sync animation state with context
  useEffect(() => {
    if (isCartOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      setTimeout(() => setIsAnimating(false), 300);
      document.body.style.overflow = 'unset';
    }
  }, [isCartOpen]);

  if (!isCartOpen && !isAnimating) return null;

  if (!isCartOpen && !isAnimating) return null;

  return (
    <div className={`drawer-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)}>
      <div className={`drawer-content ${isCartOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="drawer-header">
          <div className="cart-badge">
            <span>{cartItems.reduce((acc, i) => acc + i.quantity, 0)}</span>
          </div>
          <h2 className="drawer-title">din korg</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>

        {/* Shipping Banner */}
        <div className="shipping-banner">
          <span className="check-icon">✓</span> GRATIS FRAKT UPPLÅST!
        </div>

        {/* Cart Items */}
        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Din korg är tom</p>
              <button className="btn-primary" onClick={() => setIsCartOpen(false)}>Börja handla</button>
            </div>
          ) : (
            <div className="items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-img-box">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <div className="item-info-row">
                      <h3 className="item-name">{item.name}</h3>
                      <button className="remove-btn" onClick={() => removeItem(item.id)}>Ta bort</button>
                    </div>
                    <p className="item-label">{item.label || 'Standard'}</p>
                    <div className="item-price-qty">
                      <div className="qty-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <span className="item-price">{item.price * item.quantity} kr</span>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="drawer-footer">
            <div className="subtotal-row">
              <span>SUBTOTAL</span>
              <span>{cartTotal} kr</span>
            </div>
            {cartTotalSavings > 0 && (
              <div className="savings-row">
                <span>DU SPARAR</span>
                <span>{cartTotalSavings} kr</span>
              </div>
            )}
            <button className="checkout-btn" onClick={handleCheckout}>GÅ TILL KASSAN</button>
          </div>
        )}
      </div>

      <style jsx>{`
        .drawer-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .drawer-overlay.open {
          opacity: 1;
          visibility: visible;
        }
        .drawer-content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 480px;
          background: #fff;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 40px rgba(0,0,0,0.15);
        }
        .drawer-content.open {
          transform: translateX(0);
        }
        
        .drawer-header {
          display: flex;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #eee;
          gap: 1rem;
        }
        .cart-badge {
          width: 28px;
          height: 28px;
          background: #8b5cf6;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
        }
        .drawer-title {
          flex: 1;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin: 0;
          color: #130c24;
          text-transform: lowercase;
        }
        .close-btn {
          background: none;
          border: none;
          font-size: 1.25rem;
          cursor: pointer;
          color: #130c24;
        }

        .shipping-banner {
          padding: 1.125rem 1.5rem;
          background: #7c3aed;
          color: #fff;
          text-align: center;
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .check-icon {
          background: #fff;
          color: #7c3aed;
          width: 18px;
          height: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 0.75rem;
        }

        .cart-items-container {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
          background: #fcfaff;
        }
        
        .empty-cart {
          text-align: center;
          padding: 4rem 1rem;
        }
        .empty-cart p {
          color: #6b5f8a;
          margin-bottom: 1.5rem;
        }

        .cart-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #f0eaff;
        }
        .item-img-box {
          width: 90px;
          height: 110px;
          background: #fff;
          border-radius: 0.75rem;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid #f0eaff;
        }
        .item-img-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .item-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .item-info-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.25rem;
        }
        .item-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          color: #130c24;
          margin: 0;
        }
        .remove-btn {
          background: none;
          border: none;
          font-size: 0.75rem;
          color: #6b5f8a;
          text-decoration: underline;
          cursor: pointer;
        }
        .item-label {
          font-size: 0.8rem;
          color: #6b5f8a;
          margin: 0 0 1rem 0;
        }
        .item-price-qty {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }
        .qty-controls {
          display: flex;
          align-items: center;
          border: 1px solid #e8e2f8;
          border-radius: 100px;
          padding: 0.25rem;
        }
        .qty-controls button {
          width: 24px;
          height: 24px;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 1.1rem;
          color: #130c24;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qty-controls span {
          padding: 0 0.75rem;
          font-weight: 700;
          font-size: 0.9rem;
          color: #130c24;
        }
        .item-price {
          font-weight: 800;
          color: #130c24;
        }

        .upsell-section {
          margin-top: 2rem;
          background: #fff;
          padding: 1.25rem;
          border-radius: 1.25rem;
          border: 1px solid #e8e2f8;
        }
        .upsell-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          margin: 0 0 1rem 0;
        }
        .upsell-card {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .upsell-img {
          width: 50px;
          height: 60px;
          background: #f8f5ff;
          border-radius: 0.5rem;
        }
        .upsell-img img { width: 100%; height: 100%; object-fit: contain; }
        .upsell-info { flex: 1; }
        .upsell-name { font-size: 0.85rem; font-weight: 700; color: #130c24; margin: 0; }
        .upsell-price { font-size: 0.8rem; color: #6b5f8a; margin: 0; }
        .upsell-add-btn {
          background: #edf1fe;
          border: 1px solid #000;
          padding: 0.4rem 0.8rem;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.7rem;
          cursor: pointer;
        }

        .drawer-footer {
          padding: 1.5rem;
          border-top: 1px solid #eee;
          background: #fff;
        }
        .subtotal-row {
          display: flex;
          justify-content: space-between;
          font-weight: 800;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #130c24;
        }
        .savings-row {
          display: flex;
          justify-content: space-between;
          font-weight: 700;
          font-size: 0.95rem;
          color: #16a34a;
          margin-bottom: 1.25rem;
        }
        .checkout-btn {
          width: 100%;
          background: #8b5cf6;
          color: #fff;
          border: none;
          padding: 1.125rem;
          border-radius: 100px;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          letter-spacing: 0.05em;
          box-shadow: 0 4px 15px rgba(139,92,246,0.3);
        }
        .footer-note {
          text-align: center;
          font-size: 0.75rem;
          color: #6b5f8a;
          margin-top: 1rem;
        }

        @media (max-width: 480px) {
          .drawer-content { max-width: 100%; }
        }
      `}</style>
    </div>
  );
}
