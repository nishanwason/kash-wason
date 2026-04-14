import type { Metadata } from "next";
import { Open_Sans, Montserrat, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Kash Wason | Airbnb Arbitrage + AI Coaching",
    template: "%s | Kash Wason",
  },
  description:
    "Build a cash-flowing Airbnb empire without owning property. Kash Wason teaches Airbnb arbitrage powered by AI automation.",
  metadataBase: new URL("https://kash-wason.vercel.app"),
  openGraph: {
    title: "Kash Wason | Airbnb Arbitrage + AI Coaching",
    description:
      "Build a cash-flowing Airbnb empire without owning property. Airbnb arbitrage powered by AI automation.",
    url: "https://kash-wason.vercel.app",
    siteName: "Kash Wason",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
