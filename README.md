# Jelena Jevremovic Mathematics School

Astro static site for the Jelena Jevremovic mathematics school (Serbian `sr` / English `en`).

## Stack

- Astro static output (`output: "static"`), no server adapter required
- Netlify hosting
- Netlify Forms for application submissions (honeypot + built-in Akismet spam filtering)
- `@astrojs/sitemap` with i18n alternates
- `astro:assets` image optimization
- No Google Apps Script, Google Sheet, or browser-side API endpoint

## Requirements

- Node 24 (see `.nvmrc`; Netlify uses `NODE_VERSION` in `netlify.toml`)

## Development

```bash
npm install
npm run dev
```

Build, typecheck, and preview the production output:

```bash
npm run check
npm run build
npm run preview
```

## Deployment

The site is deployed on Netlify from this repository.

1. Build command `npm run build`, publish directory `dist` (configured in `netlify.toml`).
2. **Enable Netlify form detection** in the Netlify UI *before* the first deploy, otherwise form submissions will 404.
3. Configure form submission email notifications in the Netlify dashboard.
4. The site URL is set in `astro.config.mjs` (`site`). Update it if the production domain changes, then update `public/robots.txt` to match.

`public/_redirects` redirects `/` to `/sr/` with a forced 301 so there is a single canonical home page.
`public/_headers` sets baseline security headers. `public/robots.txt` points to the generated sitemap.

## Forms

The application form uses `data-netlify="true"` and `netlify-honeypot`. Netlify filters spam automatically; a Netlify-provided reCAPTCHA can be added later if spam requires a stronger challenge. Netlify Forms does not support Cloudflare Turnstile.

Submissions are stored in Netlify. See `/sr/privacy/` and `/en/privacy/` for the privacy notice.

## Before publishing

- Replace the placeholder contact email `contactEmail` in `src/data/site.ts` and set the official data-retention details.
