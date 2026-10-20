# Logo & icon rules

## 1024×1024 app icon — safe zone (STANDING RULE)

Koi bhi logo jo 1024×1024 app icon banega, uska **critical content center 80% (~820px) ke andar** hona chahiye. Bahar ka hissa squircle/system mask kaat deta hai.

| Platform | Safe area |
|---|---|
| General | 820px (center 80%) |
| Android adaptive | ~626px guaranteed-safe (max ~683px) |
| iOS | Critical marks 820px ke andar; corners kabhi pre-round mat karo |

## PWA / maskable icons

**Maskable icons mein hamesha solid background** — transparent kabhi nahi (tumhara rule).

## Design language

- **Professional, clean, minimalist** — no glow, no neon, no futuristic styling
- Dusrel wordmark: **Sora Bold** (Poppins reject ho chuka hai)
- Docs/site body font: **Inter**, headings: **Sora** — dusrel.com se match karta hai
- Dusrel brand blue: `#4d90fe`

## Raster → SVG pipeline (agar logo redraw karna ho)

`~/workspace/logo/` mein reference pipeline hai: gradient watershed → contour tracing → smoothing → corner detection → Bezier fitting. Gradient 1D axis fit se. Verify: actual SVG path ko rasterize karke original se pixel-diff karo.

## Logo delivery rule

Jab logo deliver karo toh **chat mein bhejo AUR project folder mein save karo** — dono. Sirf ek jagah nahi.

## App logos ka store

Tumhare approved app logos: `~/workspace/logo/dusrel-apps/` — sirf wahi save hota hai jo tum naam karke bhejte ho, kuch extra nahi. Dusrel sparkle source: `~/workspace/logo/sparkle.svg`.
