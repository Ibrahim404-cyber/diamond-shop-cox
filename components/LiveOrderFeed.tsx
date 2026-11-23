"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Radio } from "lucide-react";
import { INITIAL_ORDERS, randomOrder } from "@/lib/products";
import type { Order } from "@/lib/types";

export default function LiveOrderFeed() {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);

  useEffect(() => {
    const id = setInterval(() => {
      setOrders((prev) => [randomOrder(), ...prev.map((o) => ({ ...o, time: "older" }))].slice(0, 10));
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="live" className="scroll-mt-20 border-y border-white/10 bg-navy-900/60">
      <div className="container-x py-14">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-400">
              <Radio size={16} className="animate-pulse-dot" /> Live order feed
            </span>
            <h2 className="section-title mt-2">Recent successful orders</h2>
          </div>
          <span className="chip border border-white/10 bg-white/5 text-slate-300">Updates automatically</span>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {orders.slice(0, 6).map((o, i) => (
            <div
              key={o.id}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-navy-850/70 p-3.5"
              style={{ animation: `fade-up 0.4s ease-out both`, animationDelay: `${i * 40}ms` }}
            >
              <CheckCircle2 size={20} className="shrink-0 text-emerald-400" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-white">
                  <span className="text-gold-300">{o.player}</span> got {o.packageName}
                </p>
                <p className="text-xs text-slate-400">via {o.method} · {o.time}</p>
              </div>
              <span className="shrink-0 text-sm font-bold text-emerald-300">৳{o.price.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
