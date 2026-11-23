import Link from "next/link";
import { ArrowRight, Gem, Headphones, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import LiveOrderFeed from "@/components/LiveOrderFeed";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <LiveOrderFeed />

      {/* About / value propositions */}
      <section id="about" className="container-x scroll-mt-20 py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-400">Why Diamond Shop Cox</span>
            <h2 className="section-title mt-2">A top-up store built around speed &amp; trust</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              We designed a simple, transparent flow: choose a pack, confirm your player ID, and check out.
              No account passwords, no confusing steps — just a clean experience that works on any screen.
            </p>
            <Link href="/order" className="btn-gold mt-6">Start a top-up <ArrowRight size={18} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Zap, title: "Instant delivery", text: "Items land on your ID within seconds." },
              { icon: Gem, title: "Fair pricing", text: "Clear prices with no hidden surprises." },
              { icon: ShieldCheck, title: "ID-only, no passwords", text: "Your account stays yours." },
              { icon: Headphones, title: "Help when you need it", text: "Track every order in your dashboard." },
            ].map((f) => (
              <div key={f.title} className="card p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-400/10 text-gold-400"><f.icon size={20} /></span>
                <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick-start banner */}
      <section className="container-x pb-4">
        <div className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-r from-navy-800 to-navy-900 p-8 sm:p-12">
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <div>
              <span className="chip bg-gold-400/10 text-gold-300"><Sparkles size={14} /> Three simple steps</span>
              <h2 className="section-title mt-3">Ready to power up?</h2>
              <p className="mt-2 max-w-lg text-slate-300">Select a package, verify your player ID, then check out. It really is that quick.</p>
            </div>
            <Link href="/order" className="btn-gold">Place an order <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}
