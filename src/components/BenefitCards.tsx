'use client';

export default function BenefitCards() {
  const cards = [
    {
      icon: '😴',
      title: 'Somna lättare',
      text: 'Hjälper dig att glida in i sömnen utan samma kvällskamp — mjukt och naturligt.',
    },
    {
      icon: '🧠',
      title: 'Lugna ett aktivt sinne',
      text: 'Stöttar en lugnare övergång från dag till kväll, även när tankarna snurrar.',
    },
    {
      icon: '🌊',
      title: 'Djupare återhämtning',
      text: 'Utformad för att stötta bättre sömnkvalitet och mer återhämtning under natten.',
    },
    {
      icon: '☀️',
      title: 'Vakna mer utvilad',
      text: 'Det handlar inte bara om att sova — utan om hur du känner dig dagen efter.',
    },
  ];

  return (
    <section style={{
      padding: '5rem 1.5rem',
      background: '#0d0818',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Fördelar
        </p>
        <h2 className="section-heading" style={{ fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', marginBottom: '0.75rem', fontFamily: 'Playfair Display, serif', color: '#f0eaff', textAlign: 'center' }}>
          Därför väljer så många att lägga till den i sin kvällsrutin
        </h2>
        <p style={{ textAlign: 'center', color: '#a899c4', maxWidth: '560px', margin: '0 auto 3rem', fontSize: '1rem', lineHeight: 1.7 }}>
          Enkla, tydliga fördelar — för att du ska förstå exakt vad det här gör för dig.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.25rem',
        }} className="benefit-grid">
          {cards.map((card) => (
            <div key={card.title} className="premium-card" style={{
              background: '#1d1235',
              border: '1px solid rgba(139,92,246,0.2)',
              borderRadius: '1.25rem',
              padding: '2rem 1.5rem',
              transition: 'all 0.3s ease',
              cursor: 'default',
            }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-6px)';
                el.style.borderColor = 'rgba(139,92,246,0.5)';
                el.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), 0 0 20px rgba(139,92,246,0.1)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.borderColor = 'rgba(139,92,246,0.2)';
                el.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'rgba(139,92,246,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                marginBottom: '1.25rem',
              }}>
                {card.icon}
              </div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.15rem',
                color: '#f0eaff',
                marginBottom: '0.6rem',
              }}>
                {card.title}
              </h3>
              <p style={{ color: '#a899c4', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .benefit-grid { grid-template-columns: repeat(4,1fr); }
        @media (max-width: 900px) {
          .benefit-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .benefit-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
