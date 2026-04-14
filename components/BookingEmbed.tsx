"use client";

import { InlineWidget } from "react-calendly";

interface BookingEmbedProps {
  url?: string;
}

export default function BookingEmbed({
  url = "https://calendly.com/kashwason",
}: BookingEmbedProps) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white border border-gray-100">
      <InlineWidget
        url={url}
        styles={{ height: "700px", minWidth: "320px" }}
      />
    </div>
  );
}
