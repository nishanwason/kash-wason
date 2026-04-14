"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-gold/30 bg-gold/5 p-8 text-center">
        <p className="text-gold font-heading font-bold text-lg uppercase tracking-wider">
          Message sent! Kash will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs font-heading font-bold text-white/70 uppercase tracking-wider mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-white/5 border border-gold/20 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-heading font-bold text-white/70 uppercase tracking-wider mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-white/5 border border-gold/20 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-xs font-heading font-bold text-white/70 uppercase tracking-wider mb-1.5">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full bg-white/5 border border-gold/20 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-heading font-bold text-white/70 uppercase tracking-wider mb-1.5">
          What are you struggling with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full bg-white/5 border border-gold/20 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gold text-navy-deep px-8 py-4 font-heading font-bold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
      >
        <Send size={18} />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-red text-sm text-center">
          Something went wrong. Please try again or call (925) 201-9811.
        </p>
      )}
    </form>
  );
}
