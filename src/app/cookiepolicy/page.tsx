'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
  return (
    <div style={{ background: '#0d0818', minHeight: '100vh', color: '#e5e7eb', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '100px 20px 80px 20px' }}>
        <Link href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 600, display: 'inline-block', marginBottom: '2rem' }}>
          &larr; Tillbaka till startsidan
        </Link>
        
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>Cookiepolicy</h1>
        <p style={{ color: '#a78bfa', marginBottom: '3rem' }}>Senast uppdaterad: Våren 2026</p>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem' }}>1. Vad är cookies?</h2>
          <p>
            Cookies är små textfiler som sparas på din dator, surfplatta eller mobiltelefon när du besöker vår webbplats. 
            De används bland annat för att sidans funktioner ska fungera, för statistik och för marknadsföring enligt dina önskemål.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem' }}>2. Hur vi använder cookies</h2>
          <p>
            Vi på Koala Ritual använder cookies för att:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
            <li>Se till att din kundkorg (kassa) fungerar (Nödvändiga cookies)</li>
            <li>Förstå hur våra besökare hittar till oss och använder sidan (Analys-cookies)</li>
            <li>Erbjuda relevanta kampanjer och annonser via våra partners som TikTok (Marknadsföring)</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem' }}>3. Tredjepartscookies</h2>
          <p>
            När du godkänner Analys eller Marknadsföring kan vi komma att dela anonymiserad data med tredje part, 
            exempelvis Google (Analytics) eller TikTok (Pixel). Detta gör vi för att förstå försäljning och förbättra vårt utbud.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem' }}>4. Ändra dina inställningar</h2>
          <p>
            Du har alltid full kontroll över vilka cookies (utöver de systemkritiska) som du tillåter. 
            Du kan när som helst ta tillbaka ditt medgivande eller ändra dina alternativ genom att klicka på 
            <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openCookieSettings')); }} style={{ color: '#a78bfa', textDecoration: 'underline', margin: '0 0.4rem' }}>
              Cookie-inställningar
            </a>
            längst ner på sidan.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem', lineHeight: '1.7' }}>
          <h2 style={{ fontSize: '1.5rem', color: 'white', marginBottom: '1rem' }}>5. Kontakta oss</h2>
          <p>
            Vid frågor om hur vi hanterar din integritet eller cookies är du varmt välkommen att höra av dig till oss på hej@koalarituals.com.
          </p>
        </section>

        <hr style={{ borderColor: 'rgba(139,92,246,0.2)', margin: '4rem 0 2rem' }} />
        <Link href="/" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 2rem', background: '#7c3aed', color: 'white', borderRadius: '100px', fontWeight: 700, textDecoration: 'none' }}>
          Gå tillbaka
        </Link>
      </div>
      <Footer />
    </div>
  );
}
