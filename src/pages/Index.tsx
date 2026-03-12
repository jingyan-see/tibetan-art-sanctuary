import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import artistPortrait from "@/assets/artist-portrait.jpg";
import artistWorking from "@/assets/artist-working.jpg";
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
    <div>
      {/* FULL-SCREEN HERO — like Museo del Prado: photo fills viewport, text at bottom */}
      <section className="relative w-full h-screen overflow-hidden">
        <img
          src={artistWorking}
          alt="唐卡画师创作中"
          className="w-full h-full object-cover"
        />
        {/* Bottom gradient: photo fades smoothly into background */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-background via-background/70 to-transparent" />
        {/* Title at bottom-left, museum style */}
        <div className="absolute inset-x-0 bottom-0 px-8 md:px-16 pb-12 md:pb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-foreground/60 mb-3"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            Thangka Art Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl text-foreground mb-2"
          >
            扎西·唐卡艺术
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base md:text-lg text-muted-foreground"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            传承藏传佛教唐卡绘画三十余年
          </motion.p>
        </div>
      </section>

      {/* ARTIST INTRO */}
      <section className="py-16 px-6 relative overflow-hidden">
        <TibetanCloud className="absolute top-8 left-4 w-32 text-accent/15 rotate-[-5deg]" />
        <TibetanCloud className="absolute top-16 right-8 w-28 text-accent/10 rotate-[8deg] scale-x-[-1]" />
        <DharmaWheel className="absolute top-12 right-12 w-16 text-accent/[0.06] animate-[spin_60s_linear_infinite]" />

        <OrnateFrame className="p-10 md:p-16 text-center max-w-2xl mx-auto relative z-10">
          <TibetanLotus className="absolute top-2 left-1/2 -translate-x-1/2 w-20 text-accent/20" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="flex justify-center mb-8"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden ornate-border">
              <img src={artistPortrait} alt="Thangka Artist" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto mb-8">
            传承藏传佛教唐卡绘画艺术三十余年，以虔诚之心绘制每一幅作品。
            采用天然矿物颜料与纯金，遵循传统工艺，将佛法智慧融入笔端。
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
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

      <TibetanPatternDivider />

      {/* FIND YOUR BUDDHA */}
      <div className="relative">
        <TibetanCloud className="absolute top-8 left-6 w-28 text-accent/[0.12]" />
        <TibetanCloud className="absolute top-12 right-4 w-24 text-accent/10 scale-x-[-1]" />
        <TibetanKnot className="absolute bottom-8 right-8 w-10 text-primary/[0.08]" />
        <FindBuddhaSection />
      </div>

      {/* FOOTER */}
      <TibetanPatternDivider />
      <footer className="py-12 text-center text-xs text-muted-foreground relative">
        <TibetanLotus className="w-16 mx-auto text-accent/20 mb-4" />
        <p>© 2024 扎西·唐卡艺术 Tashi Thangka Art Studio</p>
        <p className="mt-1">传承 · 虔诚 · 艺术</p>
      </footer>
    </div>
  );
};

export default Index;
