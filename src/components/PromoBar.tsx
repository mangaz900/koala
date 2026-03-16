'use client';

import { useState, useEffect } from 'react';

const messages = [
  '🚚 Fri frakt på alla beställningar över 299 kr',
  '🇩🇪 Snabb leverans från Deutschland',
  '✅ 30 dagars nöjdhetsgaranti',
];

export default function PromoBar() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % messages.length);
        setFade(true);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
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
          transition: 'opacity 0.3s ease',
          opacity: fade ? 1 : 0,
          margin: 0,
        }}
      >
        {messages[current]}
      </p>
    </div>
  );
}
