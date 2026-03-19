'use client';

import { useEffect, useState } from 'react';

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
    text: 'Jag märkte mest skillnad på hur snabbt jag kom ner i varv. Tidigare kunde jag ligga och göra mental matte i huvudet över hur många timmar sömn jag skulle få. Det känns mycket mindre nu.',
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
  }
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? '#f59e0b' : '#e5e7eb'}>
          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className={`modal-content ${isOpen ? 'open' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">Kundomdömen</h2>
            <div className="summary-row">
              <Stars count={5} />
              <span>4,9 / 5 baserat på 1 842 omdömen</span>
            </div>
          </div>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="reviews-scroll-area">
          {REVIEWS.map((review, i) => (
            <div key={i} className="review-card">
              <div className="review-meta">
                <Stars count={review.stars} />
                <span className="review-date">{review.date}</span>
              </div>
              <h3 className="review-title">{review.title}</h3>
              <p className="review-text">{review.text}</p>
              <div className="review-author">
                <span className="author-name">{review.name}</span>
                <span className="verified-badge">✓ Verifierad köpare</span>
              </div>
            </div>
          ))}
        </div>

        <div className="modal-footer">
          <button className="cta-btn" onClick={() => {
            onClose();
            document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' });
          }}>KÖP NU</button>
        </div>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(13, 8, 24, 0.7);
          backdrop-filter: blur(10px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        .modal-overlay.open {
          opacity: 1;
          visibility: visible;
        }
        .modal-content {
          background: #fff;
          width: 100%;
          max-width: 580px;
          max-height: 85vh;
          border-radius: 2.5rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transform: translateY(30px);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.4);
        }
        .modal-content.open {
          transform: translateY(0);
        }

        .modal-header {
          padding: 2.25rem 2rem 1.75rem;
          border-bottom: 1px solid #f0eaff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          position: relative;
          z-index: 10;
        }
        .modal-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.85rem;
          color: #130c24;
          margin: 0 0 0.4rem 0;
          letter-spacing: -0.01em;
        }
        .summary-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: #6b5f8a;
          font-weight: 600;
        }
        .close-btn {
          background: #130c24;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(19, 12, 36, 0.2);
        }
        .close-btn:hover {
          background: #3b0764;
          transform: rotate(90deg);
        }

        .reviews-scroll-area {
          flex: 1;
          overflow-y: auto;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          background: #fbfaff;
        }
        .review-card {
          background: #fff;
          border: 1px solid #f0eaff;
          padding: 1.75rem;
          border-radius: 1.5rem;
          transition: transform 0.2s ease;
        }
        .review-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .review-date {
          font-size: 0.75rem;
          color: #a899c4;
          font-weight: 500;
        }
        .review-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          color: #130c24;
          margin: 0 0 0.6rem 0;
          line-height: 1.3;
        }
        .review-text {
          font-size: 0.95rem;
          line-height: 1.65;
          color: #4a3e68;
          margin: 0 0 1.25rem 0;
        }
        .review-author {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #f8f5ff;
        }
        .author-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: #130c24;
        }
        .verified-badge {
          font-size: 0.75rem;
          color: #10b981;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .modal-footer {
          padding: 1.75rem 2rem;
          border-top: 1px solid #f0eaff;
          background: #fff;
        }
        .cta-btn {
          width: 100%;
          background: #130c24;
          color: #fff;
          border: none;
          padding: 1.125rem;
          border-radius: 100px;
          font-weight: 800;
          font-size: 1rem;
          cursor: pointer;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
          -webkit-tap-highlight-color: transparent;
        }
        @media (hover: hover) {
          .cta-btn:hover {
            background: #3b0764;
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(19, 12, 36, 0.2);
          }
        }

        .reviews-scroll-area::-webkit-scrollbar {
          width: 6px;
        }
        .reviews-scroll-area::-webkit-scrollbar-track {
          background: #fbfaff;
        }
        .reviews-scroll-area::-webkit-scrollbar-thumb {
          background: #e2d9f3;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .modal-content {
            width: 100vw;
            max-width: 100%;
            max-height: 85dvh;
            border-radius: 1.5rem 1.5rem 0 0;
            position: relative;
            margin: 0;
            margin-top: auto;
          }
          .modal-header {
            padding: 1.75rem 3.5rem 1.25rem 1.5rem;
          }
          .close-btn {
            position: absolute;
            top: 1.5rem;
            right: 1.25rem;
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
          .modal-title {
            font-size: 1.4rem;
            white-space: normal;
          }
          .summary-row {
            flex-wrap: wrap;
          }
          .reviews-scroll-area {
            padding: 1.5rem;
          }
          .modal-overlay {
            padding: 0;
            align-items: flex-end;
            overflow-y: hidden;
          }
          .modal-footer {
            padding: 1.25rem 1.5rem calc(1.25rem + env(safe-area-inset-bottom));
          }
        }
      `}</style>
    </div>
  );
}
