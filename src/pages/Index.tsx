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
    transition: { delay: i * 0.18, duration: 0.7, ease: "easeOut" as const },
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
          className="w-full h-full object-cover object-bottom"
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
            className="text-[11px] md:text-sm tracking-[0.35em] uppercase text-primary-foreground/80 mb-4 font-medium"
            style={{ fontFamily: "var(--font-display-en)", textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}
          >
            Thangka Art Studio · 公却当周唐卡艺术工作室
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-5xl md:text-8xl text-primary-foreground tracking-wider mb-3 font-bold"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.2)" }}
          >
            公却当周·唐卡艺术
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
            className="text-sm md:text-lg text-primary-foreground/75 tracking-[0.2em] font-medium"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.35)" }}
          >
            传承藏传佛教唐卡绘画三十余年
          </motion.p>
        </div>
      </section>

      {/* ─── ARTIST INTRO ─── horizontal layout with portrait + bio */}
      <section className="py-28 md:py-40 px-6 relative">
        <TibetanCloud className="absolute top-12 left-4 w-36 text-accent/10 rotate-[-5deg]" />
        <TibetanCloud className="absolute top-20 right-8 w-28 text-accent/[0.07] rotate-[8deg] scale-x-[-1]" />
        <DharmaWheel className="absolute bottom-12 right-16 w-14 text-accent/[0.05] animate-[spin_90s_linear_infinite]" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
            {/* Portrait */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="flex-shrink-0"
            >
              <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-1 ring-accent/30 ring-offset-4 ring-offset-background shadow-lg">
                <img src={artistPortrait} alt="公却当周" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Text content */}
            <div className="text-center md:text-left flex-1">
              {/* Name + phone in one row */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}
                className="flex items-baseline gap-4 justify-center md:justify-start mb-2">
                <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider">
                  公却当周
                </h2>
                <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground/70 tracking-wider">
                  <Phone size={10} className="text-accent/60" />
                  86-155-0071-5000
                </span>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.5}
                className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <div className="h-px w-10 bg-accent/30" />
                <TibetanLotus className="w-6 text-accent/30" />
                <div className="h-px w-10 bg-accent/30" />
              </motion.div>

              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.8}
                className="text-sm text-muted-foreground leading-[2] tracking-wide mb-4">
                男，1990年生于青海同仁县吴屯村艺人之家。八岁师从唐卡大师桑斗合，与师共创作品收藏于热贡隆务大寺、五台山等地。作品多次荣获国家级金奖，入选青海国际唐卡博览会。2015年入中国工艺美术协会，2021年获吉尼斯挑战优秀奖。
              </motion.p>
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1.1}
                className="text-sm text-muted-foreground/80 leading-[2] tracking-wide italic">
                传承藏传佛教唐卡绘画艺术三十余年，以虔诚之心绘制每一幅作品。采用天然矿物颜料与纯金，遵循传统工艺，将佛法智慧融入笔端。
              </motion.p>
            </div>
          </div>
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
            唐卡精品
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

      {/* ─── CUSTOM COMMISSION ─── */}
      <section className="py-20 md:py-28 px-6 relative overflow-hidden">
        <TibetanCloud className="absolute top-10 left-8 w-32 text-accent/[0.06] rotate-[-3deg]" />
        <TibetanCloud className="absolute bottom-16 right-10 w-24 text-accent/[0.05] rotate-[5deg] scale-x-[-1]" />
        <DharmaWheel className="absolute top-24 right-20 w-12 text-accent/[0.04] animate-[spin_120s_linear_infinite]" />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent/30" />
              <TibetanLotus className="w-5 text-accent/40" />
              <div className="h-px w-8 bg-accent/30" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl text-foreground tracking-wider mb-3">
              专属定制
            </h2>
            <p 
              className="text-[11px] text-muted-foreground/60 tracking-[0.3em] uppercase mb-8"
              style={{ fontFamily: "var(--font-display-en)" }}
            >
              Custom Commission
            </p>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 md:p-10 border border-accent/10 shadow-sm">
              <p className="text-muted-foreground leading-[2] tracking-wide mb-6 text-sm md:text-base">
                如需定制专属佩戴唐卡、供奉唐卡或艺术收藏品，<br className="hidden md:block" />
                欢迎垂询，我们将以虔诚之心为您创作。
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                <a 
                  href="tel:86-155-0071-5000" 
                  className="flex items-center gap-2.5 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone size={18} className="text-accent" />
                  </span>
                  <span className="text-sm tracking-wider">86-155-0071-5000</span>
                </a>
                
                <div className="hidden md:block w-px h-8 bg-accent/20" />
                
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <span className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px] text-accent">
                      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89l-.406-.032zM13.12 12.05c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.842 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
                    </svg>
                  </span>
                  <span className="text-sm tracking-wider">微信：amtf88800</span>
                </div>
              </div>
              
              <p className="text-[11px] text-muted-foreground/50 mt-6 tracking-wide">
                一对一沟通 · 匠心独运 · 传承经典
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-16 text-center relative">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-10 bg-accent/20" />
          <TibetanLotus className="w-10 text-accent/20" />
          <div className="h-px w-10 bg-accent/20" />
        </div>
        <p className="text-[11px] text-muted-foreground/60 tracking-[0.1em]">
          © 2024 公却当周·唐卡艺术 Gongque Dangzhou Thangka Art Studio
        </p>
        <p className="text-[10px] text-muted-foreground/40 mt-1.5 tracking-[0.3em]">
          传承 · 虔诚 · 艺术
        </p>
      </footer>
    </div>
  );
};

export default Index;
