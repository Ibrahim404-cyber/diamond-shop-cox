import type { Order, PaymentMethod, Product } from "./types";

export const CATEGORIES = [
  "All",
  "Diamonds",
  "Membership",
  "Passes",
  "Mystery Box",
  "More Games",
] as const;

export const PRODUCTS: Product[] = [
  { id: "d100", name: "Diamond Pack 100", category: "Diamonds", amount: "100 Diamonds", price: 120, oldPrice: 150, badge: "Starter", icon: "💎", accent: "#3b82f6" },
  { id: "d200", name: "Diamond Pack 200", category: "Diamonds", amount: "200 Diamonds", price: 230, oldPrice: 280, icon: "💎", accent: "#3b82f6" },
  { id: "d500", name: "Diamond Pack 500", category: "Diamonds", amount: "500 Diamonds", price: 560, oldPrice: 650, badge: "Popular", icon: "💎", accent: "#6366f1" },
  { id: "d1000", name: "Diamond Pack 1000", category: "Diamonds", amount: "1,000 Diamonds", price: 1100, oldPrice: 1300, badge: "Best Value", icon: "💎", accent: "#8b5cf6" },
  { id: "d2000", name: "Diamond Pack 2000", category: "Diamonds", amount: "2,000 Diamonds", price: 2150, icon: "💎", accent: "#8b5cf6" },
  { id: "d5000", name: "Diamond Pack 5000", category: "Diamonds", amount: "5,000 Diamonds", price: 5250, badge: "Top Up", icon: "💎", accent: "#a855f7" },
  { id: "mw", name: "Weekly Membership", category: "Membership", amount: "7 Days Access", price: 180, icon: "👑", accent: "#f59e0b" },
  { id: "mm", name: "Monthly Membership", category: "Membership", amount: "30 Days Access", price: 740, oldPrice: 850, badge: "Hot", icon: "👑", accent: "#f59e0b" },
  { id: "lup", name: "Level Up Pass", category: "Passes", amount: "Season Pass", price: 320, icon: "🎟️", accent: "#14b8a6" },
  { id: "ep", name: "Elite Pass", category: "Passes", amount: "Elite Tier", price: 650, icon: "🎟️", accent: "#14b8a6" },
  { id: "mb", name: "Mystery Box", category: "Mystery Box", amount: "Surprise Rewards", price: 90, badge: "Fun", icon: "🎁", accent: "#ec4899" },
  { id: "coin", name: "Coin Bundle", category: "More Games", amount: "10,000 Coins", price: 200, icon: "🪙", accent: "#eab308" },
  { id: "uc", name: "UC Pack", category: "More Games", amount: "600 UC", price: 480, icon: "⚔️", accent: "#ef4444" },
];

export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: "bkash", name: "bKash", color: "#e2136e", icon: "bK", note: "Send money & verify" },
  { id: "nagad", name: "Nagad", color: "#f47920", icon: "N", note: "Instant transfer" },
  { id: "rocket", name: "Rocket", color: "#8b5cf6", icon: "R", note: "Mobile banking" },
  { id: "wallet", name: "Wallet Pay", color: "#2563eb", icon: "W", note: "Digital wallet" },
  { id: "manual", name: "Manual Pay", color: "#64748b", icon: "M", note: "Bank / card transfer" },
  { id: "auto", name: "Auto Payment", color: "#22c55e", icon: "A", note: "Instant checkout" },
];

const NAMES = ["Rahim", "Karim", "Sultan", "Nova", "Shadow", "Tiger", "Ronaldo", "Akash", "Moon", "Pixel", "Falcon", "Zara"];
const PACKS = ["Diamond Pack 100", "Diamond Pack 500", "Monthly Membership", "Diamond Pack 1000", "Level Up Pass", "Mystery Box"];

export const INITIAL_ORDERS: Order[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `DCX-${48210 + i * 7}`,
  player: `${NAMES[i]}${Math.floor(Math.random() * 900 + 100)}`,
  packageName: PACKS[i % PACKS.length],
  price: [120, 560, 740, 1100, 320, 90][i],
  method: ["bKash", "Nagad", "Rocket", "Wallet Pay"][i % 4],
  time: `${i + 1} min ago`,
  status: "Completed" as const,
}));

export function randomOrder(): Order {
  return {
    id: `DCX-${Math.floor(10000 + Math.random() * 90000)}`,
    player: `${NAMES[Math.floor(Math.random() * NAMES.length)]}${Math.floor(Math.random() * 900 + 100)}`,
    packageName: PACKS[Math.floor(Math.random() * PACKS.length)],
    price: [120, 230, 560, 740, 1100, 320][Math.floor(Math.random() * 6)],
    method: PAYMENT_METHODS[Math.floor(Math.random() * 4)].name,
    time: "Just now",
    status: "Completed",
  };
}
