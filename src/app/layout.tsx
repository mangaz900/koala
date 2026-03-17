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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
