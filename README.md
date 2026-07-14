# tridav.africa

Marketing website for **Tridav** — a Ghana-based technology consultancy offering digital transformation, IT consultancy, ERP implementation, and custom software development.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [shadcn/ui](https://ui.shadcn.com) base components
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) for the consultation form
- [Lucide](https://lucide.dev) icons

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # serve the production build
```

Copy `.env.example` to `.env.local` when wiring up the contact form email service or analytics. The `/api/contact` route currently validates and logs submissions — connect it to email/CRM before launch.

## Structure

- `app/` — routes: `/`, `/services`, `/portfolio`, `/about`, `/contact`, plus `api/contact`
- `components/layout/` — Navbar, Footer
- `components/sections/` — page sections (Hero, ServicesGrid, PortfolioGrid, ProcessTimeline, StatsBand, CTASection, ContactForm, …)
- `components/ui/` — shadcn base components + ProductCard, ServiceCard, AnimatedCounter
- `lib/data/` — products and services seed data

## Content TODOs before launch

- Replace placeholder client names in `components/sections/TrustBar.tsx` with real logos
- Confirm stats figures in `components/sections/StatsBand.tsx`
- Verify product descriptions in `lib/data/products.ts`
- Replace placeholder social links in `components/layout/Footer.tsx`
- Confirm contact email (`hello@tridav.africa`) and location details

## Deployment (Hostinger)

Deployed via **Hostinger Node.js Web App hosting** (Business/Cloud plan) — hPanel → Websites → Add Website → **Deploy Web App** → Node.js, connected to this GitHub repo with auto-builds on push. **Do not use the PHP/HTML site type for this project.**

Hostinger auto-detects Next.js and uses the standard `build` / `start` scripts. This is a real Node.js server runtime (the `/api/contact` route works), not a static export.
