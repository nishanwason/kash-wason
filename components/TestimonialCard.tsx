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
    <div className="bg-white/5 border border-gold/10 p-8 relative">
      {/* Gold left accent */}
      <div className="absolute left-0 top-4 bottom-4 w-1 bg-gold/40" />
      <p className="text-white/70 leading-relaxed mb-6 pl-4 italic">&ldquo;{quote}&rdquo;</p>
      <div className="pl-4">
        <p className="font-heading font-bold text-gold uppercase tracking-wider text-sm">{name}</p>
        <p className="text-xs text-white/40 uppercase tracking-wider mt-1">{title}</p>
      </div>
    </div>
  );
}
