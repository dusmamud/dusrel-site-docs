# Chrome extension + Web Store (CWS)

## ShrinkIt extension

- **Folder:** `~/workspace/dusrel/extensions/shrinkit-extension/`
- **Repo:** `dusmamud/shrinkit-extension`
- **Tech:** WXT + React, Manifest V3
- **Permissions:** `storage`, `downloads`, `contextMenus`, `tabs`, `offscreen` · host_permissions: `<all_urls>`
- **Privacy URL:** `https://shrinkit.dusrel.com/privacy`

## CWS developer account

✅ **Account ban chuka hai** ($5 fee ho gaya). Display name: `Dusrel`, trader declare ho chuka hai (EU DSA).

## v1.0.0 submission — sab taiyaar hai

| Cheez | Kahan hai |
|---|---|
| Upload ZIP | `~/workspace/your_files/shrinkit-cws/shrinkit-v1.0.0.zip` |
| Screenshot 1 (editor) | repo mein `store/screenshot-1-editor.png` (1280×800) |
| Screenshot 2 (options) | repo mein `store/screenshot-2-options.png` (1280×800) |
| Promo tile | repo mein `store/promo-tile-440x280.png` |
| Review justification | repo mein `store/review-justification.md` |

**⏳ Baaki bas ek kaam hai: CWS dashboard mein khud submit karna** — ZIP upload, assets add, description likhna, privacy URL dalna, aur review justification paste karna. Yeh dashboard ka kaam tumhare haath se hoga.

## Review justification kyun zaroori hai

`<all_urls>` ek "broad permission" hai — Google reviewer justification maangega. Ready text `store/review-justification.md` mein hai. Short summary:

> Extension sirf us image ke bytes fetch karta hai jis par **user khud right-click kare** — koi browsing data, koi page content kabhi nahi padha jata.

## Naye version ke liye

1. `package.json` mein version bump karo
2. `wxt build` → naya ZIP
3. ZIP ko `public/downloads/` wali jagah + dusrel.com ke download page par update karo (**Download pages** chapter dekho — dusrel.com par ShrinkIt Chrome download page isi ZIP ko serve karta hai)
