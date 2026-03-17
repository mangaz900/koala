'use client';

interface ComparisonRow {
  cons: string;
  pros: string;
}

const rows: ComparisonRow[] = [
  { cons: 'Kan ge grogginess nästa dag', pros: 'Byggda för "trött i kroppen, klarvaken i huvudet"' },
  { cons: 'Kan ge konstiga eller intensiva drömmar', pros: 'Hjälper dig varva ner på kvällen' },
  { cons: 'Funkar ibland, men inte alltid', pros: 'Mjukare väg in i sömn' },
  { cons: 'Hjälper ofta bara med insomning', pros: 'Bättre kvällsrutin i gummy-format' },
  { cons: 'Samma generiska sömnformula', pros: 'Koala Calm System™' },
];

export default function ComparisonTable() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: '#160d2a' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Jämförelse
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#f0eaff', textAlign: 'center', marginBottom: '0.75rem' }}>
          Alla sömngummies är inte byggda för samma problem
        </h2>
        <p style={{ textAlign: 'center', color: '#a899c4', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1rem', lineHeight: 1.7 }}>
          Många vanliga sömngummies hjälper vissa att bli trötta — men lämnar andra med grogginess, konstiga drömmar eller ojämna resultat.
        </p>

        {/* Table/Cards Grid */}
        <div className="vs-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '1.5rem',
          alignItems: 'start',
        }}>
          
          {/* Theirs */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '1.5rem',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '2rem 1.5rem',
          }}>
            <h3 style={{ textAlign: 'center', fontSize: '1.25rem', color: '#a899c4', marginBottom: '1.5rem', fontWeight: 600 }}>
              Vanliga sömngummies
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {rows.map((row, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{
                    width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#ef4444', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
                    marginTop: '2px'
                  }}>✕</span>
                  <span style={{ color: '#d4c8ee', fontSize: '0.95rem', lineHeight: 1.5 }}>
                    {row.cons}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Ours */}
          <div style={{
            background: 'linear-gradient(180deg, rgba(91, 33, 182, 0.3) 0%, rgba(91, 33, 182, 0.1) 100%)',
            borderRadius: '1.5rem',
            border: '2px solid rgba(139, 92, 246, 0.4)',
            padding: '2rem 1.5rem',
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.1)',
          }}>
            <h3 style={{ textAlign: 'center', fontSize: '1.25rem', color: '#f0eaff', marginBottom: '1.5rem', fontWeight: 700 }}>
              Våra Sleep Gummies
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {rows.map((row, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{
                    width: '24px', height: '24px', borderRadius: '50%', background: '#8b5cf6',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0,
                    marginTop: '2px', boxShadow: '0 2px 8px rgba(139, 92, 246, 0.4)'
                  }}>✓</span>
                  <span style={{ color: '#f0eaff', fontSize: '0.95rem', lineHeight: 1.5, fontWeight: 500 }}>
                    {row.pros}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .vs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
