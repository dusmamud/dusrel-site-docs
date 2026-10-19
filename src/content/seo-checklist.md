# SEO checklist

Har naya page banate waqt yeh check karo. `Base.astro` layout ye props leta hai:

```astro
<Base
  lang="en"
  title="Page title — 60 chars se kam"
  description="150 chars ke aas-paas, page-specific"
  canonical="https://dusrel.com/apps/mera-app"
  noindex={false}
/>
```

## Rules

- **Har page ka title/description unique** — do pages par same meta mat likho (duplicate title Google ko pasand nahi)
- **Length:** title ~60 chars, description ~135–155 chars
- **Locale tags:** `og:locale` auto lagta hai (`en_US` / `hi_IN`... — site ke hisaab se)
- **404 page:** `noindex` — search mein nahi aana chahiye
- **Canonical URL:** hamesha `https://dusrel.com/...` (bina trailing slash confusion ke)

## Structured data (JSON-LD)

Homepage par **Organization + WebSite** schema hai:

- Organization: `Dusrel`
- Logo: `https://dusrel.com/logo.png`
- sameAs: x.com/dusrel, instagram, facebook, youtube, linkedin

Naye app ke detail page par uske hisaab ka schema add karna mat bhoolo (jaise FAQ ho toh FAQPage).

## Sitemap

`npm run build` ke baad `dist/sitemap-0.xml` + `sitemap-index.xml` auto-generate hote hain. Naya page verify karo:

```bash
grep -o "https://dusrel.com/apps/mera-app[^<]*" dist/sitemap-0.xml
```

Sitemap mein hai = Google index karega. Download pages bhi isi mein aate hain.

## Social preview (OG/Twitter)

- Har main page par OG tags hain; zaroori pages ke liye `public/og-<page>.png` (1200×630) banao
- `twitter:site` / `twitter:creator` — app ke official handle par set karo
