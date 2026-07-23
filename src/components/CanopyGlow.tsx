import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useReducedMotion } from "../hooks/useReducedMotion";

/**
 * A soft field of light that drifts, as if sunlight were passing through
 * a villa's canopy of leaves. Follows the cursor with a slow, heavy lag —
 * never snapping to the pointer, always settling behind it.
 */
export default function CanopyGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = glowRef.current;
    if (!el) return;

    const pos = { x: window.innerWidth * 0.7, y: window.innerHeight * 0.35 };
    const target = { x: pos.x, y: pos.y };

    gsap.set(el, { x: pos.x, y: pos.y });

    const handleMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    window.addEventListener("pointermove", handleMove);

    const ticker = () => {
      pos.x += (target.x - pos.x) * 0.045;
      pos.y += (target.y - pos.y) * 0.045;
      gsap.set(el, { x: pos.x, y: pos.y });
    };
    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      gsap.ticker.remove(ticker);
    };
  }, [reduced]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        ref={glowRef}
        className="absolute h-[46rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.16] blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, var(--color-gold) 0%, var(--color-foliage) 55%, transparent 75%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, color-mix(in srgb, var(--color-foliage) 22%, transparent), transparent 60%)",
        }}
      />
    </div>
  );
}
