'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export type CookieChoices = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [preferences, setPreferences] = useState<CookieChoices>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const getCookieConsent = () => {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(new RegExp('(^| )koala_cookie_consent=([^;]+)'));
    if (match) {
      try { return JSON.parse(decodeURIComponent(match[2])); } catch { return null; }
    }
    return null;
  };

  const setCookieConsent = (choices: CookieChoices) => {
    const domainStr = window.location.hostname.includes('koalarituals.com') ? '; domain=.koalarituals.com' : '';
    document.cookie = `koala_cookie_consent=${encodeURIComponent(JSON.stringify(choices))}${domainStr}; path=/; max-age=31536000`;
  };

  useEffect(() => {
    const saved = getCookieConsent();
    if (!saved) {
      setShowBanner(true);
    } else {
      setPreferences(saved);
    }

    const handleOpenSettings = () => {
      setShowModal(true);
      setShowBanner(false);
      const current = getCookieConsent();
      if (current) {
        setPreferences(current);
      }
    };

    window.addEventListener('openCookieSettings', handleOpenSettings);
    return () => window.removeEventListener('openCookieSettings', handleOpenSettings);
  }, []);

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleDeclineAll = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (choices: CookieChoices) => {
    setCookieConsent(choices);
    setPreferences(choices);
    setShowBanner(false);
    setShowModal(false);
    window.dispatchEvent(new Event('cookieConsentUpdated'));
  };

  const togglePreference = (key: keyof CookieChoices) => {
    if (key === 'necessary') return; // Cannot toggle necessary
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner && !showModal) return null;

  return (
    <>
      {/* Banner */}
      {showBanner && !showModal && (
        <div className="cookie-banner-overlay">
          <div className="cookie-banner">
            <div className="cookie-banner-content">
              <h3>Vi använder cookies för att göra din upplevelse bättre 🐨</h3>
              <p>
                De hjälper oss att få sidan att fungera smidigt, förstå hur den används och visa mer relevant innehåll. Du kan godkänna alla eller välja själv vad du är okej med.
                <br />
                Läs mer i vår <Link href="/cookiepolicy">Cookiepolicy</Link> och <Link href="#">Integritetspolicy</Link>.
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button className="btn-customize" onClick={() => setShowModal(true)}>Anpassa</button>
              <button className="btn-decline" onClick={handleDeclineAll}>Neka</button>
              <button className="btn-accept" onClick={handleAcceptAll}>Godkänn alla</button>
            </div>
          </div>
        </div>
      )}

      {/* Modal / Preferences */}
      {showModal && (
        <div className="cookie-modal-overlay">
          <div className="cookie-modal">
            <div className="cookie-modal-header">
              <h2>Cookie-inställningar</h2>
              <button onClick={() => {
                const saved = localStorage.getItem('koala_cookie_consent');
                if (!saved) setShowBanner(true);
                setShowModal(false);
              }} className="close-btn">✕</button>
            </div>
            <div className="cookie-modal-body">
              <p>
                När du besöker vår webbplats sparas cookies på din enhet för att förbättra navigation och analysera användargenererad data. 
                Du kan anpassa dina val nedan. Nödvändiga cookies kan inte stängas av, eftersom sidan kräver dem för att fungera.
              </p>

              <div className="preference-item">
                <div className="preference-info">
                  <h4>Nödvändiga cookies</h4>
                  <p>Krävs för att kassan och varukorgen ska fungera korrekt.</p>
                </div>
                <div className="toggle disabled">Alltid på</div>
              </div>

              <div className="preference-item">
                <div className="preference-info">
                  <h4>Analys-cookies</h4>
                  <p>Hjälper oss förstå hur besökare använder sidan, e.g. Google Analytics.</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.analytics} 
                    onChange={() => togglePreference('analytics')} 
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="preference-item">
                <div className="preference-info">
                  <h4>Marknadsföring</h4>
                  <p>Används för riktad prestandamarknadsföring och tracking (ex. TikTok Pixel).</p>
                </div>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={preferences.marketing} 
                    onChange={() => togglePreference('marketing')} 
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="policy-links">
                <Link href="/cookiepolicy">Cookiepolicy</Link> | <Link href="#">Integritetspolicy</Link>
              </div>
            </div>
            
            <div className="cookie-modal-actions">
              <button className="btn-decline" onClick={handleDeclineAll}>Neka alla</button>
              <button className="btn-save" onClick={handleSavePreferences}>Spara mina val</button>
              <button className="btn-accept" onClick={handleAcceptAll}>Godkänn alla</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .cookie-banner-overlay {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 999999;
          display: flex;
          justify-content: center;
          padding: 1rem;
          pointer-events: none;
        }
        .cookie-banner {
          background: #130c24;
          border: 1px solid #3b2559;
          border-radius: 16px;
          padding: 1.5rem;
          width: 100%;
          max-width: 900px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          pointer-events: auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .cookie-banner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
        .cookie-banner-content {
          color: #f3eeff;
          flex: 1;
        }
        .cookie-banner-content h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.25rem;
          font-weight: 700;
        }
        .cookie-banner-content p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
          opacity: 0.9;
        }
        .cookie-banner-content a {
          color: #a78bfa;
          text-decoration: underline;
        }
        .cookie-banner-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 250px;
        }
        @media (min-width: 480px) {
          .cookie-banner-actions {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
        .cookie-banner-actions button {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          flex: 1;
        }
        
        .btn-customize {
          background: transparent;
          color: #a78bfa;
          border: 1px solid #3b2559 !important;
        }
        .btn-customize:hover {
          background: rgba(167, 139, 250, 0.1);
        }
        .btn-decline {
          background: #2a1c40;
          color: #e5e7eb;
        }
        .btn-decline:hover {
          background: #3b2559;
        }
        .btn-accept {
          background: #7c3aed;
          color: white;
          width: 100%;
        }
        @media (min-width: 480px) {
          .btn-accept {
            min-width: 100%;
          }
        }
        .btn-accept:hover {
          background: #6d28d9;
        }

        /* Modal Styles */
        .cookie-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 1000000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        .cookie-modal {
          background: #130c24;
          border: 1px solid #3b2559;
          border-radius: 16px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }
        .cookie-modal-header {
          padding: 1.5rem;
          border-bottom: 1px solid #3b2559;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .cookie-modal-header h2 {
          margin: 0;
          color: white;
          font-size: 1.25rem;
        }
        .close-btn {
          background: none;
          border: none;
          color: #a78bfa;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .cookie-modal-body {
          padding: 1.5rem;
          color: #e5e7eb;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .preference-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 0;
          border-bottom: 1px solid rgba(59, 37, 89, 0.5);
        }
        .preference-info h4 {
          margin: 0 0 0.25rem 0;
          color: white;
          font-size: 1rem;
        }
        .preference-info p {
          margin: 0;
          color: #a78bfa;
          font-size: 0.85rem;
          max-width: 80%;
        }
        .toggle.disabled {
          color: #7c3aed;
          font-weight: bold;
          font-size: 0.9rem;
        }
        
        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
        }
        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #3b2559;
          transition: .4s;
          border-radius: 24px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: .4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: #7c3aed;
        }
        input:checked + .slider:before {
          transform: translateX(20px);
        }

        .policy-links {
          margin-top: 1.5rem;
          text-align: center;
        }
        .policy-links a {
          color: #a78bfa;
          text-decoration: underline;
          margin: 0 0.5rem;
        }
        .cookie-modal-actions {
          padding: 1.5rem;
          background: #0d0818;
          border-top: 1px solid #3b2559;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }
        @media (min-width: 480px) {
          .cookie-modal-actions {
            flex-direction: row;
            justify-content: flex-end;
          }
          .cookie-modal-actions .btn-accept {
            min-width: auto;
          }
        }
        .btn-save {
          background: transparent;
          color: #a78bfa;
          border: 1px solid #7c3aed !important;
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .btn-save:hover {
          background: rgba(124, 58, 237, 0.1);
        }
      `}</style>
    </>
  );
}
