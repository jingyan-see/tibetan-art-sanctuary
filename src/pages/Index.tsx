import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import artistPortrait from "@/assets/artist-portrait.jpg";
import thangkaSample from "@/assets/thangka-sample.png";
import thangkaWearable from "@/assets/thangka-wearable-1.jpg";
import SectionDivider from "@/components/SectionDivider";
import OrnateFrame from "@/components/OrnateFrame";
import FindBuddhaSection from "@/components/FindBuddhaSection";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <div className="pt-16">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 py-20 relative">
        <OrnateFrame className="p-12 md:p-20 text-center max-w-2xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="flex justify-center mb-8"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden ornate-border">
              <img
                src={artistPortrait}
                alt="Thangka Artist"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2"
          >
            扎西·唐卡艺术
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-display text-lg text-accent mb-6"
          >
            Tashi · Thangka Art Studio
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-8"
          >
            传承藏传佛教唐卡绘画艺术三十余年，以虔诚之心绘制每一幅作品。
            采用天然矿物颜料与纯金，遵循传统工艺，将佛法智慧融入笔端。
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-col items-center gap-2 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-accent" />
              <span>+86 139-XXXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-accent" />
              <span>tashi@thangka-art.com</span>
            </div>
          </motion.div>
        </OrnateFrame>
      </section>

      <SectionDivider />

      {/* FEATURED WORKS SECTION */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-3xl text-center text-foreground mb-2"
        >
          唐卡作品
        </motion.h2>
        <p className="text-center text-sm text-muted-foreground mb-12">Thangka Works</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Large Thangka */}
          <Link to="/gallery/large">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="thangka-frame group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={thangkaSample}
                  alt="Large Thangka"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="py-4 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground">大型唐卡</h3>
                <p className="text-sm text-muted-foreground">Large Thangka</p>
              </div>
            </motion.div>
          </Link>

          {/* Wearable Thangka */}
          <Link to="/gallery/wearable">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="thangka-frame group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[4/5]">
                <img
                  src={thangkaWearable}
                  alt="Wearable Thangka"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="py-4 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground">佩戴唐卡</h3>
                <p className="text-sm text-muted-foreground">Wearable Thangka</p>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* FIND YOUR BUDDHA */}
      <FindBuddhaSection />

      {/* FOOTER */}
      <footer className="py-12 text-center text-xs text-muted-foreground border-t border-border">
        <p>© 2024 扎西·唐卡艺术 Tashi Thangka Art Studio</p>
        <p className="mt-1">传承 · 虔诚 · 艺术</p>
      </footer>
    </div>
  );
};

export default Index;
