import type { Metadata } from "next";
import Link from "next/link";
import { Target, Zap, TrendingUp, Shield } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Kash Wason — Miami-based real estate coach helping agents and brokers build authority and generate inbound leads.",
};

const pillars = [
  {
    icon: Target,
    title: "Inbound-First",
    description: "Stop chasing. Build a brand that makes clients come to you.",
  },
  {
    icon: Zap,
    title: "No Fluff",
    description: "Every strategy is battle-tested. No theory — only what works.",
  },
  {
    icon: TrendingUp,
    title: "Authority Building",
    description: "Position yourself as the go-to agent in your market through content and social proof.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description: "Consistent support and structure to keep you executing week after week.",
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
              From Agent to Coach —{" "}
              <span className="text-gold">Building What I Wish I Had</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-dark">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl mx-auto space-y-6 text-white/60 leading-relaxed">
            <p className="text-lg text-white/80">
              I got into real estate the same way most people do — hungry,
              hustling, and making a hundred cold calls a day hoping someone
              would pick up. I built a business, but it was exhausting and
              unsustainable.
            </p>
            <p>
              Everything changed when I shifted my focus to building a personal
              brand online. Instead of chasing leads, I started creating content,
              showing up on social media, and positioning myself as an authority
              in my market. Within months, the calls started coming to me.
            </p>
            <p>
              That transformation is what drives my coaching today. I realized
              that what I&apos;d figured out through years of trial and error
              could be packaged into a repeatable system — one that any agent
              could follow to go from cold outreach to consistent inbound leads.
            </p>
            <p>
              Now, based in Miami, I work with agents and brokers across the
              country to help them build the kind of business I wish I&apos;d had
              from day one: one where clients come to you, where your brand does
              the selling, and where you&apos;re in control of your pipeline.
            </p>
            <p className="font-heading font-bold text-gold text-lg uppercase tracking-wider">
              No fluff. No gimmicks. Just proven strategies that work.
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
              When I&apos;m not coaching, you&apos;ll find me exploring Miami&apos;s food
              scene, at the gym, or creating content. I believe your personal
              brand should be an authentic extension of who you are — and I
              practice what I preach.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gold text-navy-deep px-10 py-4 font-heading font-bold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors"
            >
              Ready to Scale? Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
