# HAYABI — Next.js 14 (EN/UK) + Sanity (Studio at /studio)

## Quick Start
```bash
npm i
npm run dev
# open http://localhost:3000 → redirects to /en
# open http://localhost:3000/studio → Sanity Studio
```

## Env
Create `.env.local` from `.env.example`:
```
RESEND_API_KEY=
CONTACT_TO=halyna.o.yakovleva@gmail.com
CONTACT_FROM=website@hayabi.ch
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=hayabi.ch

SANITY_PROJECT_ID=your_id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
```

## Fill CMS
In /studio create documents:
- Site Settings (tagline, phone, email, address)
- Hero (title, lead, bullets)
- Services (sectionTitle, items[title, bullets])
- Expertise (title, p1, p2, bullets)
- Track Record (title, statement)

The pages `/en` and `/uk` fetch content with ISR (60s). If a field is empty in CMS, the site falls back to built‑in copy.
