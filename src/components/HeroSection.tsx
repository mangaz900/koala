'use client';

import { useState } from 'react';

const IMAGES = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/6 (5).jpg',
  '/images/7 (4).jpg',
  '/images/8 (3).jpg',
];

interface Pack {
  id: number;
  label: string;
  badge: string | null;
  price: number;
  originalPrice: number;
  image: string;
}

const PACKS: Pack[] = [
  { id: 1, label: '1 BURK',    badge: null,           price: 299,  originalPrice: 299,  image: '/1 burk.webp' },
  { id: 2, label: '2 BURKAR',  badge: 'SPARA 50 KR',  price: 548,  originalPrice: 598,  image: '/2 burkar.webp' },
  { id: 3, label: '3 BURKAR',  badge: 'SPARA 150 KR', price: 747,  originalPrice: 897, image: '/3 burkar.webp' },
];

const TABS = ['Detaljer', 'Ingredienser', 'FAQ'];
const TAB_CONTENT: Record<string, string> = {
  'Detaljer':     'Koala Ritual Sleep Gummies är utvecklade för kvällar när kroppen är trött men hjärnan fortfarande går på högvarv. Med L-Theanine, Magnesium och Ashwagandha hjälper de dig varva ner, komma till ro lättare och vakna utan tung känsla nästa dag.',
  'Ingredienser': 'L-Theanine 200 mg · Magnesium 150 mg · Ashwagandha 300 mg · Kamomillextrakt 150 mg · Melatonin 0,5 mg. Fri från socker, gluten och konstgjorda tillsatser.',
  'FAQ':          'Ta 2 gummies 30 minuter innan läggdags. Formeln är icke-beroendeframkallande och kan avslutas när du vill.',
};

const BENEFIT_ICONS = [
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 14C4 16.2091 5.79086 18 8 18C10.2091 18 12 16.2091 12 14V10C12 7.79086 10.2091 6 8 6C5.79086 6 4 7.79086 4 10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 14C12 16.2091 13.7909 18 16 18C18.2091 18 20 16.2091 20 14V10C20 7.79086 18.2091 6 16 6C13.7909 6 12 7.79086 12 10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6C12 3.79086 13.7909 2 16 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6C12 3.79086 10.2091 2 8 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    label: 'Somna snabbare' 
  },
  { 
    icon: (
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    label: 'Sov djupare'   
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.93 4.93L6.34 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.66 17.66L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.34 17.66L4.93 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.07 4.93L17.66 6.34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    label: 'Vakna utvilad' 
  },
  { 
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V12L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6V6.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ), 
    label: 'Lugna sinnet'  
  },
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
    <div className="gallery-container">
      {/* Thumbnails */}
      <div className="thumbnails">
        {IMAGES.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`thumb-btn ${active === i ? 'active' : ''}`}
          >
            <img src={src} alt="" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="main-display">
        <div className="main-img-wrapper">
          <img
            src={IMAGES[active]}
            alt="Koala Ritual Sleep Gummies"
            className="main-img"
          />
        </div>

        {/* Navigation below image */}
        <div className="nav-row">
          <button onClick={prev} className="nav-arrow">←</button>
          <div className="dots">
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`dot ${active === i ? 'active' : ''}`}
              />
            ))}
          </div>
          <button onClick={next} className="nav-arrow">→</button>
        </div>
      </div>

      <style jsx>{`
        .gallery-container {
          display: flex;
          gap: 1.25rem;
          width: 100%;
        }
        .thumbnails {
          display: flex;
          flex-direction: column;
          gap: 0.625rem;
          flex-shrink: 0;
        }
        .thumb-btn {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.1);
          padding: 0;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.04);
          transition: all 0.2s ease;
        }
        .thumb-btn.active {
          border-color: #8b5cf6;
          box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
        }
        .thumb-btn img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .main-display {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          min-width: 0;
        }
        .main-img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 2rem;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .main-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .nav-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }
        .nav-arrow {
          background: none;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 38px;
          height: 38px;
          cursor: pointer;
          color: #c4b5fd;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .nav-arrow:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.4);
        }
        .dots {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.2s ease;
        }
        .dot.active {
          width: 24px;
          border-radius: 100px;
          background: #c4b5fd;
        }

        @media (max-width: 1024px) {
          .gallery-container {
            flex-direction: column-reverse; /* Thumbnails below main image */
            gap: 1.5rem;
          }
          .thumbnails {
            flex-direction: row;
            justify-content: center;
            overflow-x: auto;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
          }
          .thumb-btn {
            width: 72px;
            height: 80px;
          }
          .main-img-wrapper {
            padding-bottom: 100%; /* Back to square on mobile/tablet */
          }
        }
      `}</style>
    </div>
  );
}

function PurchaseBox() {
  const [selectedPack, setSelectedPack] = useState(1);
  const [quantity, setQuantity]         = useState(1);
  const [activeTab, setActiveTab]       = useState('Detaljer');
  const [showBenefits, setShowBenefits] = useState(false);

  const pack = PACKS.find(p => p.id === selectedPack) || PACKS[0];
  const total = pack.price * quantity;

  return (
    <div className="purchase-card">
      {/* Stars & Divider */}
      <div className="review-row">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Stars size={16} />
          <span className="review-count">(1 842 OMDÖMEN)</span>
        </div>
        <div className="card-divider" />
      </div>

      {/* Title */}
      <div className="title-section">
        <p style={{
          color: '#c4b5fd',
          fontSize: '0.875rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          marginBottom: '0.5rem',
        }}>
          Koala Sleep Gummies
        </p>
        <h1 className="product-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}>
          För dig som är trött i kroppen men <em className="italic-title">klarvaken i huvudet</em>
        </h1>
        <p className="subtitle">En kvällsgummy utvecklad för att hjälpa dig varva ner, komma till ro lättare och vakna utan tung känsla nästa dag.</p>
      </div>

      {/* Tabs */}
      <div className="tabs-section">
        <div className="tabs-header">
          {TABS.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`tab-btn ${activeTab === tab ? 'active' : ''}`}>
              {tab}
            </button>
          ))}
        </div>
        <p className="tab-text">{TAB_CONTENT[activeTab]}</p>
        
        {/* Expandable Benefits List */}
        {showBenefits && (
          <ul style={{
            listStyleType: 'none',
            padding: 0,
            margin: '0.75rem 0 1.25rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            color: '#130c24',
            fontSize: '0.85rem',
            lineHeight: 1.6,
          }}>
            <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.65rem', fontWeight: 800, flexShrink: 0, marginTop: '3px' }}>✓</span>
              <span>Hjälper dig varva ner när tankarna snurrar</span>
            </li>
            <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.65rem', fontWeight: 800, flexShrink: 0, marginTop: '3px' }}>✓</span>
              <span>Hjälper dig komma till ro och somna lättare</span>
            </li>
            <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.65rem', fontWeight: 800, flexShrink: 0, marginTop: '3px' }}>✓</span>
              <span>Vakna utan tung eller seg känsla nästa dag</span>
            </li>
            <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
              <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.65rem', fontWeight: 800, flexShrink: 0, marginTop: '3px' }}>✓</span>
              <span>Med L-Theanine, Magnesium och botaniska extrakt</span>
            </li>
          </ul>
        )}

        <button 
          className="benefits-link"
          onClick={() => setShowBenefits(!showBenefits)}
          style={{ 
            marginTop: showBenefits ? '0' : '0.75rem',
            marginBottom: '0.5rem'
          }}
        >
          {showBenefits ? 'Dölj fördelar -' : 'Se fördelar +'}
        </button>
      </div>

      {/* Pack selector */}
      <div className="pack-grid">
        {PACKS.map(p => (
          <button key={p.id} onClick={() => setSelectedPack(p.id)} className={`pack-btn ${selectedPack === p.id ? 'active' : ''}`}>
            <div className="pack-img-box">
              <img src={p.image} alt="" />
            </div>
            <div className="pack-label">{p.label}</div>
            {p.badge && <div className="pack-badge">{p.badge}</div>}
          </button>
        ))}
      </div>

      {/* Purchase Option (One-time only) */}
      <div className="purchase-option">
        <div className="option-label-box">
          <div className="radio-circle" />
          <span className="option-name">Engångsköp</span>
        </div>
        <span className="option-price">{total} KR</span>
      </div>

      {/* Quantity & CTA */}
      <div className="action-section">
        <div className="qty-selector">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="qty-btn">−</button>
          <span className="qty-val">{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)} className="qty-btn">+</button>
        </div>

        <button 
          className="cta-button"
          onMouseEnter={e => {
            e.currentTarget.style.filter = 'brightness(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(91, 33, 182, 0.45)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.filter = 'none';
            e.currentTarget.style.boxShadow = '0 4px 18px rgba(91, 33, 182, 0.32)';
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'translateY(1.5px)'}
          onMouseUp={e => e.currentTarget.style.transform = 'translateY(0)'}
        >
          {total} KR – LÄGG I VARUKORGEN
        </button>

        <ul style={{
          listStyleType: 'none',
          padding: 0,
          margin: '0.25rem 0 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
          fontSize: '0.82rem',
          color: '#494060', // Adjusted to match light background
          fontWeight: 600,
        }}>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#8b5cf6', fontSize: '1rem' }}>✓</span> För trött-men-klarvaken-kvällar
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#8b5cf6', fontSize: '1rem' }}>✓</span> Mjukare väg in i sömn
          </li>
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#8b5cf6', fontSize: '1rem' }}>✓</span> Bättre morgnar utan tung känsla
          </li>
        </ul>
      </div>

      {/* Brand Benefit icons */}
      <div className="benefits-footer">
        <div className="benefit-icons-grid">
          {BENEFIT_ICONS.map(b => (
            <div key={b.label} className="icon-item">
              <div className="icon-circle">{b.icon}</div>
              <span className="icon-label">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .purchase-card {
          background: #F6F2FA;
          border-radius: 2.5rem;
          border: 1.5px solid #130c24;
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: sticky;
          top: 100px;
          boxShadow: 0 4px 20px rgba(0,0,0,0.03);
          z-index: 10;
        }
        .review-row {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        .review-count {
          font-size: 0.85rem;
          color: #130c24;
          font-weight: 800;
          letter-spacing: 0.04em;
        }
        .card-divider {
          height: 1.5px;
          background: #130c24;
          width: 100%;
        }
        .product-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 3vw, 3rem);
          font-weight: 800;
          color: #130c24;
          line-height: 1;
          margin-bottom: 0.45rem;
          letter-spacing: -0.02em;
        }
        .italic-title {
          font-style: italic;
          font-weight: 400;
          color: #5b21b6;
        }
        .subtitle {
          font-size: 0.95rem;
          color: #6b5f8a;
          font-weight: 500;
          margin: 0;
        }
        .tabs-header {
          display: flex;
          gap: 1.5rem;
          border-bottom: 1px solid #ede8f8;
          margin-bottom: 0.125rem;
        }
        .tab-btn {
          background: none;
          border: none;
          border-bottom: 2px solid transparent;
          padding: 0 0 0.65rem 0;
          cursor: pointer;
          font-size: 0.75rem;
          font-weight: 700;
          color: #b0a8c9;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: -1px;
          transition: all 0.2s ease;
        }
        .tab-btn.active {
          color: #130c24;
          border-bottom-color: #130c24;
        }
        .tab-text {
          font-size: 0.85rem;
          color: #4a4168;
          line-height: 1.6;
          margin: 1rem 0 0 0;
        }
        .benefits-link {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 0.83rem;
          font-weight: 700;
          color: #130c24;
          margin-top: 0.5rem;
          padding: 0;
          text-decoration: underline;
          text-underline-offset: 3px;
          align-self: flex-start;
        }
        .pack-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.625rem;
        }
        .pack-btn {
          position: relative;
          padding: 1.125rem 0.5rem 1.4rem;
          border-radius: 2rem;
          border: 1px solid #e8e2f8;
          background: #fcfaff;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.2s ease;
        }
        .pack-btn.active {
          border: 2px solid #130c24;
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(19, 12, 36, 0.08);
        }
        .pack-img-box {
          width: 44px;
          height: 44px;
          margin-bottom: 0.6rem;
        }
        .pack-img-box img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .pack-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: #130c24;
          text-transform: uppercase;
        }
        .pack-badge {
          position: absolute;
          bottom: -11px;
          left: 50%;
          transform: translateX(-50%);
          background: #8b5cf6;
          color: #fff;
          font-size: 0.58rem;
          font-weight: 800;
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          white-space: nowrap;
          box-shadow: 0 2px 6px rgba(139, 92, 246, 0.2);
        }
        .purchase-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.125rem 1.5rem;
          border-radius: 100px;
          background: #ffffff;
          border: 2px solid #130c24;
          cursor: default;
        }
        .option-label-box {
          display: flex;
          align-items: center;
          gap: 0.875rem;
        }
        .radio-circle {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 6px solid #130c24;
          background: #fff;
        }
        .option-name {
          font-size: 0.88rem;
          font-weight: 800;
          color: #130c24;
          text-transform: uppercase;
        }
        .option-price {
          font-size: 0.95rem;
          font-weight: 800;
          color: #130c24;
        }
        .action-section {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }
        .qty-selector {
          display: flex;
          align-items: center;
          border: 1.5px solid #ede8f8;
          border-radius: 100px;
          background: #ffffff;
          overflow: hidden;
          height: 54px;
        }
        .qty-btn {
          flex: 1;
          height: 100%;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 1.4rem;
          color: #7c6f9e;
          transition: background 0.2s ease;
        }
        .qty-btn:hover {
          background: #fcfaff;
        }
        .qty-val {
          width: 44px;
          text-align: center;
          font-weight: 700;
          color: #130c24;
          font-size: 1.1rem;
        }
        .cta-button {
          background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
          color: #fff;
          border: 2px solid #130c24;
          border-radius: 100px;
          padding: 1.25rem 1.5rem;
          font-size: 1rem;
          font-weight: 800;
          cursor: pointer;
          width: 100%;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          box-shadow: 0 4px 18px rgba(91, 33, 182, 0.32);
          transition: all 0.1s ease;
        }
        .benefits-footer {
          border-top: 1px solid #f3eeff;
          padding-top: 1.5rem;
        }
        .benefit-icons-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0.625rem;
        }
        .icon-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1.5px solid #d8d0ef;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          background: #fff;
        }
        .icon-label {
          font-size: 0.58rem;
          color: #8b7aae;
          text-align: center;
          font-weight: 700;
          line-height: 1.3;
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
          .purchase-card {
            position: relative;
            top: 0;
            padding: 2rem 1.5rem;
            margin-top: 1rem;
          }
          .product-title {
            font-size: 2.25rem;
          }
        }
        @media (max-width: 480px) {
          .purchase-card {
            padding: 1.75rem 1rem;
            border-radius: 2rem;
          }
          .product-title {
            font-size: 1.85rem;
          }
          .pack-grid {
            gap: 0.5rem;
          }
          .pack-btn {
            padding: 1rem 0.25rem 1.25rem;
          }
          .icon-label {
            font-size: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="shop" className="hero-section">
      <div className="section-container">
        <div className="hero-grid">
          <ImageGallery />
          <PurchaseBox />
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(175deg, #0f0820 0%, #1a0d35 100%);
          padding: 4rem 0 6rem;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        @media (max-width: 1280px) {
          .hero-grid {
            gap: 2.5rem;
          }
        }
        @media (max-width: 1024px) {
          .hero-section {
            padding: 2rem 0 4rem;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 720px;
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .hero-grid {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
