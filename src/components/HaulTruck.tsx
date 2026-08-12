import Image from "next/image";

/**
 * Approved soft-washed painted haul truck (Jason / truck B).
 * Quiet atmospheric fragment for cream hero — not vector, not sticker.
 */
export function HaulTruck({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/illustrations/cat-haul-truck.png"
        alt="Soft-washed painted Caterpillar haul truck"
        width={1536}
        height={1024}
        priority
        className="h-auto w-full select-none"
        sizes="(max-width: 1024px) 92vw, 540px"
      />
    </div>
  );
}
