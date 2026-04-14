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
    <div className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="font-heading text-xl font-bold text-navy mb-3">
        {title}
      </h3>
      <p className="text-navy/60 text-sm leading-relaxed mb-5">{description}</p>
      <Link
        href={href}
        className="text-primary font-semibold text-sm hover:opacity-80 transition-opacity"
      >
        Learn More &rarr;
      </Link>
    </div>
  );
}
