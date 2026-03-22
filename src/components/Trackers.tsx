'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { CookieChoices } from './CookieConsent';

export default function Trackers() {
  const [consent, setConsent] = useState<CookieChoices>({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const checkConsent = () => {
      if (typeof document === 'undefined') return;
      const match = document.cookie.match(new RegExp('(^| )koala_cookie_consent=([^;]+)'));
      if (match) {
        try {
          setConsent(JSON.parse(decodeURIComponent(match[2])));
          return;
        } catch { /* ignore */ }
      }
      setConsent({ necessary: true, analytics: false, marketing: false });
    };

    // Initial check
    checkConsent();

    // Listen to changes from CookieConsent
    window.addEventListener('cookieConsentUpdated', checkConsent);
    return () => window.removeEventListener('cookieConsentUpdated', checkConsent);
  }, []);

  // Avoid hydration mismatch by not rendering anything before mount
  if (!mounted) return null;

  return (
    <>
      {/* Google Analytics (Analys or Marketing) */}
      {(consent.analytics || consent.marketing) && (
        <>
          <Script id="ga-src" strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-QM2DM2LTVD" />
          <Script
            id="ga-inline"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-QM2DM2LTVD');
              `,
            }}
          />
        </>
      )}

      {/* TikTok Pixel (Marketing only) */}
      {consent.marketing && (
        <Script
          id="tiktok-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
                ttq.load('D700JIJC77U4GR00FPA0');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
        />
      )}
    </>
  );
}
