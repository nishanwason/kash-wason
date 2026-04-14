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
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <p className="text-green-800 font-semibold text-lg">
          Message sent! Kash will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          What are you struggling with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-60"
      >
        <Send size={18} />
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please try again or call (925) 201-9811.
        </p>
      )}
    </form>
  );
}
