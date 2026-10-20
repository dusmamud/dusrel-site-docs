# Coming soon, Roadmap aur Waitlist

dusrel.com par jo apps abhi bane nahi hain (Drive, Chat, Docs, Sheets…) woh **coming soon** system se chalte hain — sab `src/data/apps.ts` se.

## Kaise kaam karta hai

`apps.ts` mein bas itna sa farq hai:

```ts
{ slug: 'drive', url: '', status: 'soon' }   // ← url khali, status soon
```

- `status: 'soon'` wale apps **auto** in jagah par dikhne lagte hain:
  - Homepage **Roadmap** section
  - Homepage **Waitlist** section
  - Ecosystem grid mein "coming soon" badges ke saath

## Roadmap ka order rule

`Roadmap.astro` soon apps ko 2 hisso mein baantta hai:

| Group | Kaun se apps | Logic |
|---|---|---|
| **Coming next** | Pehle **4** soon apps | `soonApps.slice(0, 4)` |
| **On the horizon** | Baaki saare | `soonApps.slice(4)` |

> **Order = priority hai.** `apps.ts` mein soon apps ki list ka order badalna matlab roadmap ki priority badalna. Jo app sabse pehle bann raha hai use list mein sabse upar rakho.

## App launch ho jaye toh

Ek hi change — teen kaam apne aap ho jayenge:

```ts
// pehle:
{ slug: 'drive', url: '', status: 'soon' }
// baad mein:
{ slug: 'drive', url: 'https://drive.dusrel.com', status: 'live' }
```

App Roadmap/Waitlist se hat jayega, live grid mein aa jayega, aur `/apps/drive` detail page ban jayega (baaki ke steps — i18n content, feature icons, assets — ke liye **"Landing page par naya app add karna"** chapter dekho).
