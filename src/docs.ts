// Sidebar structure. Har chapter ek .md file hai src/content/ mein.
// Naya chapter add karna = .md file banao + yahan ek line add karo. Bas.

import overview from './content/overview.md?raw';
import nayaApp from './content/naya-app-add-karna.md?raw';
import downloadPages from './content/download-pages.md?raw';
import toolsPages from './content/tools-pages.md?raw';
import i18n from './content/i18n.md?raw';
import iconsImages from './content/icons-images.md?raw';
import seo from './content/seo-checklist.md?raw';
import branding from './content/branding-rules.md?raw';
import buildDeploy from './content/build-test-deploy.md?raw';
import gotchas from './content/gotchas.md?raw';
import sitePages from './content/site-pages-map.md?raw';
import homeSections from './content/homepage-sections.md?raw';
import socialLinks from './content/social-links.md?raw';
import comingSoon from './content/coming-soon-roadmap.md?raw';
import themeSystem from './content/theme-system.md?raw';
import staticAssets from './content/static-assets.md?raw';
import webApps from './content/web-apps-guide.md?raw';
import androidPlay from './content/android-play-console.md?raw';
import extensionCws from './content/chrome-extension-cws.md?raw';
import githubPush from './content/github-push.md?raw';
import cloudflare from './content/cloudflare-dns.md?raw';
import logoRules from './content/logo-icon-rules.md?raw';
import nayaProduct from './content/naya-product-checklist.md?raw';

export interface Chapter {
  slug: string;
  title: string;
  md: string;
}

export interface Section {
  title: string;
  chapters: Chapter[];
}

export const sections: Section[] = [
  {
    title: 'Shuruaat',
    chapters: [
      { slug: 'overview', title: 'Overview — yeh docs kya hai', md: overview },
    ],
  },
  {
    title: 'dusrel.com — Apps',
    chapters: [
      { slug: 'naya-app', title: 'Landing page par naya app add karna', md: nayaApp },
      { slug: 'download-pages', title: 'Download pages banana', md: downloadPages },
      { slug: 'tools-pages', title: 'Tools pages (/pass/) banana', md: toolsPages },
    ],
  },
  {
    title: 'dusrel.com — Content',
    chapters: [
      { slug: 'i18n', title: 'Hindi/English (i18n) system', md: i18n },
      { slug: 'icons-images', title: 'Icons aur images ke rules', md: iconsImages },
      { slug: 'seo', title: 'SEO checklist', md: seo },
    ],
  },
  {
    title: 'dusrel.com — Pages & UI',
    chapters: [
      { slug: 'site-pages', title: 'Site ka map — saare pages', md: sitePages },
      { slug: 'homepage-sections', title: 'Homepage sections guide', md: homeSections },
      { slug: 'social-links', title: 'Social links (social.ts)', md: socialLinks },
      { slug: 'coming-soon', title: 'Coming soon, Roadmap aur Waitlist', md: comingSoon },
      { slug: 'theme', title: 'Theme system (light/dark)', md: themeSystem },
      { slug: 'static-assets', title: 'Static assets — robots, PWA, logos', md: staticAssets },
    ],
  },
  {
    title: 'Products',
    chapters: [
      { slug: 'web-apps', title: 'Web apps guide (saare 5 apps)', md: webApps },
      { slug: 'android', title: 'Android app + Play Console', md: androidPlay },
      { slug: 'extension', title: 'Chrome extension + Web Store', md: extensionCws },
    ],
  },
  {
    title: 'Infra & Rules',
    chapters: [
      { slug: 'github-push', title: 'GitHub par push karna (gh-push.py)', md: githubPush },
      { slug: 'cloudflare', title: 'Cloudflare, DNS aur email', md: cloudflare },
      { slug: 'logo-rules', title: 'Logo & icon rules', md: logoRules },
      { slug: 'naya-product', title: 'Naya product banane ki checklist', md: nayaProduct },
    ],
  },
  {
    title: 'dusrel.com — Rules & Ops',
    chapters: [
      { slug: 'branding', title: 'Dusrel branding rules', md: branding },
      { slug: 'build-deploy', title: 'Build, test aur deploy', md: buildDeploy },
      { slug: 'gotchas', title: 'Common mistakes (gotchas)', md: gotchas },
    ],
  },
];

export const allChapters: Chapter[] = sections.flatMap((s) => s.chapters);

export function chapterBySlug(slug: string): Chapter {
  return allChapters.find((c) => c.slug === slug) ?? allChapters[0];
}
