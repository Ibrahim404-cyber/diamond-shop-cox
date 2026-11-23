"use client";

import { useSearchParams } from "next/navigation";
import OrderForm from "@/components/OrderForm";

export default function OrderPageClient() {
  const params = useSearchParams();
  const packageId = params.get("package") ?? undefined;
  return <OrderForm initialProductId={packageId} />;
}
