import type { Metadata } from "next";
import { TrendingUp } from "lucide-react";
import TestimonialCard from "@/components/TestimonialCard";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Results",
  description:
    "See the real results from agents and brokers who've worked with Kash Wason — case studies, testimonials, and before/after transformations.",
};

const caseStudies = [
  {
    name: "Marcus Johnson",
    title: "Real Estate Agent, Miami FL",
    before: "2-3 deals per quarter, relying on cold calls",
    after: "11 closings in 90 days with inbound leads only",
    quote:
      "Before working with Kash, I was doing 2-3 deals a quarter. After implementing his inbound strategy, I closed 11 deals in 90 days. Complete game changer.",
  },
  {
    name: "Sarah Chen",
    title: "Realtor, Keller Williams",
    before: "Zero social media presence, inconsistent pipeline",
    after: "5-10 inbound leads per week from Instagram",
    quote:
      "Kash helped me build a personal brand on Instagram that now generates 5-10 inbound leads per week. I haven't made a cold call in 6 months.",
  },
  {
    name: "David Rodriguez",
    title: "Broker/Owner, South Florida",
    before: "Small team of 3, manual recruiting",
    after: "Scaled to 12 agents in one year",
    quote:
      "The group coaching program gave me the accountability and systems I needed to scale my team from 3 to 12 agents in one year.",
  },
];

const moreTestimonials = [
  {
    quote:
      "Kash doesn't just teach theory — he gives you the exact playbook he used to build his own business. That's what sets him apart.",
    name: "Jessica Park",
    title: "Real Estate Agent, Orlando FL",
  },
  {
    quote:
      "I went from zero social media presence to 15K followers and consistent closings all from inbound leads. Kash's coaching is the real deal.",
    name: "Anthony Williams",
    title: "Realtor, RE/MAX",
  },
  {
    quote:
      "The ROI on coaching with Kash was insane. I made back my investment in the first month from the leads his strategies generated.",
    name: "Michelle Torres",
    title: "Real Estate Agent, Tampa FL",
  },
  {
    quote:
      "As a broker, I was skeptical about coaching. But Kash's systems helped me recruit 8 new agents in 6 months and increase team production by 40%.",
    name: "Robert Kim",
    title: "Broker, Compass",
  },
  {
    quote:
      "Kash helped me find my voice on social media. Now I have a brand that people recognize and trust. The deals follow naturally.",
    name: "Alyssa Hernandez",
    title: "Realtor, eXp Realty",
  },
  {
    quote:
      "I used to spend $3K/month on Zillow leads with terrible conversion. Now I spend $0 and close more deals than ever.",
    name: "James Mitchell",
    title: "Real Estate Agent, Fort Lauderdale FL",
  },
];

export default function ResultsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Results
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-6">
              Real Agents.{" "}
              <span className="text-primary">Real Results.</span>
            </h1>
            <p className="text-lg text-navy/70 max-w-2xl">
              Don&apos;t take my word for it — see the transformations from
              agents and brokers who put in the work.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            Client Transformations
          </h2>
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.name}
                className="bg-gray-50 rounded-2xl p-8 md:p-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 rounded-xl p-5">
                    <p className="text-sm font-semibold text-red-600 mb-1">
                      Before
                    </p>
                    <p className="text-navy/70">{cs.before}</p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="text-green-600" size={16} />
                      <p className="text-sm font-semibold text-green-600">
                        After
                      </p>
                    </div>
                    <p className="text-navy/70">{cs.after}</p>
                  </div>
                </div>
                <blockquote className="text-navy/70 italic leading-relaxed mb-4">
                  &ldquo;{cs.quote}&rdquo;
                </blockquote>
                <p className="font-semibold text-navy">
                  {cs.name}{" "}
                  <span className="font-normal text-navy/50">
                    — {cs.title}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
            More Client Wins
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
        subtext="Book a free call and let's map out your path to consistent inbound leads."
        buttonText="Book Your Free Call"
      />
    </>
  );
}
