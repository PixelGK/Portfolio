import { motion } from "framer-motion";
import { skillGroups } from "../data/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

const variantStyles: Record<string, string> = {
  solid:
    "border-[var(--color-panel-line)] bg-[var(--color-panel)] text-[var(--color-ivory)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold-soft)]",
  tool: "border-[var(--color-panel-line)] bg-transparent text-[var(--color-sage)] hover:border-[var(--color-foliage-soft)] hover:text-[var(--color-foliage-soft)]",
  learning:
    "border-dashed border-[var(--color-sage-dim)] bg-transparent text-[var(--color-sage)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold-soft)]",
};

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>("[data-reveal-group]", { y: 24, stagger: 0.1 });

  return (
    <section id="skills" className="border-t border-[var(--color-panel-line)] px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-gold-soft)]">
          Skills
        </p>
        <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight text-[var(--color-ivory)] md:text-5xl">
          A working kit,
          <span className="italic text-[var(--color-gold-soft)]"> still growing.</span>
        </h2>

        <div ref={ref} className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
          {skillGroups.map((group) => (
            <div key={group.label} data-reveal-group>
              <h3 className="font-display text-xl text-[var(--color-ivory)]">{group.label}</h3>
              <p className="mt-1.5 text-sm text-[var(--color-sage-dim)]">{group.note}</p>

              <ul className="mt-6 flex flex-wrap gap-2.5" aria-label={group.label}>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <motion.span
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] transition-colors ${variantStyles[group.variant]}`}
                    >
                      {group.variant === "learning" && (
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)] motion-safe:animate-pulse"
                        />
                      )}
                      {skill}
                    </motion.span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
