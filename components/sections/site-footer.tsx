import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/ui/wordmark";
import { FOOTER_COLUMNS } from "@/data/navigation";

/**
 * Site footer. Reinforces heritage, and — per the audit — makes corporate
 * gifting a first-class, discoverable destination in the site's navigation.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-paper">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr] lg:gap-16">
          <div className="flex flex-col gap-6">
            <Wordmark tone="onDark" />
            <p className="max-w-xs text-[0.95rem] leading-relaxed text-paper/60">
              Artisan coffee roasted in North Beach, San Francisco since 1935.
              Small batch, family owned, sent with intention.
            </p>
            <p className="text-sm text-paper/45">
              733 Columbus Avenue · San Francisco, CA
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-8 sm:grid-cols-3"
          >
            {FOOTER_COLUMNS.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h2 className="text-xs font-medium uppercase tracking-eyebrow text-copper-soft">
                  {column.title}
                </h2>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[0.95rem] text-paper/70 transition-colors hover:text-paper"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/12 pt-8 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Graffeo Coffee Roasting Company. All rights reserved.</p>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="transition-colors hover:text-paper">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-paper">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-paper">
                Accessibility
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
