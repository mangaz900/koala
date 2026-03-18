'use client';

import { useState, useEffect } from 'react';

const messages = [
  '🚚 Gratis frakt idag',
];

export default function PromoBar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ height: '40px', background: '#3b0764' }} />;

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #3b0764, #5b21b6, #3b0764)',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        borderBottom: '1px solid rgba(139,92,246,0.3)',
      }}
    >
      <p
        style={{
          color: '#e9d5ff',
          fontSize: '0.8rem',
          fontWeight: 500,
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.03em',
          margin: 0,
        }}
      >
        🚚 Gratis frakt idag
      </p>
    </div>
  );
}
