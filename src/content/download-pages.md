# Download pages banana

Har app ke liye `/apps/<slug>/download` (saare platforms) aur `/apps/<slug>/download/<platform>` (detail: install steps + system requirements) pages **ek hi file** se bante hain:

## `src/data/downloads.ts` — single source of truth

File ke top par poora how-to header comment mein likha hai. Ek platform add karne ka format:

```ts
{
  slug: 'mera-app',
  tagline: { en: 'One-line tagline', hi: 'एक लाइन की टैगलाइन' },
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

## Verify karna

```bash
npx vitest run          # downloads.test.ts: slug valid? fields complete? file public/ mein hai?
npm run build
ls dist/apps/mera-app/download/   # index.html + <platform>/
grep -o "apps/mera-app/download[^<]*" dist/sitemap-0.xml
```
