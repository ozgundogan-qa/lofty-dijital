"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Smile, CheckCircle2, Hourglass, ArrowRight, PlayCircle, Sparkles, Rocket, Headset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedButton from "@/components/ui/AnimatedButton";
import AnimatedLogo from "@/components/ui/AnimatedLogo";
import { useRef } from "react";

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

import { JsonLd } from "@/components/geo/JsonLd";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lofty Dijital',
    url: 'https://www.loftydijital.com',
    description: 'Minimalist, lüks ve modern dijital çözümlerle markanızı geleceğe taşıyın.'
  };

  return (
    <main className="flex-1">
      <JsonLd data={websiteSchema} />
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[600px] flex items-center justify-center p-6 lg:p-12 overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
        >
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2iB1LUmaKAxhX1jwOi3VC1sp3D7WYrGIohAVoSbatY8mwZDOy7eMeboVJVaqBSsZCsPGkiETDLohUop063pWQkpvew1ercDAlBFyrh6Z1_wJ1bmenNH43FcxBhXzn98Cc1vQ30qYl5FNRO14NInWMjz6t-r4o21FFY5aTB7Vf17RUy-9qY-g8SPkBq98xi7AoLj0qxD7jki93xi5DlJi3mwWB2eoBxi-BpECmnbEVZ_Rt1dpNNZZT7fnIBeMTcTIIRtdSjgEMp4k"
            alt="Lofty Dijital Tasarım ve Teknoloji"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 z-0 bg-background-dark/80 backdrop-blur-[2px]"></div>

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
            <AnimatedButton variant="outline" icon={PlayCircle}>
              Tanıtım Filmi
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/10 bg-background-dark py-10 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start p-6 rounded-xl bg-surface-dark shadow-sm border border-white/5 hover:border-accent-1/30 transition-colors">
            <div className="size-12 rounded-full bg-accent-1/20 flex items-center justify-center mb-4 text-accent-1">
              <Smile />
            </div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Mutlu Müşteri</p>
            <div className="flex items-end gap-2">
              <p className="text-white text-4xl font-bold">50+</p>
              <span className="text-green-500 text-sm font-bold mb-1 bg-green-500/10 px-2 py-0.5 rounded-full">+15%</span>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start p-6 rounded-xl bg-surface-dark shadow-sm border border-white/5 hover:border-accent-1/30 transition-colors">
            <div className="size-12 rounded-full bg-accent-1/20 flex items-center justify-center mb-4 text-accent-1">
              <CheckCircle2 />
            </div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Tamamlanan Proje</p>
            <div className="flex items-end gap-2">
              <p className="text-white text-4xl font-bold">120+</p>
              <span className="text-green-500 text-sm font-bold mb-1 bg-green-500/10 px-2 py-0.5 rounded-full">+20%</span>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-col items-center md:items-start p-6 rounded-xl bg-surface-dark shadow-sm border border-white/5 hover:border-accent-1/30 transition-colors">
            <div className="size-12 rounded-full bg-accent-1/20 flex items-center justify-center mb-4 text-accent-1">
              <Hourglass />
            </div>
            <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Yıllık Tecrübe</p>
            <div className="flex items-end gap-2">
              <p className="text-white text-4xl font-bold">10+</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <motion.div variants={fadeUp} className="flex flex-col gap-3 max-w-2xl">
              <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight">Dijital Zarafet</h2>
              <p className="text-slate-300 text-lg">Markanızın potansiyelini ortaya çıkaran, strateji odaklı tasarım ve yazılım çözümleri.</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <AnimatedButton href="/hizmetlerimiz" variant="outline" icon={ArrowRight}>
                Tüm Hizmetler
              </AnimatedButton>
            </motion.div>
          </div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Sosyal Medya Yönetimi",
                desc: "Stratejik içerik planlaması ve yönetimi ile markanızın sesini sosyal medyada en etkili şekilde duyuruyoruz.",
                img: "photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
                href: "/hizmetlerimiz/sosyal-medya-yonetimi"
              },
              {
                title: "Web Tasarım & Yazılım",
                desc: "Kullanıcı deneyimini ön planda tutan, estetik, hızlı ve işlevsel web siteleri tasarlıyoruz.",
                img: "photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
                href: "/hizmetlerimiz/web-tasarim-ve-gelistirme"
              },
              {
                title: "Kurumsal Kimlik",
                desc: "Markanızın özünü yansıtan, akılda kalıcı ve bütünsel kurumsal kimlik çalışmaları.",
                img: "photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
                href: "/hizmetlerimiz"
              }
            ].map((service, index) => (
              <motion.div
                variants={fadeUp}
                key={index}
                whileHover="hover"
                className="group bg-surface-dark rounded-2xl shadow-sm hover:shadow-xl hover:shadow-accent-1/5 transition-shadow duration-300 border border-white/5 cursor-pointer h-full"
              >
                <Link href={service.href} className="flex flex-col gap-4 overflow-hidden rounded-2xl h-full w-full">
                  <motion.div
                    className="h-64 w-full block relative"
                    variants={{ show: { scale: 1 }, hover: { scale: 1.05 } }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={`https://images.unsplash.com/${service.img}`}
                      alt={`${service.title} - Lofty Dijital`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </motion.div>
                  <div className="p-6 pt-2 flex flex-col gap-2 flex-grow">
                    <div className="flex justify-between items-center">
                      <h3 className="text-white text-xl font-bold">{service.title}</h3>
                      <motion.div variants={{ show: { x: 0 }, hover: { x: 4 } }} transition={{ duration: 0.3 }}>
                        <ArrowRight className="text-accent-1 w-5 h-5" />
                      </motion.div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Feature / About Section */}
      <section className="bg-surface-dark py-20 border-y border-white/5 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={fadeUp} className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] shadow-2xl flex items-center justify-center bg-background-dark border border-white/5 group">
            <AnimatedLogo width="80%" height="80%" className="group-hover:scale-105 transition-transform duration-1000 ease-[0.22,1,0.36,1]" />
            <div className="absolute inset-0 bg-accent-1/20 mix-blend-multiply pointer-events-none"></div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight">Neden Lofty?</h2>
              <h3 className="text-accent-1 text-xl font-medium">Lüks, Minimalizm ve Teknoloji</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Biz sadece bir dijital ajans değiliz; markanızın dijital dünyadaki mimarlarıyız. Her projeyi bir sanat eseri titizliğiyle ele alıyor, en son teknolojileri minimalist tasarım prensipleriyle birleştiriyoruz.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="flex flex-col gap-6">
              {[
                { icon: Sparkles, title: "Özgün Tasarımlar", desc: "Hazır kalıplardan uzak, markanıza özel butik çözümler." },
                { icon: Rocket, title: "Hız ve Performans", desc: "Optimize edilmiş kod yapılarıyla maksimum hız." },
                { icon: Headset, title: "Sürekli Destek", desc: "Proje tesliminden sonra da yanınızdayız." }
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="flex gap-4 group">
                  <div className="bg-accent-1/10 p-3 rounded-lg h-fit text-accent-1 group-hover:bg-accent-1/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-4">
              <AnimatedButton href="/iletisim" variant="primary">
                Tanışalım
              </AnimatedButton>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-background-dark/50 backdrop-blur-3xl z-0"></div>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-1/20 rounded-full blur-[100px] z-0 pointer-events-none"
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-8 items-center bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-3xl shadow-2xl border border-white/10"
        >
          <motion.h2 variants={fadeUp} className="text-white text-4xl lg:text-6xl font-black tracking-tight">Projelerinizi Hayata Geçirelim</motion.h2>
          <motion.p variants={fadeUp} className="text-slate-300 text-lg lg:text-xl max-w-2xl">
            Dijital dünyada iz bırakmak için hazırsanız, hemen teklif alın. Sizin için en uygun stratejiyi birlikte belirleyelim.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <AnimatedButton variant="primary">
              Hemen Teklif Alın
            </AnimatedButton>
            <AnimatedButton variant="outline">
              İletişime Geçin
            </AnimatedButton>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
