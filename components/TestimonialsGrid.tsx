import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Kash showed me how to land my first 3 arbitrage units in 30 days. The AI pricing tool alone paid for the entire coaching program in week one.",
    name: "Marcus Johnson",
    title: "Airbnb Host, Miami FL",
  },
  {
    quote:
      "I was terrified of managing guests. Kash set me up with AI-automated messaging and now I barely touch my phone. Five units running on autopilot.",
    name: "Sarah Chen",
    title: "Airbnb Entrepreneur, Austin TX",
  },
  {
    quote:
      "Went from zero to 8 arbitrage units in 6 months. The AI systems Kash teaches for dynamic pricing and guest screening are next level.",
    name: "David Rodriguez",
    title: "Short-Term Rental Operator, South Florida",
  },
  {
    quote:
      "Kash doesn't teach outdated Airbnb strategies. The AI integration approach is what separates his coaching from everyone else in this space.",
    name: "Jessica Park",
    title: "Airbnb Host, Orlando FL",
  },
  {
    quote:
      "I quit my 9-to-5 after month four. My arbitrage portfolio now generates more than my old salary, and AI handles 90% of the operations.",
    name: "Anthony Williams",
    title: "Full-Time Airbnb Operator, Dallas TX",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase tracking-wider mb-4">
            Hear It From the{" "}
            <span className="text-gold">Hosts Themselves</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Real stories from real entrepreneurs who launched profitable Airbnb
            businesses using arbitrage and AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
