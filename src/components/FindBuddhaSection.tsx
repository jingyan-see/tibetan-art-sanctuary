import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodiacBuddhaMap, thangkas } from "@/data/thangkaData";
import ThangkaCard from "@/components/ThangkaCard";

const zodiacAnimals = [
  { en: "Rat", cn: "鼠", emoji: "🐀" },
  { en: "Ox", cn: "牛", emoji: "🐂" },
  { en: "Tiger", cn: "虎", emoji: "🐅" },
  { en: "Rabbit", cn: "兔", emoji: "🐇" },
  { en: "Dragon", cn: "龙", emoji: "🐉" },
  { en: "Snake", cn: "蛇", emoji: "🐍" },
  { en: "Horse", cn: "马", emoji: "🐴" },
  { en: "Goat", cn: "羊", emoji: "🐐" },
  { en: "Monkey", cn: "猴", emoji: "🐒" },
  { en: "Rooster", cn: "鸡", emoji: "🐓" },
  { en: "Dog", cn: "狗", emoji: "🐕" },
  { en: "Pig", cn: "猪", emoji: "🐖" },
];

const FindBuddhaSection = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const result = selected ? zodiacBuddhaMap[selected] : null;

  const relatedThangkas = result
    ? thangkas.filter(
        (t) => t.deity.toLowerCase().includes(result.deityId) || result.deityId.includes(t.deity.toLowerCase())
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
        {zodiacAnimals.map((z) => (
          <button
            key={z.en}
            onClick={() => setSelected(z.en)}
            className={`py-3 px-2 rounded-sm text-center transition-all duration-300 border ${
              selected === z.en
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card border-border hover:border-accent text-foreground"
            }`}
          >
            <div className="text-xl">{z.emoji}</div>
            <div className="text-xs mt-1">{z.cn}</div>
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
              <p className="text-sm text-accent">{result.buddha}</p>
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
