'use client';

'use client';

import { useState } from 'react';

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < count ? '#f59e0b' : '#374151'}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </span>
  );
}

const reviews = [
  {
    name: 'Camilla S.',
    stars: 5,
    title: 'Lugnare kvällar',
    text: 'Jag har kämpat med sömnproblem i år. Sedan jag började ta dessa gummies är mina kvällar så mycket lugnare. Hjärnan stänger faktiskt av, och jag vaknar utvilad.',
    date: 'Verifierat köp · Feb 2025',
  },
  {
    name: 'Marcus L.',
    stars: 5,
    title: 'Mjukare insomning',
    text: 'Jag var skeptisk till gummies, men dessa är verkligen annorlunda. Känns premium och smaken är behaglig. Somnar nu utan att ligga och vänta i timmar.',
    date: 'Verifierat köp · Jan 2025',
  },
  {
    name: 'Therese K.',
    stars: 5,
    title: 'Bättre morgnar',
    text: 'Den känslan när man äntligen varvar ner på riktigt. Jag tar dem ca en timme innan läggdags och det har verkligen gjort skillnad för hela kvällsrutinen.',
    date: 'Verifierat köp · Mars 2025',
  },
  {
    name: 'Johan B.',
    stars: 4,
    title: 'Ingen tung känsla',
    text: 'Tre veckors användning och jag märker tydlig skillnad. Vaknar mer utvilad utan den där sega, tunga känslan dagen efter. Kommer definitivt fortsätta.',
    date: 'Verifierat köp · Feb 2025',
  },
  {
    name: 'Sofia A.',
    stars: 5,
    title: 'Tankarna stänger av',
    text: 'Dessa gummies har blivit en del av min kvällsrutin. Känslan är inte knäpp eller dåsig — bara lugn och naturlig när hjärnan annars hade gått på högvarv.',
    date: 'Verifierat köp · Jan 2025',
  },
  {
    name: 'Erik M.',
    stars: 5,
    title: 'Vaknar som mig själv igen',
    text: 'Har testat diverse sömnmedel utan framgång. Dessa gummies är milda men exakt vad jag behövde för att slappna av på kvällen och vara redo för nästa dag.',
    date: 'Verifierat köp · Mars 2025',
  },
];

export default function Reviews() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section id="omdömen" style={{ padding: '5rem 1.5rem', background: 'linear-gradient(180deg, #0d0818 0%, #160d2a 100%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ textAlign: 'center', color: '#8b5cf6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Omdömen
        </p>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', color: '#f0eaff', textAlign: 'center', marginBottom: '0.5rem' }}>
          Riktiga människor. Riktiga kvällsproblem. <em style={{ fontStyle: 'italic', color: '#c4b5fd' }}>Riktiga resultat.</em>
        </h2>

        {/* Summary bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          margin: '1.5rem 0 3rem',
        }}>
          <Stars />
          <span style={{ color: '#f0eaff', fontWeight: 700, fontSize: '1.1rem' }}>4,8</span>
          <span style={{ color: '#a899c4', fontSize: '0.9rem' }}>från 1 842+ verifierade köp</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '1.25rem',
          marginBottom: '2rem',
        }} className="review-grid">
          {displayed.map((r, i) => (
            <div key={i} style={{
              background: '#1d1235',
              border: '1px solid rgba(139,92,246,0.2)',
              borderRadius: '1.25rem',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Stars count={r.stars} />
                <span style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  color: '#6ee7b7',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  padding: '0.2rem 0.6rem',
                  borderRadius: '100px',
                }}>
                  ✓ Verifierat
                </span>
              </div>
              <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1rem', color: '#f0eaff', margin: 0 }}>
                &ldquo;{r.title}&rdquo;
              </h4>
              <p style={{ color: '#a899c4', fontSize: '0.875rem', lineHeight: 1.6, margin: 0, flex: 1 }}>
                {r.text}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid rgba(139,92,246,0.1)' }}>
                <span style={{ fontWeight: 600, color: '#d4c8ee', fontSize: '0.875rem' }}>{r.name}</span>
                <span style={{ color: '#6b5f8a', fontSize: '0.75rem' }}>{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Visa fler omdömen →
            </button>
          </div>
        )}
      </div>

      <style>{`
        .review-grid { grid-template-columns: repeat(3,1fr); }
        @media (max-width: 900px) {
          .review-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
