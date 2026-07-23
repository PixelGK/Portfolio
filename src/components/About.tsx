import { useScrollReveal } from "../hooks/useScrollReveal";
import { aboutParagraphs, profile } from "../data/content";
import portrait from "../assets/portrait.jpg";

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="border-t border-[var(--color-panel-line)] px-6 py-28 md:px-10 md:py-36">
      <div ref={ref} className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-20">
        <div data-reveal className="md:sticky md:top-32 md:self-start">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
            About
          </p>

          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-[var(--color-panel-line)] bg-[var(--color-panel)]">
            <img
              src={portrait}
              alt={`${profile.name}, ${profile.title}`}
              loading="lazy"
              className="h-full w-full object-cover grayscale-[15%] contrast-[1.03]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in srgb, var(--color-ink) 8%, transparent) 0%, transparent 40%, color-mix(in srgb, var(--color-ink) 55%, transparent) 100%), radial-gradient(circle at 82% 8%, color-mix(in srgb, var(--color-gold) 14%, transparent), transparent 45%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 border-t border-[var(--color-panel-line)] bg-[color-mix(in_srgb,var(--color-panel)_85%,transparent)] px-5 py-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--color-sage)]">
                {profile.name} · {profile.location}
              </p>
            </div>
          </div>
        </div>

        <div data-reveal className="max-w-xl">
          <h2 className="font-display text-4xl leading-tight text-[var(--color-ivory)] md:text-5xl">
            The person behind
            <span className="italic text-[var(--color-gold-soft)]"> the pixels.</span>
          </h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--color-sage)] md:text-[1.05rem]">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
