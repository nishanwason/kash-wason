import Link from "next/link";
import { InstagramIcon, YouTubeIcon, FacebookIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t-4 border-gold">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-gold tracking-widest uppercase mb-3">
              Kash Wason
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Helping entrepreneurs launch and scale profitable Airbnb arbitrage
              businesses powered by AI automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-4">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/results", label: "Results" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gold/70 hover:text-gold text-sm transition-colors font-heading uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-sm mb-4">
              Connect
            </h4>
            <p className="text-white/50 text-sm mb-4">
              <a href="tel:9252019811" className="hover:text-gold transition-colors">
                (925) 201-9811
              </a>
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/kashwason"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="https://youtube.com/@kashwason"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/60 hover:text-gold transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon size={20} />
              </a>
              <a
                href="https://facebook.com/kashwason"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-10 pt-6 text-center text-white/30 text-sm font-heading uppercase tracking-wider">
          &copy; 2026 Kash Wason. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
