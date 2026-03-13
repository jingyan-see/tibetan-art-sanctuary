import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useThangkas } from "@/hooks/useData";

const ThangkaCarousel = () => {
  const { data: allThangkas = [] } = useThangkas();
  const thangkas = allThangkas.filter((t) => t.type === "large");
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const isPaused = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollPos = 0;
    const speed = 0.35;

    const animate = () => {
      if (!isPaused.current && el) {
        scrollPos += speed;
        if (scrollPos >= el.scrollWidth / 2) {
          scrollPos = 0;
        }
        el.scrollLeft = scrollPos;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [thangkas]);

  const handleMouseEnter = () => { isPaused.current = true; };
  const handleMouseLeave = () => { isPaused.current = false; };

  const items = [...thangkas, ...thangkas];

  if (thangkas.length === 0) return null;

  return (
    <div
      ref={scrollRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      className="flex gap-5 overflow-x-hidden px-8 py-4 cursor-grab"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {items.map((t, i) => (
        <Link
          key={`${t.id}-${i}`}
          to={`/thangka/${t.id}`}
          className="flex-shrink-0"
        >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-52 md:w-64 group"
            >
              <div className="thangka-frame-slim">
                <div className="overflow-hidden aspect-[3/4]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            <div className="pt-4 text-center">
              <h3 className="font-display text-sm text-foreground tracking-wider">{t.nameCn}</h3>
              <p
                className="text-[10px] text-muted-foreground/50 mt-0.5 tracking-[0.15em]"
                style={{ fontFamily: "var(--font-display-en)" }}
              >
                {t.name}
              </p>
              <p className="text-[10px] text-accent/60 mt-1.5 tracking-wider">{t.typeCn}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default ThangkaCarousel;
