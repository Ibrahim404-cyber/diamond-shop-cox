export type Product = {
  id: string;
  name: string;
  category: string;
  amount: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  icon: string;
  accent: string;
};

export type Order = {
  id: string;
  player: string;
  packageName: string;
  price: number;
  method: string;
  time: string;
  status: "Completed" | "Processing" | "Pending";
};

export type PaymentMethod = {
  id: string;
  name: string;
  color: string;
  icon: string;
  note?: string;
};
