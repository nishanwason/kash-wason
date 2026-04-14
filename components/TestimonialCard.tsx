import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
}

export default function TestimonialCard({
  quote,
  name,
  title,
}: TestimonialCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-8">
      <Quote className="text-primary/30 mb-4" size={32} />
      <p className="text-navy/70 leading-relaxed mb-6">{quote}</p>
      <div>
        <p className="font-semibold text-navy">{name}</p>
        <p className="text-sm text-navy/50">{title}</p>
      </div>
    </div>
  );
}
