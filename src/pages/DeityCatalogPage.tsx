import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useBuddhas } from "@/hooks/useData";
import { Search } from "lucide-react";

const DeityCatalogPage = () => {
  const [search, setSearch] = useState("");
  const { data: deities = [] } = useBuddhas();

  const filteredDeities = deities
    .filter(
      (d) =>
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.nameCn.includes(search)
    )
    .sort((a, b) => {
      if (a.id === "multiple") return 1;
      if (b.id === "multiple") return -1;
      return a.name.localeCompare(b.name);
    });

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
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {filteredDeities.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/deities/${d.id}`}
                className="block p-4 text-left border rounded-sm transition-all duration-300 bg-card border-border hover:border-accent hover:shadow-md"
              >
                <h3 className="font-display text-sm font-semibold text-foreground">{d.nameCn}</h3>
                <p className="text-xs mt-0.5 text-muted-foreground">{d.name}</p>
                <p className="text-xs mt-1 text-accent">{d.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeityCatalogPage;
