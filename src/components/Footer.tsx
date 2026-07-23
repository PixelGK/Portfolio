import { profile } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-panel-line)] px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[var(--color-sage-dim)] md:flex-row">
        <p>© {year} {profile.name}. Built with React &amp; Tailwind CSS.</p>
        <a href="#top" className="link-underline hover:text-[var(--color-sage)]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
