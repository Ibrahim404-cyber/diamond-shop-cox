"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function NewsletterForm() {
  const [joined, setJoined] = useState(false);

  return (
    <form
      className="mt-3 flex gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        setJoined(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="you@example.com"
        aria-label="Email address"
        className="input !py-2 text-sm"
      />
      <button type="submit" className="btn-gold !px-4 !py-2 text-sm">
        {joined ? <Check size={16} /> : "Join"}
      </button>
    </form>
  );
}
