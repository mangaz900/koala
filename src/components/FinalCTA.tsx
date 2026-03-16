'use client';

export default function FinalCTA() {
  return (
    <section style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(135deg, #1a0d35 0%, #0d0818 50%, #160d2a 100%)',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow effects */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(91,33,182,0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Moon icon */}
        <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>🌙</div>

        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2rem,4vw,3rem)',
          color: '#f0eaff',
          lineHeight: 1.2,
          marginBottom: '1.25rem',
        }}>
          Bättre nätter börjar med en{' '}
          <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg,#c4b5fd,#8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            lugnare kvällsrutin
          </em>
        </h2>

        <p style={{
          color: '#a899c4',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          maxWidth: '540px',
          margin: '0 auto 2.5rem',
        }}>
          Gör sömnen mindre frustrerande och kvällarna enklare att landa i. Din kropp förtjänar riktig återhämtning.
        </p>

        <a href="#shop">
          <button className="btn-primary" style={{
            maxWidth: '320px',
            margin: '0 auto',
            padding: '1.1rem 2.5rem',
            fontSize: '1.05rem',
            fontFamily: 'Inter, sans-serif',
          }}>
            🌙 Testa din första burk
          </button>
        </a>

        {/* Supporting points */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          {['🚚 Snabb leverans', '🔒 Säker checkout', '💎 Premiumkvalitet', '✅ 30 dagars garanti'].map((t) => (
            <span key={t} style={{ color: '#a899c4', fontSize: '0.85rem', fontWeight: 500 }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
