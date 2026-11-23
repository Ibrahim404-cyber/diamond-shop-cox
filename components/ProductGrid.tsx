"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";

export default function ProductGrid() {
  const [active, setActive] = useState<string>("All");
  const visible = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="products" className="container-x scroll-mt-20 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-400">Top Up Store</span>
          <h2 className="section-title mt-2">Choose your pack</h2>
          <p className="mt-2 text-slate-400">Pick a package, enter your player ID and you&apos;re done.</p>
        </div>
        <Link href="/order" className="text-sm font-semibold text-gold-300 hover:underline">
          Need help choosing? →
        </Link>
      </div>

      <div className="mt-7 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === cat
                ? "bg-gradient-to-r from-gold-300 to-gold-500 text-navy-950 shadow-gold"
                : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {visible.map((p) => (
          <article key={p.id} className="card group relative flex flex-col overflow-hidden p-5 transition-transform duration-200 hover:-translate-y-1">
            {p.badge && (
              <span
                className="chip absolute right-3 top-3 text-navy-950"
                style={{ backgroundColor: p.accent }}
              >
                {p.badge}
              </span>
            )}
            <div
              className="grid h-14 w-14 place-items-center rounded-2xl text-2xl"
              style={{ backgroundColor: `${p.accent}22`, border: `1px solid ${p.accent}55` }}
            >
              {p.icon}
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-400">{p.category}</p>
            <h3 className="mt-0.5 font-semibold text-white">{p.name}</h3>
            <p className="mt-1 text-sm text-slate-400">{p.amount}</p>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-xl font-bold text-gold-300">৳{p.price.toLocaleString()}</span>
              {p.oldPrice && <span className="text-sm text-slate-500 line-through">৳{p.oldPrice.toLocaleString()}</span>}
            </div>
            <Link
              href={`/order?package=${p.id}`}
              className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:border-gold-400/40 group-hover:bg-gold-400/10 group-hover:text-gold-200"
            >
              Buy now <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
