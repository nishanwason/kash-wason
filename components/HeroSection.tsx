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
        "rgba(207,183,120,0.04)",
        "rgba(207,183,120,0.03)",
        "rgba(255,255,255,0.02)",
        "rgba(207,183,120,0.02)",
        "rgba(255,255,255,0.01)",
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

      // Pure black base
      ctx!.fillStyle = "#000000";
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
    <section className="relative overflow-hidden min-h-screen flex items-end justify-center pb-16 md:pb-24">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center">
        {/* Big centered name — single line */}
        <h2 className="font-heading text-[2.8rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7rem] font-black uppercase text-white tracking-[0.2em] mb-8 leading-none whitespace-nowrap">
          Kash Wason
        </h2>

        {/* Thin gold divider */}
        <div className="w-24 h-px bg-gold/50 mb-8" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-gold/20 px-5 py-2 mb-8">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="text-xs font-heading font-semibold uppercase tracking-[0.25em] text-gold">
            Airbnb Arbitrage + AI
          </span>
        </div>

        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white leading-[0.95] mb-6 tracking-tight max-w-4xl">
          Build a Cash-Flowing Airbnb Empire{" "}
          <span className="text-gold">With AI.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl leading-relaxed">
          I teach entrepreneurs how to launch and scale profitable Airbnb
          arbitrage businesses — powered by AI automation for pricing,
          guest communication, and operations — without owning a single property.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-gold text-black px-10 py-4 font-heading font-bold uppercase tracking-wider text-sm text-center hover:bg-gold-light transition-colors"
          >
            Book a Free Call
          </Link>
          <Link
            href="/services"
            className="border border-white/15 text-white px-10 py-4 font-heading font-bold uppercase tracking-wider text-sm text-center hover:border-gold/40 hover:text-gold transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  );
}
