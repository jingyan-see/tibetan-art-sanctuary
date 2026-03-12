import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useThangkas, useZodiac } from "@/hooks/useData";
import ThangkaCard from "@/components/ThangkaCard";

const FindBuddhaSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const { data: zodiac = [] } = useZodiac();
  const { data: thangkas = [] } = useThangkas();

  const result = selected ? zodiac.find((z) => z.animal === selected) : null;

  const relatedThangkas = result
    ? thangkas.filter(
        (t) =>
          t.deity.toLowerCase().includes(result.buddhaId) ||
          result.buddhaId.includes(t.deity.toLowerCase())
      )
    : [];

  return (
    <section className="px-6 py-20 md:py-28 max-w-4xl mx-auto relative">
      {/* Section heading */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-2"
        >
          寻找守护佛
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-px bg-accent/50 mx-auto mb-3"
        />
        <p
          className="text-[11px] text-muted-foreground/60 tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-display-en)" }}
        >
          Find Your Guardian Buddha
        </p>
      </div>

      {/* Zodiac grid — refined clover buttons */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-x-8 gap-y-6 max-w-2xl mx-auto mb-12 px-4">
        {zodiac.map((z, i) => (
          <motion.button
            key={z.animal}
            onClick={() => setSelected(z.animal)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.4 }}
            className="flex flex-col items-center justify-center gap-1.5 group"
          >
            <motion.div
              whileHover={{ scale: 1.12, rotate: 3 }}
              whileTap={{ scale: 0.92 }}
              className="relative w-[72px] h-[72px] flex items-center justify-center transition-all duration-500"
            >
              {/* Clover shape */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  clipPath:
                    "path('M36 2 C44 2 51 12 51 23 C62 23 70 28 70 36 C70 44 62 49 51 49 C51 60 44 70 36 70 C28 70 21 60 21 49 C10 49 2 44 2 36 C2 28 10 23 21 23 C21 12 28 2 36 2Z')",
                  background: selected === z.animal
                    ? "hsl(var(--primary))"
                    : "hsl(var(--border) / 0.6)",
                  boxShadow: selected === z.animal
                    ? "0 4px 24px hsl(var(--primary) / 0.35), inset 0 1px 0 hsl(var(--primary-foreground) / 0.1)"
                    : "0 2px 8px hsl(var(--foreground) / 0.04)",
                }}
              />
              {/* Inner glow for selected */}
              {selected === z.animal && (
                <motion.div
                  layoutId="zodiac-glow"
                  className="absolute inset-[-4px]"
                  style={{
                    clipPath:
                      "path('M40 0 C49 0 57 11 57 24 C68 24 78 29 78 40 C78 51 68 56 57 56 C57 69 49 80 40 80 C31 80 23 69 23 56 C12 56 2 51 2 40 C2 29 12 24 23 24 C23 11 31 0 40 0Z')",
                    background: "hsl(var(--primary) / 0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 text-lg font-display transition-colors duration-300 ${
                  selected === z.animal
                    ? "text-primary-foreground"
                    : "text-foreground/60 group-hover:text-foreground"
                }`}
              >
                {z.animalCn}
              </span>
            </motion.div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center"
          >
            <div className="p-10 max-w-sm mx-auto bg-card/50 backdrop-blur-sm rounded-sm border border-accent/20">
              <p className="text-[11px] text-muted-foreground/60 tracking-[0.2em] mb-3">
                您的守护佛 · Your Guardian Buddha
              </p>
              <h3 className="font-display text-2xl text-primary mb-1.5 tracking-wider">
                {result.buddhaCn}
              </h3>
              <p className="text-xs text-accent/70" style={{ fontFamily: "var(--font-display-en)" }}>
                {result.buddhaEn}
              </p>
            </div>

            {relatedThangkas.length > 0 && (
              <div className="mt-12">
                <p className="text-[11px] text-muted-foreground/50 tracking-[0.2em] mb-8">
                  推荐唐卡作品 · Recommended Thangkas
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
                  {relatedThangkas.map((t) => (
                    <ThangkaCard key={t.id} thangka={t} />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FindBuddhaSection;
