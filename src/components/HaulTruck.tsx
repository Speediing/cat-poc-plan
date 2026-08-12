import Image from "next/image";

/**
 * Painted Caterpillar haul truck accent — soft gouache/watercolor energy,
 * matching Cursor homepage illustrated accents (not vector clipart).
 */
export function HaulTruck({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/haul-truck.png"
        alt="Painted illustration of a Caterpillar haul truck"
        width={1536}
        height={1024}
        priority
        className="h-auto w-full select-none"
        sizes="(max-width: 1024px) 90vw, 480px"
      />
    </div>
  );
}
