export function Lockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2 text-[15px] font-medium tracking-tight text-ink ${className}`}
      aria-label="Caterpillar and Cursor"
    >
      <span className="inline-flex items-center gap-1.5">
        <span
          className="inline-block h-2 w-2 rounded-[2px] bg-cat-yellow"
          aria-hidden="true"
        />
        Caterpillar
      </span>
      <span className="text-ink-faint" aria-hidden="true">
        ×
      </span>
      <span>Cursor</span>
    </div>
  );
}
