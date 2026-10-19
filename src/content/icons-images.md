# Icons aur images ke rules

## Naam ka pattern (sabse important)

Components **slug se path banate hain** — naam exact hona chahiye, warna image toot jayegi:

| Cheez | Path | Example |
|---|---|---|
| App icon | `public/icons/<slug>.svg` | `public/icons/shrinkit.svg` |
| Showcase image | `public/images/showcase-<slug>.jpg` | `public/images/showcase-shrinkit.jpg` |
| Download file | `public/downloads/<file>` | `public/downloads/shrinkit-chrome-1.0.0.zip` |
| OG image (optional) | `public/og-<page>.png` | `public/og-guide.png` |

> Kabhi rename mat karo. Agar slug `shrinkit` hai toh icon `shrinkit.svg` hi hoga.

## App icon (`public/icons/<slug>.svg`)

- 48×48 viewBox, rounded tile + white glyph
- Dusrel apps ka style: **blue gradient tile** (`#4d90fe` family) + simple white glyph
- Glyph simple rakho — chhote size par bhi saaf dikhna chahiye

## Showcase image (`public/images/showcase-<slug>.jpg`)

- ~720×720 px, JPG
- Homepage ke showcase section mein dikhti hai
- App ka UI ya concept dikhao — marketing wali clean image

## Dusrel logo

- `https://dusrel.com/logo.png` — yahi URL **JSON-LD structured data** mein use hota hai (SEO chapter dekho)
- Sparkle logo ka source: `~/workspace/dusrel/brand/logo/sparkle.svg`

## Yaad rakhne wali baat

Naya app add karte waqt **yeh 2 files bhoolna sabse common mistake hai** — bina inke build toh ho jayega, par homepage par tooti hui images dikhengi. Isliye `apps.test.ts` mein ek test hai jo check karta hai: *har live app ka icon + showcase file maujood hai ya nahi*.
