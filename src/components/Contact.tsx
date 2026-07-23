import { useScrollReveal } from "../hooks/useScrollReveal";
import { profile } from "../data/content";

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="border-t border-[var(--color-panel-line)] px-6 py-28 md:px-10 md:py-40">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <p data-reveal className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
          Contact
        </p>

        <h2 data-reveal className="mt-6 text-balance font-display text-3xl leading-snug text-[var(--color-ivory)] md:text-4xl">
          Interested in working together or have a project in mind? I'd love to
          connect and discuss how we can build something great.
        </h2>

        <a
          data-reveal
          href={`mailto:${profile.email}`}
          className="link-underline mt-12 inline-block break-all font-display text-2xl italic text-[var(--color-gold-soft)] md:text-3xl"
        >
          {profile.email}
        </a>

        <div data-reveal className="mt-12 flex items-center justify-center gap-8 font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-sage)]">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-[var(--color-ivory)]"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline hover:text-[var(--color-ivory)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
