"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

interface AnimatedCounterProps {
  to: number;
  suffix?: string;
  duration?: number;
}

/** Counts from 0 to `to` when scrolled into view (once). */
export function AnimatedCounter({
  to,
  suffix = "",
  duration = 1.4,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (value) => {
        node.textContent = `${Math.round(value)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, duration]);

  return <span ref={ref}>{`0${suffix}`}</span>;
}
