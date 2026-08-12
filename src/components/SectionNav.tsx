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
    const elements = navItems
      .map((item) => document.getElementById(item.id))
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
      className="sticky top-0 z-40 border-b border-hairline bg-void/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-stretch overflow-x-auto px-6 sm:px-8">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative flex shrink-0 items-center gap-2 px-3 py-3.5 text-sm transition-colors sm:px-4 ${
                isActive ? "text-ink" : "text-ink-faint hover:text-ink-muted"
              }`}
            >
              {item.number ? (
                <span className={isActive ? "text-cat-yellow" : "text-ink-faint"}>
                  {item.number}
                </span>
              ) : null}
              <span className="whitespace-nowrap">{item.label}</span>
              {isActive ? (
                <span
                  className="absolute inset-x-3 bottom-0 h-px bg-cat-yellow sm:inset-x-4"
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
