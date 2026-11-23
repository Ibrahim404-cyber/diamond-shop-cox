import { Suspense } from "react";
import OrderPageClient from "./OrderPageClient";

export const metadata = { title: "Place an Order | Diamond Shop Cox" };

export default function OrderPage() {
  return (
    <div className="container-x py-12">
      <div className="mb-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-gold-400">Quick top-up</span>
        <h1 className="section-title mt-2">Place your order</h1>
        <p className="mt-2 text-slate-400">Three steps from pack to delivery.</p>
      </div>
      <Suspense fallback={<div className="card h-96 animate-pulse" />}>
        <OrderPageClient />
      </Suspense>
    </div>
  );
}
