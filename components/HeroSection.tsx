"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    interface Orb {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      color: string;
    }

    const orbs: Orb[] = [];

    function resize() {
      width = canvas!.offsetWidth;
      height = canvas!.offsetHeight;
      canvas!.width = width * window.devicePixelRatio;
      canvas!.height = height * window.devicePixelRatio;
      ctx!.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function initOrbs() {
      orbs.length = 0;
      const colors = [
        "rgba(207,183,120,0.07)",
        "rgba(40,26,112,0.15)",
        "rgba(207,183,120,0.05)",
        "rgba(210,9,33,0.04)",
        "rgba(24,11,88,0.12)",
      ];
      for (let i = 0; i < 5; i++) {
        orbs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.2,
          r: 200 + Math.random() * 250,
          color: colors[i],
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      const bg = ctx!.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, "#0a0628");
      bg.addColorStop(0.4, "#180B58");
      bg.addColorStop(0.7, "#281A70");
      bg.addColorStop(1, "#0a0628");
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, width, height);

      for (const orb of orbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.r) orb.x = width + orb.r;
        if (orb.x > width + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = height + orb.r;
        if (orb.y > height + orb.r) orb.y = -orb.r;

        const grad = ctx!.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, "transparent");
        ctx!.fillStyle = grad;
        ctx!.fillRect(orb.x - orb.r, orb.y - orb.r, orb.r * 2, orb.r * 2);
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initOrbs();
    draw();

    const handleResize = () => { resize(); initOrbs(); };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-deep/80" />

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold/30 rounded-none px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gold">
              Airbnb Arbitrage + AI
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase text-white leading-[0.95] mb-6 tracking-tight">
            Build a Cash-Flowing
            <br />
            Airbnb Empire{" "}
            <span className="text-gold">With AI.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
            I teach entrepreneurs how to launch and scale profitable Airbnb
            arbitrage businesses — powered by AI automation for pricing,
            guest communication, and operations — without owning a single property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-gold text-navy-deep px-10 py-4 font-heading font-bold uppercase tracking-wider text-sm text-center hover:bg-gold-light transition-colors"
            >
              Book a Free Call
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/20 text-white px-10 py-4 font-heading font-bold uppercase tracking-wider text-sm text-center hover:border-gold/50 hover:text-gold transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
