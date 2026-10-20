# Web apps guide

5 web apps hain — sab `~/workspace/dusrel/web-apps/` mein. Folder ka naam = GitHub repo ka naam (rule kabhi mat todo).

## Har app ek nazar mein

| App | Folder | Repo | Live URL | Deploy |
|---|---|---|---|---|
| ShrinkIt | `shrinkit` | `dusmamud/shrinkit` | `shrinkit.dusrel.com` | GitHub Actions → Cloudflare Pages (`shrinkit-dr`) |
| Ricsline | `ricsline` | `dusmamud/ricsline` | `dusmamud.github.io/ricsline` | gh-pages + **autodeploy cron** (neeche dekho) |
| Image Quill | `imglove` | `dusmamud/imglove` | `imagequill.dusrel.com` | GitHub Pages |
| ResumeForge | `resumeforge` | `dusmamud/resumeforge` | `dusmamud.github.io/resumeforge` | GitHub Pages |
| PDF Tools | `pdf-tools` | `dusmamud/pdf-tools` | — | — |

> **Note:** Image Quill ka repo abhi bhi `imglove` naam se hai (rename pending). README ka `# ImgLove` title bhi stale hai — fix karna baaki hai.

## Deploy ke tareeqe

**Cloudflare Pages (ShrinkIt):** `main` par push → GitHub Actions build → Pages project `shrinkit-dr` par deploy.

**GitHub Pages (baaki):** build → `dist/` ko `gh-pages` branch par push. Har build ke baad `dist/.git` wipe ho jata hai, isliye:

```bash
npm run build
cd dist && git init -qb gh-pages && git add -A && git commit -qm "deploy"
# phir gh-push.py se gh-pages branch par push
```

Pages CDN ko 2–4 minute lagte hain — hard refresh karke verify karo.

## Ricsline autodeploy cron

Ricsline ke liye 15-minute ka cron hai (`ricsline-autodeploy`) jo `.autodeploy.py` chalata hai — naye commits check karta hai, build karta hai, aur `dist/` ko gh-pages par push karta hai. Body:

```
~/workspace/dusrel/web-apps/ricsline/.autodeploy.py
```

Yeh isliye hai kyunki PAT mein `workflow` scope nahi hai — GitHub Actions se deploy nahi ho sakta.

## Har app par Dusrel branding

Sab 5 apps par text co-branding lag chuki hai (header `by Dusrel` + footer `A Dusrel product` + about paragraph + README). Pattern ke liye **Branding rules** chapter dekho. Koi naya web app banao toh wahi pattern follow karo.
