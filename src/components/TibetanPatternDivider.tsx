import tibetanPatternBorder from "@/assets/tibetan-pattern-border.png";

const TibetanPatternDivider = ({ className = "" }: { className?: string }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <img
      src={tibetanPatternBorder}
      alt=""
      className="w-full h-full object-cover"
      aria-hidden="true"
    />
  </div>
);

export default TibetanPatternDivider;
