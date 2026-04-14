import Link from "next/link";
import { User, Users, BookOpen } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import ServiceCard from "@/components/ServiceCard";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import CTABanner from "@/components/CTABanner";

const services = [
  {
    icon: User,
    title: "1:1 Coaching",
    description:
      "Personalized coaching to help you find properties, negotiate leases, and launch your first AI-automated Airbnb units.",
    href: "/services#one-on-one",
  },
  {
    icon: Users,
    title: "Group Coaching",
    description:
      "Join a community of ambitious hosts for peer accountability, deal reviews, and live AI setup walkthroughs.",
    href: "/services#group",
  },
  {
    icon: BookOpen,
    title: "Online Program",
    description:
      "A self-paced program covering Airbnb arbitrage from A to Z — plus the exact AI tools and automations I use daily.",
    href: "/services#program",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />

      {/* About Teaser */}
      <section className="bg-black">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-4">
              Meet <span className="text-gold">Kash Wason</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              I built a portfolio of cash-flowing Airbnb units without owning a
              single property — then I layered in AI to automate pricing, guest
              messaging, cleaning schedules, and reviews. Now I teach others how
              to do the same.
            </p>
            <Link
              href="/about"
              className="text-gold font-heading font-bold text-xs uppercase tracking-wider hover:text-gold-light transition-colors"
            >
              Read My Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-dark-card">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-4">
              How I Can <span className="text-gold">Help You</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Whether you&apos;re launching your first unit or scaling to 20+,
              I have a program designed to get you there faster with AI.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsGrid />
      <CTABanner />
    </>
  );
}
