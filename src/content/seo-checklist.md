# SEO checklist

Har naya page banate waqt yeh check karo. `Base.astro` layout ye props leta hai:

```astro
<Base
  lang="en"
  title="Page title — 60 chars se kam"
  description="150 chars ke aas-paas, page-specific"
  canonical="https://dusrel.com/apps/mera-app/"
  image="/og-mera-app.png"
  noindex={false}
/>
```

## Sabse zaroori rule — trailing slash

Cloudflare bina-slash wale URL ko slash wale par 308 redirect karta hai, aur
sitemap bhi slash wala URL deta hai. Isliye **canonical, og:url, hreflang —
sab hamesha trailing slash ke saath**. Ek waqt par canonical bina slash ke
tha aur sitemap slash ke saath — is "canonical loop" ki wajah se Google
pages ko index hi nahi kar raha tha ("alternate page" dikhata tha).
`Base.astro` ab khud slash normalize kar deta hai, bas canonical dete waqt
dhyaan rakho.

## Rules

- **Har page ka title/description unique** — do pages par same meta mat likho
- **Length:** title ~60 chars, description ~135–155 chars
- **OG image:** har page par `og:image` lagta hai (default `/og-default.png`) — naye main page/app ke liye `public/og-<naam>.png` (1200×630) banao aur `image` prop do
- **Locale tags:** `og:locale` auto lagta hai (`en_US` / `hi_IN` + alternate)
- **404 page:** `noindex` — search mein nahi aana chahiye

## Structured data (JSON-LD) — kya auto hai, kya manual

**`Base.astro` har page par khud lagata hai (kuch karna nahi):**

- **Organization** — name, logo (`/logo.png`), slogan, aur `sameAs` jo
  `src/data/social.ts` ke 16 social profiles se auto banta hai
- **BreadcrumbList** — canonical URL ke path se auto-generate (Home → Apps →
  App → Download → Platform tak). Naya page = breadcrumbs free mein
- **WebSite** — sirf homepage par

**Page-specific schema (template khud lagata hai):**

| Page | Schema |
|---|---|
| Homepage | FAQPage (homepage FAQ se) |
| App detail | SoftwareApplication (rich: description, image, category, featureList, author) + FAQPage |
| /apps hub | ItemList (saare live apps) |
| Download index | ItemList + FAQPage |
| Download platform | SoftwareApplication + FAQPage |
| Tools hub (/pass/) | ItemList + FAQPage |
| Tool detail (/pass/…) | WebApplication + FAQPage |

**App ki category** `src/data/apps.ts` ke `appCategory` map mein hai
(schema.org values: `UtilitiesApplication`, `MultimediaApplication`,
`BusinessApplication`…) — naya app add karte waqt wahan entry dalna.

> ⚠️ **FAQ rich results Google ne band kar diye hain** (2023 mein sirf
> gov/health sites tak simit hue, 2026 mein poori tarah deprecated — Exa se
> verified). FAQPage schema phir bhi rakhte hain: visible FAQ content AI
> answer engines (ChatGPT/Perplexity) ke kaam aata hai aur Bing use karta
> hai; Google ko isse koi nuksaan nahi, bas snippet ki ummeed mat rakho.
> **Fake ratings/reviews kabhi mat dalna** — policy violation hai.

## AEO (AI search)

- `public/llms.txt` — site ka markdown index AI tools ke liye. Naya app ya
  main page add ho toh wahan bhi ek line jodo. (Honest note: Ahrefs ki
  137K-site study ke mutabiq zyada tar llms.txt files koi padhta hi nahi —
  yeh sasti insurance hai, jaadoo nahi. Asli AEO = saaf Q&A content aur
  sahi schema, jo upar covered hai.)
- Visible FAQ sections har app page + download pages par isiliye hain —
  AI engines Q&A format content cite karte hain.

## Sitemap

`npm run build` ke baad `dist/sitemap-0.xml` + `sitemap-index.xml`
auto-generate hote hain. Naya page verify karo:

```bash
grep -o "https://dusrel.com/apps/mera-app[^<]*" dist/sitemap-0.xml
```

Sitemap mein hai = Google index karega. Download pages bhi isi mein aate hain.

## Verify karna

```bash
npm run build
# Page par kaun se schema lage — sab valid JSON hone chahiye:
grep -o '"@type":"[A-Za-z]*"' dist/apps/mera-app/index.html | sort -u
# Organization mein sameAs null toh nahi (social.ts ka field `url` hai, `href` nahi!):
grep -o '"sameAs":\[[^]]*\]' dist/index.html | head -c 200
```
