import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koala Ritual – Sleep Gummies | Sov djupare. Vakna klarare.",
  description:
    "Koala Ritual Sleep Gummies hjälper dig somna lättare, lugnar ett aktivt sinne och stöttar djupare återhämtande sömn. Premiumkvalitet för vuxna.",
  keywords: "sömnbidrag, sleep gummies, sömn, koala ritual, melatonin, naturlig sömn",
  authors: [{ name: "Koala Ritual" }],
  openGraph: {
    title: "Koala Ritual – Sleep Gummies",
    description: "Sov djupare. Vakna klarare. En lugnande sömngummy för vuxna.",
    type: "website",
  },
};

import { Suspense } from 'react';
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import TiktokPixel from "@/components/TiktokPixel";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QM2DM2LTVD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QM2DM2LTVD');
            `,
          }}
        />
        {/* TikTok Pixel */}
        <script
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
      </head>
      <body>
        <CartProvider>
          <Suspense fallback={null}>
            <TiktokPixel />
          </Suspense>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
