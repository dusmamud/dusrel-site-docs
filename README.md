# Dusrel Site Docs

Internal handbook for managing **dusrel.com** — how to add a new app to the landing page, how download pages work, i18n, SEO, branding rules, build/test/deploy, and common gotchas.

> Internal docs (Hinglish). The repo is public, so never put passwords, API keys, tokens, or private info in here.

## Stack

React + Vite + TypeScript + Tailwind CSS v4. Content is plain Markdown in `src/content/`, rendered with `react-markdown` + syntax highlighting.

## Add a new chapter

1. Create `src/content/my-chapter.md`
2. Add one import + one line in `src/docs.ts`:

```ts
import myChapter from './content/my-chapter.md?raw';
// ...
{ slug: 'my-chapter', title: 'Mera naya chapter', md: myChapter },
```

## Develop

```bash
npm install
npm run dev      # local dev server
npx tsc --noEmit # type check
npm run build    # production build → dist/
```

## License

All Rights Reserved — proprietary, source-viewable only.
Copyright (c) 2026 dusmamud.
