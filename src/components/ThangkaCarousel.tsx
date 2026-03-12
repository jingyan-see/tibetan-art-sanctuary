import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useThangkas } from "@/hooks/useData";

const ThangkaCarousel = () => {
  const { data: thangkas = [] } = useThangkas();
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const isPaused = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let scrollPos = 0;
    const speed = 0.4; // px per frame — slow museum scroll

    const animate = () => {
      if (!isPaused.current && el) {
        scrollPos += speed;
        // Reset when we've scrolled through half (the duplicated set)
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

  // Duplicate items for infinite scroll effect
  const items = [...thangkas, ...thangkas];

  if (thangkas.length === 0) return null;

  return (
    <div
      ref={scrollRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      className="flex gap-6 overflow-x-hidden px-6 py-4 cursor-grab"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {items.map((t, i) => (
        <Link
          key={`${t.id}-${i}`}
          to={`/thangka/${t.id}`}
          className="flex-shrink-0"
        >
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-56 md:w-72 group"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg aspect-[3/4] bg-card">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="pt-3 text-center">
              <h3 className="font-display text-sm font-semibold text-foreground">{t.nameCn}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{t.name}</p>
              <p className="text-xs text-accent mt-1">{t.typeCn}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default ThangkaCarousel;
