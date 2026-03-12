import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useThangkas, useBuddhas } from "@/hooks/useData";
import ThangkaCard from "@/components/ThangkaCard";
import { Search } from "lucide-react";

const DeityCatalogPage = () => {
  const [search, setSearch] = useState("");
  const [selectedDeity, setSelectedDeity] = useState<string | null>(null);
  const { data: deities = [] } = useBuddhas();
  const { data: thangkas = [] } = useThangkas();

  const filteredDeities = deities.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.nameCn.includes(search)
  );

  const deityThangkas = selectedDeity
    ? thangkas.filter(
        (t) =>
          t.deity.toLowerCase() === selectedDeity.toLowerCase() ||
          t.deityCn === selectedDeity
      )
    : [];

  return (
    <div className="pt-16 min-h-screen">
      <div className="px-6 py-16 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-3xl text-center text-foreground mb-1"
        >
          佛像图鉴
        </motion.h1>
        <p className="text-center text-sm text-muted-foreground mb-10">Deity Catalog</p>

        <div className="relative max-w-sm mx-auto mb-12">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索佛像 · Search deity..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSelectedDeity(null);
            }}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {filteredDeities.map((d, i) => (
            <motion.button
              key={d.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelectedDeity(d.name === selectedDeity ? null : d.name)}
              className={`p-4 text-left border rounded-sm transition-all duration-300 ${
                selectedDeity === d.name
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-accent"
              }`}
            >
              <h3 className="font-display text-sm font-semibold">{d.nameCn}</h3>
              <p className={`text-xs mt-0.5 ${selectedDeity === d.name ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {d.name}
              </p>
              <p className={`text-xs mt-1 ${selectedDeity === d.name ? "text-primary-foreground/70" : "text-accent"}`}>
                {d.description}
              </p>
            </motion.button>
          ))}
        </div>

        {selectedDeity && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="font-display text-xl text-center text-foreground mb-8">
              {selectedDeity} 相关唐卡
            </h2>
            {deityThangkas.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {deityThangkas.map((t) => (
                  <ThangkaCard key={t.id} thangka={t} />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground">暂无相关作品</p>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DeityCatalogPage;
