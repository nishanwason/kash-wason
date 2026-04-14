"use client";

import { InlineWidget } from "react-calendly";

interface BookingEmbedProps {
  url?: string;
}

export default function BookingEmbed({
  url = "https://calendly.com/kashwason",
}: BookingEmbedProps) {
  return (
    <div className="border border-gold/20 overflow-hidden bg-white/5">
      <InlineWidget
        url={url}
        styles={{ height: "700px", minWidth: "320px" }}
      />
    </div>
  );
}
