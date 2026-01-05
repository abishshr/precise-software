export function CrosshairLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>

      {/* Outer circle */}
      <circle
        cx="20"
        cy="20"
        r="16"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Inner circle */}
      <circle
        cx="20"
        cy="20"
        r="8"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        fill="none"
      />

      {/* Center dot */}
      <circle
        cx="20"
        cy="20"
        r="3"
        fill="url(#logoGradient)"
      />

      {/* Crosshair lines */}
      {/* Top */}
      <line x1="20" y1="2" x2="20" y2="10" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bottom */}
      <line x1="20" y1="30" x2="20" y2="38" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Left */}
      <line x1="2" y1="20" x2="10" y2="20" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right */}
      <line x1="30" y1="20" x2="38" y2="20" stroke="url(#logoGradient)" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function CrosshairLogoWhite({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle
        cx="20"
        cy="20"
        r="16"
        stroke="white"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Inner circle */}
      <circle
        cx="20"
        cy="20"
        r="8"
        stroke="white"
        strokeWidth="2"
        fill="none"
      />

      {/* Center dot */}
      <circle
        cx="20"
        cy="20"
        r="3"
        fill="white"
      />

      {/* Crosshair lines */}
      {/* Top */}
      <line x1="20" y1="2" x2="20" y2="10" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bottom */}
      <line x1="20" y1="30" x2="20" y2="38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Left */}
      <line x1="2" y1="20" x2="10" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Right */}
      <line x1="30" y1="20" x2="38" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// WarungOS Logo - Modern POS/Store icon
export function WarungOSLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="warungGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="50%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
      </defs>

      {/* Store/POS Terminal Body */}
      <rect
        x="6"
        y="8"
        width="28"
        height="24"
        rx="3"
        stroke="url(#warungGradient)"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Screen */}
      <rect
        x="10"
        y="12"
        width="20"
        height="10"
        rx="1.5"
        fill="url(#warungGradient)"
        opacity="0.3"
      />

      {/* Keypad dots */}
      <circle cx="13" cy="26" r="1.5" fill="url(#warungGradient)" />
      <circle cx="20" cy="26" r="1.5" fill="url(#warungGradient)" />
      <circle cx="27" cy="26" r="1.5" fill="url(#warungGradient)" />

      {/* Receipt coming out top */}
      <path
        d="M14 8V4C14 3 15 2 16 2H24C25 2 26 3 26 4V8"
        stroke="url(#warungGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Receipt zigzag */}
      <path
        d="M16 2L18 4L20 2L22 4L24 2"
        stroke="url(#warungGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// StudioDesk Logo - Calendar with yoga/fitness element
export function StudioDeskLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="studioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>

      {/* Calendar body */}
      <rect
        x="4"
        y="8"
        width="32"
        height="28"
        rx="4"
        stroke="url(#studioGradient)"
        strokeWidth="2.5"
        fill="none"
      />

      {/* Calendar top binding */}
      <path
        d="M4 16H36"
        stroke="url(#studioGradient)"
        strokeWidth="2"
      />

      {/* Calendar rings */}
      <line x1="12" y1="4" x2="12" y2="12" stroke="url(#studioGradient)" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="28" y1="4" x2="28" y2="12" stroke="url(#studioGradient)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Yoga pose / person icon in calendar */}
      <circle cx="20" cy="22" r="2.5" fill="url(#studioGradient)" />
      <path
        d="M14 32L17 27L20 30L23 27L26 32"
        stroke="url(#studioGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
