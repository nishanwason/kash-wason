import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Before working with Kash, I was doing 2-3 deals a quarter. After implementing his inbound strategy, I closed 11 deals in 90 days. Complete game changer.",
    name: "Marcus Johnson",
    title: "Real Estate Agent, Miami FL",
  },
  {
    quote:
      "Kash helped me build a personal brand on Instagram that now generates 5-10 inbound leads per week. I haven't made a cold call in 6 months.",
    name: "Sarah Chen",
    title: "Realtor, Keller Williams",
  },
  {
    quote:
      "The group coaching program gave me the accountability and systems I needed to scale my team from 3 to 12 agents in one year.",
    name: "David Rodriguez",
    title: "Broker/Owner, South Florida",
  },
  {
    quote:
      "Kash doesn't just teach theory — he gives you the exact playbook he used to build his own business. That's what sets him apart.",
    name: "Jessica Park",
    title: "Real Estate Agent, Orlando FL",
  },
  {
    quote:
      "I went from zero social media presence to 15K followers and consistent closings all from inbound leads. Kash's coaching is the real deal.",
    name: "Anthony Williams",
    title: "Realtor, RE/MAX",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
            Hear It From the Agents Themselves
          </h2>
          <p className="text-navy/60 max-w-2xl mx-auto">
            These are real stories from real people who decided to bet on
            themselves and never looked back.
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
