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
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-2xl md:text-3xl text-center text-foreground mb-2"
      >
        寻找守护佛
      </motion.h2>
      <p className="text-center text-sm text-muted-foreground mb-10">Find Your Guardian Buddha</p>

      {/* Clover-shaped zodiac buttons */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-6 max-w-2xl mx-auto mb-10 px-4">
        {zodiac.map((z) => (
          <button
            key={z.animal}
            onClick={() => setSelected(z.animal)}
            className="flex items-center justify-center group"
          >
            <div
              className={`w-20 h-20 flex items-center justify-center transition-all duration-300 ${
                selected === z.animal
                  ? "text-primary-foreground scale-110"
                  : "text-foreground hover:scale-105"
              }`}
              style={{
                clipPath:
                  "path('M40 3 C49 3 57 14 57 26 C69 26 77 31 77 40 C77 49 69 54 57 54 C57 66 49 77 40 77 C31 77 23 66 23 54 C11 54 3 49 3 40 C3 31 11 26 23 26 C23 14 31 3 40 3Z')",
                background: selected === z.animal
                  ? "hsl(var(--primary))"
                  : "hsl(var(--card))",
                boxShadow: selected === z.animal
                  ? "0 0 12px hsl(var(--primary) / 0.4)"
                  : "none",
              }}
            >
              <span className="text-lg font-display">{z.animalCn}</span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <div className="ornate-border p-8 max-w-md mx-auto bg-card rounded-sm">
              <p className="text-sm text-muted-foreground mb-2">您的守护佛 · Your Guardian Buddha</p>
              <h3 className="font-display text-2xl font-semibold text-primary mb-1">
                {result.buddhaCn}
              </h3>
              <p className="text-sm text-accent">{result.buddhaEn}</p>
            </div>

            {relatedThangkas.length > 0 && (
              <div className="mt-10">
                <p className="text-sm text-muted-foreground mb-6">推荐唐卡作品 · Recommended Thangkas</p>
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
