# LegionCraftsGB — placeholder site

A clean, mobile-friendly landing page for the **LegionCraftsGB** brand — the parent company for our 3D printing and app design work. This is a single static page; no database, no auth, no backend.

- **Domain:** [legioncraftsgb.com](https://legioncraftsgb.com)
- **Contact:** admin@legioncraftsgb.com
- **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4

## Run locally

```powershell
npm install
npm run dev
```

Open <http://localhost:3000>.

The whole page lives in three files:

- `app/page.tsx` — the landing page (header, intro, "What we do" cards, "Apps — coming soon" cards, contact, footer)
- `app/layout.tsx` — root HTML, dark theme, metadata
- `app/globals.css` — Tailwind import + base body styles

To change the headline, the intro text, or which apps are listed, edit `app/page.tsx` — Tailwind hot-reloads.

## Build / lint

```powershell
npm run build   # production build (catches type + lint errors)
npm run lint    # ESLint only
npm run start   # serve the production build locally
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo (`legioncraftsgb-site`).
2. In [Vercel](https://vercel.com/new) → **Add New → Project** → import the repo. Accept the defaults — Vercel auto-detects Next.js.
3. After the first deploy, go to **Project → Settings → Domains** and add:
   - `legioncraftsgb.com`
   - `www.legioncraftsgb.com`
4. Vercel will show the DNS records to add at your domain registrar. Add them and wait for propagation (usually minutes, up to a few hours).

## Updating the page later

When you're ready to swap the placeholder for real content (a real logo, app screenshots, a product catalogue for the 3D printing side), edit `app/page.tsx`. The design is intentionally simple so the next iteration can replace large blocks without fighting the existing structure.
