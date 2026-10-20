# Tools pages (/pass/)

dusrel.com ke free tools `/pass/` section mein rehte hain (user ne path
`/pass/` rakha hai — tools ka short home). Abhi 6 tools live hain:

| URL | Tool |
|---|---|
| `dusrel.com/pass/` | Tools hub — password + username tools yahin functional milte hain, baaki sab ke cards |
| `dusrel.com/pass/password-generator/` | Password Generator |
| `dusrel.com/pass/username-generator/` | Username Generator |
| `dusrel.com/pass/word-counter/` | Word Counter |
| `dusrel.com/pass/qr-code-generator/` | QR Code Generator (`qrcode` npm package) |
| `dusrel.com/pass/age-calculator/` | Age Calculator |
| `dusrel.com/pass/password-strength-checker/` | Password Strength Checker |

Sabke `/hi/` versions bhi hain. Footer ka **Tools column** inhi se banta hai.

## Architecture — sab data-driven hai

| Cheez | File |
|---|---|
| Tools ki registry (single source of truth) | `src/data/tools.ts` |
| Tool components (har tool ka UI + logic) | `src/components/tools/*.astro` |
| Dedicated tool page template | `src/components/ToolPage.astro` (`contentBySlug` map) |
| Hub template | `src/components/ToolsHub.astro` |
| Page ka SEO content (title, intro, steps, FAQ) | `src/i18n/en.ts` + `hi.ts` → `tools.*` |
| OG images | `public/og-pass.png`, `public/og-<tool-slug>.png` |

Pages sirf patle wrappers hain: `src/pages/pass/<slug>.astro` +
`src/pages/hi/pass/<slug>.astro` — wrapper sirf `slug` pass karta hai.

## Naya tool add karna

1. `src/data/tools.ts` mein ek entry (slug, name EN+HI, blurb EN+HI) —
   footer, hub aur tool pages ke "More tools" mein tool **khud** aa jayega
2. `src/components/tools/<Tool>.astro` component banao (100% client-side,
   koi server call nahi — yeh Dusrel ka rule hai)
3. `ToolPage.astro` ke `contentBySlug` map + render switch mein ek-ek line,
   aur i18n mein `tools.<key>` content (metaTitle, metaDesc, h1, tagline,
   intro, steps, faqs — EN+HI)
4. Do wrapper pages banao (EN + HI) — sirf slug pass karte hain
5. `Base.astro` ke `staticLabels` mein slug ka breadcrumb label (EN+HI)
6. `public/og-<slug>.png` (1200×630) banao aur `llms.txt` mein line jodo
7. `npm run build` → sitemap mein `/pass/<slug>/` verify karo

## Tool rules (security/privacy)

- **Password kabhi `Math.random()` se mat banao** — sirf
  `crypto.getRandomValues` (CSPRNG), rejection sampling ke saath taaki
  modulo bias na ho. Entropy = length × log2(pool size).
- User ka data (banaya password, चुना username) **kabhi server par nahi
  jata** — sab browser mein local. Analytics mein bhi generated values
  kabhi mat bhejo.
- Username generator availability check **nahi** karta — page par yeh
  baat saaf likhi hai; jhootha daava mat karo.

## SEO jo auto milta hai

- BreadcrumbList — `Base.astro` URL se banata hai (`pass` = "Tools" label
  `Base.astro` ke `staticLabels` mein hai; naye tool ke slug ka label
  wahan jodna mat bhoolna)
- Dedicated page: **WebApplication + FAQPage JSON-LD** (ToolPage khud
  lagata hai); hub: **ItemList + FAQPage**
- Canonical/OG/hreflang — `Base.astro` se auto
