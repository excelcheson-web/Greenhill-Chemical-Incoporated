"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollStageProps {
  children: React.ReactNode;
  index: number;
  /** Extra classes for the outer wrapper */
  className?: string;
}

export function ScrollStage({ children, index, className }: ScrollStageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-16 opacity-0"
      } ${className ?? ""}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {children}
    </div>
  );
}
