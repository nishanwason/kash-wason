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
    description:
      "Stop chasing. Build a brand that makes clients come to you.",
  },
  {
    icon: Zap,
    title: "No Fluff",
    description:
      "Every strategy is battle-tested. No theory — only what works.",
  },
  {
    icon: TrendingUp,
    title: "Authority Building",
    description:
      "Position yourself as the go-to agent in your market through content and social proof.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description:
      "Consistent support and structure to keep you executing week after week.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              About Kash
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-6">
              From Agent to Coach —{" "}
              <span className="text-primary">Building What I Wish I Had</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl mx-auto space-y-6 text-navy/70 leading-relaxed">
            <p className="text-lg">
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
            <p className="font-semibold text-navy text-lg">
              No fluff. No gimmicks. Just proven strategies that work.
            </p>
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              My Coaching Philosophy
            </h2>
            <p className="text-navy/60 max-w-2xl mx-auto">
              Four pillars that drive everything I teach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                  <pillar.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-bold text-navy mb-2">
                  {pillar.title}
                </h3>
                <p className="text-navy/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
              Beyond the Business
            </h2>
            <p className="text-navy/60 leading-relaxed mb-8">
              When I&apos;m not coaching, you&apos;ll find me exploring Miami&apos;s food
              scene, at the gym, or creating content. I believe your personal
              brand should be an authentic extension of who you are — and I
              practice what I preach.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
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
