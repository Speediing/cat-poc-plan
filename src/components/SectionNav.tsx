"use client";

import { useEffect, useState } from "react";
import { content, sections } from "@/lib/content";

const navItems = [
  ...sections.map((s) => ({
    id: s.id,
    label: s.navLabel,
    number: s.number,
  })),
  {
    id: "next-steps",
    label: content.nextSteps.heading,
    number: null as string | null,
  },
];

export function SectionNav() {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-40 border-b border-hairline bg-cream/90 backdrop-blur-[8px]"
    >
      <div className="mx-auto flex max-w-6xl items-stretch gap-1 overflow-x-auto px-5 sm:px-8 lg:px-10">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative flex shrink-0 items-center gap-2 px-3 py-3.5 text-[13px] tracking-[-0.01em] transition-colors sm:px-4 ${
                isActive
                  ? "font-medium text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {item.number ? (
                <span
                  className={`font-mono text-[11px] tracking-[0.06em] ${
                    isActive
                      ? "bg-cat-yellow px-1 py-0.5 font-semibold text-ink"
                      : "text-ink-faint"
                  }`}
                >
                  {item.number}
                </span>
              ) : null}
              <span>{item.label}</span>
              {isActive ? (
                <span
                  className="absolute inset-x-3 bottom-0 h-[2px] bg-cat-yellow sm:inset-x-4"
                  aria-hidden="true"
                />
              ) : null}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
