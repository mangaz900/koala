'use client';

const SECTIONS = [
  {
    number: 1,
    title: 'Den tystar hjärnan',
    paragraphs: [
      'Du är helt slut. Men hjärnan kör fortfarande.',
      'Jobbet. Morgondagen. Grejen du sa för tre år sedan.',
      'Koala hjälper hjärnan att faktiskt stänga av — inte bara kroppen. Det är skillnaden.',
    ],
    image: '/images/advertorial/tired-man.jpg',
    imageAlt: 'Mörkt, lugnt sovrum',
  },
  {
    number: 2,
    title: 'Du blir inte knockad',
    paragraphs: [
      'Ingen vill vakna och känna sig seg och konstig.',
      'Koala är inte ett knockout-piller. Det är mer som en signal till kroppen: "Okej, vi är klara för idag." Du glider in i sömnen. Naturligt.',
    ],
    image: '/images/advertorial/gummies-bedside.jpg',
    imageAlt: 'Produkt på nattduksbord, varmt ljus',
  },
  {
    number: 3,
    title: 'Du vaknar som du själv',
    paragraphs: [
      'Det värsta med många sömnhjälpmedel är inte natten — det är morgonen efter.',
      'Folk som använder Koala säger samma sak gång på gång: de vaknar klara i huvudet. Inte tröga. Inte konstiga. Bara normala.',
    ],
    image: '/images/advertorial/morning-wake.png',
    imageAlt: 'Person vaknar lugnt, morgonljus',
  },
  {
    number: 4,
    title: 'Fungerar även när du vaknar klockan 03',
    paragraphs: [
      'Att somna är en sak. Att stanna sovande är en annan.',
      'Koala hjälper med båda. Så att du inte ligger där och räknar timmar mitt i natten.',
    ],
    image: '/images/advertorial/deep-sleep.png',
    imageAlt: 'Person som sover lugnt igenom natten',
  },
  {
    number: 5,
    title: 'Folk som provat allt byter till det här',
    paragraphs: [
      'De flesta som hittar Koala har redan testat det mesta. Melatonin. Magnesium. Te. Andra gummies.',
    ],
    quotes: [
      '"Sov i ett sträck i 6 timmar — inte gjort det på 5 månader."',
      '"Vaknar utvilad istället för groggy."',
      '"Kände mig lugnare efter en halvtimme."',
    ],
    image: '/images/advertorial/customer-collage.jpg',
    imageAlt: 'Recensioner med stjärnor',
  },
];

export default function ArtikelPage() {
  return (
    <div className="adv-page">
      {/* ===== HEADER ===== */}
      <header className="adv-header">
        <div className="adv-header-inner">
          <a href="/" className="adv-logo-link">
            <img
              src="/images/logo-koala.svg"
              alt="Koala Ritual"
              className="adv-logo-img"
            />
          </a>
          <a href="https://www.koalarituals.com/" className="adv-header-cta">Få rabatterat pris idag →</a>
        </div>
      </header>

      <main className="adv-main">
        {/* ===== HERO ===== */}
        <section className="adv-hero">
          <h1 className="adv-hero-title">
            5 anledningar till varför så många med trött kropp men klarvaken hjärna byter till Koala Sleep Gummies 🌙
          </h1>
          <p className="adv-hero-sub">
            Varför stressade vuxna slutar med melatonin och byter till Koala.
          </p>
        </section>

        {/* ===== REASON BLOCKS — image LEFT, text RIGHT ===== */}
        {SECTIONS.map((section) => (
          <section key={section.number} className="adv-reason">
            <div className="adv-reason-inner">
              <div className="adv-reason-img">
                <img src={section.image} alt={section.imageAlt} />
              </div>
              <div className="adv-reason-text">
                <h2 className="adv-reason-title">
                  {section.number}. {section.title}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="adv-reason-para">{p}</p>
                ))}
                {section.quotes && (
                  <div className="adv-reason-quotes">
                    {section.quotes.map((q, i) => (
                      <p key={i} className="adv-reason-quote">{q}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}

        {/* ===== CTA PANEL ===== */}
        <section className="adv-cta-panel">
          <div className="adv-cta-top">
            <h2 className="adv-cta-headline">Gör som 10 000+ andra — Testa Koala</h2>
            <div className="adv-cta-divider" />
          </div>

          <div className="adv-cta-bottom">
            <div className="adv-cta-img">
              <img src="/images/advertorial/gummies-bedside.jpg" alt="Koala Sleep Gummies" />
            </div>
            <div className="adv-cta-benefits">
              <div className="adv-cta-checks">
                <div className="adv-cta-check"><span className="adv-check-icon">✓</span> Tystar tankarna</div>
                <div className="adv-cta-check"><span className="adv-check-icon">✓</span> Mjuk väg in i sömnen</div>
                <div className="adv-cta-check"><span className="adv-check-icon">✓</span> Vakna utvilad, inte seg</div>
                <div className="adv-cta-check"><span className="adv-check-icon">✓</span> Utan läkemedel</div>
              </div>
              <a href="https://www.koalarituals.com/" className="adv-cta-button">Få rabatterat pris idag</a>
              <p className="adv-cta-micro">Fri frakt · Kolla tillgänglighet</p>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="adv-footer">
        <img
          src="/images/logo-koala.svg"
          alt="Koala Ritual"
          className="adv-footer-logo"
        />
      </footer>

      <style jsx>{`
        /* ========================================
           ADVERTORIAL — Editorial DTC Listicle
           Spec: #efefef bg, #d9ccb8 header,
           #66755f buttons, 620px max-width,
           image-left text-right, bold serif heads
           ======================================== */

        .adv-page {
          background: #0d0818;
          color: #fff;
          font-family: 'Inter', -apple-system, system-ui, sans-serif;
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
        }

        /* ---------- HEADER ---------- */
        .adv-header {
          background: #160d2a;
          border-bottom: 1px solid rgba(139,92,246,0.12);
        }
        .adv-header-inner {
          max-width: 620px;
          margin: 0 auto;
          padding: 0 24px;
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .adv-logo-link {
          display: flex;
          align-items: center;
        }
        .adv-logo-img {
          height: 30px;
          width: auto;
        }
        .adv-header-cta {
          background: linear-gradient(135deg, #7c3aed, #5b21b6);
          color: #fff;
          font-weight: 700;
          font-size: 0.78rem;
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: opacity 0.2s;
        }
        .adv-header-cta:hover {
          opacity: 0.88;
        }

        /* ---------- MAIN COLUMN ---------- */
        .adv-main {
          max-width: 620px;
          margin: 0 auto;
          padding: 0 24px 40px;
        }

        /* ---------- HERO ---------- */
        .adv-hero {
          padding: 28px 0;
          text-align: center;
        }
        .adv-hero-title {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-size: clamp(1.5rem, 5vw, 2.1rem);
          font-weight: 800;
          line-height: 1.05;
          color: #fff;
          margin: 0 auto 14px;
          max-width: 90%;
        }
        .adv-hero-sub {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #fff;
          max-width: 85%;
          margin: 0 auto;
        }

        /* ---------- REASON BLOCKS ---------- */
        .adv-reason {
          margin-bottom: 44px;
        }
        .adv-reason:last-of-type {
          margin-bottom: 0;
        }
        .adv-reason-inner {
          display: grid;
          grid-template-columns: 45fr 55fr;
          gap: 28px;
          align-items: start;
        }

        /* Image — LEFT column */
        .adv-reason-img {
          overflow: hidden;
        }
        .adv-reason-img img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        /* Text — RIGHT column */
        .adv-reason-title {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-size: 1.2rem;
          font-weight: 800;
          line-height: 1.2;
          color: #fff;
          margin-bottom: 10px;
        }
        .adv-reason-para {
          font-size: 0.88rem;
          line-height: 1.6;
          color: #fff;
          margin-bottom: 8px;
          font-weight: 400;
        }
        .adv-reason-para:last-child {
          margin-bottom: 0;
        }

        /* Quotes */
        .adv-reason-quotes {
          margin-top: 10px;
        }
        .adv-reason-quote {
          font-style: italic;
          color: #fff;
          font-size: 0.86rem;
          line-height: 1.55;
          margin-bottom: 4px;
        }

        /* ---------- CTA PANEL ---------- */
        .adv-cta-panel {
          background: #1d1235;
          border: 2px dashed rgba(139,92,246,0.35);
          padding: 28px;
          margin-top: 36px;
        }
        .adv-cta-top {
          text-align: center;
          margin-bottom: 20px;
        }
        .adv-cta-headline {
          font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
          font-size: 1.55rem;
          font-weight: 800;
          line-height: 1.1;
          color: #fff;
          margin-bottom: 6px;
        }
        .adv-cta-guarantee {
          font-size: 0.82rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 16px;
        }
        .adv-cta-divider {
          height: 1px;
          background: rgba(139,92,246,0.25);
        }

        /* Bottom 2-column */
        .adv-cta-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-top: 20px;
          align-items: start;
        }
        .adv-cta-img img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        .adv-cta-benefits {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .adv-cta-checks {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .adv-cta-check {
          font-size: 0.84rem;
          font-weight: 500;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .adv-check-icon {
          color: #8b5cf6;
          font-weight: 700;
          font-size: 0.9rem;
        }
        .adv-cta-button {
          display: block;
          text-align: center;
          background: linear-gradient(135deg, #7c3aed, #5b21b6);
          color: #fff;
          font-weight: 700;
          font-size: 0.9rem;
          padding: 12px 20px;
          border-radius: 999px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .adv-cta-button:hover {
          opacity: 0.88;
        }
        .adv-cta-micro {
          font-size: 0.72rem;
          color: #fff;
          text-align: center;
        }

        /* ---------- FOOTER ---------- */
        .adv-footer {
          max-width: 620px;
          margin: 0 auto;
          padding: 30px 24px 20px;
          text-align: center;
        }
        .adv-footer-logo {
          height: 26px;
          width: auto;
          opacity: 0.35;
        }

        /* ---------- MOBILE ---------- */
        @media (max-width: 600px) {
          .adv-main {
            padding: 0 16px 32px;
          }
          .adv-header-inner {
            padding: 0 16px;
          }
          .adv-hero {
            padding: 22px 0;
          }
          .adv-hero-title {
            max-width: 100%;
            font-size: 1.45rem;
          }
          .adv-hero-sub {
            max-width: 100%;
          }
          .adv-reason-inner {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .adv-reason {
            margin-bottom: 32px;
          }
          .adv-cta-panel {
            padding: 20px;
          }
          .adv-cta-bottom {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .adv-header-cta {
            font-size: 0.72rem;
            padding: 8px 14px;
          }
          .adv-footer {
            padding: 20px 16px 16px;
          }
        }
      `}</style>
    </div>
  );
}
