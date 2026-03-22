'use client';

export default function Footer() {
  return (
    <footer style={{
      background: '#0a0615',
      borderTop: '1px solid rgba(139,92,246,0.12)',
      padding: '3rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <img 
                src="/images/logo-koala.svg" 
                alt="Koala Ritual" 
                style={{ height: '32px', width: 'auto' }} 
              />
            </div>
            <p style={{ color: '#6b5f8a', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '260px' }}>
              Premiumsömnstöd för vuxna som tar sin sömn och återhämtning på allvar.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 style={{ color: '#f0eaff', fontSize: '0.875rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Shop
            </h4>
            {['Sleep Gummies', 'Bundle'].map((item) => (
              <a key={item} href="#" style={{ display: 'block', color: '#6b5f8a', fontSize: '0.875rem', marginBottom: '0.5rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#a899c4')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6b5f8a')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Info */}
          <div>
            <h4 style={{ color: '#f0eaff', fontSize: '0.875rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Information
            </h4>
            {['Om oss', 'Ingredienser', 'Leverans & retur', 'FAQ'].map((item) => (
              <a key={item} href="#" style={{ display: 'block', color: '#6b5f8a', fontSize: '0.875rem', marginBottom: '0.5rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#a899c4')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#6b5f8a')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#f0eaff', fontSize: '0.875rem', fontWeight: 700, marginBottom: '1rem', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Kontakt
            </h4>
            <p style={{ color: '#6b5f8a', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
              hej@koalaritual.com
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              {['Instagram', 'TikTok'].map((s) => (
                <a key={s} href="#" style={{
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  color: '#a899c4',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  padding: '0.4rem 0.75rem',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.5)';
                    (e.currentTarget as HTMLElement).style.color = '#c4b5fd';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(139,92,246,0.2)';
                    (e.currentTarget as HTMLElement).style.color = '#a899c4';
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(139,92,246,0.1)',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{ color: '#4b3f6a', fontSize: '0.8rem', margin: 0 }}>
            © 2025 Koala Ritual. Alla rättigheter förbehållna.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {/* Standard Links */}
            <a href="#" style={{ color: '#4b3f6a', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#6b5f8a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4b3f6a')}>
              Integritetspolicy
            </a>
            <a href="#" style={{ color: '#4b3f6a', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#6b5f8a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4b3f6a')}>
              Villkor
            </a>
            <a href="/cookiepolicy" style={{ color: '#4b3f6a', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#6b5f8a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4b3f6a')}>
              Cookiepolicy
            </a>
            {/* Settings Trigger */}
            <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('openCookieSettings')); }} 
               style={{ color: '#4b3f6a', fontSize: '0.8rem', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#6b5f8a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#4b3f6a')}>
              Cookie-inställningar
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
