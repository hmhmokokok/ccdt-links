# CCDT Links

A simple, mobile-friendly link page for [Committed Communities Development Trust (CCDT)](https://ccdtrust.org), inspired by the [design.praj Linktree](https://linktr.ee/design.praj). No Linktree embeds — all links live in one editable config file.

**Live site:** [https://ccdt-links.vercel.app](https://ccdt-links.vercel.app)  
**QR page:** [https://ccdt-links.vercel.app/qr](https://ccdt-links.vercel.app/qr)  
**Printable QR:** [`assets/qr-code.png`](assets/qr-code.png) (points at the live URL)

## Update links (no code changes)

Edit **`config/site.json`**:

- `siteUrl` — your live deployment URL (used for the QR code)
- `profile` — name, bio, avatar
- `links` — add, remove, reorder, or set `"enabled": false` to hide a link
- `theme` — optional color overrides

After editing, redeploy (or refresh locally). On Vercel/Netlify, a commit that only changes `config/site.json` is enough.

## Local preview

```bash
npm install
npm run dev
```

Open http://localhost:3000

## QR code

1. Deploy the site and copy the live URL.
2. Set `"siteUrl"` in `config/site.json` to that URL.
3. Either:
   - Open **`/qr.html`** and use **Download PNG**, or
   - Run `npm run qr` to write `assets/qr-code.png`

## Deploy

### Vercel (recommended)

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Other** (static). Leave build command empty; output is the repo root.
4. Deploy, then put the production URL into `config/site.json` → `siteUrl` and redeploy.
5. Generate the QR code as above.

Or from this folder:

```bash
npx vercel
```

### Netlify

1. Drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect the Git repo.
2. Publish directory: `.` (site root).
3. Update `siteUrl` and generate the QR code.

### GitHub Pages

1. Push to GitHub.
2. Settings → Pages → Deploy from branch → `/` (root).
3. If the site is at `https://USER.github.io/REPO/`, set that full URL as `siteUrl`.

## Project layout

```
config/site.json   ← edit links & site URL here
index.html         ← link page
qr.html            ← QR preview & download
css/               ← styles
js/                ← loads config and renders links
assets/            ← avatar + generated QR
scripts/generate-qr.mjs
```
