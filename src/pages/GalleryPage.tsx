import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { thangkas } from "@/data/thangkaData";
import ThangkaCard from "@/components/ThangkaCard";

const GalleryPage = () => {
  const { type } = useParams<{ type: string }>();
  const filtered = thangkas.filter((t) =>
    type === "wearable" ? t.type === "wearable" : t.type === "large"
  );
  const title = type === "wearable" ? "佩戴唐卡" : "大型唐卡";
  const subtitle = type === "wearable" ? "Wearable Thangka" : "Large Thangka";

  return (
    <div className="pt-16 min-h-screen">
      <div className="px-6 py-16 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl text-center text-foreground mb-1"
        >
          {title}
        </motion.h1>
        <p className="text-center text-sm text-muted-foreground mb-12">{subtitle}</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <ThangkaCard thangka={t} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">暂无作品 · No works yet</p>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
