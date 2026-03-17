'use client';

export default function TrustBar() {
  const items = [
    { icon: '🚚', title: 'Snabb leverans', text: 'Dispatch från Deutschland' },
    { icon: '💎', title: 'Premiumkvalitet', text: 'Noggrant formulerad' },
    { icon: '🌙', title: 'Enkel kvällsrutin', text: 'Lätt att lägga till varje kväll' },
    { icon: '🧑', title: 'För vuxna', text: 'Utvecklad för verkliga sömnproblem' },
    { icon: '✅', title: '30 dagars garanti', text: 'Nöjd eller pengarna tillbaka' },
  ];

  return (
    <section style={{
      background: 'rgba(22,13,42,0.8)',
      borderTop: '1px solid rgba(139,92,246,0.12)',
      borderBottom: '1px solid rgba(139,92,246,0.12)',
      padding: '2rem 1.5rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{
          textAlign: 'center',
          color: '#c4b5fd',
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '2rem',
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          lineHeight: 1.4,
        }}>
          "Byggd för kvällar när tankarna inte stänger av."
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5,1fr)',
          gap: '1rem',
        }} className="trust-grid">
        {items.map((item) => (
          <div key={item.title} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '0.4rem',
            padding: '0.75rem',
          }}>
            <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
            <span style={{ fontWeight: 700, color: '#f0eaff', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif' }}>
              {item.title}
            </span>
            <span style={{ color: '#a899c4', fontSize: '0.78rem', lineHeight: 1.4 }}>
              {item.text}
            </span>
          </div>
        ))}
        </div>
      </div>
      <style>{`
        .trust-grid { grid-template-columns: repeat(5,1fr); }
        @media (max-width: 768px) {
          .trust-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 400px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
