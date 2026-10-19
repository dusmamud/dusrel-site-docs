# Build, test aur deploy

## Commands (dusrel-site folder mein)

```bash
npm run dev        # local dev server
npx tsc --noEmit   # TypeScript check — i18n keys mismatch yahin pakda jata hai
npx vitest run     # tests (apps registry, downloads registry, social links)
npm run build      # production build → dist/
npx astro preview  # dist/ ko locally serve karke dekho
```

**Hamesha is order mein:** `tsc` → `vitest` → `build`. Kuch toota hai toh build se pehle pata chal jayega.

## Tests kya check karte hain

| Test file | Kya pakadta hai |
|---|---|
| `src/data/apps.test.ts` | Har live app ka icon + showcase file hai? Feature icons 6 hain? i18n keys dono languages mein? |
| `src/data/downloads.test.ts` | Slug valid hai? Saare fields (version, size, steps…) bhare hain? Download file `public/downloads/` mein maujood hai? |
| `src/data/social.test.ts` | Social links sahi hain? |

## Deploy — automatic hai

```
GitHub: dusmamud/dusrel (main)
   │ push
   ▼
Cloudflare Pages (project: dusrel) — auto build + deploy
   │
   ▼
dusrel.com  +  dusrel.pages.dev
```

**Tumhe kuch manual nahi karna** — `main` par push karte hi Cloudflare khud build karke deploy kar deta hai. 1–2 minute mein live.

## Deploy verify karna

```bash
curl -sI https://dusrel.com/apps/mera-app | head -1
# HTTP/2 200 aana chahiye
```

> **Note:** Cloudflare mein **koi change** (settings, analytics, kuch bhi) bina tumhare bole nahi kiya jata — sirf read/report. Yeh standing rule hai.

## dusrel-site-docs (yeh site) ka deploy

Yeh docs site abhi sirf repo mein hai. Jab deploy karna ho toh do options hain — GitHub Pages (free, repo se direct) ya Cloudflare Pages. Bata dena, setup kar dunga.
