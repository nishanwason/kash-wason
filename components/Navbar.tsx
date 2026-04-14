"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="font-heading text-xl font-bold text-navy">
          KASH WASON
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 hover:text-navy transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-navy/70 hover:text-navy font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity"
            onClick={() => setOpen(false)}
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
