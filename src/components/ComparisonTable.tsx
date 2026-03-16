'use client';

interface ComparisonRow {
  feature: string;
  ours: boolean | '?';
  others: boolean | '?';
}

const rows: ComparisonRow[] = [
  { feature: 'Enkel kvällsrutin', ours: true, others: false },
  { feature: 'Premiumkvalitet', ours: true, others: '?' },
  { feature: 'Utvecklad för vuxna', ours: true, others: '?' },
  { feature: 'Naturliga ingredienser', ours: true, others: '?' },
  { feature: 'Behagligt gummy-format', ours: true, others: false },
  { feature: 'Transparent ingredienslista', ours: true, others: false },
  { feature: '30 dagars garanti', ours: true, others: false },
];

function Check({ value }: { value: boolean | '?' }) {
  if (value === true) {
    return (
      <span style={{
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        background: 'rgba(139,92,246,0.2)',
        border: '1.5px solid rgba(139,92,246,0.5)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#a78bfa',
        fontSize: '0.85rem',
        fontWeight: 700,
      }}>✓</span>
    );
  }
  if (value === false) {
    return (
      <span style={{
        width: '28px',
        height: '28px',
        borderRadius: '50%',
        background: 'rgba(100,100,100,0.1)',
        border: '1.5px solid rgba(100,100,100,0.2)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#4b5563',
        fontSize: '0.85rem',
      }}>✕</span>
    );
  }
  return (
    <span style={{ color: '#6b5f8a', fontSize: '0.85rem' }}>Varierar</span>
  );
}

export default function ComparisonTable() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: '#160d2a' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Jämförelse
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#f0eaff', textAlign: 'center', marginBottom: '0.75rem' }}>
          Därför känns det här som ett bättre val
        </h2>
        <p style={{ textAlign: 'center', color: '#a899c4', maxWidth: '500px', margin: '0 auto 3rem', fontSize: '1rem', lineHeight: 1.7 }}>
          Inte alla sömnprodukter är skapade lika. Här är varför Koala Ritual sticker ut.
        </p>

        {/* Table */}
        <div style={{
          background: '#1d1235',
          border: '1px solid rgba(139,92,246,0.2)',
          borderRadius: '1.25rem',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 160px 160px',
            background: 'rgba(139,92,246,0.12)',
            borderBottom: '1px solid rgba(139,92,246,0.15)',
            padding: '1rem 1.5rem',
          }}>
            <span style={{ color: '#6b5f8a', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Funktion
            </span>
            <span style={{ color: '#c4b5fd', fontSize: '0.85rem', fontWeight: 700, textAlign: 'center' }}>
              🐨 Koala Ritual
            </span>
            <span style={{ color: '#6b5f8a', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center' }}>
              Andra alternativ
            </span>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.feature}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 160px 160px',
                padding: '0.9rem 1.5rem',
                borderBottom: i < rows.length - 1 ? '1px solid rgba(139,92,246,0.08)' : 'none',
                alignItems: 'center',
                background: i % 2 === 0 ? 'transparent' : 'rgba(139,92,246,0.03)',
              }}
            >
              <span style={{ color: '#d4c8ee', fontSize: '0.9rem' }}>{row.feature}</span>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Check value={row.ours} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Check value={row.others} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
