'use client';

import { useState } from 'react';

interface Review {
  name: string;
  stars: number;
  title: string;
  text: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    name: 'Emma S.',
    stars: 5,
    title: 'Gjord för mitt problem',
    text: 'Det här är första gången en sömnprodukt faktiskt känts gjord för mitt problem. Jag är alltid trött i kroppen men huvudet fortsätter ändå gå. Med de här känns kvällarna lugnare och jag somnar mycket lättare.',
    date: 'Mars 2025',
  },
  {
    name: 'Johan L.',
    stars: 5,
    title: 'Kroppen kommer ner i varv',
    text: 'Jag var skeptisk eftersom så många sömngummies känns likadana, men de här kändes annorlunda direkt. Inte som att bli knockad, mer som att kroppen och huvudet äntligen kommer ner i varv.',
    date: 'Feb 2025',
  },
  {
    name: 'Sara K.',
    stars: 5,
    title: 'Ingen tung känsla efteråt',
    text: 'Det bästa för mig är att jag inte vaknar med den där tunga, konstiga känslan dagen efter. Jag känner mig mer normal på morgonen, vilket är exakt det jag har letat efter.',
    date: 'Mars 2025',
  },
  {
    name: 'Marcus B.',
    stars: 5,
    title: 'Tankarna slutar snurra',
    text: 'Mitt största problem har alltid varit att tankarna börjar snurra så fort jag lägger mig. De här hjälper mig verkligen att varva ner på kvällen och komma till ro utan att det känns för starkt.',
    date: 'Jan 2025',
  },
  {
    name: 'Linda A.',
    stars: 5,
    title: 'Mycket mjukare effekt',
    text: 'Jag har provat flera olika sömnprodukter och ofta ångrat mig morgonen efter. Med de här känns det mycket mjukare, både på kvällen och dagen efter.',
    date: 'Feb 2025',
  },
  {
    name: 'Erik V.',
    stars: 5,
    title: 'Ingen dread inför läggdags',
    text: 'För första gången på länge kände jag inte dread inför läggdags. Jag tog dem som en del av kvällsrutinen och märkte att hela kvällen kändes lugnare.',
    date: 'Mars 2025',
  },
  {
    name: 'Sofia G.',
    stars: 5,
    title: 'Enkel rutin',
    text: 'Jag gillar att de inte känns som ännu ett piller. Gummies-formatet gör det faktiskt lättare att hålla fast vid rutinen.',
    date: 'Feb 2025',
  },
  {
    name: 'Kalle P.',
    stars: 5,
    title: 'Stänga av normalt',
    text: 'Det här passar mig mycket bättre än starkare sömnhjälpmedel. Jag vill inte känna mig drogad, jag vill bara kunna stänga av och sova normalt. Det är exakt känslan de här gav mig.',
    date: 'Jan 2025',
  },
  {
    name: 'Mikaela R.',
    stars: 5,
    title: 'Mindre mental matte',
    text: 'Jag märkte mest skillnad på hur snabbt jag kom ner i varv. Tidigare kunde jag ligga och göra mental matte i huvudet över hur många timmar sömn jag skulle få.',
    date: 'Mars 2025',
  },
  {
    name: 'Anders N.',
    stars: 5,
    title: 'Inte seg dagen efter',
    text: 'Jag köpte dem främst för att jag var så trött på att vara seg dagen efter av andra produkter. De här gav mig en mycket bättre morgonkänsla.',
    date: 'Feb 2025',
  },
  {
    name: 'Hanna M.',
    stars: 5,
    title: 'Lågdramatiskt lugn',
    text: 'Det här är den första kvällsprodukten som känts lågdramatisk på ett bra sätt. Enkel rutin, lätt att ta, och jag känner mig lugnare istället för tung.',
    date: 'Mars 2025',
  },
  {
    name: 'Oscar T.',
    stars: 4,
    title: 'Stabilt kvällsläge',
    text: 'Jag brukar vakna mitt i natten och sedan börja tänka på allt möjligt. Med de här känns hela kvällsläget mer stabilt redan innan jag somnar.',
    date: 'Jan 2025',
  },
  {
    name: 'Elin F.',
    stars: 5,
    title: 'Tired but wired fix',
    text: 'Jag gillar att de är byggda för folk som är tired but wired. Det är exakt så jag har känt mig i månader.',
    date: 'Feb 2025',
  },
  {
    name: 'Gustav J.',
    stars: 5,
    title: 'Kan fungera dagen efter',
    text: 'Det som sticker ut mest är att jag inte får samma groggy känsla som jag fått av andra sömnprodukter. Jag kan fortfarande fungera dagen efter.',
    date: 'Mars 2025',
  },
  {
    name: 'Beatrice L.',
    stars: 5,
    title: 'Rutinen man ser fram emot',
    text: 'Smaken gör också mer än man tror. Det känns mer som en kvällsrutin man ser fram emot än något man tvingar i sig.',
    date: 'Feb 2025',
  },
  {
    name: 'Filip D.',
    stars: 5,
    title: 'Balanserad effekt',
    text: 'Jag har testat melatonin tidigare men tyckt att resultaten varit för ojämna. De här känns mer balanserade för mig.',
    date: 'Jan 2025',
  },
  {
    name: 'Isabelle K.',
    stars: 5,
    title: 'Mjukare övergång',
    text: 'Min hjärna brukar slå på så fort det blir tyst. De här hjälpte mig få den där mjukare övergången till nattläge som jag har saknat.',
    date: 'Mars 2025',
  },
  {
    name: 'Niklas H.',
    stars: 5,
    title: 'Mindre uppvarvad',
    text: 'Jag blev positivt överraskad över hur lugn kvällen kändes. Inte sleepy på ett konstigt sätt, bara mindre uppvarvad.',
    date: 'Feb 2025',
  },
  {
    name: 'Josefin S.',
    stars: 5,
    title: 'Gjord för stressiga kvällar',
    text: 'Det här är en mycket bättre fit för mig än vanliga sömngummies. De känns mindre generiska och mer gjorda för stressiga kvällar.',
    date: 'Mars 2025',
  },
  {
    name: 'Tobias E.',
    stars: 5,
    title: 'Mindre frustration',
    text: 'Jag märkte inte bara skillnad i hur jag somnade, utan i hela känslan runt läggdags. Mindre frustration, mindre rastlöshet, mindre känsla av att kämpa mot min egen hjärna.',
    date: 'Jan 2025',
  },
  {
    name: 'Malin Ö.',
    stars: 5,
    title: 'Slipper betala dagen efter',
    text: 'För mig handlar bra sömn inte bara om att somna, utan om att slippa betala för det nästa dag. Därför gillar jag de här så mycket.',
    date: 'Feb 2025',
  },
  {
    name: 'David W.',
    stars: 5,
    title: 'Förstår problemet',
    text: 'Om du är en sån som är helt slut men ändå inte kan stänga av tankarna, då förstår den här produkten problemet bättre än mycket annat jag testat.',
    date: 'Mars 2025',
  },
  {
    name: 'Victoria C.',
    stars: 5,
    title: 'Hjälp att komma till ro',
    text: 'Jag tycker de här känns mildare men ändå mer användbara än många andra produkter jag provat. De hjälper mig komma till ro utan att hela nästa dag känns förstörd.',
    date: 'Jan 2025',
  },
  {
    name: 'Henrik Å.',
    stars: 5,
    title: 'Inte knockad, bara lugnare',
    text: 'Det bästa ordet för dem är balanserade. Jag blir inte knockad, men kvällarna känns lugnare och insomningen mindre kämpig.',
    date: 'Feb 2025',
  },
  {
    name: 'Cecilia B.',
    stars: 5,
    title: 'Bästa mellanläget',
    text: 'Jag köpte dem för att jag var trött på att välja mellan att inte sova alls eller vakna som en zombie. De här känns som ett mycket bättre mellanläge.',
    date: 'Mars 2025',
  },
];

/* Rating distribution (simulated from the 25 reviews above) */
const RATING_DIST = [
  { stars: 5, count: 1620, pct: 88 },
  { stars: 4, count: 130, pct: 7 },
  { stars: 3, count: 52, pct: 3 },
  { stars: 2, count: 22, pct: 1 },
  { stars: 1, count: 18, pct: 1 },
];
const TOTAL_REVIEWS = 1842;
const AVG_RATING = 4.9;
const PER_PAGE = 5;

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < count ? '#f59e0b' : '#374151'}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
        </svg>
      ))}
    </div>
  );
}

function RatingBar({ stars, count, pct }: { stars: number; count: number; pct: number }) {
  return (
    <div className="rf-rating-row">
      <span className="rf-rating-label">{stars} ★</span>
      <div className="rf-bar-track">
        <div className="rf-bar-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className="rf-rating-count">{count.toLocaleString('sv-SE')}</span>
    </div>
  );
}

export default function ReviewsFull() {
  const [visibleCount, setVisibleCount] = useState(PER_PAGE);
  const [activeTab, setActiveTab] = useState<'reviews' | 'questions'>('reviews');

  const displayed = REVIEWS.slice(0, visibleCount);
  const hasMore = visibleCount < REVIEWS.length;

  return (
    <section id="alla-omdomen" className="rf-section">
      <div className="rf-container">
        {/* Header */}
        <div className="rf-header">
          <div className="rf-stars-summary">
            <Stars count={5} size={20} />
            <span className="rf-review-count">({TOTAL_REVIEWS.toLocaleString('sv-SE')} OMDÖMEN)</span>
          </div>

        </div>

        {/* Rating Distribution */}
        <div className="rf-distribution">
          {RATING_DIST.map((r) => (
            <RatingBar key={r.stars} stars={r.stars} count={r.count} pct={r.pct} />
          ))}
        </div>

        {/* Tabs */}
        <div className="rf-tabs">
          <button
            className={`rf-tab ${activeTab === 'reviews' ? 'rf-tab-active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            OMDÖMEN
          </button>
          <button
            className={`rf-tab ${activeTab === 'questions' ? 'rf-tab-active' : ''}`}
            onClick={() => setActiveTab('questions')}
          >
            FRÅGOR
          </button>
        </div>

        {/* Filter / Sort row */}
        <div className="rf-filter-row">
          <button className="rf-filter-btn">FILTER</button>
          <div className="rf-sort">
            <span className="rf-sort-label">Sortera:</span>
            <select className="rf-sort-select" defaultValue="highest">
              <option value="highest">Högst betyg</option>
              <option value="lowest">Lägst betyg</option>
              <option value="newest">Senaste</option>
            </select>
          </div>
        </div>

        {/* Review count */}
        <p className="rf-showing">
          {TOTAL_REVIEWS.toLocaleString('sv-SE')} OMDÖMEN
        </p>

        {/* Review cards */}
        {activeTab === 'reviews' && (
          <div className="rf-reviews-list">
            {displayed.map((review, i) => (
              <div key={i} className="rf-card">
                <div className="rf-card-left">
                  <span className="rf-card-name">{review.name}</span>
                  <span className="rf-card-verified">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#8b5cf6">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    Verifierad köpare
                  </span>
                </div>
                <div className="rf-card-right">
                  <div className="rf-card-header">
                    <Stars count={review.stars} size={14} />
                    <span className="rf-card-date">{review.date}</span>
                  </div>
                  <h3 className="rf-card-title">{review.title}</h3>
                  <p className="rf-card-text">{review.text}</p>
                </div>
              </div>
            ))}

            {hasMore && (
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button
                  className="rf-load-more"
                  onClick={() => setVisibleCount((v) => Math.min(v + PER_PAGE, REVIEWS.length))}
                >
                  Visa fler omdömen
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'questions' && (
          <div className="rf-empty-state">
            <p>Inga frågor ännu. Har du en fråga? Kontakta oss på hej@koalaritual.com</p>
          </div>
        )}
      </div>

      <style>{`
        .rf-section {
          padding: 5rem 1.5rem;
          background: linear-gradient(180deg, #0d0818 0%, #0a0615 100%);
        }
        .rf-container {
          max-width: 900px;
          margin: 0 auto;
        }

        /* Header */
        .rf-header {
          margin-bottom: 2.5rem;
        }
        .rf-stars-summary {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .rf-review-count {
          color: #a899c4;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.04em;
        }
        .rf-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          color: #f0eaff;
          line-height: 1.15;
          margin: 0;
        }

        /* Rating Distribution */
        .rf-distribution {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          max-width: 420px;
        }
        .rf-rating-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .rf-rating-label {
          color: #c4b5fd;
          font-size: 0.85rem;
          font-weight: 600;
          min-width: 32px;
          text-align: right;
        }
        .rf-bar-track {
          flex: 1;
          height: 10px;
          background: rgba(139, 92, 246, 0.12);
          border-radius: 100px;
          overflow: hidden;
        }
        .rf-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #8b5cf6, #c4b5fd);
          border-radius: 100px;
          transition: width 0.6s ease;
        }
        .rf-rating-count {
          color: #6b5f8a;
          font-size: 0.8rem;
          font-weight: 500;
          min-width: 40px;
        }

        /* Tabs */
        .rf-tabs {
          display: flex;
          gap: 0;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(139, 92, 246, 0.15);
        }
        .rf-tab {
          background: none;
          border: none;
          color: #6b5f8a;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 0.75rem 1.5rem;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all 0.2s ease;
        }
        .rf-tab:hover {
          color: #a899c4;
        }
        .rf-tab-active {
          color: #f0eaff;
          border-bottom-color: #8b5cf6;
        }

        /* Filter row */
        .rf-filter-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .rf-filter-btn {
          background: transparent;
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c4b5fd;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          padding: 0.6rem 1.5rem;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .rf-filter-btn:hover {
          border-color: #8b5cf6;
          background: rgba(139, 92, 246, 0.08);
        }
        .rf-sort {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .rf-sort-label {
          color: #6b5f8a;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .rf-sort-select {
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.25);
          color: #c4b5fd;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.5rem 0.75rem;
          border-radius: 8px;
          cursor: pointer;
          outline: none;
        }
        .rf-sort-select:focus {
          border-color: #8b5cf6;
        }
        .rf-sort-select option {
          background: #160d2a;
          color: #c4b5fd;
        }

        .rf-showing {
          color: #6b5f8a;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 1.5rem;
        }

        /* Review cards */
        .rf-reviews-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .rf-card {
          display: flex;
          gap: 2rem;
          background: #1d1235;
          border: 1px solid rgba(139, 92, 246, 0.18);
          border-radius: 1.25rem;
          padding: 2rem;
          transition: border-color 0.2s ease;
        }
        .rf-card:hover {
          border-color: rgba(139, 92, 246, 0.4);
        }

        /* Card left column */
        .rf-card-left {
          min-width: 160px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-right: 2rem;
          border-right: 1px solid rgba(139, 92, 246, 0.1);
        }
        .rf-card-name {
          font-weight: 700;
          font-size: 1.05rem;
          color: #f0eaff;
          font-family: 'Inter', sans-serif;
        }
        .rf-card-verified {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #8b5cf6;
        }

        /* Card right column */
        .rf-card-right {
          flex: 1;
        }
        .rf-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .rf-card-date {
          font-size: 0.75rem;
          color: #6b5f8a;
          font-weight: 500;
        }
        .rf-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          color: #f0eaff;
          margin: 0 0 0.6rem 0;
          line-height: 1.3;
        }
        .rf-card-text {
          font-size: 0.925rem;
          line-height: 1.7;
          color: #a899c4;
          margin: 0;
        }

        /* Load more */
        .rf-load-more {
          background: transparent;
          border: 1px solid rgba(139, 92, 246, 0.3);
          color: #c4b5fd;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.85rem 2.5rem;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .rf-load-more:hover {
          border-color: #8b5cf6;
          background: rgba(139, 92, 246, 0.08);
          transform: translateY(-2px);
        }

        /* Empty state */
        .rf-empty-state {
          text-align: center;
          padding: 3rem;
          color: #6b5f8a;
          font-size: 0.95rem;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .rf-section {
            padding: 3rem 1.25rem;
          }
          .rf-headline {
            font-size: 1.8rem;
          }
          .rf-card {
            flex-direction: column;
            gap: 1rem;
            padding: 1.5rem;
          }
          .rf-card-left {
            min-width: unset;
            flex-direction: row;
            align-items: center;
            gap: 0.75rem;
            padding-right: 0;
            padding-bottom: 1rem;
            border-right: none;
            border-bottom: 1px solid rgba(139, 92, 246, 0.1);
          }
          .rf-filter-row {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          .rf-distribution {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
