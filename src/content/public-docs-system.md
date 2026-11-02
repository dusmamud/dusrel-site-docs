# Public docs (/docs/) — user-facing documentation

> **STATUS: PLANNED — abhi build nahi hua** (user order, 2026-11-02).
> Yeh chapter sirf design record hai taaki build ke waqt dobara research
> na karni pade. Build karne se pehle user se approval lena. Is chapter me
> likha kuch bhi live hone ka daava nahi karta.

## Yeh kya hai — aur handbook se kya farq hai

`dusrel.com/docs/` par **user-facing** docs honge: har Dusrel web app, har
`/pass/` tool, aur tech articles — kaise use karein (how-to) + technical
details (kaise kaam karta hai, limits, formats). Yeh handbook (jo tum padh
rahe ho) **internal** hai — sirf tum dekhte ho. Dono ko kabhi mix mat karo:

| | Public docs (`dusrel.com/docs/`) | Yeh handbook (`dusrel-site-docs`) |
|---|---|---|
| Audience | Users | Sirf tum (internal ops) |
| Content | Apps, tools, how-to, technical explainers | Site manage karne ke rules, infra, checklists |
| Kabhi mat daalo | Infra, tokens, Cloudflare, revenue, unreleased plans | — |

## URL scheme (site ke existing locale system se matching)

| | EN | HI |
|---|---|---|
| Landing | `dusrel.com/docs/` | `dusrel.com/hi/docs/` |
| Article | `dusrel.com/docs/<slug>/` | `dusrel.com/hi/docs/<slug>/` |

- Slug **dono locales me same** rahega (jaise tools ke slugs same hain).
- Trailing slash har jagah (site ka SEO rule — canonical/og/hreflang sab
  trailing-slash).
- Koi auto-redirect mat lagana (browser language se redirect karna Google
  ke guidelines ke khilaaf hai). Language switcher sirf link dega.

## Architecture (planned — site ki conventions se matching)

| Cheez | File / jagah |
|---|---|
| Doc content (Markdown, EN+HI) | `src/content/docs/en/<slug>.md`, `src/content/docs/hi/<slug>.md` |
| Collection + frontmatter schema (Zod validation) | Astro content collection `docs` (glob loader, build-time prerender) |
| Docs ki registry (single source of truth) | `src/data/docs.ts` — ek line per doc: `{ slug, category, order }` |
| Landing template | `src/components/DocsLanding.astro` (category-wise index) |
| Article template | `src/components/DocPage.astro` (breadcrumbs, TOC, prev/next, updated date, language switcher) |
| Routes | `src/pages/docs/[...slug].astro` + `src/pages/hi/docs/[...slug].astro` (patle wrappers) |
| SEO | JSON-LD TechArticle + BreadcrumbList; sitemap auto (existing `@astrojs/sitemap`) |

Title/description **sirf frontmatter** se aayenge — registry me title
duplicate mat karo (drift hota hai). Sidebar + landing registry ke order
se bante hain, titles frontmatter se.

### Frontmatter schema (har .md me, Zod se validate hoga)

```yaml
---
title: "QR Code Generator kaise kaam karta hai"
description: "QR code browser me hi banta hai — koi server call nahi."
category: "concepts"   # apps | tools | guides | concepts
type: "explanation"   # tutorial | how-to | reference | explanation (Diátaxis)
updated: 2026-11-02
draft: false          # true = build se bahar, publish nahi hoga
---
```

### Categories — Diátaxis ke 4 types se mapping

Ek page ek hi kaam kare — purposes mix mat karo (yeh Diátaxis ka core
rule hai, Exa se cross-verified):

| Category | Diátaxis type | Example |
|---|---|---|
| Apps | explanation + how-to | ShrinkIt kya hai, kaise use karein |
| Tools | how-to | QR generator ke saare options ka matlab |
| Guides | tutorial / how-to | Pehla QR code banana, step-by-step |
| Concepts | explanation / reference | Client-side processing kya hai, limits kya hain |

## Naya doc add karna (user ka core flow — bas 2 steps)

1. `.md` file banao: `src/content/docs/en/<slug>.md` (HI translation ho to
   `src/content/docs/hi/<slug>.md` bhi, **same slug**)
2. `src/data/docs.ts` me **ek line** jodo: `{ slug: '<slug>', category: '...', order: N }`
3. `npm run build` → sitemap me `/docs/<slug>/` verify karo
4. Git push → `deploy.yml` auto-deploy (koi naya infra nahi chahiye)

Registry se line hatana = unpublish (file delete mat karo — handbook ka
"unpublish, never delete" rule yahan bhi laagu).

## i18n / SEO rules (Google guidelines se, Exa-verified)

- **HI doc tabhi publish karo jab uska HI .md maujood ho.** Bina
  translation ke HI URL mat banao — na sitemap me, na hreflang me.
- Real translation: canonical khud ko; hreflang me **har** version (khud
  samet) + `x-default` → EN page. Dono taraf se link hona zaroori hai,
  warna Google hreflang ignore kar deta hai.
- Language switcher: doosri locale ka link **sirf tab** dikhao jab us doc
  ka us locale me translation ho; warna us locale ke `/docs/` home ka
  link do.
- Har doc page par `lang` attribute + translated title/description
  (frontmatter se) hona chahiye. English text ko Hindi navigation ke
  saath mat dikhao (fallback copy ban jata hai).
- Seed content sachha hona chahiye: jo app/feature live nahi hai, uska
  doc mat banao. "Free forever" jaise absolute daave public docs me mat
  likho (yeh site copy ka pehle se noted risk hai).

## Search — Phase 1 me nahi

Phase 1 me sidebar + category-wise landing kaafi hai. Search Phase 2 ka
option hai (Pagefind — static search, koi server nahi). Phase 1 me search
add karke scope mat badhao.

## Build-time checklist (jab user build approve kare)

- [ ] Collection + schema + 2 templates + 2 route wrappers
- [ ] Seed docs (user se decide karwana: kaunse 3–5 docs pehle)
- [ ] `Base.astro` ke `staticLabels` me `docs` ka breadcrumb label (EN+HI)
- [ ] Footer me Docs link (kis column me — user se poochna)
- [ ] `site-pages-map.md` chapter me `/docs/` pages jodna
- [ ] `llms.txt` me docs section ki line
- [ ] Build → sitemap verify → deploy → live check (EN + HI article)
