# Common mistakes (gotchas)

Yeh woh galtiyan hain jo ho chuki hain — dobara mat karna.

## 1. Icon/showcase files bhool jana

Naya app add karke build green, par homepage par tooti images. **Hamesha** `public/icons/<slug>.svg` + `public/images/showcase-<slug>.jpg` dalo. `apps.test.ts` yeh check karta hai — test chalana mat bhoolo.

## 2. i18n mein ek language chhoot jana

`en.ts` mein key add ki, `hi.ts` bhool gaye → TypeScript error. **Pehle EN, phir HI, phir `tsc`.** Yeh order pakad lo.

## 3. Download page bina real file ke

`downloads.ts` mein platform entry daal di par file `public/downloads/` mein nahi hai → tootey hue download button. **Rule: file pehle, entry baad mein.** Test file ka na hona bhi pakad lega.

## 4. Slug rename karna

Slug se icon path, showcase path, detail page URL — sab derive hote hain. Rename = sab tootega. **Slug kabhi mat badlo.**

## 5. Duplicate meta title/description

Do pages par same title likh diya → SEO nuksaan. Har page ka meta unique rakho (SEO checklist dekho).

## 6. `.astro` file banane ki aadat

Naya app ya download page = **data entry, nayi file nahi**. Agar tum `src/pages/` mein nayi `.astro` file bana rahe ho kisi app ke liye, toh ruko — pehle `apps.ts` / `downloads.ts` dekho, wahan se ho jayega.

## 7. Cloudflare mein haath lagana

Settings mein kuch gadbad lage toh **khud change mat karo** — pehle batao. Standing rule: Cloudflare par sirf read/report, edit sirf tumhare explicit bole par.

## 8. Is docs site mein secrets likhna

Yeh repo **public** hai. Ismein kabhi password, API key, token, ya private info mat likhna — chahe "yaad rahe" isliye hi kyun na ho. Secrets ke liye Secure Vault hai.
