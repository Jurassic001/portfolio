# portfolio
My developer portfolio, written in React, hosted on Cloudflare

## Development

```bash
pnpm install
pnpm dev         # http://localhost:5173
pnpm build
pnpm preview
```

All pretty straightforward `pnpm` commands

## Content

Portfolio content lives in `src/data/resume.ts`: personal info, summary, and projects. Types in `src/types/resume.ts` give autocomplete. The privacy policy text lives in `src/data/privacy.ts`.

Images go in `public/img/`, favicons in `public/favicon/`. Use [realfavicongenerator.net](https://realfavicongenerator.net/) to generate a new favicon set if needed.
