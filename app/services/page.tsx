import type { Metadata } from "next";
import Link from "next/link";
import { User, Users, BookOpen, CheckCircle, ChevronDown } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Kash Wason's Airbnb arbitrage coaching programs — 1:1 coaching, group masterminds, and self-paced programs with AI automation.",
};

const offers = [
  {
    id: "one-on-one",
    icon: User,
    title: "1:1 Coaching",
    tagline: "Premium, Hands-On Arbitrage Launch",
    who: "Entrepreneurs ready to go all-in on building their first (or next) Airbnb arbitrage units with personalized guidance.",
    includes: [
      "Weekly private coaching calls",
      "Market analysis and deal sourcing strategy",
      "Landlord pitch scripts and lease negotiation support",
      "Full AI automation setup (pricing, messaging, reviews)",
      "Furnishing playbook and listing optimization",
    ],
    outcome:
      "Go from zero to cash-flowing Airbnb units with a proven system and AI doing the heavy lifting on operations.",
    cta: "Apply for 1:1 Coaching",
  },
  {
    id: "group",
    icon: Users,
    title: "Group Coaching & Mastermind",
    tagline: "Community-Driven Growth",
    who: "Hosts who thrive with peer accountability and want to scale their portfolio alongside other ambitious operators.",
    includes: [
      "Bi-weekly live group coaching calls",
      "Private community of Airbnb arbitrage operators",
      "Live deal reviews and market breakdowns",
      "AI tool demos and implementation sessions",
      "Recordings and resource library access",
    ],
    outcome:
      "Scale your portfolio faster with a community of operators who share deals, strategies, and AI workflows.",
    cta: "Join the Mastermind",
  },
  {
    id: "program",
    icon: BookOpen,
    title: "Self-Paced Online Program",
    tagline: "The Complete Arbitrage + AI Blueprint",
    who: "Beginners who want to learn the entire Airbnb arbitrage system on their own schedule — including AI setup.",
    includes: [
      "Complete video course: arbitrage from A to Z",
      "AI automation toolkit and setup guides",
      "Lease negotiation templates and scripts",
      "Furnishing checklists and supplier lists",
      "Listing optimization templates for max bookings",
    ],
    outcome:
      "Master every step of Airbnb arbitrage — from finding your first deal to automating operations with AI.",
    cta: "Enroll Now",
  },
];

const faqs = [
  {
    q: "Do I need to own property to do this?",
    a: "No — that's the entire point of arbitrage. You lease properties from landlords, furnish them, and list them on Airbnb. No mortgage, no down payment, no ownership required.",
  },
  {
    q: "What AI tools do you teach?",
    a: "I cover AI-powered dynamic pricing, automated guest messaging and review responses, smart cleaning coordination, market analysis tools, and custom GPT workflows for listing optimization.",
  },
  {
    q: "How much money do I need to start?",
    a: "Typically $3K-$8K for your first unit (first month rent, deposit, furnishing). I teach strategies to minimize upfront costs and start lean.",
  },
  {
    q: "Is this legal? Will landlords allow it?",
    a: "Yes — when done correctly with full landlord approval. I teach you exactly how to pitch landlords, what to put in your lease addendum, and how to stay compliant with local regulations.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most students land their first unit within 30-60 days and see their first booking within the first week of going live. AI optimization kicks in immediately to maximize your revenue.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/50 to-navy-deep" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-gold font-heading font-bold text-xs uppercase tracking-[0.2em] mb-3">
              Work With Me
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
              Choose the Path That{" "}
              <span className="text-gold">Fits Your Goals</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Whether you&apos;re launching your first Airbnb unit or scaling
              to 20+, I have a program to get you there — powered by AI.
            </p>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="bg-dark">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24 space-y-12">
          {offers.map((offer) => (
            <div
              key={offer.id}
              id={offer.id}
              className="bg-white/5 border border-gold/10 p-8 md:p-12 scroll-mt-24"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                  <offer.icon className="text-gold" size={24} />
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-black text-white uppercase tracking-wider">
                    {offer.title}
                  </h2>
                  <p className="text-gold font-heading font-semibold text-sm uppercase tracking-wider">
                    {offer.tagline}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-2">
                    Who It&apos;s For
                  </h3>
                  <p className="text-white/50 leading-relaxed">{offer.who}</p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-2">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-2">
                    {offer.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-white/50 text-sm"
                      >
                        <CheckCircle className="text-gold shrink-0 mt-0.5" size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gold/5 border border-gold/10 p-6 mb-6">
                <h3 className="font-heading font-bold text-gold uppercase tracking-wider text-sm mb-1">
                  The Outcome
                </h3>
                <p className="text-white/60">{offer.outcome}</p>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-gold text-navy-deep px-10 py-4 font-heading font-bold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors"
              >
                {offer.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-deep">
        <div className="max-w-3xl mx-auto px-4 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-12 text-center">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="bg-white/5 border border-gold/10 group"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-heading font-bold text-white uppercase tracking-wider text-sm">
                  {faq.q}
                  <ChevronDown
                    size={20}
                    className="text-gold/50 group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="px-6 pb-6 text-white/50 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
