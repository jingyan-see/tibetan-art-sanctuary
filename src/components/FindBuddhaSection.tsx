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
    <section className="px-6 py-20 md:py-28 max-w-4xl mx-auto">
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
      <div className="grid grid-cols-4 md:grid-cols-6 gap-6 max-w-2xl mx-auto mb-12 px-4">
        {zodiac.map((z) => (
          <button
            key={z.animal}
            onClick={() => setSelected(z.animal)}
            className="flex items-center justify-center group"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className={`w-20 h-20 flex items-center justify-center transition-all duration-400 ${
                selected === z.animal
                  ? "text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
              style={{
                clipPath:
                  "path('M40 3 C49 3 57 14 57 26 C69 26 77 31 77 40 C77 49 69 54 57 54 C57 66 49 77 40 77 C31 77 23 66 23 54 C11 54 3 49 3 40 C3 31 11 26 23 26 C23 14 31 3 40 3Z')",
                background: selected === z.animal
                  ? "hsl(var(--primary))"
                  : "hsl(var(--card))",
                boxShadow: selected === z.animal
                  ? "0 0 20px hsl(var(--primary) / 0.3)"
                  : "none",
              }}
            >
              <span className="text-lg font-display">{z.animalCn}</span>
            </motion.div>
          </button>
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
