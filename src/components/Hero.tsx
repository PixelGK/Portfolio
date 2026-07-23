import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { profile } from "../data/content";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (reduced) {
      gsap.set(root.querySelectorAll("[data-hero-anim]"), { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        "[data-hero-line]",
        { yPercent: 115 },
        { yPercent: 0, duration: 1.1, stagger: 0.1, delay: 0.15 }
      )
        .fromTo(
          "[data-hero-eyebrow]",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.7 },
          0
        )
        .fromTo(
          "[data-hero-sub]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 },
          "-=0.55"
        );
    }, root);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-[100svh] flex-col justify-center px-6 pt-28 md:px-10"
    >
      <p
        data-hero-anim
        data-hero-eyebrow
        className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-sage)]"
      >
        {profile.name} — {profile.title} &amp; {profile.titleSecondary} · {profile.location}
      </p>

      <h1 className="max-w-4xl font-display text-[13vw] leading-[0.98] tracking-tight text-[var(--color-ivory)] sm:text-[8vw] md:text-[6.4vw] lg:text-[5.4rem]">
        <span className="block overflow-hidden">
          <span data-hero-line className="block">
            Interfaces, built
          </span>
        </span>
        <span className="block overflow-hidden">
          <span data-hero-line className="block italic text-[var(--color-gold-soft)]">
            to feel inevitable.
          </span>
        </span>
      </h1>

      <p
        data-hero-anim
        data-hero-sub
        className="mt-8 max-w-md text-balance text-base leading-relaxed text-[var(--color-sage)] md:text-lg"
      >
        {profile.tagline}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          data-hero-anim
          data-hero-cta
          href="#work"
          className="group inline-flex items-center gap-3 rounded-full bg-[var(--color-gold)] px-7 py-3.5 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-ink)] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-gold-soft)]"
        >
          View selected work
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
        <a
          data-hero-anim
          data-hero-cta
          href="#contact"
          className="link-underline font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-ivory)]"
        >
          Get in touch
        </a>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="group absolute bottom-10 left-6 hidden items-center gap-3 md:left-10 lg:flex"
      >
        <span className="relative block h-14 w-px overflow-hidden bg-[var(--color-panel-line)]">
          <span className="absolute inset-x-0 top-0 h-1/2 w-full animate-[scrollLine_1.8s_ease-in-out_infinite] bg-[var(--color-gold)]" />
        </span>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--color-sage)] transition-colors group-hover:text-[var(--color-ivory)]">
          Scroll
        </span>
      </a>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          50.01% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[scrollLine"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
