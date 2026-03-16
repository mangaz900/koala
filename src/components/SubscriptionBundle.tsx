'use client';

export default function SubscriptionBundle() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: '#0d0818' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Välj ditt alternativ
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#f0eaff', textAlign: 'center', marginBottom: '0.5rem' }}>
          Välj det alternativ som passar din rutin bäst
        </h2>
        <p style={{ textAlign: 'center', color: '#a899c4', maxWidth: '500px', margin: '0 auto 3rem', fontSize: '1rem' }}>
          Prenumerera för bäst pris, eller börja med engångsköp.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="sub-grid">
          {/* Subscription card */}
          <div style={{
            background: 'linear-gradient(135deg, #1d1235, #2a1850)',
            border: '1.5px solid rgba(139,92,246,0.4)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(245,158,11,0.15)',
              border: '1px solid rgba(245,158,11,0.3)',
              color: '#fcd34d',
              fontSize: '0.7rem',
              fontWeight: 700,
              padding: '0.25rem 0.75rem',
              borderRadius: '100px',
            }}>
              ⭐ REKOMMENDERAD
            </div>

            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌙</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#f0eaff', marginBottom: '0.5rem' }}>
              Prenumerera & spara
            </h3>
            <p style={{ color: '#a899c4', fontSize: '0.9rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Det bästa alternativet för en konsekvent kvällsrutin.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem' }}>
              {[
                'Spara 15% på varje leverans',
                'Du slipper få slut hemma',
                'Pausa eller avsluta när du vill',
                'Enkel hantering via konto',
              ].map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#d4c8ee', fontSize: '0.9rem' }}>
                  <span style={{ color: '#8b5cf6', fontSize: '0.9rem' }}>✦</span>
                  {b}
                </li>
              ))}
            </ul>

            <button className="btn-primary" style={{ fontFamily: 'Inter, sans-serif' }}>
              Välj prenumeration
            </button>
          </div>

          {/* Bundle card */}
          <div style={{
            background: '#1d1235',
            border: '1px solid rgba(139,92,246,0.2)',
            borderRadius: '1.5rem',
            padding: '2.5rem',
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✨</div>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#f0eaff', marginBottom: '0.5rem' }}>
              Bygg din kvällsrutin
            </h3>
            <p style={{ color: '#a899c4', fontSize: '0.9rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
              Kombinera flera produkter för en komplett kvällsupplevelse.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem' }}>
              {[
                'Kombinera med fler kvällsprodukter',
                'Öka värdet per order',
                'Skapa en hel rituell rutin',
                'Perfekt som presentpaket',
              ].map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#d4c8ee', fontSize: '0.9rem' }}>
                  <span style={{ color: '#8b5cf6', fontSize: '0.9rem' }}>✦</span>
                  {b}
                </li>
              ))}
            </ul>

            <button className="btn-secondary" style={{ width: '100%', fontFamily: 'Inter, sans-serif' }}>
              Bygg mitt paket
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .sub-grid { grid-template-columns: 1fr 1fr; }
        @media (max-width: 768px) {
          .sub-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
