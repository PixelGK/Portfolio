import { motion } from "framer-motion";
import type { Project } from "../data/content";

type Props = {
  project: Project;
  reversed?: boolean;
};

export default function ProjectCard({ project, reversed }: Props) {
  return (
    <article
      data-reveal
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <motion.a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live demo of ${project.title}`}
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="group relative block aspect-[16/11] overflow-hidden rounded-2xl border border-[var(--color-panel-line)] bg-[var(--color-panel)]"
      >
        {project.image ? (
          <motion.img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            variants={{ rest: { scale: 1 }, hover: { scale: 1.045 } }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center">
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(circle at 20% 15%, color-mix(in srgb, var(--color-foliage) 20%, transparent), transparent 55%), radial-gradient(circle at 85% 90%, color-mix(in srgb, var(--color-gold) 16%, transparent), transparent 55%)",
              }}
            />
            <motion.span
              variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
              transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
              className="relative font-display text-[7rem] italic text-[var(--color-panel-line)] md:text-[8.5rem]"
            >
              {project.title.charAt(0)}
            </motion.span>
          </div>
        )}

        <motion.div
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          className="absolute inset-0 flex items-end bg-gradient-to-t from-black/55 via-transparent to-transparent p-6"
        >
          <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-ivory)]">
            View live demo →
          </span>
        </motion.div>
      </motion.a>

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
          {project.index} — {project.kicker}
        </p>
        <h3 className="mt-4 font-display text-3xl text-[var(--color-ivory)] md:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-lg leading-relaxed text-[var(--color-sage)]">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Technologies used in ${project.title}`}>
          {project.highlights.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[var(--color-panel-line)] px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-[var(--color-sage)]"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-2.5 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-soft)]"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[var(--color-ivory)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
