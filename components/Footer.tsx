import Link from "next/link";
import { Gem } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

const LINKS = [
  { label: "About", href: "/#about" },
  { label: "Top Up", href: "/#products" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "FAQ", href: "/#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="container-x grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-gold-300 to-gold-500 text-navy-950">
              <Gem size={18} />
            </span>
            <span className="font-extrabold text-white">Diamond <span className="text-gold-400">Shop Cox</span></span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            A modern digital storefront concept for fast, friendly game top-ups. Built as a demo — all orders and payments are simulated.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            {LINKS.map((l) => (
              <li key={l.label}><Link href={l.href} className="hover:text-gold-300">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Support</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
            <li>Help center</li>
            <li>Contact us</li>
            <li>Refund policy</li>
            <li>Terms of service</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Stay updated</h3>
          <p className="mt-4 text-sm text-slate-400">Get notified about new packs and offers.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-5 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Diamond Shop Cox. Demo project. All rights reserved.</p>
          <p>Independent concept store. Not affiliated with any game publisher.</p>
        </div>
      </div>
    </footer>
  );
}
