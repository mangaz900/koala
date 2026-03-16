'use client';

import { useState } from 'react';

const IMAGES = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
];

const PACKS = [
  { id: 1, label: '1 BURK',    badge: null,           price: 399,  originalPrice: 399  },
  { id: 2, label: '2 BURKAR',  badge: 'SPARA 80 KR',  price: 718,  originalPrice: 798  },
  { id: 3, label: '3 BURKAR',  badge: 'SPARA 240 KR', price: 957,  originalPrice: 1197 },
];

const TABS = ['Detaljer', 'Ingredienser', 'FAQ'];
const TAB_CONTENT: Record<string, string> = {
  'Detaljer':     'Koala Ritual Sleep Gummies hjälper dig att somna lättare och sova djupare. Med L-Theanine, Magnesium och Ashwagandha stöttar vi kroppens naturliga sömnprocess — utan att göra dig dåsig dagen efter.',
  'Ingredienser': 'L-Theanine 200 mg · Magnesium 150 mg · Ashwagandha 300 mg · Kamomillextrakt 150 mg · Melatonin 0,5 mg. Fri från socker, gluten och konstgjorda tillsatser.',
  'FAQ':          'Ta 2 gummies 30 minuter innan läggdags. Formeln är icke-beroendeframkallande och kan avslutas när du vill.',
};

const BENEFIT_ICONS = [
  { icon: '💤', label: 'Somna snabbare' },
  { icon: '🌙', label: 'Sov djupare'   },
  { icon: '☀️', label: 'Vakna utvilad' },
  { icon: '🧘', label: 'Lugna sinnet'  },
];

function Stars({ count = 5, size = 14 }: { count?: number; size?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: '2px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#f59e0b">
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </span>
  );
}

function ImageGallery() {
  const [active, setActive] = useState(0);
  const prev = () => setActive(i => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setActive(i => (i + 1) % IMAGES.length);

  return (
    /* Gallery fills its column flex container completely */
    <div style={{ display: 'flex', gap: '0.875rem', height: '100%' }}>

      {/* Vertical thumbnails */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', flexShrink: 0 }}>
        {IMAGES.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: '64px', height: '72px',
              borderRadius: '10px', overflow: 'hidden',
              border: `2px solid ${active === i ? 'rgba(139,92,246,0.8)' : 'rgba(255,255,255,0.1)'}`,
              padding: 0, cursor: 'pointer', flexShrink: 0,
              background: 'rgba(255,255,255,0.04)',
              outline: active === i ? '2px solid rgba(139,92,246,0.2)' : 'none',
              outlineOffset: '2px',
            }}
          >
            <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </button>
        ))}
      </div>

      {/* Main image + dots/arrows below */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 0 }}>
        {/* Square image — fills available width */}
        <div style={{
          position: 'relative', width: '100%', paddingBottom: '100%',
          borderRadius: '1.5rem', overflow: 'hidden',
          background: 'rgba(255,255,255,0.03)',
          flexShrink: 0,
        }}>
          <img
            src={IMAGES[active]}
            alt="Koala Ritual Sleep Gummies"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Navigation row below image — Lemme-style */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
          <button onClick={prev} aria-label="Föregående" style={{
            background: 'none', border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: '50%', width: '34px', height: '34px', cursor: 'pointer',
            color: '#c4b5fd', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>←</button>
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {IMAGES.map((_, i) => (
              <button key={i} onClick={() => setActive(i)} aria-label={`Bild ${i + 1}`} style={{
                width: active === i ? '22px' : '8px', height: '8px',
                borderRadius: '100px',
                background: active === i ? '#c4b5fd' : 'rgba(255,255,255,0.28)',
                border: 'none', cursor: 'pointer', padding: 0,
              }} />
            ))}
          </div>
          <button onClick={next} aria-label="Nästa" style={{
            background: 'none', border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: '50%', width: '34px', height: '34px', cursor: 'pointer',
            color: '#c4b5fd', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>→</button>
        </div>
      </div>
    </div>
  );
}

function PurchaseBox() {
  const [selectedPack, setSelectedPack] = useState(1);
  const [quantity, setQuantity]         = useState(1);
  const [activeTab, setActiveTab]       = useState('Detaljer');

  const pack = PACKS.find(p => p.id === selectedPack) || PACKS[0];
  const total        = pack.price         * quantity;
  const totalOriginal = pack.originalPrice * quantity;
  const savedTotal   = totalOriginal - total;

  return (
    <div style={{
      background: '#F6F2FA',                      /* Very light lavender luxury tone */
      borderRadius: '1.25rem',
      border: '1.5px solid #e5dff5',
      padding: '2rem 2.25rem',
      boxShadow: '0 4px 20px rgba(124,58,237,0.04)', /* Even softer shadow */
      display: 'flex', flexDirection: 'column', gap: '1.5rem',
      /* Sticky so the box follows while scrolling the gallery */
      position: 'sticky',
      top: '100px',
    }}>

      {/* Stars */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Stars size={15} />
        <span style={{ fontSize: '0.8rem', color: '#6b5f8a', fontWeight: 600, letterSpacing: '0.02em' }}>
          (1 842 OMDÖMEN)
        </span>
      </div>

      {/* Title — single line */}
      <div style={{ borderBottom: '1px solid #f0eaff', paddingBottom: '1.25rem' }}>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.75rem, 2.3vw, 2.6rem)',
          fontWeight: 800, color: '#130c24',
          lineHeight: 1.08, marginBottom: '0.4rem',
          letterSpacing: '-0.02em', whiteSpace: 'nowrap',
        }}>
          Koala <em style={{ fontStyle: 'italic', color: '#5b21b6' }}>Sleep Gummies</em>
        </h1>
        <p style={{ fontSize: '0.85rem', color: '#9586b8' }}>Sleep Tight Gummies*</p>
      </div>

      {/* Tabs */}
      <div>
        <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid #ede8f8', marginBottom: '0.875rem' }}>
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              background: 'none', border: 'none',
              borderBottom: `2px solid ${activeTab === tab ? '#130c24' : 'transparent'}`,
              paddingBottom: '0.6rem', cursor: 'pointer',
              fontSize: '0.71rem', fontWeight: 700,
              color: activeTab === tab ? '#130c24' : '#b0a8c9',
              letterSpacing: '0.06em', textTransform: 'uppercase',
              marginBottom: '-1px', fontFamily: 'Inter, sans-serif',
            }}>
              {tab}
            </button>
          ))}
        </div>
        <p style={{ fontSize: '0.85rem', color: '#4a4168', lineHeight: 1.7, margin: 0 }}>
          {TAB_CONTENT[activeTab]}
        </p>
        <button style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '0.83rem', fontWeight: 700, color: '#130c24',
          marginTop: '0.45rem', padding: 0, fontFamily: 'Inter, sans-serif',
          textDecoration: 'underline',
        }}>Se fördelar +</button>
      </div>

      {/* Pack selector */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.625rem' }}>
        {PACKS.map(p => (
          <button key={p.id} onClick={() => setSelectedPack(p.id)} style={{
            position: 'relative',
            padding: '0.875rem 0.4rem',
            borderRadius: '0.875rem',
            border: `2px solid ${selectedPack === p.id ? '#8b5cf6' : '#e8e2f8'}`,
            background: selectedPack === p.id ? '#ffffff' : '#ffffff', /* Using white for cards on lavender bg */
            cursor: 'pointer', textAlign: 'center',
            boxShadow: selectedPack === p.id ? '0 4px 12px rgba(139,92,246,0.12)' : '0 2px 4px rgba(0,0,0,0.02)',
          }}>
            <div style={{
              width: '42px', height: '42px', borderRadius: '8px', overflow: 'hidden',
              margin: '0 auto 0.45rem', background: '#f5f0ff',
            }}>
              <img src={IMAGES[0]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ fontSize: '0.77rem', fontWeight: 800, color: '#130c24', letterSpacing: '0.02em' }}>{p.label}</div>
            {p.badge && (
              <div style={{
                position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)',
                background: '#8b5cf6', color: '#fff',
                fontSize: '0.56rem', fontWeight: 700,
                padding: '0.18rem 0.5rem', borderRadius: '100px', whiteSpace: 'nowrap',
              }}>{p.badge}</div>
            )}
          </button>
        ))}
      </div>

      {/* Price */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginTop: '0.5rem' }}>
        <span style={{ fontSize: '1.85rem', fontWeight: 800, color: '#130c24', letterSpacing: '-0.02em' }}>{total} kr</span>
        {savedTotal > 0 && (
          <>
            <span style={{ fontSize: '0.95rem', color: '#c4b5fd', textDecoration: 'line-through' }}>{totalOriginal} kr</span>
            <span style={{ fontSize: '0.72rem', background: '#ecfdf5', color: '#059669', fontWeight: 700, padding: '0.15rem 0.6rem', borderRadius: '100px', border: '1px solid #bbf7d0' }}>
              −{savedTotal} kr
            </span>
          </>
        )}
      </div>

      {/* Quantity */}
      <div style={{ display: 'flex', alignItems: 'center', border: '1.5px solid #ede8f8', borderRadius: '100px', background: '#ffffff' }}>
        <button onClick={() => setQuantity(q => Math.max(1, q - 1))}
          style={{ padding: '0.85rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#7c6f9e', fontFamily: 'Inter, sans-serif' }}>−</button>
        <span style={{ flex: 1, textAlign: 'center', fontWeight: 700, color: '#130c24', fontSize: '1rem' }}>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)}
          style={{ padding: '0.85rem 1.5rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.2rem', color: '#7c6f9e', fontFamily: 'Inter, sans-serif' }}>+</button>
      </div>

      {/* CTA */}
      <button style={{
        background: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
        color: '#fff', border: 'none', borderRadius: '100px',
        padding: '1.1rem 1.5rem', fontSize: '1rem', fontWeight: 700,
        cursor: 'pointer', width: '100%', fontFamily: 'Inter, sans-serif',
        letterSpacing: '0.02em', boxShadow: '0 4px 18px rgba(91,33,182,0.32)',
      }}>
        {total} kr – LÄGG I VARUKORGEN
      </button>

      {/* Benefit icons */}
      <div style={{ borderTop: '1px solid #f3eeff', paddingTop: '1.125rem' }}>
        <p style={{ fontSize: '0.65rem', color: '#b0a8c9', textAlign: 'center', marginBottom: '0.875rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Vetenskapligt formulerad för att hjälpa
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.5rem' }}>
          {BENEFIT_ICONS.map(b => (
            <div key={b.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}>
              <div style={{ width: '46px', height: '46px', borderRadius: '50%', border: '1.5px solid #d8d0ef', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', background: '#ffffff' }}>
                {b.icon}
              </div>
              <span style={{ fontSize: '0.56rem', color: '#8b7aae', textAlign: 'center', fontWeight: 600, lineHeight: 1.35 }}>
                {b.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', borderTop: '1px solid #f3eeff', paddingTop: '0.875rem' }}>
        {['Produktfördelar', 'Ingredienser'].map(link => (
          <button key={link} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: '0.78rem', fontWeight: 600, color: '#5b21b6',
            fontFamily: 'Inter, sans-serif', textDecoration: 'underline',
            textDecorationColor: 'rgba(91,33,182,0.35)',
          }}>{link}</button>
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="shop" style={{ background: 'linear-gradient(175deg, #0f0820 0%, #1a0d35 100%)', padding: '3rem 0 5rem' }}>
      <div className="hero-grid section-container">
        <ImageGallery />
        <PurchaseBox />
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 55% 45%;
          gap: 2.5rem;
          align-items: start;     /* left column scrolls naturally; right is sticky */
        }
        @media (max-width: 1200px) {
          .hero-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </section>
  );
}
