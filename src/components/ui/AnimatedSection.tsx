"use client";

import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale";
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const variants: Record<string, { hidden: CSSProperties; visible: CSSProperties }> = {
  "fade-up":    { hidden: { opacity: 0, transform: "translateY(40px)" },  visible: { opacity: 1, transform: "translateY(0)" } },
  "fade-in":    { hidden: { opacity: 0 },                                  visible: { opacity: 1 } },
  "slide-left": { hidden: { opacity: 0, transform: "translateX(-40px)" }, visible: { opacity: 1, transform: "translateX(0)" } },
  "slide-right":{ hidden: { opacity: 0, transform: "translateX(40px)" },  visible: { opacity: 1, transform: "translateX(0)" } },
  "scale":      { hidden: { opacity: 0, transform: "scale(0.92)" },        visible: { opacity: 1, transform: "scale(1)" } },
};

export default function AnimatedSection({
  children,
  className = "",
  style,
  animation = "fade-up",
  delay = 0,
  threshold = 0.12,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Skip animations for users who prefer reduced motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) { setVisible(true); return; }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const v = variants[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(visible ? v.visible : v.hidden),
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
