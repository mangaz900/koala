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
      </head>
      <body>
        <CartProvider>
          <TiktokPixel />
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
