# Download pages banana

Har app ke liye `/apps/<slug>/download` (saare platforms) aur `/apps/<slug>/download/<platform>` (detail: install steps + system requirements) pages **ek hi file** se bante hain:

## `src/data/downloads.ts` — single source of truth

File ke top par poora how-to header comment mein likha hai. Ek platform add karne ka format:

```ts
{
  slug: 'mera-app',
  category: 'UtilitiesApplication',    // schema.org applicationCategory
  tagline: { en: 'One-line tagline', hi: 'एक लाइन की टैगलाइन' },
  intro: [                             // index page par rich body copy (2-3 paragraphs)
    { en: 'Paragraph about the app…', hi: 'ऐप के बारे में पैराग्राफ…' },
  ],
  platforms: [
    {
      platform: 'windows',            // 'windows' | 'macos' | 'linux' | 'android' | 'ios' | 'chrome'
      version: '1.0.0',
      fileSize: '12 MB',
      updated: '2026-10-20',          // YYYY-MM-DD
      fileName: 'mera-app-windows-1.0.0.exe',
      downloadUrl: '/downloads/mera-app-windows-1.0.0.exe',
      os: { en: 'Windows 10+', hi: 'Windows 10+' },
      requirements: [
        { en: 'Windows 10 64-bit or later', hi: 'Windows 10 64-bit ya naya' },
      ],
      steps: [
        {
          title: { en: 'Download the installer', hi: 'Installer download karo' },
          body: { en: 'Click the button above…', hi: 'Upar button dabao…' },
        },
        // …jitne steps chahiye
      ],
      notes: [
        { en: 'Note text here', hi: 'Yahan note' },  // optional
      ],
      faqs: [                           // accordion + FAQPage JSON-LD — lazmi
        {
          q: { en: 'Is it free?', hi: 'क्या यह मुफ्त है?' },
          a: { en: 'Yes, completely free.', hi: 'हाँ, पूरी तरह मुफ्त।' },
        },
      ],
    },
  ],
}
```

**Har user-facing string mein `en` + `hi` dono** — alag i18n file edit karne ki zaroorat nahi.

## Downloadable file kahan rakho

`public/downloads/` mein file dalo, aur `downloadUrl` mein `/downloads/<file>` likho. Build ke baad yeh `dist/downloads/` mein copy ho jayegi aur button se direct download hogi.

> Sirf **real files** ke liye entry banao. Agar Windows build abhi ready nahi hai, toh `platforms` mein Windows mat dalo — page hi nahi banega, aur koi tootey hue link nahi dikhenge.

## Naya platform type add karna (jaise `harmonyos`)

1. `PlatformSlug` type mein `'harmonyos'` add karo
2. `platformMeta` mein uska label (en/hi) + glyph SVG add karo

Bas — purane entries ko chhune ki zaroorat nahi.

## Kya-kya auto hota hai

- `/apps/<slug>/download` — platform cards (glyph, label, version, size)
- `/apps/<slug>/download/<platform>` — bada download button, version/size/filename, system requirements (✓ list), numbered install steps, notes, "other platforms" links
- `/hi/` variants — sab kuch
- **Sitemap** — chaaro pages auto-include, Google index karega
- **App detail page** par Download button — `downloads.ts` mein entry hote hi apne aap dikhne lagta hai

## Rich-SEO contract (har entry mein hona hi chahiye)

Har download entry ko yeh fields **lazmi** bharne hain — tests inhe enforce karte hain:

| Field | Kahan hai | Kaam |
|---|---|---|
| `intro` | app entry | `/download` index page par body paragraphs (SEO copy) — sirf tagline se page "thin" lagta hai |
| `category` | app entry | schema.org `applicationCategory` (jaise `UtilitiesApplication`, `MultimediaApplication`) |
| `faqs` | har platform | Sawal-jawab — page par accordion bhi banta hai aur **FAQPage JSON-LD** bhi |

## Auto-generate hone wale SEO features

Tumhe manually kuch nahi karna — templates data se khud banate hain:

**Index page** (`/apps/<slug>/download/`):
- Canonical + OG image (`og-<slug>.png`) — **Base.astro** se
- **BreadcrumbList JSON-LD** (Apps → App → Download)
- **ItemList JSON-LD** (saare platform pages ki list)
- Intro paragraphs + platform cards (version, size, date, OS line)
- **"More downloads from Dusrel"** — dusre apps ke download pages ke links (internal linking)

**Platform page** (`/apps/<slug>/download/<platform>/`):
- **SoftwareApplication JSON-LD** — name, operatingSystem, category, version, fileSize, downloadUrl, `offers.price: 0`, author/publisher Dusrel
- **BreadcrumbList JSON-LD** (4 levels)
- **FAQPage JSON-LD** — `faqs` se auto
- FAQ accordion section (bina JS ke `<details>`)

> ⚠️ **Ratings/reviews kabhi mat dalna** jab tak real na hon. `aggregateRating` fake karna Google policy violation hai — schema bina rating ke bhi valid hai, bas star rich-result nahi milega.

## Verify karna

```bash
npx vitest run          # downloads.test.ts: slug valid? fields complete? file public/ mein hai? FAQs dono languages mein?
npm run build
ls dist/apps/mera-app/download/   # index.html + <platform>/
grep -o "apps/mera-app/download[^<]*" dist/sitemap-0.xml
grep -o '"@type": "[A-Za-z]*"' dist/apps/mera-app/download/windows/index.html | sort -u
# BreadcrumbList, SoftwareApplication, FAQPage — teeno dikhne chahiye
```
