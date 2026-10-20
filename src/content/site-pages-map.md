# Site ka map — saare pages

dusrel.com par kul itne pages hain — har ek ke **EN + HI dono versions** (`/hi/...`). Naya page banane ki zaroorat kam padti hai, par existing ko edit karna ho toh yeh map kaam aayega.

## Pages inventory

| Page | URL | Kya hai | Content kahan hai |
|---|---|---|---|
| Home | `/` | Landing page — 12 sections | `src/pages/index.astro` + components (agle chapter mein) |
| Apps hub | `/apps` | Saare live apps ki grid | `apps.ts` se auto — `src/pages/apps/index.astro` |
| App detail | `/apps/<slug>` | Har app ka detail page | `apps.ts` + `appPages` i18n (auto-generate) |
| Downloads | `/apps/<slug>/download[/<platform>]` | Download pages | `downloads.ts` (auto-generate) |
| Tools hub | `/pass/` | Saare free tools ek jagah (dono tools yahin functional) | `tools.ts` + i18n `tools.hub` — chapter: Tools pages |
| Tool detail | `/pass/<tool-slug>` | Password Generator, Username Generator | `tools.ts` + i18n `tools.*` (auto cross-link) |
| About | `/about` | Dusrel ki kahani | `src/pages/about.astro` + i18n `about` |
| Brand | `/brand` | Logo variants, brand colors | `src/pages/brand.astro` + `public/logo/` |
| Changelog | `/changelog` | Har launch/milestone, newest first | i18n `changelog` entries |
| Contact | `/contact` | Contact info | `src/pages/contact.astro` + i18n |
| Open Source | `/open-source` | Open source page | `src/pages/open-source.astro` + i18n |
| Privacy Policy | `/privacy-policy` | Legal | `src/pages/privacy-policy.astro` + i18n |
| Security | `/security` | Security practices | `src/pages/security.astro` + i18n |
| Terms | `/terms` | Terms of use | `src/pages/terms.astro` + i18n |
| 404 | har galat URL | Not found — `noindex` hai | `src/pages/404.astro` |

## Page edit karne ka tareeqa

1. Page ka text badalna ho → **`src/i18n/en.ts` + `hi.ts`** mein us page ki keys badlo (structure `.astro` file mein hai, text i18n mein)
2. Layout/design badalna ho → us page ki `.astro` file (`src/pages/` mein; Hindi ke liye `src/pages/hi/` mein same file)
3. **Dono languages ki `.astro` files sync rakho** — EN mein layout change kiya toh HI mein bhi karo

## Changelog mein entry add karna

Naya launch/milestone ho toh `en.ts` + `hi.ts` ke `changelog` array mein **sabse upar** nayi entry dalo (newest first rule hai) — date, title, body. Page khud render kar dega.

## Naya static page banana pad jaye toh

1. `src/pages/mera-page.astro` banao (kisi existing page ko template ki tarah copy karo)
2. `src/pages/hi/mera-page.astro` bhi banao
3. i18n keys dono files mein add karo
4. `Base` layout use karo — title/description/canonical props ke saath (**SEO checklist** dekho)
5. Footer/nav mein link chahiye toh `SiteNav.astro` / `Footer.astro` mein real page link add karo — `#anchor` kabhi nahi (rule hai)
