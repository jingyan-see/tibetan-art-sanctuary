import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useThangkas, useBuddhas } from "@/hooks/useData";
import ThangkaCard from "@/components/ThangkaCard";
import { ArrowLeft } from "lucide-react";

const DeityGalleryPage = () => {
  const { deityId } = useParams<{ deityId: string }>();
  const navigate = useNavigate();
  const { data: thangkas = [], isLoading } = useThangkas();
  const { data: deities = [] } = useBuddhas();

  const deity = deities.find((d) => d.id === deityId);
  const deityThangkas = thangkas.filter(
    (t) =>
      t.deity.toLowerCase() === deity?.name.toLowerCase() ||
      t.deityCn === deity?.nameCn
  );

  return (
    <div className="pt-16 min-h-screen">
      <div className="px-6 py-16 max-w-5xl mx-auto">
        <Link
          to="/deities"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft size={16} /> 返回图鉴 · Back to Catalog
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl text-center text-foreground mb-1"
        >
          {deity?.nameCn ?? deityId}
        </motion.h1>
        <p className="text-center text-sm text-muted-foreground mb-12">
          {deity?.name ?? ""} · {deity?.description ?? ""}
        </p>

        {isLoading ? (
          <p className="text-center text-muted-foreground py-20">加载中...</p>
        ) : deityThangkas.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {deityThangkas.map((t, i) => (
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
        ) : (
          <p className="text-center text-muted-foreground py-20">暂无相关作品 · No works yet</p>
        )}
      </div>
    </div>
  );
};

export default DeityGalleryPage;
