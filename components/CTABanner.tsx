import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  buttonText?: string;
  href?: string;
}

export default function CTABanner({
  headline = "Ready to Scale Your Real Estate Business?",
  subtext = "Book a free discovery call and find out how coaching can help you generate consistent inbound leads.",
  buttonText = "Book Your Call",
  href = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-primary">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
          {headline}
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">{subtext}</p>
        <Link
          href={href}
          className="inline-block bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
