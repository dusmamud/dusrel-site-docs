import { useEffect, useMemo, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { allChapters, chapterBySlug, sections } from './docs';

function slugFromHash(): string {
  const m = window.location.hash.match(/^#\/([\w-]+)/);
  return m ? m[1] : 'overview';
}

export default function App() {
  const [slug, setSlug] = useState(slugFromHash);
  const [dark, setDark] = useState(() =>
    window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false,
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onHash = () => {
      setSlug(slugFromHash());
      setSidebarOpen(false);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const chapter = useMemo(() => chapterBySlug(slug), [slug]);
  const idx = allChapters.findIndex((c) => c.slug === chapter.slug);
  const prev = allChapters[idx - 1];
  const next = allChapters[idx + 1];

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0f1115] dark:text-[#e8eaed]">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-[#0f1115]/90">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-4">
          <button
            className="rounded-lg p-2 hover:bg-slate-100 md:hidden dark:hover:bg-white/10"
            onClick={() => setSidebarOpen((v) => !v)}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
          <a href="#/overview" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-[#4d90fe] to-[#2b5fd9] text-sm font-extrabold text-white">
              D
            </span>
            <span className="font-bold tracking-tight">
              Dusrel <span className="font-normal text-slate-500 dark:text-slate-400">Site Docs</span>
            </span>
          </a>
          <span className="ml-1 hidden rounded-full bg-[#4d90fe]/10 px-2.5 py-0.5 text-xs font-semibold text-[#2b5fd9] sm:inline dark:text-[#8ab4ff]">
            internal
          </span>
          <div className="ml-auto">
            <button
              onClick={() => setDark((v) => !v)}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium hover:border-[#4d90fe] dark:border-white/15"
              aria-label="Theme toggle"
            >
              {dark ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-10 w-72 shrink-0 transform border-r border-slate-200 bg-white pt-14 transition-transform md:static md:z-auto md:block md:translate-x-0 md:border-r-0 md:pt-0 dark:border-white/10 dark:bg-[#0f1115] ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <nav className="h-[calc(100vh-3.5rem)] overflow-y-auto px-4 py-6 md:sticky md:top-14">
            {sections.map((s) => (
              <div key={s.title} className="mb-6">
                <p className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  {s.title}
                </p>
                <ul className="space-y-0.5">
                  {s.chapters.map((c) => (
                    <li key={c.slug}>
                      <a
                        href={`#/${c.slug}`}
                        className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                          c.slug === chapter.slug
                            ? 'bg-[#4d90fe]/10 font-semibold text-[#2b5fd9] dark:text-[#8ab4ff]'
                            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'
                        }`}
                      >
                        {c.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-[5] bg-black/40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Content */}
        <main className="min-w-0 flex-1 px-4 py-8 md:px-10 md:py-10">
          <article className="md-body max-w-3xl">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {chapter.md}
            </ReactMarkdown>
          </article>

          {/* Prev / Next */}
          <div className="mt-12 flex max-w-3xl gap-4 border-t border-slate-200 pt-6 dark:border-white/10">
            {prev ? (
              <a
                href={`#/${prev.slug}`}
                className="flex-1 rounded-xl border border-slate-200 p-4 hover:border-[#4d90fe] dark:border-white/10"
              >
                <p className="text-xs text-slate-400">← Pichla</p>
                <p className="mt-1 font-semibold">{prev.title}</p>
              </a>
            ) : <div className="flex-1" />}
            {next ? (
              <a
                href={`#/${next.slug}`}
                className="flex-1 rounded-xl border border-slate-200 p-4 text-right hover:border-[#4d90fe] dark:border-white/10"
              >
                <p className="text-xs text-slate-400">Agla →</p>
                <p className="mt-1 font-semibold">{next.title}</p>
              </a>
            ) : <div className="flex-1" />}
          </div>

          <footer className="mt-10 max-w-3xl pb-8 text-sm text-slate-400 dark:text-slate-500">
            Dusrel internal docs — repo: <span className="font-mono">dusmamud/dusrel-site-docs</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
