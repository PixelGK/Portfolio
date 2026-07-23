import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass border-b border-[var(--color-panel-line)]" : ""
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:rounded focus:bg-[var(--color-gold)] focus:px-4 focus:py-2 focus:text-[var(--color-ink)]"
      >
        Skip to content
      </a>

      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-[var(--color-ivory)]"
        >
          Praba<span className="text-[var(--color-gold)]">.</span>
        </a>

        <ul className="hidden items-center gap-9 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-sage)] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline transition-colors hover:text-[var(--color-ivory)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-[var(--color-panel-line)] px-5 py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-[var(--color-ivory)] transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold-soft)] md:inline-block"
        >
          Let's talk
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-px w-5 bg-[var(--color-ivory)] transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-[var(--color-ivory)] transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="glass border-t border-[var(--color-panel-line)] px-6 pb-8 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-5 pt-4 font-mono text-sm uppercase tracking-[0.16em] text-[var(--color-sage)]">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-[var(--color-ivory)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
