import type { Metadata } from "next";
import Link from "next/link";
import { User, Users, BookOpen, CheckCircle, ChevronDown } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Kash Wason's coaching programs — 1:1 coaching, group masterminds, and self-paced programs for real estate agents and brokers.",
};

const offers = [
  {
    id: "one-on-one",
    icon: User,
    title: "1:1 Coaching",
    tagline: "Premium, Personalized Transformation",
    who: "Agents and brokers ready to go all-in on scaling their business with dedicated, hands-on guidance.",
    includes: [
      "Weekly private coaching calls",
      "Custom inbound lead generation strategy",
      "Personal brand audit and content roadmap",
      "Direct access to Kash via voice/text",
      "Accountability check-ins and progress tracking",
    ],
    outcome:
      "Go from inconsistent closings to a predictable pipeline of inbound leads — with a coach who's done it.",
    cta: "Apply for 1:1 Coaching",
  },
  {
    id: "group",
    icon: Users,
    title: "Group Coaching & Mastermind",
    tagline: "Community-Driven Growth",
    who: "Agents who thrive with peer accountability and want to learn alongside other high-performing professionals.",
    includes: [
      "Bi-weekly live group coaching calls",
      "Private community of driven agents",
      "Proven playbooks for content and lead gen",
      "Hot seat coaching and live Q&A sessions",
      "Recordings and resource library access",
    ],
    outcome:
      "Build your brand, close more deals, and grow alongside a community of agents who push each other to win.",
    cta: "Join the Mastermind",
  },
  {
    id: "program",
    icon: BookOpen,
    title: "Self-Paced Online Program",
    tagline: "Learn at Your Own Speed",
    who: "Agents who want to learn Kash's proven strategies on their own schedule — the perfect entry point.",
    includes: [
      "Complete video course library",
      "Step-by-step content creation framework",
      "Social media branding templates",
      "Lead generation funnel blueprints",
      "Lifetime access with future updates",
    ],
    outcome:
      "Master the fundamentals of inbound marketing and personal branding — even before you're ready for coaching.",
    cta: "Enroll Now",
  },
];

const faqs = [
  {
    q: "How do I know which program is right for me?",
    a: "If you want personalized attention and fast results, go with 1:1 coaching. If you're self-motivated and want community, the mastermind is great. If you're just getting started, the online program gives you the foundation.",
  },
  {
    q: "Do you offer refunds?",
    a: "We stand behind our coaching. If you show up, do the work, and don't see results, we'll work with you until you do. Reach out to discuss specifics.",
  },
  {
    q: "What if I'm a brand new agent?",
    a: "Even better. You'll build the right habits and brand from day one instead of having to unlearn bad ones later.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients start seeing inbound leads within 30-60 days of implementing the strategies. The timeline depends on your consistency and market.",
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
              Every agent is different. That&apos;s why I offer multiple ways to
              work together — from hands-on 1:1 coaching to self-paced learning.
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
