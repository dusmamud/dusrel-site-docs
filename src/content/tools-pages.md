# Tools pages (/pass/)

dusrel.com ke free tools `/pass/` section mein rehte hain (user ne path
`/pass/` rakha hai — tools ka short home). Abhi 2 tools live hain:

| URL | Tool |
|---|---|
| `dusrel.com/pass/` | Tools hub — dono tools yahin functional milte hain |
| `dusrel.com/pass/password-generator/` | Password Generator |
| `dusrel.com/pass/username-generator/` | Username Generator |

Sabke `/hi/` versions bhi hain. Footer ka **Tools column** inhi se banta hai.

## Architecture — sab data-driven hai

| Cheez | File |
|---|---|
| Tools ki registry (single source of truth) | `src/data/tools.ts` |
| Password generator UI + logic | `src/components/tools/PasswordGenerator.astro` |
| Username generator UI + logic | `src/components/tools/UsernameGenerator.astro` |
| Dedicated tool page template | `src/components/ToolPage.astro` |
| Hub template | `src/components/ToolsHub.astro` |
| Page ka SEO content (title, intro, steps, FAQ) | `src/i18n/en.ts` + `hi.ts` → `tools.password` / `tools.username` / `tools.hub` |
| OG images | `public/og-pass.png`, `public/og-<tool-slug>.png` |

Pages sirf patle wrappers hain: `src/pages/pass/<slug>.astro` +
`src/pages/hi/pass/<slug>.astro`.

## Naya tool add karna

1. `src/data/tools.ts` mein ek entry (slug, name EN+HI, blurb EN+HI) —
   footer aur hub mein tool **khud** aa jayega
2. `src/components/tools/<Tool>.astro` component banao (100% client-side,
   koi server call nahi — yeh Dusrel ka rule hai)
3. `ToolPage.astro` mein tool ka case add karo + i18n mein `tools.<key>`
   content (metaTitle, metaDesc, h1, tagline, intro, steps, faqs — EN+HI)
4. Do wrapper pages banao (EN + HI)
5. `public/og-<slug>.png` (1200×630) banao aur `llms.txt` mein line jodo
6. `npm run build` → sitemap mein `/pass/<slug>/` verify karo

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
