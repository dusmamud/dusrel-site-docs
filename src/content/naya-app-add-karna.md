# Landing page par naya app add karna

dusrel.com par naya app dikhane ke liye **koi nayi `.astro` file nahi banani**. Sirf 5 jagah entry karni hai — phir `npm run build` karte hi ye sab apne aap update ho jata hai:

Hero orbit · ecosystem grid · showcase · roadmap/waitlist · apps hub · footer · `/apps/<slug>` detail page (EN + Hindi dono)

## Checklist (order mein karo)

### 1. `src/data/apps.ts` — ek line add karo

```ts
export const apps: AppEntry[] = [
  // --- Live ---
  { slug: 'shrinkit', url: 'https://shrinkit.dusrel.com', status: 'live' },
  { slug: 'mera-app', url: 'https://mera-app.dusrel.com', status: 'live' }, // ← nayi line
  // --- Coming soon ---
  { slug: 'drive', url: '', status: 'soon' },
];
```

- `slug` — chhota, URL-safe, kabhi change mat karna (sab kuch isi se derive hota hai)
- `status: 'live'` — launch ho chuka app · `status: 'soon'` — roadmap/waitlist mein dikhega

### 2. `src/i18n/en.ts` + `src/i18n/hi.ts` — naam aur detail content

`appContent['mera-app']` mein: naam, tagline, short description, feature bullets.

`appPages['mera-app']` mein detail page ka poora content:

```
metaTitle, metaDesc, name, tagline, heroSub, openApp,
bullets, featuresTitle, features[], privacyTitle,
privacyBody, moreTitle, ctaTitle, ctaSub, ctaButton
```

> Dono files mein **same keys** hone chahiye, warna TypeScript error dega. Pehle `en.ts` mein likho, phir `hi.ts` mein Hindi translate karke dalo.

### 3. `src/data/feature-icons.ts` — 6 feature icons

```ts
'mera-app': [
  '<svg ...>...</svg>',  // 6 SVG strings
],
```

Har icon ek inline SVG string hai. Dusre apps ke icons ko template ki tarah copy karke glyph badal do.

### 4. Assets — `public/` mein 2 files

| File | Size | Kaam |
|---|---|---|
| `public/icons/mera-app.svg` | 48×48 viewBox | Har jagah app ka icon |
| `public/images/showcase-mera-app.jpg` | ~720×720 | Homepage showcase section |

Naam ka pattern **exact** hona chahiye — components slug se path banate hain.

### 5. Build + verify

```bash
npm run build
```

- `dist/apps/mera-app/index.html` bana? ✅
- `dist/hi/apps/mera-app/index.html` bana? ✅
- Homepage par ecosystem grid mein dikh raha hai? ✅

## Detail page kaise banta hai (samajhne ke liye)

`src/pages/apps/[slug].astro` ek hi template hai. `getStaticPaths()` `liveApps` par loop karke **har app ke liye alag HTML** generate karta hai. Isi liye naya app = nayi `.astro` file nahi, sirf data entry.

Download button detail page par **tabhi** dikhta hai jab us app ki entry `src/data/downloads.ts` mein ho (agle chapter mein).
