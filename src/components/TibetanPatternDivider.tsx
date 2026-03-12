const TibetanPatternDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full flex items-center justify-center py-4 ${className}`}>
    <svg viewBox="0 0 1200 60" fill="none" className="w-full max-w-4xl h-auto" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      {/* Center mandala flower */}
      <g transform="translate(600, 30)">
        {/* Outer petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="0" cy="-14"
            rx="5" ry="14"
            transform={`rotate(${angle})`}
            fill="none"
            stroke="hsl(var(--gold))"
            strokeWidth="1"
            opacity="0.6"
          />
        ))}
        {/* Inner circle */}
        <circle cx="0" cy="0" r="6" fill="none" stroke="hsl(var(--gold))" strokeWidth="1.2" />
        <circle cx="0" cy="0" r="2.5" fill="hsl(var(--gold))" opacity="0.4" />
      </g>

      {/* Flowing vine lines — left */}
      <path
        d="M0 30 Q50 15, 100 30 T200 30 T300 30 T400 30 T500 30 L560 30"
        stroke="hsl(var(--gold))"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M0 30 Q50 45, 100 30 T200 30 T300 30 T400 30 T500 30 L560 30"
        stroke="hsl(var(--gold))"
        strokeWidth="0.6"
        fill="none"
        opacity="0.2"
      />

      {/* Flowing vine lines — right */}
      <path
        d="M1200 30 Q1150 15, 1100 30 T1000 30 T900 30 T800 30 T700 30 L640 30"
        stroke="hsl(var(--gold))"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M1200 30 Q1150 45, 1100 30 T1000 30 T900 30 T800 30 T700 30 L640 30"
        stroke="hsl(var(--gold))"
        strokeWidth="0.6"
        fill="none"
        opacity="0.2"
      />

      {/* Small accent flowers along the vine */}
      {[150, 300, 450, 750, 900, 1050].map((x) => (
        <g key={x} transform={`translate(${x}, 30)`}>
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse
              key={a}
              cx="0" cy="-5"
              rx="2" ry="5"
              transform={`rotate(${a})`}
              fill="none"
              stroke="hsl(var(--gold))"
              strokeWidth="0.6"
              opacity="0.3"
            />
          ))}
          <circle cx="0" cy="0" r="1.5" fill="hsl(var(--gold))" opacity="0.3" />
        </g>
      ))}

      {/* Gradient fade on edges */}
      <defs>
        <linearGradient id="fade-left" x1="0" x2="120" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="hsl(var(--background))" stopOpacity="1" />
          <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fade-right" x1="1080" x2="1200" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="hsl(var(--background))" stopOpacity="0" />
          <stop offset="1" stopColor="hsl(var(--background))" stopOpacity="1" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="120" height="60" fill="url(#fade-left)" />
      <rect x="1080" y="0" width="120" height="60" fill="url(#fade-right)" />
    </svg>
  </div>
);

export default TibetanPatternDivider;
