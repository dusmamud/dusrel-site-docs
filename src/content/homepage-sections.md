# Homepage sections guide

Homepage (`src/pages/index.astro`) 12 components ka bana hai. Har component `src/components/` mein hai aur `lang` prop leta hai. Order page par yahi hai:

| # | Section | Component | Data / content kahan se |
|---|---|---|---|
| 1 | Hero | `Hero.astro` | i18n `hero` + app icons ka orbit (`apps.ts` live apps) |
| 2 | Ecosystem | `Ecosystem.astro` | `apps.ts` — live + soon apps ki grid |
| 3 | Devices | `Devices.astro` | i18n `devices` |
| 4 | How It Works | `HowItWorks.astro` | i18n `howItWorks` |
| 5 | Showcase | `Showcase.astro` | `showcase-<slug>.jpg` images + `apps.ts` |
| 6 | Why Dusrel | `WhyDusrel.astro` | i18n `why` |
| 7 | Roadmap | `Roadmap.astro` | `soonApps` — **Coming soon** chapter dekho |
| 8 | Waitlist | `Waitlist.astro` | i18n `waitlist` + soon apps |
| 9 | Pricing | `Pricing.astro` | i18n `pricing` |
| 10 | Open Source | `OpenSource.astro` | i18n `openSource` |
| 11 | FAQ | `Faq.astro` | i18n `faq` + **FAQPage JSON-LD** auto |
| 12 | Final CTA | `FinalCta.astro` | i18n `finalCta` + `public/images/cta-banner.jpg` |

## Section edit karna

- **Text badalna:** `src/i18n/en.ts` + `hi.ts` mein us section ki keys — component ko chhune ki zaroorat nahi
- **Design badalna:** `src/components/<Section>.astro` — ek hi component EN/HI dono serve karta hai (`lang` prop se), isliye ek jagah change = dono languages updated ✅
- **Section hatana/order badalna:** `src/pages/index.astro` + `src/pages/hi/index.astro` — dono mein same change karo

## FAQ add karna

`en.ts` + `hi.ts` ke `faq` array mein question/answer add karo — page par accordion bhi banega aur **FAQPage JSON-LD schema bhi auto update** hoga (Google rich results ke liye). Sirf ek language mein add mat karna — dono mein dalo.

## Header & Footer (har page par)

- `SiteNav.astro` — top navigation. **Rule: sirf real page links, `#anchor` kabhi nahi**
- `Footer.astro` — social icons (`social.ts` se, agla chapter), page links, "A Dusrel product" wali branding
- `ThemeToggle.astro` — light/dark switch (Theme system chapter)
