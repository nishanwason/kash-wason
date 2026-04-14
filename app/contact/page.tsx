import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { InstagramIcon, YouTubeIcon, FacebookIcon } from "@/components/SocialIcons";
import BookingEmbed from "@/components/BookingEmbed";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free discovery call with Kash Wason. Let's talk about launching your AI-powered Airbnb arbitrage business.",
};

const socials = [
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: "https://instagram.com/kashwason",
    handle: "@kashwason",
  },
  {
    icon: YouTubeIcon,
    label: "YouTube",
    href: "https://youtube.com/@kashwason",
    handle: "@kashwason",
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: "https://facebook.com/kashwason",
    handle: "Kash Wason",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/50 to-navy-deep" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-gold font-heading font-bold text-xs uppercase tracking-[0.2em] mb-3">
              Get In Touch
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
              Let&apos;s Build Your{" "}
              <span className="text-gold">Airbnb Empire</span>
            </h1>
            <p className="text-lg text-white/60 max-w-2xl">
              Book a free discovery call or send me a message. I&apos;ll
              personally review your situation and help you figure out the best
              way to get started with Airbnb arbitrage and AI.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="bg-dark">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-8 text-center">
            Schedule Your <span className="text-gold">Free Call</span>
          </h2>
          <BookingEmbed />
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-navy-deep">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-black text-white uppercase tracking-wider mb-6">
                Send a <span className="text-gold">Message</span>
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 className="font-display text-2xl font-black text-white uppercase tracking-wider mb-6">
                Other Ways to <span className="text-gold">Reach Me</span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center">
                    <Phone className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-heading uppercase tracking-wider">Phone</p>
                    <a
                      href="tel:9252019811"
                      className="font-medium text-white hover:text-gold transition-colors"
                    >
                      (925) 201-9811
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center">
                    <Mail className="text-gold" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-heading uppercase tracking-wider">Email</p>
                    <a
                      href="mailto:kash@kashwason.com"
                      className="font-medium text-white hover:text-gold transition-colors"
                    >
                      kash@kashwason.com
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-4">
                Follow Me
              </h3>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gold/60 hover:text-gold transition-colors"
                  >
                    <s.icon size={20} />
                    <span className="text-sm font-heading uppercase tracking-wider">
                      {s.label} — {s.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
