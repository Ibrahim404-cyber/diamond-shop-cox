"use client";

import Link from "next/link";
import { useState } from "react";
import { Gem, Menu, UserRound, X, Zap } from "lucide-react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Top Up", href: "/#products" },
  { label: "Live Orders", href: "/#live" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "FAQ", href: "/#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/85 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 text-navy-950 shadow-gold transition-transform group-hover:rotate-6">
            <Gem size={20} strokeWidth={2.4} />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-white">
            Diamond <span className="text-gold-400">Shop Cox</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-300 sm:inline-flex">
            <Zap size={13} fill="currentColor" /> 5s Delivery
          </span>
          <Link href="/dashboard" className="btn-outline !px-4 !py-2 text-sm">
            <UserRound size={16} /> <span className="hidden sm:inline">My Account</span>
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy-900 px-4 py-3 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
