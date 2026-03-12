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

      {/* Chinese flower window shaped zodiac buttons */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-5 max-w-lg mx-auto mb-10">
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
                  "path('M40 4 C46 4 52 10 54 18 C54 18 56 14 62 12 C68 10 74 14 76 20 C78 26 74 32 68 34 C68 34 76 36 78 42 C80 48 78 56 72 60 C66 64 60 62 56 58 C56 58 58 64 56 70 C54 76 48 80 42 80 C36 80 32 76 30 70 C28 64 30 58 28 58 C24 62 20 64 14 60 C8 56 4 50 6 44 C8 38 14 34 18 34 C18 34 10 30 8 24 C6 18 10 12 16 10 C22 8 28 12 30 16 C30 16 32 10 36 6 C38 4 38 4 40 4Z')",
                background: selected === z.animal
                  ? "hsl(var(--primary))"
                  : "hsl(var(--card))",
                boxShadow: selected === z.animal
                  ? "0 0 16px hsl(var(--primary) / 0.4)"
                  : "0 2px 8px hsl(var(--foreground) / 0.08)",
              }}
            >
              <span className="text-2xl">{z.emoji}</span>
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
