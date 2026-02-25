"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            ease: [0.22, 1, 0.36, 1],
        }
    }
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const projects = [
    {
        title: "Aura Güzellik Merkezi",
        category: "Web Tasarım & Marka Kimliği",
        img: "photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        title: "Nexus Finans",
        category: "Kurumsal Web Sitesi",
        img: "photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
        title: "Nova Mimarlık",
        category: "Portfolyo Sitesi",
        img: "photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    },
    {
        title: "Lumiere Restoran",
        category: "Web Tasarım & Menü Sistemi",
        img: "photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        title: "TechFlow SaaS",
        category: "Dashboard Tasarımı",
        img: "photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    },
    {
        title: "Zenith Moda",
        category: "E-Ticaret Dönüşümü",
        img: "photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
        colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    }
];

export default function PortfolioPage() {
    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 lg:px-12 overflow-hidden bg-background-dark">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6"
                >
                    <motion.span variants={fadeUp} className="text-accent-1 text-sm font-bold tracking-widest uppercase">
                        Örnek Projelerimiz
                    </motion.span>
                    <motion.h1
                        variants={fadeUp}
                        className="text-white text-5xl lg:text-7xl font-black leading-tight tracking-tight max-w-4xl"
                    >
                        Sınırları aşan <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2">dijital deneyimler</span>
                    </motion.h1>
                    <motion.p
                        variants={fadeUp}
                        className="text-slate-300 text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mt-4"
                    >
                        Markaların dijital potansiyelini gerçeğe dönüştürdüğümüz seçkin çalışmalarımız.
                    </motion.p>
                </motion.div>
            </section>

            {/* Grid Section */}
            <section className="py-12 px-6 lg:px-12 max-w-7xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 auto-rows-[400px]"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            variants={fadeUp}
                            key={index}
                            className={`group relative rounded-2xl overflow-hidden shadow-sm border border-white/5 cursor-pointer ${project.colSpan}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-105"
                                style={{ backgroundImage: `url('https://images.unsplash.com/${project.img}')` }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col gap-2">
                                <span className="text-accent-1 text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {project.category}
                                </span>
                                <div className="flex justify-between items-end">
                                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                                    <div className="size-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 border border-white/20 group-hover:scale-110">
                                        <ArrowUpRight className="text-white w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 relative overflow-hidden bg-surface-dark border-t border-white/5 mt-12">
                <div className="absolute inset-0 bg-background-dark/50 backdrop-blur-3xl z-0"></div>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.1, 0.05]
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
                    className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-8 items-center"
                >
                    <motion.h2 variants={fadeUp} className="text-white text-4xl lg:text-5xl font-black tracking-tight">Yeni Bir Projeye Başlayalım</motion.h2>
                    <motion.p variants={fadeUp} className="text-slate-300 text-lg lg:text-xl max-w-2xl">
                        Sizin markanız için de benzer başarı hikayeleri yazabiliriz.
                    </motion.p>
                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                        <AnimatedButton href="/iletisim" variant="primary">
                            Bize Ulaşın
                        </AnimatedButton>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
}
