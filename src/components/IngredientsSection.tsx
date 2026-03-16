'use client';

import Image from 'next/image';

const ingredients = [
  {
    name: 'L-Theanine',
    benefit: 'Lugnar sinnet',
    description: 'Hjälper dig varva ner och komma till ro på kvällen, utan att göra dig dåsig under dagen.',
    img: '/images/ingredients.jpg',
    emoji: '🍃',
  },
  {
    name: 'Magnesium',
    benefit: 'Stöttar avslappning',
    description: 'Stödjer kroppens naturliga avslappning och bidrar till normal muskelfunktion och återhämtning.',
    img: '/images/ingredients.jpg',
    emoji: '✨',
  },
  {
    name: 'Ashwagandha',
    benefit: 'Hanterar stress',
    description: 'En adaptogen ört med lång historia — hjälper kroppen hantera stress och finna balans.',
    img: '/images/ingredients.jpg',
    emoji: '🌱',
  },
  {
    name: 'Kamomill',
    benefit: 'Traditionell ro',
    description: 'Traditionellt använd ingrediens med lugnande egenskaper för en stillsammare kväll.',
    img: '/images/ingredients.jpg',
    emoji: '🌸',
  },
];

export default function IngredientsSection() {
  return (
    <section
      id="ingredienser"
      style={{
        padding: '5rem 1.5rem',
        background: 'linear-gradient(180deg, #160d2a 0%, #0d0818 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Ingredienser
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#f0eaff', textAlign: 'center', marginBottom: '0.75rem' }}>
          Noggrant utvalda ingredienser för din kvällsrutin
        </h2>
        <p style={{ textAlign: 'center', color: '#a899c4', maxWidth: '560px', margin: '0 auto 1rem', fontSize: '1rem', lineHeight: 1.7 }}>
          Vi håller det enkelt och transparent. Här är vad som finns i varje gummy och varför.
        </p>



        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '1.25rem',
        }} className="ing-grid">
          {ingredients.map((ing) => (
            <div key={ing.name} style={{
              background: '#1d1235',
              border: '1px solid rgba(139,92,246,0.2)',
              borderRadius: '1.25rem',
              padding: '1.5rem',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(139,92,246,0.45)';
                el.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = 'rgba(139,92,246,0.2)';
                el.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{ing.emoji}</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', color: '#f0eaff', marginBottom: '0.25rem' }}>
                {ing.name}
              </h3>
              <p style={{ color: '#8b5cf6', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {ing.benefit}
              </p>
              <p style={{ color: '#a899c4', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>
                {ing.description}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          color: '#6b5f8a',
          fontSize: '0.78rem',
          marginTop: '2rem',
          fontStyle: 'italic',
        }}>
          * Kostar kosttillskott för att stötta normal sömn. Resultaten kan variera. Ersätter inte läkarvård.
        </p>
      </div>

      <style>{`
        .ing-grid { grid-template-columns: repeat(4,1fr); }
        @media (max-width: 900px) {
          .ing-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 480px) {
          .ing-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
