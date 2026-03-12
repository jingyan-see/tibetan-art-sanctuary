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
        找守护佛
      </motion.h2>
      <p className="text-center text-sm text-muted-foreground mb-10">Find Your Guardian Buddha</p>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-3 max-w-lg mx-auto mb-10">
        {zodiac.map((z) => (
          <button
            key={z.animal}
            onClick={() => setSelected(z.animal)}
            className={`py-3 px-2 rounded-sm text-center transition-all duration-300 border ${
              selected === z.animal
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border hover:border-accent text-foreground"
            }`}
          >
            <div className="text-xl">{z.emoji}</div>
            <div className="text-xs mt-1">{z.animalCn}</div>
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
