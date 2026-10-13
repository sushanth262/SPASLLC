# SPAS LLC — corporate website (Figma Make)

React + Vite site for **SPAS LLC** (Issaquah, WA). Matches the spec in ScoutifyApp `docs/spas-llc-website/`.

## Routes

| Path | Page |
|------|------|
| `/` | Home + trust strip |
| `/about` | About |
| `/services` | Four service areas |
| `/contact` | Form (no public email) |
| `/privacy` | Privacy policy |
| `/terms` | Terms of use |

## Contact API

Form POSTs to `VITE_SPAS_CONTACT_API` (default `https://api.scoutify.finance/api/public/spas-contact`). Deploy the Scoutify API route before go-live.

## Local dev

```bash
pnpm install
pnpm dev
```

## Figma Make

- **Preview:** Browser tab in the Make file (dev server on port 8443).
- **Publish:** In Figma Make, use **Publish** (runs `.figma/make/deploy`: `pnpm run build` + `figma make deploy`).
- **GitHub:** Push to `origin/main`; if Make is linked to this repo, pull/sync in Make to refresh code.
