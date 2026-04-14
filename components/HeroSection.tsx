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
        "rgba(59,158,216,0.12)",
        "rgba(6,182,212,0.10)",
        "rgba(99,102,241,0.08)",
        "rgba(59,158,216,0.06)",
        "rgba(147,197,253,0.10)",
      ];
      for (let i = 0; i < 5; i++) {
        orbs.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.3,
          r: 150 + Math.random() * 200,
          color: colors[i],
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // Background gradient
      const bg = ctx!.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, "#f0f9ff");
      bg.addColorStop(0.3, "#f8fafc");
      bg.addColorStop(0.6, "#eff6ff");
      bg.addColorStop(1, "#f0f4ff");
      ctx!.fillStyle = bg;
      ctx!.fillRect(0, 0, width, height);

      // Orbs
      for (const orb of orbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;
        if (orb.x < -orb.r) orb.x = width + orb.r;
        if (orb.x > width + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = height + orb.r;
        if (orb.y > height + orb.r) orb.y = -orb.r;

        const grad = ctx!.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.r
        );
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

    window.addEventListener("resize", () => {
      resize();
      initOrbs();
    });

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Mesh lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1E3A5F" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Decorative shapes */}
      <div className="absolute top-20 right-[10%] w-72 h-72 border border-primary/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-16 right-[15%] w-48 h-48 border border-indigo-200/20 rounded-full animate-spin-slow-reverse" />
      <div className="absolute top-1/3 right-[5%] w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-[25%] w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse [animation-delay:1s]" />
      <div className="absolute top-[15%] right-[30%] w-2 h-2 bg-indigo-400/20 rounded-full animate-pulse [animation-delay:2s]" />

      {/* Gradient accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0" />

      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-primary/15 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-navy/70">Real Estate Coaching, Reimagined</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-navy leading-[1.1] mb-6">
            Stop Chasing Leads.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              Start Attracting Them.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-navy/60 mb-10 max-w-2xl leading-relaxed">
            I help real estate agents and brokers build authority online,
            generate consistent inbound leads, and scale their business — without
            the cold calls and door knocking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group relative bg-primary text-white px-8 py-4 rounded-xl font-semibold text-center overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Book a Free Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-navy/15 text-navy px-8 py-4 rounded-xl font-semibold text-center hover:border-primary/30 hover:bg-white/50 backdrop-blur-sm transition-all hover:-translate-y-0.5"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
