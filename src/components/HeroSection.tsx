'use client';

import { useState, useEffect, useRef } from 'react';
import { useCart } from '@/context/CartContext';
import ReviewsModal from './ReviewsModal';

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
  subtitle: string;
  badge: string | null;
  price: number;
  unitPrice: string;
  savings: string | null;
  savingsAmount: number;
  originalPrice: number;
  image: string;
}

const PACKS: Pack[] = [
  { id: 1, label: '1 BURK',    subtitle: 'Perfekt för att prova',   badge: null,           price: 299, unitPrice: '299 kr / burk', savings: null, savingsAmount: 0, originalPrice: 299,  image: '/1 burk.webp' },
  { id: 2, label: '2 BURKAR',  subtitle: 'Smart start',             badge: null,           price: 549, unitPrice: '275 kr / burk', savings: 'Spara 49 kr', savingsAmount: 49, originalPrice: 598,  image: '/2 burkar.webp' },
  { id: 3, label: '4 BURKAR',  subtitle: '', badge: 'MEST POPULÄR', price: 799, unitPrice: '200 kr / burk', savings: 'Spara 397 kr', savingsAmount: 397, originalPrice: 1196, image: '/3 burkar.webp' },
  { id: 4, label: '6 BURKAR',  subtitle: '',             badge: 'BÄST VÄRDE',   price: 999, unitPrice: '167 kr / burk', savings: 'Spara 795 kr', savingsAmount: 795, originalPrice: 1794,  image: '/3 burkar.webp' },
];

const TABS = ['Detaljer', 'Ingredienser', 'FAQ'];
const TAB_CONTENT: Record<string, string> = {
  'Detaljer':     'Koala Ritual Sleep Gummies är utvecklade för kvällar när kroppen är trött men hjärnan fortfarande går på högvarv. Med L-Theanine, Magnesium och Ashwagandha hjälper de dig varva ner, komma till ro lättare och vakna utan tung känsla nästa dag.',
  'Ingredienser': 'L-Theanine (200mg), Valerianarot (100mg), Kamomill (100mg), Ashwagandha (100mg), Magnesium (100mg), Passionsblomma (100mg), Glycin (100mg), Maltitol, Vatten, Hallonarom, Pektin, Citronsyra.\n\n**Innehåller inte:** Socker, Gluten, Gelatin, Soja, Mejeriprodukter, Nötter, Ägg, Konstgjorda sötningsmedel, färger eller aromer.',
};

const FAQ_ITEMS = [
  { q: 'När tar man dem?', a: 'Ta 2 gummies cirka 30–60 minuter före läggdags som en del av din kvällsrutin.' },
  { q: 'Passar den om mitt största problem är att jag inte kan stänga av tankarna?', a: 'Ja, den är utvecklad för kvällar när kroppen känns trött men huvudet fortfarande går på högvarv. Målet är inte att kännas “knockad”, utan att hjälpa dig varva ner och komma till ro lättare.' },
  { q: 'Kommer jag känna mig groggy nästa dag?', a: 'Produkten är framtagen för en mjukare kvällsrutin och bättre morgonkänsla, inte för att lämna dig tung eller seg dagen efter. Samtidigt reagerar alla olika, så börja gärna enligt rekommenderad användning och se hur den känns för dig.' },
  { q: 'Är det här bara ännu en vanlig sömngummy?', a: 'Nej — vår formula är byggd för ett mer specifikt problem: kvällar när tankarna inte stänger av. Många vanliga sömngummies säljer breda löften om bättre sömn, men vår positionering är tydligare: hjälpa dig varva ner, komma till ro och få en mjukare väg in i sömn.' },
  { q: 'Hjälper den bara att somna, eller också att komma till ro?', a: 'Den är byggd för båda delarna: att hjälpa dig varva ner på kvällen och göra övergången till sömn mjukare.' },
  { q: 'Kan den ge konstiga eller intensiva drömmar?', a: 'Sömnrutiner och kosttillskott kan upplevas olika från person till person. Därför är det alltid smart att börja enligt rekommenderad användning och känna efter hur din kropp reagerar.' },
  { q: 'Är den beroendeframkallande?', a: 'Den är framtagen som en enkel kvällsrutin, inte som en tung “knockout”-lösning. Många kunder söker just ett alternativ som känns mildare och enklare än starkare sömnhjälpmedel.' },
  { q: 'Passar den alla?', a: 'Rekommenderas för vuxna. Inte lämplig för gravida, ammande eller personer under 18 år. Konsultera läkare vid medicinering.' },
  { q: 'Hur många gummies finns i en burk?', a: 'Varje burk innehåller 60 gummies, vilket motsvarar 30 portioner vid 2 gummies per kväll.' },
  { q: 'Vad gör Koala Calm System™ annorlunda?', a: 'Koala Calm System™ är vår kvällsformula för lugnare sinne, mjukare insomning och bättre morgnar — särskilt för dig som känner dig trött i kroppen men klarvaken i huvudet.' },
];

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  // Auto-scroll thumbnails when active index changes
  useEffect(() => {
    if (thumbRef.current && thumbRef.current.children.length > active) {
      const thumbTrack = thumbRef.current;
      const targetThumb = thumbTrack.children[active] as HTMLElement;
      
      const isMobile = window.innerWidth <= 1024;
      
      if (isMobile) {
        const scrollLeft = targetThumb.offsetLeft - (thumbTrack.offsetWidth / 2) + (targetThumb.offsetWidth / 2);
        thumbTrack.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      } else {
        const scrollTop = targetThumb.offsetTop - (thumbTrack.offsetHeight / 2) + (targetThumb.offsetHeight / 2);
        thumbTrack.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        });
      }
    }
  }, [active]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const children = scrollRef.current.children;
    if (children.length < 2) return;

    // Dynamically calculate stride from DOM to avoid rounding/gap issues
    const stride = (children[1] as HTMLElement).offsetLeft - (children[0] as HTMLElement).offsetLeft;
    const newActive = Math.round(scrollLeft / stride);

    if (newActive !== active && newActive >= 0 && newActive < IMAGES.length) {
      setActive(newActive);
    }
  };

  const scrollToIndex = (index: number) => {
    setActive(index);
    if (scrollRef.current && scrollRef.current.children.length > index) {
      const children = scrollRef.current.children;
      const stride = (children.length > 1) 
        ? (children[1] as HTMLElement).offsetLeft - (children[0] as HTMLElement).offsetLeft
        : 0;
        
      scrollRef.current.scrollTo({
        left: index * stride,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="gallery-container">
      {/* Thumbnails (Desktop: Left, Mobile: Bottom/Row) */}
      <div className="thumbnails">
        <div className="thumbnails-scroll" ref={thumbRef}>
          {IMAGES.map((src, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`thumb-btn ${active === i ? 'active' : ''}`}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      </div>

      {/* Main Display */}
      <div className="main-display">
        {/* Mobile Swipe Display */}
        <div 
          className="mobile-swipe-track" 
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {IMAGES.map((src, i) => (
            <div key={i} className="swipe-slide">
              <div className="main-img-wrapper">
                <div className="flower-decor" />
                <img
                  src={src}
                  alt={`Koala Ritual Sleep Gummies ${i + 1}`}
                  className="main-img"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop Single Image Display */}
        <div className="desktop-main-img">
          <div className="main-img-wrapper">
             <img
              src={IMAGES[active]}
              alt="Koala Ritual Sleep Gummies"
              className="main-img"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery-container {
          display: flex;
          gap: 1rem;
          width: 100%;
        }
        .thumbnails {
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          width: 70px;
          order: 1;
        }
        .thumbnails-scroll {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          max-height: 500px;
          overflow-y: auto;
          scrollbar-width: none;
          padding: 2px;
        }
        .thumbnails-scroll::-webkit-scrollbar {
          display: none;
        }
        .thumb-btn {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          overflow: hidden;
          border: 2px solid rgba(0, 0, 0, 0.05);
          padding: 0;
          cursor: pointer;
          background: #fff;
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
          order: 2;
        }
        .mobile-swipe-track {
          display: none;
        }
        .main-img-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 2rem;
          overflow: hidden;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .main-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          padding: 0;
        }
        .flower-decor {
          display: none;
        }

        @media (max-width: 1024px) {
          .gallery-container {
            flex-direction: column;
            gap: 1rem;
            margin-left: -1.5rem;
            margin-right: -1.5rem;
            width: 100vw;
            background: #0d0818;
            padding-bottom: 3.5rem;
          }
          .desktop-main-img {
            display: none;
          }
          .mobile-swipe-track {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            width: 100vw;
            margin-left: 0;
            padding-left: 0;
            padding-right: 0;
            gap: 0;
          }
          .mobile-swipe-track::-webkit-scrollbar {
            display: none;
          }
          .swipe-slide {
            flex: 0 0 100%;
            scroll-snap-align: start;
          }
          .main-img-wrapper {
            background: transparent;
            border: none;
            border-radius: 0;
            width: 100%;
            height: 45vh;
            min-height: 250px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .main-img {
            padding: 0;
            z-index: 2;
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
          .flower-decor {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            height: 90%;
            background: rgba(139, 92, 246, 0.05);
            z-index: 1;
            -webkit-mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M100 0C125 0 145 20 145 45C145 55 141 64 135 71C145 65 157 61 170 61C187 61 200 74 200 91C200 108 187 121 170 121C157 121 145 117 135 110C141 117 145 127 145 137C145 162 125 182 100 182C75 182 55 162 55 137C55 127 59 117 65 110C55 117 43 121 30 121C13 121 0 108 0 91C0 74 13 61 30 61C43 61 55 65 65 71C59 64 55 55 55 45C55 20 75 0 100 0Z' transform='translate(0 9)'/%3E%3C/svg%3E");
            mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M100 0C125 0 145 20 145 45C145 55 141 64 135 71C145 65 157 61 170 61C187 61 200 74 200 91C200 108 187 121 170 121C157 121 145 117 135 110C141 117 145 127 145 137C145 162 125 182 100 182C75 182 55 162 55 137C55 127 59 117 65 110C55 117 43 121 30 121C13 121 0 108 0 91C0 74 13 61 30 61C43 61 55 65 65 71C59 64 55 55 55 45C55 20 75 0 100 0Z' transform='translate(0 9)'/%3E%3C/svg%3E");
            -webkit-mask-size: contain;
            mask-size: contain;
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            -webkit-mask-position: center;
            mask-position: center;
          }
          .main-display {
            order: 1;
            width: 100%;
          }
          .thumbnails {
            width: 100%;
            display: flex;
            flex-direction: row;
            padding: 0 1.5rem;
            overflow: hidden;
            margin-top: 0.5rem;
            order: 2;
          }
          .thumbnails-scroll {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            scrollbar-width: none;
            gap: 0.75rem;
            padding-right: 3rem;
          }
          .thumbnails-scroll::-webkit-scrollbar {
            display: none;
          }
          .thumb-btn {
            width: 68px;
            height: 68px;
            flex-shrink: 0;
            border-radius: 12px;
            background: #fff;
            border: 1px solid rgba(255, 255, 255, 0.8);
            padding: 4px;
          }
          .thumb-btn.active {
            border-color: #8b5cf6;
            background: #fff;
            box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.4);
          }
          .thumb-btn img {
            border-radius: 6px;
          }
        }
        @media (max-width: 768px) {
          .gallery-container {
            gap: 0.75rem;
          }
          .nav-arrow {
            width: 32px;
            height: 32px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
}

function PurchaseBox() {
  const [selectedPack, setSelectedPack] = useState(3);
  const [quantity, setQuantity]         = useState(1);
  const [activeTab, setActiveTab]       = useState('Detaljer');
  const [showBenefits, setShowBenefits] = useState(false);
  const [activeFaq, setActiveFaq]       = useState<number | null>(null);
  const [showFullIng, setShowFullIng]   = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  const { addItem } = useCart();

  const pack = PACKS.find(p => p.id === selectedPack) || PACKS[0];
  const total = pack.price * quantity;

  return (
    <div className="purchase-card">
      {/* Stars & Divider */}
      <div 
        className="review-row" 
        onClick={() => setIsReviewsOpen(true)}
        style={{ cursor: 'pointer' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Stars size={16} />
          <span className="review-count">(1 842 OMDÖMEN)</span>
          <span style={{ fontSize: '0.75rem', color: '#8b5cf6', marginLeft: '2px' }}>↓</span>
        </div>
        <div className="card-divider" />
      </div>

      <ReviewsModal isOpen={isReviewsOpen} onClose={() => setIsReviewsOpen(false)} />

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
            <button key={tab} onClick={() => { setActiveTab(tab); setActiveFaq(null); }} className={`tab-btn ${activeTab === tab ? 'active' : ''}`}>
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'FAQ' ? (
          <div style={{ marginTop: '1rem' }}>
            {/* Scrollable pill questions */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.75rem',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
            }}>
              {FAQ_ITEMS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{
                    flexShrink: 0,
                    padding: '0.45rem 1rem',
                    borderRadius: '100px',
                    border: activeFaq === i
                      ? '1.5px solid #7c3aed'
                      : '1.5px solid rgba(100,60,180,0.3)',
                    background: activeFaq === i
                      ? 'rgba(124,58,237,0.12)'
                      : 'rgba(124,58,237,0.06)',
                    color: activeFaq === i ? '#5b21b6' : '#4a3a72',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Inter, sans-serif',
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.q}
                </button>
              ))}
            </div>

            {/* Answer panel */}
            {activeFaq !== null && (
              <div style={{
                background: 'rgba(124,58,237,0.08)',
                border: '1px solid rgba(124,58,237,0.2)',
                borderRadius: '0.875rem',
                padding: '1rem 1.1rem',
                marginTop: '0.25rem',
                position: 'relative',
              }}>
                <p style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: '#5b21b6',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem',
                }}>
                  {FAQ_ITEMS[activeFaq].q}
                </p>
                <p style={{
                  color: '#130c24',
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {FAQ_ITEMS[activeFaq].a}
                </p>
                <button
                  onClick={() => setActiveFaq(null)}
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    right: '0.875rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#7b6fa0',
                    fontSize: '1rem',
                    lineHeight: 1,
                    padding: 0,
                  }}
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        ) : (
          <div style={{ marginTop: '1rem' }}>
            <p className="tab-text">
              {activeTab === 'Ingredienser' && !showFullIng 
                ? (TAB_CONTENT as Record<string, string>)[activeTab].slice(0, 130) + '...'
                : (TAB_CONTENT as Record<string, string>)[activeTab]
                    .split('**')
                    .map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)
              }
            </p>
            
            {activeTab === 'Ingredienser' && (TAB_CONTENT as Record<string, string>)[activeTab].length > 130 && (
              <button 
                onClick={() => setShowFullIng(!showFullIng)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#8b5cf6',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: '0.25rem 0',
                  textDecoration: 'underline'
                }}
              >
                {showFullIng ? 'Visa mindre -' : 'Visa mer +'}
              </button>
            )}

            {activeTab === 'Detaljer' && (
              <>
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
              </>
            )}
          </div>
        )}
      </div>

      {/* Packs Selection Header */}
      <div className="packs-selection-title">Välj ditt paket</div>

      {/* All Packs Horizontal Layout */}
      <div className="all-packs-container">
        {PACKS.map((p, index) => (
          <div key={p.id} className="pack-wrapper">
            <button onClick={() => setSelectedPack(p.id)} className={`pack-btn horizontal ${selectedPack === p.id ? 'active' : ''}`}>
              <div className="horizontal-content">
                <div className="pack-img-box small">
                  <img src={p.image} alt="" />
                </div>
                <div className="text-info">
                  {p.id === 4 && <div className="dagens-deal-inline">DAGENS DEAL</div>}
                  <div className="pack-label">{p.label}</div>
                  {p.subtitle && <div className="pack-sublabel">{p.subtitle}</div>}
                </div>
                <div className="price-info">
                  <div className="pack-price">{p.price} kr</div>
                  <div className="pack-unit-price">{p.unitPrice}</div>
                  {p.savings && <div className="pack-savings">{p.savings}</div>}
                </div>
              </div>
              {p.badge && <div className="pack-badge horizontal-badge">{p.badge}</div>}
            </button>
          </div>
        ))}
      </div>

      {/* Price Display */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        padding: '0.5rem 0.5rem 0',
      }}>
        <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#6b5f8a', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pris:</span>
        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#130c24' }}>{total} KR</span>
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
          onClick={() => {
            addItem({
              id: pack.id,
              name: 'Koala Ritual Sleep Gummies',
              price: pack.price,
              quantity: quantity,
              image: pack.image,
              label: pack.label,
              savingsAmount: pack.savingsAmount
            });
          }}
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
          color: '#130c24', // Fixed syntax and darkened for contrast
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
          <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#8b5cf6', fontSize: '1rem' }}>✓</span> Inga prenumerationer
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
          background: #ffffff;
          border-radius: 2.5rem;
          border: 1.5px solid #130c24;
          padding: 2.5rem 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          position: sticky;
          top: 100px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          z-index: 10;
          overflow: hidden;
          width: 100%;
          min-width: 0;
        }
        .review-row {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .review-row:hover {
          opacity: 0.7;
        }
        .review-count {
          font-size: 0.85rem;
          color: #130c24;
          font-weight: 800;
          letter-spacing: 0.04em;
          transition: all 0.2s;
        }
        .review-row:hover .review-count {
          text-decoration: underline;
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
          color: #130c24;
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
          color: #6b5a8a;
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
          font-size: 0.875rem;
          color: #130c24;
          line-height: 1.65;
          margin: 0;
          white-space: pre-wrap;
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
        .pack-price {
          font-size: 0.8rem;
          font-weight: 800;
          color: #130c24;
          margin-top: 0.4rem;
        }
        .pack-unit-price {
          font-size: 0.65rem;
          font-weight: 700;
          color: #130c24;
          margin-top: 0.1rem;
        }
        .pack-sublabel {
          font-size: 0.55rem;
          color: #130c24;
          margin-top: 0.3rem;
          font-weight: 600;
          opacity: 0.9;
        }
        .pack-savings {
          font-size: 0.58rem;
          font-weight: 800;
          color: #16a34a;
          margin-top: 0.25rem;
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
        .pack-badge {
          position: absolute;
          bottom: -11px;
          left: 50%;
          transform: translateX(-50%);
          background: #8b5cf6;
          color: white;
          font-size: 0.5rem;
          font-weight: 800;
          padding: 0.25rem 0.6rem;
          border-radius: 99px;
          white-space: nowrap;
          z-index: 2;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        /* Horizontal Layout Styles */
        .all-packs-container {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0rem;
        }
        .packs-selection-title {
          font-size: 0.82rem;
          font-weight: 800;
          color: #130c24;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
          letter-spacing: 0.02em;
        }
        .pack-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .dagens-deal-inline {
          font-size: 0.55rem;
          font-weight: 900;
          color: #ef4444;
          letter-spacing: 0.05em;
          margin-bottom: 0.1rem;
        }
        .pack-btn.horizontal {
          width: 100%;
          padding: 0.8rem 1rem;
          text-align: left;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        }
        .horizontal-content {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          width: 100%;
        }
        .horizontal-content .pack-img-box.small {
          width: 48px;
          height: 48px;
          margin: 0;
          flex-shrink: 0;
        }
        .horizontal-content .text-info {
          flex: 1;
        }
        .horizontal-content .price-info {
          text-align: right;
          margin-right: 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 0.1rem;
        }
        .horizontal-content .pack-label {
          font-size: 0.8rem;
        }
        .horizontal-content .pack-sublabel {
          font-size: 0.6rem;
          margin-top: 0.1rem;
        }
        .horizontal-content .pack-price {
          margin: 0;
          font-size: 0.85rem;
        }
        .horizontal-content .pack-unit-price {
          margin: 0;
          font-size: 0.6rem;
        }
        .horizontal-content .pack-savings {
          margin: 0;
          font-size: 0.55rem;
          white-space: nowrap;
          color: #16a34a;
          font-weight: 800;
        }
        .horizontal-badge {
          position: absolute;
          top: -8px;
          right: 20px;
          bottom: auto;
          left: auto;
          transform: none;
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
          color: #3d3356;
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
          border: 1.5px solid rgba(139, 92, 246, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          background: #fff;
          color: #8b5cf6;
        }
        .icon-label {
          font-size: 0.58rem;
          color: #130c24;
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
            margin: -2.5rem auto 0;
            border-radius: 1.5rem;
            width: 94%;
            max-width: 500px;
            z-index: 10;
          }
          .product-title {
            font-size: 2rem;
          }
        }
        @media (max-width: 480px) {
          .purchase-card {
            padding: 1.5rem 1rem;
            border-radius: 1.5rem;
            gap: 1.25rem;
          }
          .product-title {
            font-size: 1.75rem;
          }
          .pack-grid {
            gap: 0.5rem;
          }
          .pack-btn {
            padding: 0.75rem 0.25rem 1.25rem;
            border-radius: 1.25rem;
          }
          .pack-img-box {
            width: 36px;
            height: 36px;
          }
          .icon-label {
            font-size: 0.5rem;
          }
          .tabs-header {
            gap: 1rem;
          }
          .tab-btn {
            font-size: 0.7rem;
          }
          .cta-button {
            padding: 1rem 1.25rem;
            font-size: 0.9rem;
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
          overflow-x: hidden;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }

        @media (max-width: 1280px) {
          .hero-grid {
            gap: 2.5rem;
          }
        }
        @media (max-width: 1024px) {
          .hero-section {
            padding: 1rem 0 4rem;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 100%;
            margin: 0 auto;
          }
        }
        @media (max-width: 768px) {
          .hero-section {
            padding: 0.5rem 0 5rem;
          }
          .hero-grid {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
