"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ITEMS = [
  {
    q: "How fast is delivery?",
    a: "Diamonds are added to your player ID within seconds after a payment is confirmed. In rare cases it may take a few minutes during peak hours.",
  },
  {
    q: "Do I need to share my game password?",
    a: "Never. You only provide your public player ID. We do not ask for passwords or any private account credentials.",
  },
  {
    q: "Which payment options are supported?",
    a: "The demo checkout shows bKash, Nagad, Rocket, Wallet Pay, Manual Pay and Auto Payment. This build uses placeholders only — no real money moves.",
  },
  {
    q: "What if my order does not arrive?",
    a: "Keep your order ID handy and contact support. Every order is tracked in your dashboard so it can be reviewed quickly.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="container-x scroll-mt-20 py-16">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-400">Good to know</span>
          <h2 className="section-title mt-2">Frequently asked questions</h2>
        </div>
        <div className="mt-8 space-y-3">
          {ITEMS.map((item, i) => (
            <div key={item.q} className="card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold text-white"
              >
                {item.q}
                <ChevronDown size={18} className={`shrink-0 text-gold-400 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
