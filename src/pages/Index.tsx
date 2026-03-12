import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import artistPortrait from "@/assets/artist-portrait.jpg";
import artistWorking from "@/assets/artist-working.jpg";
import FindBuddhaSection from "@/components/FindBuddhaSection";
import ThangkaCarousel from "@/components/ThangkaCarousel";
import {
  TibetanCloud,
  TibetanLotus,
  TibetanKnot,
  DharmaWheel,
} from "@/components/TibetanDecorations";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─── full-screen, editorial overlay */}
      <section className="relative w-full h-screen overflow-hidden">
        <motion.img
          src={artistWorking}
          alt="唐卡画师创作中"
          className="w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-background to-transparent" />

        {/* Title — bottom-left, refined spacing */}
        <div className="absolute inset-x-0 bottom-0 px-8 md:px-20 pb-16 md:pb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary-foreground/70 mb-4"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            Thangka Art Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-display text-4xl md:text-7xl text-primary-foreground tracking-wider mb-3"
          >
            扎西·唐卡艺术
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="h-px bg-accent/80 mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-sm md:text-base text-primary-foreground/60 tracking-[0.15em]"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            传承藏传佛教唐卡绘画三十余年
          </motion.p>
        </div>
      </section>

      {/* ─── ARTIST INTRO ─── clean, centered, generous whitespace */}
      <section className="py-24 md:py-32 px-6 relative">
        <TibetanCloud className="absolute top-12 left-4 w-36 text-accent/10 rotate-[-5deg]" />
        <TibetanCloud className="absolute top-20 right-8 w-28 text-accent/[0.07] rotate-[8deg] scale-x-[-1]" />
        <DharmaWheel className="absolute top-16 right-16 w-14 text-accent/[0.05] animate-[spin_90s_linear_infinite]" />

        <div className="max-w-lg mx-auto text-center relative z-10">
          {/* Portrait */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="flex justify-center mb-10"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden ring-1 ring-accent/30 ring-offset-4 ring-offset-background">
              <img src={artistPortrait} alt="Thangka Artist" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Decorative line */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.5}
            className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-12 bg-accent/30" />
            <TibetanLotus className="w-8 text-accent/30" />
            <div className="h-px w-12 bg-accent/30" />
          </motion.div>

          {/* Bio text */}
          <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="text-sm text-muted-foreground leading-[2] tracking-wide max-w-sm mx-auto mb-10">
            传承藏传佛教唐卡绘画艺术三十余年，以虔诚之心绘制每一幅作品。
            采用天然矿物颜料与纯金，遵循传统工艺，将佛法智慧融入笔端。
          </motion.p>

          {/* Contact — subtle, inline */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="flex flex-col items-center gap-3 text-xs text-muted-foreground/70">
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-accent/60" />
              <span className="tracking-wider">+86 139-XXXX-XXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={12} className="text-accent/60" />
              <span className="tracking-wider">tashi@thangka-art.com</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED WORKS ─── */}
      <section className="py-20 md:py-28 relative">
        <TibetanCloud className="absolute top-6 left-6 w-24 text-accent/10" />
        <TibetanCloud className="absolute top-10 right-6 w-20 text-accent/[0.07] scale-x-[-1]" />

        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-2"
          >
            唐卡作品
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-accent/50 mx-auto mb-3"
          />
          <p
            className="text-[11px] text-muted-foreground/60 tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-display-en)" }}
          >
            Thangka Works
          </p>
        </div>

        <ThangkaCarousel />
      </section>

      {/* ─── FIND YOUR BUDDHA ─── */}
      <div className="relative">
        <TibetanCloud className="absolute top-8 left-6 w-28 text-accent/[0.08]" />
        <TibetanCloud className="absolute top-12 right-4 w-24 text-accent/[0.06] scale-x-[-1]" />
        <TibetanKnot className="absolute bottom-8 right-8 w-10 text-primary/[0.06]" />
        <FindBuddhaSection />
      </div>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 text-center relative">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10 bg-accent/20" />
          <TibetanLotus className="w-10 text-accent/20" />
          <div className="h-px w-10 bg-accent/20" />
        </div>
        <p className="text-[11px] text-muted-foreground/60 tracking-[0.1em]">
          © 2024 扎西·唐卡艺术 Tashi Thangka Art Studio
        </p>
        <p className="text-[10px] text-muted-foreground/40 mt-1.5 tracking-[0.3em]">
          传承 · 虔诚 · 艺术
        </p>
      </footer>
    </div>
  );
};

export default Index;
