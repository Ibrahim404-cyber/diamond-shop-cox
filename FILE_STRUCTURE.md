# File & folder structure

```
diamond-shop-cox/
├── app/
│   ├── globals.css              # Tailwind layers + shared classes (.card, .btn-gold, .input…)
│   ├── layout.tsx               # Root layout: Header + main + Footer
│   ├── page.tsx                 # Homepage: Hero, ProductGrid, LiveOrderFeed, About, CTA, FAQ
│   ├── dashboard/page.tsx       # Order history with stats
│   └── order/
│       ├── page.tsx             # Order route (server shell)
│       └── OrderPageClient.tsx  # Client wrapper for the order flow
├── components/
│   ├── Header.tsx               # Sticky nav + mobile bottom bar (client)
│   ├── Footer.tsx               # Link columns + support (server)
│   ├── NewsletterForm.tsx       # Footer email placeholder (client)
│   ├── Hero.tsx                 # Hero section
│   ├── ProductGrid.tsx          # Category filter + product cards (client)
│   ├── LiveOrderFeed.tsx        # Simulated live recent orders (client)
│   ├── FAQ.tsx                  # Accordion (client)
│   ├── OrderForm.tsx            # 3-step order flow + success screen (client)
│   ├── PaymentMethods.tsx       # bKash / Nagad / Rocket / Wallet / Manual / Auto (client)
│   └── OrderHistory.tsx         # Order history table
├── lib/
│   ├── products.ts              # Categories, products, payment methods, mock orders
│   └── types.ts                 # Product, Order, PaymentMethod types
├── tailwind.config.ts           # Deep-blue + gold palette, animations
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

All data is local/mock; no backend or environment variables are required.
