// Tibetan decorative SVG elements
const TibetanCloud = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 60" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 50C10 50 15 30 30 30C35 30 38 35 40 30C42 25 48 15 60 15C72 15 78 25 80 30C82 35 85 30 90 30C105 30 110 50 110 50"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M20 50C20 50 24 35 35 35C39 35 41 38 43 35C45 32 49 22 60 22C71 22 75 32 77 35C79 38 81 35 85 35C96 35 100 50 100 50"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      opacity="0.5"
      strokeLinecap="round"
    />
  </svg>
);

const TibetanLotus = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 100 50" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M50 45C50 45 30 35 30 25C30 18 38 12 50 10C62 12 70 18 70 25C70 35 50 45 50 45Z" stroke="currentColor" strokeWidth="1" fill="none" />
    <path d="M50 45C50 45 20 38 18 28C16 18 30 10 50 8C70 10 84 18 82 28C80 38 50 45 50 45Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.4" />
    <path d="M50 45C50 45 38 40 35 32C32 24 40 15 50 12C60 15 68 24 65 32C62 40 50 45 50 45Z" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6" />
    <circle cx="50" cy="28" r="3" stroke="currentColor" strokeWidth="0.8" fill="none" />
  </svg>
);

const TibetanKnot = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5L30 55M5 30L55 30" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    <rect x="15" y="15" width="30" height="30" rx="2" stroke="currentColor" strokeWidth="1" fill="none" />
    <rect x="20" y="20" width="20" height="20" rx="1" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.6" />
    <path d="M15 15L45 45M45 15L15 45" stroke="currentColor" strokeWidth="0.6" opacity="0.3" />
    <circle cx="30" cy="30" r="5" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.5" />
  </svg>
);

const TibetanBorderPattern = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 400 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360].map((x) => (
      <g key={x}>
        <path d={`M${x} 10C${x + 5} 3 ${x + 15} 3 ${x + 20} 10C${x + 25} 17 ${x + 35} 17 ${x + 40} 10`} stroke="currentColor" strokeWidth="1.2" fill="none" />
        <circle cx={x + 20} cy={10} r="1.5" fill="currentColor" opacity="0.4" />
      </g>
    ))}
  </svg>
);

const DharmaWheel = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="35" stroke="currentColor" strokeWidth="1" />
    <circle cx="40" cy="40" r="28" stroke="currentColor" strokeWidth="0.6" opacity="0.4" />
    <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="1" />
    <circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.3" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 40 + 8 * Math.cos(rad);
      const y1 = 40 + 8 * Math.sin(rad);
      const x2 = 40 + 35 * Math.cos(rad);
      const y2 = 40 + 35 * Math.sin(rad);
      return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="0.8" />;
    })}
  </svg>
);

export { TibetanCloud, TibetanLotus, TibetanKnot, TibetanBorderPattern, DharmaWheel };
