import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { thangkas } from "@/data/thangkaData";
import ThangkaCard from "@/components/ThangkaCard";
import SectionDivider from "@/components/SectionDivider";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const ThangkaDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const thangka = thangkas.find((t) => t.id === id);
  const [zoomed, setZoomed] = useState(false);

  if (!thangka) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center text-muted-foreground">
        作品未找到 · Thangka not found
      </div>
    );
  }

  const related = thangkas.filter((t) => t.id !== thangka.id).slice(0, 3);

  return (
    <div className="pt-16 min-h-screen">
      <div className="px-6 py-8 max-w-4xl mx-auto">
        <Link
          to={`/gallery/${thangka.type}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft size={16} /> 返回 · Back
        </Link>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="thangka-frame max-w-xl mx-auto mb-10 cursor-zoom-in"
          onClick={() => setZoomed(true)}
        >
          <img
            src={thangka.image}
            alt={thangka.name}
            className="w-full object-contain"
          />
        </motion.div>

        {/* Zoom overlay */}
        {zoomed && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center cursor-zoom-out p-4"
            onClick={() => setZoomed(false)}
          >
            <img
              src={thangka.image}
              alt={thangka.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}

        {/* Info */}
        <div className="text-center mb-10">
          <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-1">
            {thangka.nameCn}
          </h1>
          <p className="font-display text-lg text-accent mb-4">{thangka.name}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto text-sm">
            <div>
              <span className="text-muted-foreground">佛像</span>
              <p className="text-foreground">{thangka.deityCn}</p>
            </div>
            <div>
              <span className="text-muted-foreground">类型</span>
              <p className="text-foreground">{thangka.typeCn}</p>
            </div>
            <div>
              <span className="text-muted-foreground">尺寸</span>
              <p className="text-foreground">{thangka.size}</p>
            </div>
            <div>
              <span className="text-muted-foreground">年份</span>
              <p className="text-foreground">{thangka.year}</p>
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Description */}
        <div className="max-w-2xl mx-auto mb-10">
          <h2 className="font-display text-xl text-foreground mb-4">作品介绍</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">{thangka.description}</p>
        </div>

        <SectionDivider />

        {/* Deity Info */}
        <div className="max-w-2xl mx-auto mb-10 space-y-6">
          <h2 className="font-display text-xl text-foreground">佛像信息 · Deity Information</h2>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">简介 · Introduction</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{thangka.deityInfo.introduction}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">象征意义 · Symbolism</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{thangka.deityInfo.symbolism}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">咒语 · Mantra</h3>
            <p className="text-sm text-accent">{thangka.deityInfo.mantra}</p>
          </div>
        </div>

        <SectionDivider />

        {/* Related */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-xl text-foreground text-center mb-8">相关作品 · Related Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((t) => (
              <ThangkaCard key={t.id} thangka={t} />
            ))}
          </div>
        </div>
      </div>

      <footer className="py-12 text-center text-xs text-muted-foreground border-t border-border mt-16">
        <p>© 2024 扎西·唐卡艺术 Tashi Thangka Art Studio</p>
      </footer>
    </div>
  );
};

export default ThangkaDetailPage;
