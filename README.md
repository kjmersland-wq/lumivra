
# Lumivra

Lumivra is a premium wellness and longevity affiliate platform built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and a Cloudflare-first deployment setup.

## What it includes

- Premium Scandinavian-inspired design system
- Mobile-first responsive layouts
- Home, Sleep, Energy & Focus, Recovery, Healthy Aging, Comparisons, AI Tools, Blog, About, Contact
- Legal pages for Privacy, Cookies, Terms, and Affiliate Disclosure
- Frontend-only AI wellness recommendation demo
- Static export configuration for Cloudflare Pages
- SEO metadata, blog templates, and comparison layouts

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

This project uses `output: "export"`, so the production build is written to the `out/` directory.

## Cloudflare Pages deployment

1. Push the repository to GitHub.
2. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages**.
3. Connect the GitHub repository.
4. Use these build settings:
	- **Framework preset:** None
	- **Build command:** `npm run build`
	- **Build output directory:** `out`
	- **Root directory:** `/`
5. Deploy.

## Cloudflare config

- `next.config.ts` uses static export for Pages compatibility.
- `wrangler.toml` is included for Cloudflare ecosystem alignment.
- The project is ready to extend later with D1 or KV if needed.

## Notes

- Images currently use Unsplash URLs as premium placeholders.
- The AI wellness feature is frontend-only and uses demo logic only.
- Contact happens through the form only; no public email address is shown.
- The site is written in English throughout.

## Organization

Developed and operated by KM TECH LABS in Kristiansand, Norway.
Org.nr. 934 044 029

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
