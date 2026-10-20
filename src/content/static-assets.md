# Static assets — robots, PWA, favicons, logo files

`public/` ka inventory — yeh sab **build mein as-is copy** hote hain (`dist/` mein seedha jate hain).

## SEO & crawling

| File | Kaam |
|---|---|
| `public/robots.txt` | `Allow: /` + sitemap URL — crawler rules |
| `sitemap-index.xml` / `sitemap-0.xml` | **Build par auto-generate** (Astro sitemap integration) — manually edit mat karo |

## Favicon & PWA set

dusrel.com ke paas poora favicon/PWA set hai:

- `favicon.svg`, `favicon.ico`, `favicon-96x96.png`
- `apple-touch-icon.png` (+ 152×152, 167×167)
- `safari-pinned-tab.svg`
- `site.webmanifest` (PWA manifest)
- `public/icons/pwa/icon-{192,384,512,1024}.png` + **maskable** variants

**Maskable rule yaad rakho:** maskable icons mein hamesha **solid background** (transparent nahi).

## Brand logo files (`public/logo/`)

| File | Kaam |
|---|---|
| `logo.png` / `logo.svg` / `dusrel.svg` | Main logo — **`https://dusrel.com/logo.png` yahi hai jo Organization JSON-LD mein use hota hai** (SEO chapter) |
| `dusrel-solid-black.svg` / `dusrel-solid-white.svg` | Solid color variants |
| `dusrel-outline.svg` / `dusrel-outline-black.svg` | Outline variants |
| `dusrel-play-header-midnight.jpg` / `dusrel-play-header-arctic.jpg` | Play Store header images |

Naya logo variant banaye toh yahin dalo — brand page (`/brand`) isi folder se render hota hai.

## Homepage images

| File | Kahan use hoti hai |
|---|---|
| `public/images/cta-banner.jpg` | `FinalCta` section ka banner |
| `public/images/privacy-shield.jpg` | Privacy section ki image |

Image **badalni** ho toh same filename + same size/aspect rakho — component code change karne ki zaroorat nahi padegi.
