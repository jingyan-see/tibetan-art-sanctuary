import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Thangka } from "@/data/thangkaData";

const ThangkaCard = ({ thangka }: { thangka: Thangka }) => (
  <Link to={`/thangka/${thangka.id}`}>
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="thangka-frame group cursor-pointer"
    >
      <div className="overflow-hidden aspect-[3/4]">
        <img
          src={thangka.image}
          alt={thangka.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="pt-3 pb-1 px-1 text-center">
        <h3 className="font-display text-sm font-semibold text-foreground">{thangka.nameCn}</h3>
        <p className="text-xs text-muted-foreground mt-0.5">{thangka.name}</p>
        <p className="text-xs text-accent mt-1">{thangka.typeCn}</p>
      </div>
    </motion.div>
  </Link>
);

export default ThangkaCard;
