'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header
      style={{
        background: '#0d0818',
        borderBottom: '1px solid rgba(139,92,246,0.1)',
        position: 'sticky',
        top: '40px',
        zIndex: 999,
        transform: 'translateZ(0)', /* GPU compositing */
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>🐨</span>
          <span
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#f0eaff',
              letterSpacing: '-0.01em',
            }}
          >
            Koala Ritual
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {['Shop', 'Ingredienser', 'Omdömen', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                color: '#a899c4',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f0eaff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#a899c4')}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              color: '#a899c4',
              padding: '0.5rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f0eaff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#a899c4')}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                background: '#7c3aed',
                color: 'white',
                borderRadius: '50%',
                width: '16px',
                height: '16px',
                fontSize: '0.65rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#a899c4',
              padding: '0.5rem',
            }}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"/>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(22,13,42,0.98)',
          borderTop: '1px solid rgba(139,92,246,0.15)',
          padding: '1.5rem',
        }}>
          {['Shop', 'Ingredienser', 'Omdömen', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                color: '#a899c4',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                borderBottom: '1px solid rgba(139,92,246,0.1)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
