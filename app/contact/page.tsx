import type { Metadata } from "next";
import { Phone, Mail } from "lucide-react";
import { InstagramIcon, YouTubeIcon, FacebookIcon } from "@/components/SocialIcons";
import BookingEmbed from "@/components/BookingEmbed";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free discovery call with Kash Wason or send a message. Let's talk about scaling your real estate business.",
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
      <section className="bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Get In Touch
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-navy leading-tight mb-6">
              Let&apos;s Talk About{" "}
              <span className="text-primary">Your Growth</span>
            </h1>
            <p className="text-lg text-navy/70 max-w-2xl">
              Book a free discovery call or send me a message. I&apos;ll
              personally review your situation and help you figure out the best
              next step.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-8 text-center">
            Schedule Your Free Call
          </h2>
          <BookingEmbed />
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">
                Other Ways to Reach Me
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy/50">Phone</p>
                    <a
                      href="tel:9252019811"
                      className="font-medium text-navy hover:text-primary transition-colors"
                    >
                      (925) 201-9811
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <p className="text-sm text-navy/50">Email</p>
                    <a
                      href="mailto:kash@kashwason.com"
                      className="font-medium text-navy hover:text-primary transition-colors"
                    >
                      kash@kashwason.com
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-navy mb-4">Follow Me</h3>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-navy/60 hover:text-primary transition-colors"
                  >
                    <s.icon size={20} />
                    <span className="text-sm">
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
