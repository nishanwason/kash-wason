import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  href?: string;
}

export default function CTABanner({
  headline = "Ready to Launch Your Airbnb Arbitrage Business?",
  subtext = "Book a free discovery call and find out how AI-powered arbitrage can build you a cash-flowing portfolio — without owning property.",
  buttonText = "Book Your Call",
  href = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-4">
          {headline}
        </h2>
        <p className="text-white/50 max-w-2xl mx-auto mb-8">{subtext}</p>
        <Link
          href={href}
          className="inline-block bg-gold text-navy-deep px-10 py-4 font-heading font-bold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
