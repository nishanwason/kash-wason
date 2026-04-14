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
      "Personalized coaching to help you build your brand, generate inbound leads, and close more deals consistently.",
    href: "/services#one-on-one",
  },
  {
    icon: Users,
    title: "Group Coaching",
    description:
      "Join a community of driven agents for peer accountability, live coaching calls, and proven growth strategies.",
    href: "/services#group",
  },
  {
    icon: BookOpen,
    title: "Online Program",
    description:
      "A self-paced program to master inbound lead generation, social media branding, and client acquisition.",
    href: "/services#program",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />

      {/* About Teaser */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              Meet Kash Wason
            </h2>
            <p className="text-navy/60 leading-relaxed mb-6">
              Miami-based real estate coach with over a decade of experience
              helping agents ditch cold outreach and build businesses that
              attract clients on autopilot. Kash&apos;s no-fluff, results-driven
              approach has helped hundreds of agents transform their careers.
            </p>
            <Link
              href="/about"
              className="text-primary font-semibold hover:opacity-80 transition-opacity"
            >
              Read My Story &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
              How I Can Help You
            </h2>
            <p className="text-navy/60 max-w-2xl mx-auto">
              Whether you&apos;re a new agent or a seasoned broker, I have a
              program designed to help you scale.
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
