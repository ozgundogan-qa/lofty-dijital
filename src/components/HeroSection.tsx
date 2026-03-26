"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import AnimatedButton from "@/components/ui/AnimatedButton";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: [0.22, 1, 0.36, 1],
    }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const typewriterContainer: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.04,
      delayChildren: 0.2,
    }
  }
};

const typewriterChar: Variants = {
  hidden: { display: "none", opacity: 0 },
  show: { display: "inline", opacity: 1 }
};

const TypewriterText = ({ text, className = "" }: { text: string; className?: string }) => (
  <span className={className}>
    {text.split("").map((char, index) => (
      <motion.span key={index} variants={typewriterChar}>
        {char}
      </motion.span>
    ))}
  </span>
);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section ref={heroRef} className="relative min-h-[600px] flex items-center justify-center p-6 lg:p-12 overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="Lofty Dijital — lüks ve minimalist dijital ajans arka planı"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 z-0 bg-background-dark/70 backdrop-blur-[1px]" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center gap-8 max-w-4xl mx-auto"
      >
        <div className="flex flex-col gap-4">
          <motion.span variants={fadeUp} className="text-accent-1 text-sm font-bold tracking-widest uppercase">Dijital Ajans</motion.span>
          <motion.h1
            variants={typewriterContainer}
            className="text-white text-5xl lg:text-7xl font-black leading-tight tracking-tight"
          >
            <TypewriterText text="Markaya değer, " />
            <br />
            <TypewriterText
              text="dijitale zarafet "
              className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2"
            />
            <TypewriterText text="katıyoruz" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
              className="inline-block w-[3px] lg:w-[4px] h-[1em] bg-accent-1 ml-1 align-middle -translate-y-[2px]"
            />
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto mt-4"
          >
            Minimalist, lüks ve modern dijital çözümlerle markanızı geleceğe taşıyın. İşlevselliği estetikle buluşturuyoruz.
          </motion.p>
        </div>
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 mt-6"
        >
          <AnimatedButton href="/hizmetlerimiz" variant="primary">
            Hizmetlerimizi Keşfedin
          </AnimatedButton>
          <AnimatedButton variant="outline" icon={<PlayCircle className="w-5 h-5" />}>
            Tanıtım Filmi
          </AnimatedButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
