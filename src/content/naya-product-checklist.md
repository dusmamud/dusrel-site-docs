# Naya Dusrel product banane ki checklist

Jab bhi naya app/product banao, is order mein kaam karo:

## 1. Hub mein folder

```
~/workspace/dusrel/<platform>/<repo-naam>/
   web-apps/ · android-apps/ · ios-apps/ · extensions/ · site/
```

> **Folder naam = GitHub repo naam.** Dusrel product ke liye `~/workspace/` mein top-level folder **kabhi nahi**.

## 2. GitHub repo

- `dusmamud/<repo-naam>` par repo banao (public ya private, product ke hisaab se)
- Naya khaali repo push par 409 de toh pehle seed commit (**GitHub push** chapter)

## 3. dusrel.com registry update

`~/workspace/dusrel/README.md` ke map mein naya product add karo — yeh master registry hai.

## 4. Branding (day 1 se)

Text co-branding pattern lagao: header `by Dusrel` + footer `A Dusrel product` → `https://dusrel.com` + About paragraph. Product logo untouched, sparkle UI mein nahi. (**Branding rules** chapter)

## 5. dusrel.com par app add karo

`apps.ts` entry → i18n content (EN+HI) → feature icons → `public/icons/<slug>.svg` + showcase image → build. (**"Landing page par naya app add karna"** chapter)

## 6. Downloads (agar app downloadable hai)

File `public/downloads/` mein + `downloads.ts` entry → download pages auto. (**"Download pages banana"** chapter)

## 7. LICENSE

Sab repos par **All Rights Reserved** (proprietary, source-viewable only) — MIT **nahi**:

```
Copyright (c) 2026 dusmamud
```

## 8. Docs mein entry

Isi docs site mein product ka chapter add karo — `src/content/` mein `.md` + `src/docs.ts` mein ek line. Taaki 6 mahine baad bhi yaad rahe ki yeh product kaise manage hota hai.
