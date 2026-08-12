export function Lockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink ${className}`}
      aria-label="Cursor and Caterpillar"
    >
      <span className="inline-flex items-center gap-2">
        <CursorMark />
        <span>Cursor</span>
      </span>
      <span className="text-ink-faint" aria-hidden="true">
        ×
      </span>
      <span className="inline-flex items-center gap-2">
        <CaterpillarMark />
        <span>Caterpillar Digital</span>
      </span>
    </div>
  );
}

function CursorMark() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-ink"
    >
      <path
        d="M2.2 1.6 13.4 7.05c.55.27.55.99 0 1.26L2.2 13.76c-.58.28-1.2-.35-.95-.95l1.7-4.05a.4.4 0 0 0 0-.28L1.25 4.43c-.25-.6.37-1.23.95-.83Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CaterpillarMark() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 16 12"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="1" y="3" width="14" height="6" rx="3" fill="var(--cat-yellow)" />
      <circle cx="5" cy="6" r="1" fill="#0A0A0A" />
      <circle cx="8" cy="6" r="1" fill="#0A0A0A" />
      <circle cx="11" cy="6" r="1" fill="#0A0A0A" />
    </svg>
  );
}
