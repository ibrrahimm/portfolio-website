# Project Handover

This project is a bilingual personal portfolio for `Ibrahim Yehia`, built with `Next.js`, `React`, `Framer Motion`, and `Three.js`.

## Stack

- `Next.js 16`
- `React 19`
- `Framer Motion`
- `Three.js`
- `@supabase/supabase-js`

## Run locally

Install dependencies if needed:

```bash
npm install
```

Start development mode:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Production build:

```bash
npm run build
npm run start
```

## Main files to edit

- `components/portfolio-app.js`
  - main content
  - hero copy
  - profile copy
  - methodology section
  - industries
  - technical arsenal
  - projects
  - contact labels and CTA text
- `app/globals.css`
  - full styling system
  - layout spacing
  - animations
  - DNA/methodology visuals
  - contact form styling
- `app/page.js`
  - page entry
- `app/layout.js`
  - root layout and metadata shell
- `app/api/contact/route.js`
  - contact form backend logic
- `.env.example`
  - required environment variables
- `supabase-schema.sql`
  - table schema for contact submissions
- `Ibrahim_Yehia_CV.pdf`
  - resume asset used by the download button

## Where the content lives

Most text content is stored in the `content` object inside:

```text
components/portfolio-app.js
```

That is the main file you will update when changing:

- English copy
- Arabic copy
- metrics
- project descriptions
- industry sections
- contact text

## Contact form setup

The contact form submits to:

```text
app/api/contact/route.js
```

It is configured for Supabase.

Required environment variables:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
```

Create your local env file:

```text
.env.local
```

Copy values from `.env.example` and replace them with your real Supabase credentials.

Then create the table using:

```text
supabase-schema.sql
```

## Suggested edit workflow

1. Run `npm run dev`
2. Edit `components/portfolio-app.js`
3. Edit `app/globals.css` if layout or style changes are needed
4. Test the contact form if you touched `app/api/contact/route.js`
5. Run `npm run build` before deployment

## Deployment notes

This is a standard Next.js app, so it can be deployed to:

- Vercel
- Netlify
- any VPS that can run `next build` and `next start`

If deploying publicly, make sure:

- Supabase environment variables are added in the hosting platform
- the CV file remains in the project root
- the contact form table exists in Supabase

## Cleanup notes

You may ignore or delete local build artifacts before publishing:

- `.next/`

You usually should not edit:

- `node_modules/`

## Current state

The project currently includes:

- bilingual English/Arabic content
- premium animated hero
- animated metrics
- vertical DNA methodology section with alternating cards
- real contact form backend wired to Supabase
- real CV download
- updated LinkedIn and email details

## Fastest places to customize later

If you only want quick edits, start here:

- `components/portfolio-app.js`
  - text, metrics, cards, links, CTA labels
- `app/globals.css`
  - colors, spacing, card appearance, motion feel

