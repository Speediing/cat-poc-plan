export function Lockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2 text-sm font-medium tracking-tight text-ink ${className}`}
      aria-label="Cursor and Caterpillar"
    >
      <span>Cursor</span>
      <span className="text-ink-faint" aria-hidden="true">
        ×
      </span>
      <span>Caterpillar Digital</span>
    </div>
  );
}
