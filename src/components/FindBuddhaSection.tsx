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
      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 max-w-md mx-auto mb-10">
        {zodiac.map((z) => (
          <button
            key={z.animal}
            onClick={() => setSelected(z.animal)}
            className="flex items-center justify-center group"
          >
            <div
              className={`w-14 h-14 flex items-center justify-center transition-all duration-300 ${
                selected === z.animal
                  ? "text-primary-foreground scale-110"
                  : "text-foreground hover:scale-105"
              }`}
              style={{
                clipPath:
                  "path('M28 2 C34 2 40 10 40 18 C48 18 54 22 54 28 C54 34 48 38 40 38 C40 46 34 54 28 54 C22 54 16 46 16 38 C8 38 2 34 2 28 C2 22 8 18 16 18 C16 10 22 2 28 2Z')",
                background: selected === z.animal
                  ? "hsl(var(--primary))"
                  : "hsl(var(--card))",
                boxShadow: selected === z.animal
                  ? "0 0 12px hsl(var(--primary) / 0.4)"
                  : "none",
              }}
            >
              <span className="text-xl">{z.emoji}</span>
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
