# GitHub par push karna (gh-push.py)

> **Plain `git push` HTTPS par kaam NAHI karta.** PAT sirf `api.github.com` ko authorize karta hai — isliye har push Git Data API se hota hai.

## Push command

```bash
PYTHONPATH=/opt/muse/skills/custom-connector-setup/bin \
~/workspace/custom-connectors/custom.legacy-github/bin/gh-push.py \
  <repo-folder> <owner/repo> <branch> "<commit message>"
```

Example:

```bash
PYTHONPATH=/opt/muse/skills/custom-connector-setup/bin \
~/workspace/custom-connectors/custom.legacy-github/bin/gh-push.py \
  ~/workspace/dusrel/site/dusrel-site dusmamud/dusrel main "feat: naya section"
```

- Har file ek blob banta hai — bade repos mein **2–3 minute** lagte hain, normal hai
- Script `git ls-files` use karta hai — sirf **committed/tracked files** jayenge. Pehle `git add -A && git commit` karna mat bhoolo

## API se kuch bhi karna (gh-api.py)

```bash
PYTHONPATH=/opt/muse/skills/custom-connector-setup/bin \
~/workspace/custom-connectors/custom.legacy-github/bin/gh-api.py \
  GET /repos/dusmamud/dusrel
```

Naya repo banana: `POST /user/repos '{"name":"mera-repo","private":false}'`

## PAT ki limits (yaad rakho)

1. **`workflow` scope NAHI hai** — `.github/workflows/*` files push nahi hoti (tree creation 404). Workaround: workflow file GitHub web UI se manually add karo, ya `workflow` scope wala naya PAT banao. *(Isi liye Ricsline ka autodeploy cron hai.)*
2. **Naya khaali repo 409 deta hai** — API se banaya repo pehle push par `409 Git Repository is empty` fail hota hai. **Fix:** pehle `PUT /contents/README.md` se ek seed commit karo, phir gh-push chalega.

## Git author config

Har repo clone mein repo-local author set karo:

```bash
git config user.name "Muse"
git config user.email "muse@<product>.local"
```
