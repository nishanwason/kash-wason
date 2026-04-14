"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Flame, Target, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Flame,
    text: "Miami-Based Real Estate Coach",
  },
  {
    icon: Target,
    text: "Inbound Lead Generation Expert",
  },
  {
    icon: Rocket,
    text: "Helping Agents Build Authority & Scale",
  },
];

// Pre-computed deterministic values to avoid hydration mismatch
function seeded(seed: number) {
  return ((Math.sin(seed * 9301 + 49297) % 1) + 1) % 1;
}

const stars = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  size: seeded(i) * 2 + 1,
  top: seeded(i + 100) * 100,
  left: seeded(i + 200) * 100,
  delay: seeded(i + 300) * 5,
  duration: 2 + seeded(i + 400) * 3,
}));

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: `p${i}`,
  size: 3 + seeded(i + 500) * 4,
  left: 5 + seeded(i + 600) * 90,
  opacity: 0.15 + seeded(i + 700) * 0.3,
  delay: seeded(i + 800) * 8,
  duration: 6 + seeded(i + 900) * 6,
}));

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
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a1628 0%, #112240 25%, #0d2137 50%, #1a1a40 75%, #0a1628 100%)",
      }}
    >
      {/* Animated aurora bands */}
      <div className="absolute inset-0 aurora-wrap">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
        <div className="aurora aurora-3" />
      </div>

      {/* Mouse-follow glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-[500px] h-[500px] rounded-full blur-3xl transition-opacity duration-700 opacity-0"
        style={{
          background:
            "radial-gradient(circle, rgba(59,158,216,0.25) 0%, rgba(59,158,216,0.08) 40%, transparent 70%)",
        }}
      />

      {/* Star field */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white star-twinkle"
            style={{
              width: star.size,
              height: star.size,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Mesh gradient orbs */}
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] animate-pulse opacity-60"
        style={{ background: "radial-gradient(circle, rgba(59,158,216,0.15), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 right-0 w-[600px] h-[400px] rounded-full blur-[100px] animate-pulse opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.12), transparent 70%)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] animate-pulse opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)",
          animationDelay: "1s",
        }}
      />

      {/* Floating particles rising up */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full particle-rise"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              bottom: -10,
              background: `rgba(59,158,216,${p.opacity})`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Diagonal light sweep */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="light-sweep" />
      </div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <div ref={sectionRef} className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((item, i) => (
            <div
              key={item.text}
              className={`group relative flex flex-col items-center gap-4 py-8 transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Glow behind icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl scale-[2] group-hover:scale-[2.5] transition-transform duration-700" />
                <div className="relative w-16 h-16 rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/40 transition-all duration-500 backdrop-blur-md bg-white/5 group-hover:bg-white/10">
                  <item.icon
                    className="text-primary group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_8px_rgba(59,158,216,0.5)]"
                    size={28}
                  />
                </div>
              </div>
              <span className="text-white/90 text-base md:text-lg font-semibold text-center tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                {item.text}
              </span>
              {/* Animated underline */}
              <div className="h-[2px] w-8 rounded-full bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 group-hover:w-20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .aurora-wrap {
          filter: blur(60px);
        }
        .aurora {
          position: absolute;
          border-radius: 50%;
        }
        .aurora-1 {
          top: -40%;
          left: 10%;
          width: 60%;
          height: 200%;
          background: linear-gradient(
            180deg,
            rgba(59, 158, 216, 0.08) 0%,
            rgba(6, 182, 212, 0.06) 30%,
            transparent 60%
          );
          animation: aurora-drift 12s ease-in-out infinite alternate;
        }
        .aurora-2 {
          top: -30%;
          right: 5%;
          width: 50%;
          height: 180%;
          background: linear-gradient(
            180deg,
            rgba(99, 102, 241, 0.06) 0%,
            rgba(59, 158, 216, 0.05) 40%,
            transparent 70%
          );
          animation: aurora-drift 10s ease-in-out 2s infinite alternate-reverse;
        }
        .aurora-3 {
          top: -20%;
          left: 30%;
          width: 40%;
          height: 160%;
          background: linear-gradient(
            180deg,
            rgba(6, 182, 212, 0.05) 0%,
            rgba(59, 158, 216, 0.04) 50%,
            transparent 80%
          );
          animation: aurora-drift 14s ease-in-out 1s infinite alternate;
        }
        @keyframes aurora-drift {
          0% {
            transform: translateX(-15%) rotate(-5deg) scaleY(1);
          }
          50% {
            transform: translateX(10%) rotate(3deg) scaleY(1.1);
          }
          100% {
            transform: translateX(15%) rotate(-3deg) scaleY(0.95);
          }
        }
        .star-twinkle {
          animation: twinkle ease-in-out infinite alternate;
        }
        @keyframes twinkle {
          0% { opacity: 0.1; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.3); }
        }
        .particle-rise {
          animation: rise linear infinite;
        }
        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.7; }
          80% { opacity: 0.5; }
          100% { transform: translateY(-500px) scale(0.3); opacity: 0; }
        }
        .light-sweep {
          position: absolute;
          top: -50%;
          left: -25%;
          width: 150%;
          height: 200%;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255, 255, 255, 0.02) 45%,
            rgba(255, 255, 255, 0.04) 50%,
            rgba(255, 255, 255, 0.02) 55%,
            transparent 60%
          );
          animation: sweep 10s ease-in-out infinite;
        }
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
