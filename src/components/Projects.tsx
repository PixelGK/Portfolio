import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/content";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useScrollReveal<HTMLDivElement>("article", { y: 36, stagger: 0.15 });

  return (
    <section id="work" className="border-t border-[var(--color-panel-line)] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
              Selected work
            </p>
            <h2 className="mt-4 max-w-md font-display text-4xl leading-tight text-[var(--color-ivory)] md:text-5xl">
              Two builds worth
              <span className="italic text-[var(--color-gold-soft)]"> a closer look.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--color-sage)]">
            A small, considered set — quality held above quantity. Each one built with
            React, TypeScript, and Tailwind CSS.
          </p>
        </div>

        <div ref={ref} className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
