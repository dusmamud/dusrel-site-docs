# Theme system (light/dark)

dusrel.com par **Light / Dark / System** theme hai. Settings: `src/components/ThemeToggle.astro` (header ka switch) + `src/layouts/Base.astro` (har page par lagta hai).

## Kaise kaam karta hai

1. User ki choice `localStorage` key **`dusrel-theme`** mein save hoti hai (`light` / `dark` / `system`)
2. `Base.astro` ke `<head>` mein ek chhota **inline script** page render hone se **pehle** chalti hai — yeh `dark` class laga deti hai taaki **flash (FOUC) na aaye**. Page pehle light phir dark "jump" nahi karta
3. Wahi script browser ki `theme-color` meta bhi set karti hai (dark → `#121212`, light → `#ffffff`)
4. CSS mein dark styles Tailwind ke `dark:` variants se hain (class-based dark mode)

## Dhyaan rakhne wali baatein

- **Inline script ko hatana ya move karna mat** — FOUC wapas aa jayega
- Naya component banao toh **dono themes** ke styles likho (`dark:` variants) — sirf light test karke mat chhodo
- Kuch purane fixes yaad rakho: menu khula ho toh body scroll lock hota hai, aur `scrollRestoration` manual hai (page refresh par position jump issue ki wajah se) — yeh jaanboojhkar hai

## Dusre Dusrel products mein theme

- **Web apps** (Ricsline, PDF Tools waghera): Light/Dark/System — same pattern
- **Yeh docs site:** Light/Dark toggle (system default)
- **ShrinkIt web:** circular theme toggle (dusrel.com jaisa hi circular button)
