// Sidebar structure. Har chapter ek .md file hai src/content/ mein.
// Naya chapter add karna = .md file banao + yahan ek line add karo. Bas.

import overview from './content/overview.md?raw';
import nayaApp from './content/naya-app-add-karna.md?raw';
import downloadPages from './content/download-pages.md?raw';
import i18n from './content/i18n.md?raw';
import iconsImages from './content/icons-images.md?raw';
import seo from './content/seo-checklist.md?raw';
import branding from './content/branding-rules.md?raw';
import buildDeploy from './content/build-test-deploy.md?raw';
import gotchas from './content/gotchas.md?raw';

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
