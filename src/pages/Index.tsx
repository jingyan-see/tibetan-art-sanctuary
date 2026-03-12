import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import artistPortrait from "@/assets/artist-portrait.jpg";
import OrnateFrame from "@/components/OrnateFrame";
import FindBuddhaSection from "@/components/FindBuddhaSection";
import TibetanPatternDivider from "@/components/TibetanPatternDivider";
import ThangkaCarousel from "@/components/ThangkaCarousel";
import {
  TibetanCloud,
  TibetanLotus,
  TibetanKnot,
  DharmaWheel,
} from "@/components/TibetanDecorations";

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
    <div className="pt-14">
      {/* Top pattern divider */}
      <TibetanPatternDivider />

      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <TibetanCloud className="absolute top-16 left-4 w-32 text-accent/20 rotate-[-5deg]" />
        <TibetanCloud className="absolute top-24 right-8 w-28 text-accent/15 rotate-[8deg] scale-x-[-1]" />
        <TibetanCloud className="absolute bottom-32 left-10 w-24 text-accent/10 rotate-[3deg]" />
        <TibetanCloud className="absolute bottom-20 right-4 w-36 text-accent/15 rotate-[-3deg]" />

        <DharmaWheel className="absolute top-20 right-12 w-20 text-accent/10 animate-[spin_60s_linear_infinite]" />
        <DharmaWheel className="absolute bottom-24 left-8 w-16 text-accent/[0.08] animate-[spin_80s_linear_infinite_reverse]" />

        <TibetanKnot className="absolute top-40 left-6 w-14 text-primary/10" />
        <TibetanKnot className="absolute bottom-40 right-10 w-12 text-primary/[0.08]" />

        <TibetanLotus className="absolute bottom-12 left-1/2 -translate-x-1/2 w-40 text-accent/10" />

        <OrnateFrame className="p-12 md:p-20 text-center max-w-2xl mx-auto relative z-10">
          <TibetanLotus className="absolute top-2 left-1/2 -translate-x-1/2 w-20 text-accent/20" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="flex justify-center mb-8"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden ornate-border relative">
              <img src={artistPortrait} alt="Thangka Artist" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-2">
            扎西·唐卡艺术
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="font-display text-lg text-accent mb-6">
            Tashi · Thangka Art Studio
          </motion.p>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
            传承藏传佛教唐卡绘画艺术三十余年，以虔诚之心绘制每一幅作品。
            采用天然矿物颜料与纯金，遵循传统工艺，将佛法智慧融入笔端。
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-accent" />
              <span>+86 139-XXXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-accent" />
              <span>tashi@thangka-art.com</span>
            </div>
          </motion.div>

          <TibetanLotus className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 text-accent/20 rotate-180" />
        </OrnateFrame>
      </section>

      <TibetanPatternDivider />

      {/* FEATURED WORKS — Carousel */}
      <section className="py-16 relative">
        <TibetanCloud className="absolute top-4 left-6 w-24 text-accent/15" />
        <TibetanCloud className="absolute top-8 right-6 w-20 text-accent/10 scale-x-[-1]" />

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-3xl text-center text-foreground mb-2"
        >
          唐卡作品
        </motion.h2>
        <p className="text-center text-sm text-muted-foreground mb-12">Thangka Works</p>

        <ThangkaCarousel />
      </section>

      {/* Pattern divider */}
      <TibetanPatternDivider className="h-10 md:h-14" />

      {/* FIND YOUR BUDDHA */}
      <div className="relative">
        <TibetanCloud className="absolute top-8 left-6 w-28 text-accent/[0.12]" />
        <TibetanCloud className="absolute top-12 right-4 w-24 text-accent/10 scale-x-[-1]" />
        <TibetanKnot className="absolute bottom-8 right-8 w-10 text-primary/[0.08]" />
        <FindBuddhaSection />
      </div>

      {/* FOOTER */}
      <TibetanPatternDivider className="h-8 md:h-12" />
      <footer className="py-12 text-center text-xs text-muted-foreground relative">
        <TibetanLotus className="w-16 mx-auto text-accent/20 mb-4" />
        <p>© 2024 扎西·唐卡艺术 Tashi Thangka Art Studio</p>
        <p className="mt-1">传承 · 虔诚 · 艺术</p>
      </footer>
    </div>
  );
};

export default Index;
