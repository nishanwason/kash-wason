import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Kash Wason | Real Estate Coaching",
    template: "%s | Kash Wason",
  },
  description:
    "Stop chasing leads. Start attracting them. Kash Wason helps real estate agents and brokers scale their business through proven coaching programs.",
  metadataBase: new URL("https://kashwason.com"),
  openGraph: {
    title: "Kash Wason | Real Estate Coaching",
    description:
      "Stop chasing leads. Start attracting them. Kash Wason helps real estate agents and brokers scale their business.",
    url: "https://kashwason.com",
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
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
