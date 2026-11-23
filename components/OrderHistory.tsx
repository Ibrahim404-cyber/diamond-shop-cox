import { INITIAL_ORDERS } from "@/lib/products";

export default function OrderHistory() {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-white/10 p-5">
        <div>
          <h2 className="font-semibold text-white">Order history</h2>
          <p className="text-sm text-slate-400">Your recent top-ups</p>
        </div>
        <span className="chip bg-gold-400/10 text-gold-300">{INITIAL_ORDERS.length} orders</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.03] text-xs uppercase tracking-wide text-slate-400">
            <tr>
              <th className="px-5 py-3 font-medium">Order ID</th>
              <th className="px-5 py-3 font-medium">Package</th>
              <th className="px-5 py-3 font-medium">Player</th>
              <th className="px-5 py-3 font-medium">Method</th>
              <th className="px-5 py-3 font-medium">Amount</th>
              <th className="px-5 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {INITIAL_ORDERS.map((o) => (
              <tr key={o.id} className="text-slate-300 hover:bg-white/[0.02]">
                <td className="whitespace-nowrap px-5 py-3.5 font-mono text-xs text-gold-300">{o.id}</td>
                <td className="px-5 py-3.5">{o.packageName}</td>
                <td className="px-5 py-3.5">{o.player}</td>
                <td className="px-5 py-3.5">{o.method}</td>
                <td className="px-5 py-3.5 font-semibold text-white">৳{o.price.toLocaleString()}</td>
                <td className="px-5 py-3.5">
                  <span className="chip bg-emerald-400/10 text-emerald-300">{o.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
