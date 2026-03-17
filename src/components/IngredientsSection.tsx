'use client';

const ingredients = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 22C2 22 7 17 12 12C17 7 22 2 22 2C22 2 17 7 12 12" />
        <path d="M12 12C12 12 12 17 7 20C4.5 21.5 2 22 2 22C2 22 2.5 19.5 4 17C7 12 12 12 12 12Z" />
      </svg>
    ),
    name: 'L-Theanine',
    benefit: 'Hjälper dig varva ner',
    text: 'För kvällar när tankarna fortsätter trots att kroppen är trött.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12,2 14.5,9 22,9 16,13.5 18.5,21 12,16.5 5.5,21 8,13.5 2,9 9.5,9" />
      </svg>
    ),
    name: 'Magnesium',
    benefit: 'Stödjer avslappning',
    text: 'Stödjer kroppens naturliga avslappning och återhämtning.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M12 12C12 12 7 10 5 6C3 2 5 2 7 4C9 6 12 12 12 12Z" />
        <path d="M12 12C12 12 17 10 19 6C21 2 19 2 17 4C15 6 12 12 12 12Z" />
        <path d="M12 12C12 12 9 15 9 19C9 21.5 10.5 22 12 22C13.5 22 15 21.5 15 19C15 15 12 12 12 12Z" />
      </svg>
    ),
    name: 'Ashwagandha',
    benefit: 'För kvällar med mer balans',
    text: 'En adaptogen ört som hjälper kroppen hantera stress.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2C12 2 10 6 10 9" />
        <path d="M12 2C12 2 14 6 14 9" />
        <path d="M22 12C22 12 18 10 15 10" />
        <path d="M22 12C22 12 18 14 15 14" />
        <path d="M12 22C12 22 10 18 10 15" />
        <path d="M12 22C12 22 14 18 14 15" />
        <path d="M2 12C2 12 6 10 9 10" />
        <path d="M2 12C2 12 6 14 9 14" />
      </svg>
    ),
    name: 'Kamomill',
    benefit: 'För lugnare kvällar',
    text: 'Traditionellt använd ingrediens med lugnande egenskaper.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8" />
        <path d="M5 3l7 5 7-5" />
        <path d="M12 8C12 8 7 11 7 15C7 18 9 19 12 19C15 19 17 18 17 15C17 11 12 8 12 8Z" />
      </svg>
    ),
    name: 'Valerianarot',
    benefit: 'För kvällsro',
    text: 'En klassisk ingrediens i formulor för vila och avslappning.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 8v4" />
        <path d="M9 10.5C9 10.5 10 8 12 8C14 8 15 10.5 15 10.5" />
        <path d="M12 12l2.5 2.5" />
        <path d="M12 12l-2.5 2.5" />
      </svg>
    ),
    name: 'Passionsblomma-extrakt',
    benefit: 'För en mjukare kväll',
    text: 'Traditionellt använd ört i kvällsformulor för lugn.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 6 4 10 4 14C4 18.4 7.6 22 12 22C16.4 22 20 18.4 20 14C20 10 17.5 6 12 2Z" />
        <path d="M12 22V14" />
        <path d="M12 14C12 14 9 12 9 10" />
        <path d="M12 14C12 14 15 12 15 10" />
      </svg>
    ),
    name: 'Glycin',
    benefit: 'Stöd i kvällsrutinen',
    text: 'En aminosyra som ofta används i kvällsformulor för vila och återhämtning.',
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
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <p style={{
          textAlign: 'center',
          color: '#8b5cf6',
          fontSize: '0.8rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '0.75rem',
        }}>
          Ingredienser
        </p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
          color: '#f0eaff',
          textAlign: 'center',
          marginBottom: '0.75rem',
          lineHeight: 1.2,
        }}>
          Nyckelingredienser för lugnare kvällar
        </h2>
        <p style={{
          textAlign: 'center',
          color: '#a899c4',
          maxWidth: '480px',
          margin: '0 auto 3rem',
          fontSize: '1rem',
          lineHeight: 1.7,
        }}>
          Några av de viktigaste ingredienserna i vår kvällsformula.
        </p>

        {/* Ingredient boxes grid */}
        <div className="ing-grid">
          {ingredients.map((ing) => (
            <div key={ing.name} className="ing-box">
              {/* Number badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                boxShadow: '0 4px 12px rgba(124,58,237,0.35)',
                marginBottom: '1.1rem',
                flexShrink: 0,
                color: '#fff',
              }}>
                {ing.icon}
              </div>

              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.2rem',
                color: '#f0eaff',
                fontWeight: 600,
                marginBottom: '0.3rem',
                lineHeight: 1.2,
              }}>
                {ing.name}
              </h3>

              <p style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#8b5cf6',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.6rem',
              }}>
                {ing.benefit}
              </p>

              <p style={{
                color: '#a899c4',
                fontSize: '0.9rem',
                lineHeight: 1.6,
                margin: 0,
              }}>
                {ing.text}
              </p>
            </div>
          ))}
        </div>

        <p style={{
          textAlign: 'center',
          color: '#6b5f8a',
          fontSize: '0.78rem',
          marginTop: '2.5rem',
          fontStyle: 'italic',
        }}>
          * Kosttillskott för att stötta normal sömn. Resultaten kan variera. Ersätter inte läkarvård.
        </p>
      </div>

      <style jsx>{`
        .ing-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        .ing-box {
          background: #1d1235;
          border: 1px solid rgba(139, 92, 246, 0.18);
          border-radius: 1.25rem;
          padding: 1.75rem 1.5rem;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }
        .ing-box:hover {
          border-color: rgba(139, 92, 246, 0.4);
          transform: translateY(-3px);
        }
        /* Last item centered if odd count */
        .ing-box:last-child:nth-child(odd) {
          grid-column: 1 / -1;
          max-width: 50%;
          margin: 0 auto;
          width: 100%;
        }

        @media (max-width: 640px) {
          .ing-grid {
            grid-template-columns: 1fr;
          }
          .ing-box:last-child:nth-child(odd) {
            grid-column: auto;
            max-width: 100%;
          }
          .ing-box {
            padding: 1.5rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
}
