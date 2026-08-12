/**
 * Painted-style Caterpillar haul truck — original illustration.
 * Soft dimensional forms, yellow/black, brushy layers (Cursor accent energy).
 */
export function HaulTruck({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Illustrated Caterpillar haul truck"
    >
      <defs>
        <linearGradient id="bed" x1="80" y1="40" x2="360" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE566" />
          <stop offset="0.45" stopColor="#FFCD11" />
          <stop offset="1" stopColor="#E6B800" />
        </linearGradient>
        <linearGradient id="cab" x1="300" y1="70" x2="420" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFD84D" />
          <stop offset="1" stopColor="#F0C000" />
        </linearGradient>
        <linearGradient id="tire" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#3A3934" />
          <stop offset="1" stopColor="#1C1B17" />
        </linearGradient>
        <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground wash */}
      <ellipse cx="245" cy="278" rx="190" ry="18" fill="#26251E" opacity="0.06" />
      <ellipse cx="245" cy="278" rx="140" ry="10" fill="#26251E" opacity="0.05" />

      {/* Soft paint under-layer */}
      <g opacity="0.22" filter="url(#soft)">
        <path
          d="M72 168c28-52 96-78 168-72 54 4 108 28 142 62l18 34c6 12-2 28-16 30H96c-18 0-30-16-24-32l0-22z"
          fill="#FFCD11"
        />
      </g>

      {/* Chassis rail */}
      <path
        d="M96 198h268c10 0 18 6 20 14l4 16H88l4-16c2-8 8-14 16-14z"
        fill="#26251E"
      />
      <path
        d="M108 196h244"
        stroke="#3A3934"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />

      {/* Dump bed — main mass */}
      <path
        d="M78 168 118 86c6-12 18-20 32-20h148c10 0 18 6 22 14l36 78c4 10-2 22-14 24H94c-12 2-20-6-16-14z"
        fill="url(#bed)"
      />
      {/* Bed top lip */}
      <path
        d="M122 72h168c6 0 10 4 12 8l8 18H108l10-18c2-5 7-8 14-8z"
        fill="#FFE566"
        opacity="0.85"
      />
      {/* Bed shadow crease */}
      <path
        d="M130 96c40 18 96 26 150 18"
        stroke="#C9A000"
        strokeWidth="6"
        strokeLinecap="round"
        opacity="0.28"
      />
      {/* Bed side panel brush */}
      <path
        d="M96 160c36-8 88-10 140-6"
        stroke="#FFF3A8"
        strokeWidth="10"
        strokeLinecap="round"
        opacity="0.35"
      />

      {/* Cab */}
      <path
        d="M318 148h78c14 0 24 10 24 22v28c0 8-6 14-14 14h-98c-6 0-10-6-8-12l8-40c2-8 6-12 10-12z"
        fill="url(#cab)"
      />
      {/* Cab roof */}
      <path
        d="M326 120h54c12 0 22 8 24 20l4 18H318l6-24c2-8 8-14 16-14z"
        fill="#FFCD11"
      />
      {/* Windshield */}
      <path
        d="M338 132h40c6 0 10 4 10 10v16c0 4-4 8-8 8h-46c-4 0-6-4-5-8l3-18c1-5 3-8 6-8z"
        fill="#26251E"
        opacity="0.72"
      />
      <path
        d="M344 138h28"
        stroke="#8A8982"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Cab highlight */}
      <path
        d="M330 156c18-4 40-4 58 2"
        stroke="#FFF3A8"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* Exhaust / stack */}
      <rect x="402" y="96" width="10" height="48" rx="3" fill="#26251E" />
      <rect x="400" y="90" width="14" height="10" rx="3" fill="#3A3934" />
      <ellipse cx="407" cy="86" rx="8" ry="4" fill="#26251E" opacity="0.15" />

      {/* Front bumper / grill block */}
      <path
        d="M410 188h42c6 0 10 4 10 10v14c0 4-4 8-8 8h-50c-4 0-8-4-6-8l4-18c1-4 4-6 8-6z"
        fill="#26251E"
      />
      <path
        d="M422 198h24"
        stroke="#FFCD11"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Wheels — oversized mining tires */}
      <g>
        <circle cx="150" cy="228" r="48" fill="url(#tire)" />
        <circle cx="150" cy="228" r="32" fill="#2E2D28" />
        <circle cx="150" cy="228" r="14" fill="#FFCD11" opacity="0.9" />
        <circle cx="150" cy="228" r="7" fill="#26251E" />
        {/* tire tread hints */}
        <path
          d="M118 206c8-12 20-20 32-22"
          stroke="#4A4943"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M150 180c14 2 26 10 34 22"
          stroke="#4A4943"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.45"
        />
      </g>

      <g>
        <circle cx="248" cy="232" r="42" fill="url(#tire)" />
        <circle cx="248" cy="232" r="28" fill="#2E2D28" />
        <circle cx="248" cy="232" r="12" fill="#FFCD11" opacity="0.9" />
        <circle cx="248" cy="232" r="6" fill="#26251E" />
      </g>

      <g>
        <circle cx="360" cy="230" r="46" fill="url(#tire)" />
        <circle cx="360" cy="230" r="30" fill="#2E2D28" />
        <circle cx="360" cy="230" r="13" fill="#FFCD11" opacity="0.9" />
        <circle cx="360" cy="230" r="6.5" fill="#26251E" />
        <path
          d="M330 210c10-14 24-22 40-24"
          stroke="#4A4943"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>

      {/* Mirror / small details */}
      <rect x="408" y="148" width="6" height="18" rx="2" fill="#26251E" opacity="0.8" />
      <circle cx="411" cy="146" r="4" fill="#3A3934" />

      {/* Soft paint flecks — organic, scarce */}
      <circle cx="160" cy="120" r="3" fill="#FFF8C8" opacity="0.55" />
      <circle cx="210" cy="108" r="2" fill="#FFF8C8" opacity="0.4" />
      <circle cx="340" cy="170" r="2.5" fill="#FFF8C8" opacity="0.35" />
      <path
        d="M100 150c10 2 18-2 24-8"
        stroke="#C9A000"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  );
}
