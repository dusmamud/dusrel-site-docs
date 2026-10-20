# Social links (social.ts)

Footer ke social icons ka **single source of truth**: `src/data/social.ts`. Har entry ek `name`, profile `url`, aur 24×24 ka brand glyph `<path>`.

## Design rule (janboojhkar)

Saare icons **monochrome** hain (`fill=currentColor`) — brand ke original colors **nahi** use hote. Yeh isliye taaki light/dark theme mein icons apne aap adapt kar jayein. Design choice hai, bhool se nahi hua.

## Network add karna

1. `src/data/social.ts` mein `socials` array mein ek entry add karo:
   - `name`: "Dusrel on Bluesky" (accessible label)
   - `url`: profile ka full URL — sab `dusrel` handle use karte hain
   - `icon`: [simple-icons](https://simpleicons.org) se us network ka 24×24 `<path>` copy-paste karo
2. `npm run build` — footer apne aap pick kar lega

Network **hatana** ho toh entry delete karo — bas.

## Handle ka dhyaan

Saare profiles `dusrel` username ke hain. Jo handles abhi claim nahi hue hain unke links bhi list mein hain — **har platform par `dusrel` username claim karna baaki hai** (first-come-first-served). Yeh pending kaam list se mat hatao.

ShrinkIt ka official handle alag hai: **`@drskrinkit`** (X/Twitter) — yeh sirf ShrinkIt web app ke OG tags mein hai, dusrel.com footer mein nahi.
