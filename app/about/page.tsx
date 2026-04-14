import type { Metadata } from "next";
import Link from "next/link";
import { Home, Bot, TrendingUp, Shield } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kash Wason — Airbnb arbitrage coach and AI automation expert helping entrepreneurs build cash-flowing short-term rental portfolios.",
};

const pillars = [
  {
    icon: Home,
    title: "Arbitrage-First",
    description: "No buying property. Lease units, list on Airbnb, and profit from the spread.",
  },
  {
    icon: Bot,
    title: "AI-Powered",
    description: "Automate pricing, guest messaging, reviews, and operations with cutting-edge AI tools.",
  },
  {
    icon: TrendingUp,
    title: "Scale Fast",
    description: "Systems built for growth — go from 1 unit to 10+ without burning out.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description: "Consistent support and structure to keep you taking action week after week.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/50 to-navy-deep" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-gold font-heading font-bold text-xs uppercase tracking-[0.2em] mb-3">
              About Kash
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
              I Built an Airbnb Empire{" "}
              <span className="text-gold">Without Owning Property</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-dark">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl mx-auto space-y-6 text-white/60 leading-relaxed">
            <p className="text-lg text-white/80">
              I started in real estate the traditional way — grinding, cold
              calling, chasing deals. Then I discovered Airbnb arbitrage:
              leasing properties, furnishing them, and listing them on Airbnb
              for profit. No mortgage. No down payment. Just cash flow.
            </p>
            <p>
              But the real breakthrough came when I started integrating AI into
              every part of the operation. AI-powered dynamic pricing that
              adjusts rates in real time. Automated guest messaging that handles
              check-ins, questions, and reviews without me lifting a finger.
              Smart cleaning coordination. Predictive analytics for market
              selection.
            </p>
            <p>
              That combination — arbitrage plus AI — is what took me from
              hustling with a couple units to running a scalable portfolio that
              practically manages itself. And it&apos;s the exact system I now
              teach to others.
            </p>
            <p>
              Based in Miami, I work with aspiring and active Airbnb hosts
              across the country. Whether you&apos;re launching your first unit
              or trying to scale past 10, my approach gives you the playbook
              and the technology stack to do it profitably.
            </p>
            <p className="font-heading font-bold text-gold text-lg uppercase tracking-wider">
              Arbitrage for the revenue. AI for the leverage.
            </p>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="bg-navy-deep">
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-4">
              My Coaching <span className="text-gold">Philosophy</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Four pillars that drive everything I teach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white/5 border border-gold/10 p-8 group hover:border-gold/30 transition-colors"
              >
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-5">
                  <pillar.icon className="text-gold" size={24} />
                </div>
                <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-2">
                  {pillar.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="bg-dark">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-6">
              Beyond the <span className="text-gold">Business</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-8">
              When I&apos;m not coaching or optimizing listings, you&apos;ll find me
              exploring Miami, testing new AI tools, or creating content about
              the future of short-term rentals. I believe in building businesses
              that give you freedom — not just income.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-navy-deep px-10 py-4 font-heading font-bold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors"
            >
              Ready to Start? Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
