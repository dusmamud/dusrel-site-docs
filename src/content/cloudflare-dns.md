# Cloudflare, DNS aur email

## ⚠️ Standing rule (sabse pehle)

> **Cloudflare (ya kisi infra) mein koi edit/change SIRF tumhare explicit bole par hota hai.** Warna sirf read + report. Yeh rule kabhi mat todo.

## Setup ek nazar mein

| Cheez | Kahan hai |
|---|---|
| Domain | `dusrel.com` |
| DNS | **Spaceship** (registrar) |
| Hosting | Cloudflare Pages — projects: `dusrel` (dusrel.com), `shrinkit-dr` (shrinkit.dusrel.com) |
| Analytics | Cloudflare Web Analytics (cookie-less) |
| Email | Cloudflare Email Routing → `hello@dusrel.com` |

## Email Routing ki limit

`hello@dusrel.com` sirf **incoming mail forward** karta hai tumhare Gmail par. Isse mail **bhej nahi sakte**. Send + receive dono chahiye toh full mailbox lagega (jaise Zoho Mail free plan) — abhi pending decision hai.

## CNAME kaise add hota hai (example)

Naya subdomain (jaise `imagequill.dusrel.com`) ke liye DNS record **Spaceship** par add hota hai — yeh tum khud karte ho (2026-10-15 ko imagequill ka CNAME tumne hi add kiya tha).

## Kuch gadbad lage toh

Pehle diagnose karo (read-only), user ko batao, **phir** uske bole par hi change karo. Galti se "fix" karne ke chakkar mein live site mat todo.
