"use client";

import { Check } from "lucide-react";
import { PAYMENT_METHODS } from "@/lib/products";

type Props = {
  value: string;
  onChange: (id: string) => void;
};

export default function PaymentMethods({ value, onChange }: Props) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-white">Payment method</p>
      <p className="mb-4 text-xs text-slate-400">Demo checkout — no real transaction is made.</p>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {PAYMENT_METHODS.map((m) => {
          const selected = value === m.id;
          return (
            <button
              type="button"
              key={m.id}
              onClick={() => onChange(m.id)}
              className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                selected
                  ? "border-gold-400/60 bg-gold-400/10"
                  : "border-white/10 bg-navy-900/60 hover:bg-white/5"
              }`}
            >
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-bold text-white"
                style={{ backgroundColor: m.color }}
              >
                {m.icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-white">{m.name}</span>
                <span className="block text-xs text-slate-400">{m.note}</span>
              </span>
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                  selected ? "border-gold-400 bg-gold-400 text-navy-950" : "border-white/20"
                }`}
              >
                {selected && <Check size={13} strokeWidth={3} />}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
