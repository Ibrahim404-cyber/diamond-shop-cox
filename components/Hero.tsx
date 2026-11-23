import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock3, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-glow grid-lines relative overflow-hidden border-b border-white/10">
      <div className="container-x relative grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div className="animate-fade-up">
          <span className="chip border border-gold-400/25 bg-gold-400/10 text-gold-300">
            <BadgeCheck size={14} /> Trusted digital top-up store
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Level up your game in <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">seconds.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Diamonds, memberships and passes delivered straight to your player ID. No passwords, no waiting — just pick a pack and top up.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#products" className="btn-gold">
              Browse packs <ArrowRight size={18} />
            </Link>
            <Link href="/order" className="btn-outline">
              Quick top-up
            </Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-6 text-sm text-slate-300">
            <span className="flex items-center gap-2"><Clock3 size={17} className="text-gold-400" /> ~5 second delivery</span>
            <span className="flex items-center gap-2"><ShieldCheck size={17} className="text-gold-400" /> ID-only, no login needed</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up [animation-delay:120ms]">
          <div className="card relative overflow-hidden p-6">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-400/10 blur-3xl" />
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Your top-up cart</span>
              <span className="chip bg-emerald-400/10 text-emerald-300">Live</span>
            </div>
            <div className="mt-5 flex items-center gap-4 rounded-xl border border-white/10 bg-navy-900/60 p-4">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 text-2xl">💎</div>
              <div className="flex-1">
                <p className="font-semibold text-white">Diamond Pack 1000</p>
                <p className="text-sm text-slate-400">1,000 Diamonds</p>
              </div>
              <span className="text-lg font-bold text-gold-300">৳1,100</span>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between text-slate-400"><span>Player ID</span><span className="text-white">Verified ✓</span></div>
              <div className="flex justify-between text-slate-400"><span>Payment</span><span className="text-white">bKash</span></div>
              <div className="flex justify-between border-t border-white/10 pt-3 text-base font-semibold text-white"><span>Total</span><span className="text-gold-300">৳1,100</span></div>
            </div>
            <Link href="/order" className="btn-gold mt-6 w-full">Continue to checkout <ArrowRight size={18} /></Link>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-white/10 bg-navy-800 px-4 py-3 shadow-card sm:block">
            <p className="text-xs text-slate-400">Orders delivered today</p>
            <p className="text-xl font-bold text-white">2,480 <span className="text-xs font-medium text-emerald-400">↑ 12%</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
