import { exploring } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CurrentlyExploring() {
  const ref = useScrollReveal<HTMLDivElement>();
  const loop = [...exploring, ...exploring];

  return (
    <section aria-label="Currently exploring" className="overflow-hidden border-t border-[var(--color-panel-line)] py-14">
      <div ref={ref} data-reveal className="mb-8 px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-sage)]">
          Currently exploring
        </p>
      </div>

      <div className="relative">
        <div className="marquee-track flex w-max gap-16 whitespace-nowrap pr-16">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-4 font-display text-3xl italic text-[var(--color-sage-dim)] md:text-4xl"
            >
              {item}
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--color-ink)] to-transparent md:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--color-ink)] to-transparent md:w-32" />
      </div>
    </section>
  );
}
