import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className="bg-dark-card border border-white/5 p-8 hover:border-gold/20 transition-all duration-300 group">
      <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-5">
        <Icon className="text-gold" size={24} />
      </div>
      <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wider mb-3">
        {title}
      </h3>
      <p className="text-white/40 text-sm leading-relaxed mb-5">{description}</p>
      <Link
        href={href}
        className="text-gold font-heading font-bold text-xs uppercase tracking-wider hover:text-gold-light transition-colors"
      >
        Learn More &rarr;
      </Link>
    </div>
  );
}
