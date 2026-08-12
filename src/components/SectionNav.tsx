"use client";

import { useEffect, useState } from "react";
import { content, sections } from "@/lib/content";

const navItems = [
  ...sections.map((s) => ({
    id: s.id,
    label: s.navLabel,
  })),
  {
    id: "next-steps",
    label: content.nextSteps.heading,
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
        rootMargin: "-18% 0px -58% 0px",
        threshold: [0, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="sticky top-0 z-40 border-b border-hairline bg-canvas/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-stretch overflow-x-auto px-6 sm:px-10">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative flex shrink-0 items-center px-3 py-3.5 text-[14px] transition-colors sm:px-4 ${
                isActive
                  ? "font-medium text-ink"
                  : "text-ink-faint hover:text-ink-muted"
              }`}
            >
              <span className="whitespace-nowrap">{item.label}</span>
              {isActive ? (
                <span
                  className="absolute inset-x-3 bottom-0 h-[2px] rounded-full bg-cursor-orange sm:inset-x-4"
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
