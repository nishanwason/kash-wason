"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Home, Bot, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Home,
    text: "Airbnb Arbitrage Expert",
  },
  {
    icon: Bot,
    text: "AI-Powered Automation Systems",
  },
  {
    icon: TrendingUp,
    text: "Helping Hosts Scale Without Owning Property",
  },
];

function useMouseGlow() {
  const ref = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: MouseEvent) => {
    if (!ref.current || !glowRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glowRef.current.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
    glowRef.current.style.opacity = "1";
  }, []);

  const handleLeave = useCallback(() => {
    if (glowRef.current) glowRef.current.style.opacity = "0";
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [handleMove, handleLeave]);

  return { ref, glowRef };
}

export default function SocialProofStrip() {
  const { ref, glowRef } = useMouseGlow();
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={(el: HTMLDivElement | null) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (sectionRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className="relative overflow-hidden bg-dark border-y border-gold/10"
    >
      {/* Mouse-follow glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full blur-3xl transition-opacity duration-700 opacity-0"
        style={{
          background: "radial-gradient(circle, rgba(207,183,120,0.15) 0%, transparent 70%)",
        }}
      />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item, i) => (
            <div
              key={item.text}
              className={`group relative flex flex-col items-center gap-4 py-6 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl scale-[2] group-hover:scale-[2.5] transition-transform duration-700" />
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center border border-gold/20 group-hover:border-gold/50 transition-all duration-500 bg-gold/5">
                  <item.icon className="text-gold group-hover:scale-110 transition-transform duration-300" size={28} />
                </div>
              </div>
              <span className="text-white/80 text-sm md:text-base font-heading font-bold uppercase tracking-wider text-center">
                {item.text}
              </span>
              <div className="h-[2px] w-8 rounded-full bg-gold/30 group-hover:w-16 group-hover:bg-gold/60 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
