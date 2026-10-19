# Overview — yeh docs kya hai

Yeh site **dusrel.com** ko manage karne ka personal handbook hai. Jab bhi bhool jao ki "naya app landing page par kaise add karte the" ya "download page ka system kaise kaam karta hai" — yahin dekho.

> Yeh docs **internal** hai — sirf tumhare liye. Repo public hai, isliye ismein kabhi koi password, API key, token ya private baat mat likhna.

## Dusrel hub ka map

Sab kuch `~/workspace/dusrel/` ke neeche hai. Folder ka naam = GitHub repo ka naam. Kabhi bhi Dusrel product ke liye `~/workspace/` mein naya top-level folder mat banana.

```
~/workspace/dusrel/
├── web-apps/
│   ├── shrinkit/        → dusmamud/shrinkit        (shrinkit.dusrel.com)
│   ├── ricsline/        → dusmamud/ricsline
│   ├── imglove/         → dusmamud/imglove         (Image Quill)
│   ├── resumeforge/     → dusmamud/resumeforge
│   └── pdf-tools/       → dusmamud/pdf-tools
├── android-apps/
│   └── shrinkit-android/ → dusmamud/shrinkit-android
├── ios-apps/            (khali — future)
├── extensions/
│   └── shrinkit-extension/ → dusmamud/shrinkit-extension
├── site/
│   ├── dusrel-site/       → dusmamud/dusrel        (dusrel.com — LIVE)
│   └── dusrel-site-docs/  → dusmamud/dusrel-site-docs (yeh docs site)
├── brand/
│   └── logo/              (Dusrel sparkle logo + app logos)
├── docs/                  (privacy policy, checklists)
└── README.md              (master registry)
```

## dusrel.com (dusrel-site) — 30 second mein samjho

- **Stack:** Astro + Tailwind v4 + React + TypeScript (strict)
- **Languages:** English + Hindi — alag-alag URLs (`/apps/shrinkit` aur `/hi/apps/shrinkit`), hreflang tags, sitemap
- **Design language:** single source of truth wali **TypeScript data files**. Koi bhi naya page/section banane ke liye `.astro` file nahi banani padti — sirf data file mein entry daalo, build khud pages generate kar deta hai.
- **Deploy:** GitHub repo `dusmamud/dusrel` ka `main` branch → **Cloudflare Pages** par auto-deploy (dusrel.com + dusrel.pages.dev)

## Do golden rules

1. **Slug se sab derive hota hai.** App ka `slug` (jaise `shrinkit`) dalte hi icon path (`/icons/shrinkit.svg`), showcase image (`/images/showcase-shrinkit.jpg`), aur detail page (`/apps/shrinkit`) apne aap jud jate hain. Naam kabhi rename mat karo.
2. **Pehle data file dekho.** Kuch bhi add karne se pehle `src/data/apps.ts` aur `src/data/downloads.ts` ke top par likhe header comments padho — wahan step-by-step likha hai.

## Is docs site ko kaise update karna hai

Har chapter `src/content/` mein ek `.md` file hai. Naya chapter:

1. `src/content/meri-file.md` banao (Markdown mein likho)
2. `src/docs.ts` mein import + sidebar entry add karo — bas, ho gaya

```ts
import meriFile from './content/meri-file.md?raw';
// ...
{ slug: 'meri-file', title: 'Mera naya chapter', md: meriFile },
```
