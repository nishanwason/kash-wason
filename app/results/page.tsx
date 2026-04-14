import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Results",
  description:
    "See real results from entrepreneurs who launched profitable Airbnb arbitrage businesses with Kash Wason's AI-powered coaching.",
};

const caseStudies = [
  {
    name: "Marcus Johnson",
    title: "Airbnb Host, Miami FL",
    before: "Working a 9-to-5, zero short-term rental experience",
    after: "3 arbitrage units generating $6K/mo profit in 60 days",
    quote:
      "Kash showed me how to land my first 3 arbitrage units in 30 days. The AI pricing tool alone paid for the entire coaching program in week one.",
  },
  {
    name: "Sarah Chen",
    title: "Airbnb Entrepreneur, Austin TX",
    before: "Managing 2 units manually, burned out from guest messages",
    after: "5 units running on AI autopilot, 90% less hands-on time",
    quote:
      "I was terrified of managing guests. Kash set me up with AI-automated messaging and now I barely touch my phone. Five units running on autopilot.",
  },
  {
    name: "David Rodriguez",
    title: "Short-Term Rental Operator, South Florida",
    before: "1 Airbnb unit, no systems, doing everything manually",
    after: "8 units in 6 months with full AI operations stack",
    quote:
      "Went from zero to 8 arbitrage units in 6 months. The AI systems Kash teaches for dynamic pricing and guest screening are next level.",
  },
];

const moreTestimonials = [
  {
    quote:
      "Kash doesn't teach outdated Airbnb strategies. The AI integration approach is what separates his coaching from everyone else in this space.",
    name: "Jessica Park",
    title: "Airbnb Host, Orlando FL",
  },
  {
    quote:
      "I quit my 9-to-5 after month four. My arbitrage portfolio now generates more than my old salary, and AI handles 90% of the operations.",
    name: "Anthony Williams",
    title: "Full-Time Airbnb Operator, Dallas TX",
  },
  {
    quote:
      "The AI guest messaging setup alone saved me 15+ hours a week. Now I spend my time finding new deals instead of answering the same questions.",
    name: "Michelle Torres",
    title: "Airbnb Host, Tampa FL",
  },
  {
    quote:
      "I was spending hours adjusting prices manually. Kash's AI pricing system optimizes rates 24/7 and my revenue jumped 35% the first month.",
    name: "Robert Kim",
    title: "STR Operator, Denver CO",
  },
  {
    quote:
      "Kash taught me how to pitch landlords so well that I got approved on my first 4 attempts. The lease negotiation scripts are gold.",
    name: "Alyssa Hernandez",
    title: "Airbnb Entrepreneur, Phoenix AZ",
  },
  {
    quote:
      "I went from Googling 'what is Airbnb arbitrage' to running 6 profitable units in 5 months. The AI automation makes it actually scalable.",
    name: "James Mitchell",
    title: "Airbnb Host, Fort Lauderdale FL",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-gold font-heading font-bold text-xs uppercase tracking-[0.2em] mb-3">
              Results
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
              Real Hosts.{" "}
              <span className="text-gold">Real Revenue.</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Don&apos;t take my word for it — see the transformations from
              entrepreneurs who launched profitable Airbnb businesses with
              arbitrage and AI.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-dark-card">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-12 text-center">
            Client <span className="text-gold">Transformations</span>
          </h2>
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.name}
                className="bg-white/5 border border-gold/10 p-8 md:p-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red/10 border border-red/20 p-5">
                    <p className="text-xs font-heading font-bold text-red uppercase tracking-wider mb-1">
                      Before
                    </p>
                    <p className="text-white/60">{cs.before}</p>
                  </div>
                  <div className="bg-gold/5 border border-gold/20 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="text-gold" size={16} />
                      <p className="text-xs font-heading font-bold text-gold uppercase tracking-wider">
                        After
                      </p>
                    </div>
                    <p className="text-white/60">{cs.after}</p>
                  </div>
                </div>
                <blockquote className="text-white/60 italic leading-relaxed mb-4 border-l-2 border-gold/30 pl-4">
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>
                <p className="font-heading font-bold text-gold uppercase tracking-wider text-sm">
                  {cs.name}{" "}
                  <span className="font-normal text-white/40">
                    — {cs.title}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="bg-black">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-12 text-center">
            More Client <span className="text-gold">Wins</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moreTestimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want Results Like These?"
        subtext="Book a free call and let's map out your path to a profitable AI-powered Airbnb portfolio."
        buttonText="Book Your Free Call"
      />
    </>
  );
}
