"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  CircleAlert,
  Loader2,
  Search,
  ShieldCheck,
} from "lucide-react";
import PaymentMethods from "@/components/PaymentMethods";
import { PRODUCTS } from "@/lib/products";
import type { Product } from "@/lib/types";

type Step = 1 | 2 | 3 | 4; // 4 = success screen

const STEPS = [
  { n: 1, label: "Select package" },
  { n: 2, label: "Player details" },
  { n: 3, label: "Checkout" },
] as const;

export default function OrderForm({ initialProductId }: { initialProductId?: string }) {
  const initial = useMemo(
    () => PRODUCTS.find((p) => p.id === initialProductId) ?? null,
    [initialProductId]
  );

  const [step, setStep] = useState<Step>(1);
  const [selected, setSelected] = useState<Product | null>(initial);
  const [playerId, setPlayerId] = useState("");
  const [ign, setIgn] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [payment, setPayment] = useState("bkash");
  const [placing, setPlacing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  /* ---------- Step 2: simulated in-game name lookup ---------- */
  function verifyPlayer() {
    if (playerId.trim().length < 4) return;
    setVerifying(true);
    setIgn(null);
    setTimeout(() => {
      setIgn(`Player_${playerId.trim().slice(-4)}`);
      setVerifying(false);
    }, 900);
  }

  /* ---------- Step 3: simulated order placement ---------- */
  function placeOrder() {
    if (!selected || !ign) return;
    setPlacing(true);
    setTimeout(() => {
      setOrderId(`DCX-${Math.floor(100000 + Math.random() * 900000)}`);
      setPlacing(false);
      setStep(4);
    }, 1100);
  }

  function reset() {
    setStep(1);
    setSelected(null);
    setPlayerId("");
    setIgn(null);
    setPayment("bkash");
    setOrderId(null);
  }

  /* ---------- Success screen ---------- */
  if (step === 4) {
    return (
      <div className="card mx-auto max-w-xl p-8 text-center">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-400/15 text-emerald-400">
          <CheckCircle2 size={36} />
        </div>
        <h2 className="mt-5 text-2xl font-bold text-white">Order placed!</h2>
        <p className="mt-2 text-slate-400">This is a demo — no real payment was taken.</p>
        <div className="mt-6 rounded-xl border border-white/10 bg-navy-900/60 p-5 text-left text-sm">
          <div className="flex justify-between py-1.5"><span className="text-slate-400">Order ID</span><span className="font-mono font-semibold text-gold-300">{orderId}</span></div>
          <div className="flex justify-between py-1.5"><span className="text-slate-400">Package</span><span className="text-white">{selected?.name}</span></div>
          <div className="flex justify-between py-1.5"><span className="text-slate-400">Player ID</span><span className="text-white">{playerId}</span></div>
          <div className="flex justify-between py-1.5"><span className="text-slate-400">In-game name</span><span className="text-white">{ign}</span></div>
          <div className="mt-2 flex justify-between border-t border-white/10 pt-3 text-base font-bold"><span className="text-white">Total</span><span className="text-gold-300">৳{selected?.price.toLocaleString()}</span></div>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/dashboard" className="btn-gold">View order history <ArrowRight size={17} /></Link>
          <button onClick={reset} className="btn-outline">New order</button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
      <div className="card p-6 sm:p-8">
        {/* Progress indicator */}
        <ol className="mb-8 flex items-center gap-2 sm:gap-3">
          {STEPS.map((s, i) => {
            const done = step > s.n;
            const active = step === s.n;
            return (
              <li key={s.n} className="flex flex-1 items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border text-sm font-bold transition-colors ${
                      done
                        ? "border-emerald-400 bg-emerald-400 text-navy-950"
                        : active
                        ? "border-gold-400 bg-gold-400 text-navy-950 shadow-gold"
                        : "border-white/15 bg-white/5 text-slate-400"
                    }`}
                  >
                    {done ? <Check size={18} strokeWidth={3} /> : s.n}
                  </span>
                  <span className={`hidden text-sm font-semibold sm:block ${active || done ? "text-white" : "text-slate-500"}`}>
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && <span className={`h-px flex-1 ${done ? "bg-emerald-400/60" : "bg-white/10"}`} />}
              </li>
            );
          })}
        </ol>

        {/* ---------- STEP 1: Select package ---------- */}
        {step === 1 && (
          <div className="animate-fade-up">
            <h2 className="text-xl font-bold text-white">1. Select your package</h2>
            <p className="mt-1 text-sm text-slate-400">Choose what you want to top up.</p>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {PRODUCTS.map((p) => {
                const active = selected?.id === p.id;
                return (
                  <button
                    type="button"
                    key={p.id}
                    onClick={() => setSelected(p)}
                    className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-colors ${
                      active ? "border-gold-400/60 bg-gold-400/10" : "border-white/10 bg-navy-900/60 hover:bg-white/5"
                    }`}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-xl" style={{ backgroundColor: `${p.accent}22` }}>
                      {p.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-semibold text-white">{p.name}</span>
                      <span className="block text-xs text-slate-400">{p.amount}</span>
                    </span>
                    <span className="shrink-0 text-sm font-bold text-gold-300">৳{p.price.toLocaleString()}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-7 flex justify-end">
              <button onClick={() => setStep(2)} disabled={!selected} className="btn-gold">
                Continue <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* ---------- STEP 2: Player details ---------- */}
        {step === 2 && (
          <div className="animate-fade-up">
            <h2 className="text-xl font-bold text-white">2. Enter your player ID</h2>
            <p className="mt-1 text-sm text-slate-400">We&apos;ll look up your in-game name to confirm the account.</p>

            <label className="mt-6 block text-sm font-semibold text-slate-200">Player ID</label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={playerId}
                  onChange={(e) => { setPlayerId(e.target.value); setIgn(null); }}
                  onKeyDown={(e) => e.key === "Enter" && verifyPlayer()}
                  placeholder="e.g. 1234567890"
                  inputMode="numeric"
                  className="input !pl-11"
                />
              </div>
              <button onClick={verifyPlayer} disabled={playerId.trim().length < 4 || verifying} className="btn-outline whitespace-nowrap">
                {verifying ? <><Loader2 size={17} className="animate-spin" /> Checking…</> : "Verify ID"}
              </button>
            </div>

            {ign && (
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                <CheckCircle2 size={22} className="text-emerald-400" />
                <div>
                  <p className="text-sm font-semibold text-white">Account found</p>
                  <p className="text-sm text-slate-300">In-game name: <span className="font-semibold text-gold-300">{ign}</span></p>
                </div>
              </div>
            )}
            {playerId.trim().length >= 4 && !ign && !verifying && (
              <p className="mt-3 flex items-center gap-2 text-xs text-amber-300">
                <CircleAlert size={15} /> Verify the ID to continue.
              </p>
            )}

            <div className="mt-7 flex justify-between">
              <button onClick={() => setStep(1)} className="btn-outline"><ArrowLeft size={17} /> Back</button>
              <button onClick={() => setStep(3)} disabled={!ign} className="btn-gold">Continue <ArrowRight size={18} /></button>
            </div>
          </div>
        )}

        {/* ---------- STEP 3: Checkout ---------- */}
        {step === 3 && (
          <div className="animate-fade-up">
            <h2 className="text-xl font-bold text-white">3. Checkout</h2>
            <p className="mt-1 text-sm text-slate-400">Review your order and pick a payment method.</p>

            <div className="mt-6">
              <PaymentMethods value={payment} onChange={setPayment} />
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-gold-400/20 bg-gold-400/5 p-3.5 text-xs text-slate-300">
              <ShieldCheck size={17} className="mt-0.5 shrink-0 text-gold-400" />
              Demo checkout only. No credentials are collected and no real payment is processed.
            </div>

            <div className="mt-7 flex justify-between">
              <button onClick={() => setStep(2)} className="btn-outline"><ArrowLeft size={17} /> Back</button>
              <button onClick={placeOrder} disabled={placing} className="btn-gold min-w-40">
                {placing ? <><Loader2 size={17} className="animate-spin" /> Placing…</> : <>Place order <Check size={17} /></>}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ---------- Sticky order summary ---------- */}
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <div className="card p-6">
          <h3 className="font-semibold text-white">Order summary</h3>
          <div className="mt-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-xl">
                {selected?.icon ?? "🛒"}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">{selected?.name ?? "No pack selected"}</p>
                <p className="text-xs text-slate-400">{selected?.amount ?? "Pick a package to begin"}</p>
              </div>
            </div>
            <div className="space-y-2.5 border-t border-white/10 pt-4 text-sm">
              <div className="flex justify-between text-slate-400"><span>Player ID</span><span className="text-white">{playerId || "—"}</span></div>
              <div className="flex justify-between text-slate-400"><span>In-game name</span><span className="text-white">{ign ?? "—"}</span></div>
              <div className="flex justify-between text-slate-400"><span>Payment</span><span className="capitalize text-white">{payment}</span></div>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-4">
              <span className="font-semibold text-white">Total</span>
              <span className="text-2xl font-bold text-gold-300">৳{selected?.price.toLocaleString() ?? "0"}</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
