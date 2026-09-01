import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useEffect } from "react";
import privacyPolicy from "../../data/privacy";
import ThemeToggle from "../ui/ThemeToggle";

interface PrivacyProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Privacy({ theme, toggleTheme }: PrivacyProps) {
  const { title, effectiveDate, intro, sections } = privacyPolicy;

  useEffect(() => {
    const previous = document.title;
    document.title = `${title} | Max Haberer`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  return (
    <>
      <header
        className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-card)]"
        role="banner"
      >
        <nav
          className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6"
          aria-label="Main navigation"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-brand-50 hover:text-brand-500 dark:hover:bg-brand-500/10"
          >
            <ArrowLeft size={16} />
            Back to portfolio
          </a>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>
      </header>

      <main className="flex-1 px-4 pt-28 pb-20 sm:px-6 lg:pb-24">
        <motion.article
          className="mx-auto w-full max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-brand-500" />
          <p className="mt-4 text-sm text-[var(--color-text-muted)]">
            Effective {effectiveDate}
          </p>

          {intro.map((paragraph, i) => (
            <p
              key={i}
              className="mt-6 text-lg leading-relaxed text-[var(--color-text-secondary)]"
            >
              {paragraph}
            </p>
          ))}

          {sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-12">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                {section.title}
              </h2>

              {section.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="mt-4 leading-relaxed text-[var(--color-text-secondary)]"
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="mt-4 space-y-2">
                  {section.bullets.map((bullet, i) => (
                    <li
                      key={i}
                      className="flex gap-3 leading-relaxed text-[var(--color-text-secondary)]"
                    >
                      <span aria-hidden="true" className="text-brand-500">
                        &bull;
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.links && (
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {section.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-brand-500 transition-colors hover:text-brand-600"
                      >
                        {link.label}
                        <ArrowUpRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </motion.article>
      </main>
    </>
  );
}
