import Link from "next/link";
import { ArrowRight, PackageCheck, Wallet, Gem } from "lucide-react";
import OrderHistory from "@/components/OrderHistory";
import { INITIAL_ORDERS } from "@/lib/products";

export const metadata = { title: "My Dashboard | Diamond Shop Cox" };

export default function DashboardPage() {
  const totalSpent = INITIAL_ORDERS.reduce((sum, o) => sum + o.price, 0);

  return (
    <div className="container-x py-12">
      <div className="mb-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold-400">Account</span>
        <h1 className="section-title mt-2">My dashboard</h1>
        <p className="mt-2 text-slate-400">Your orders and activity at a glance.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: PackageCheck, label: "Total orders", value: String(INITIAL_ORDERS.length) },
          { icon: Wallet, label: "Total spent", value: `৳${totalSpent.toLocaleString()}` },
          { icon: Gem, label: "Diamonds bought", value: "3,400+" },
        ].map((s) => (
          <div key={s.label} className="card flex items-center gap-4 p-5">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold-400/10 text-gold-400"><s.icon size={21} /></span>
            <div>
              <p className="text-sm text-slate-400">{s.label}</p>
              <p className="text-xl font-bold text-white">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <OrderHistory />
      </div>

      <div className="mt-8 flex justify-end">
        <Link href="/order" className="btn-gold">New top-up <ArrowRight size={18} /></Link>
      </div>
    </div>
  );
}
