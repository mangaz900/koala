'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <header
      className="main-header"
      style={{
        position: 'sticky',
        top: '40px',
        zIndex: 999,
        transform: 'translateZ(0)',
        borderBottom: '1px solid rgba(139,92,246,0.1)',
      }}
    >
      <div
        className="header-container"
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
        {/* Left: Menu Button (Dropdown Nav) */}
        <div className="nav-menu-wrapper" style={{ flex: 1, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#a899c4',
              padding: '0.5rem',
              marginLeft: '-0.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f0eaff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#a899c4')}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
            <span style={{ fontSize: '0.85rem', fontWeight: 600, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.05em' }} className="menu-text">Meny</span>
          </button>
        </div>

        {/* Center: Logo */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img 
              src="/images/logo-koala.svg" 
              alt="Koala Ritual" 
              style={{ 
                height: '42px', 
                width: 'auto',
                display: 'block'
              }} 
            />
          </a>
        </div>

        {/* Right: Cart */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              position: 'relative',
              color: '#a899c4',
              padding: '0.5rem',
              marginRight: '-0.5rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#f0eaff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#a899c4')}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
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
        .main-header {
          background: #0d0818;
        }
        @media (min-width: 1025px) {
          .nav-menu-wrapper {
            display: none !important;
          }
        }
        @media (max-width: 1024px) {
          .header-container {
             padding: 0 1rem !important;
          }
        }
        @media (max-width: 480px) {
          .menu-text {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
