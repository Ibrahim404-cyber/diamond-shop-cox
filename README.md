# Diamond Shop Cox

A modern game top-up & digital store concept built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS**.

> Original design for this project. The public site `codmshopbd.com` was used only as a high-level reference for layout and business logic — no text, logos or images were copied. All orders, payments, player lookups and order-feed entries are **simulated**; no real credentials are collected and no real transactions occur.

## Features

- Responsive homepage: hero, category filter, product grid, live order feed, about, FAQ, footer
- **3-step order flow**: select package → enter & verify Player ID → checkout with payment placeholders
- Payment method UI: bKash, Nagad, Rocket, Wallet Pay, Manual Pay, Auto Payment
- Live order feed that simulates incoming orders
- Order history dashboard with stats
- Unique deep-blue & gold theme

## Getting started

```bash
cd diamond-shop-cox
pnpm install        # or: npm install
pnpm dev            # http://localhost:3000
```

## Build & deploy

```bash
pnpm build
pnpm start
```

Deploy freely on Vercel, Netlify or any Node host. No environment variables or backend are required — all data lives in `lib/products.ts` and component state.

## Structure

See the `FILE_STRUCTURE.md` file or the project tree in the chat for a full breakdown.
