"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceItem } from "@/constants/services";
import Image from "next/image";
import clsx from "clsx";

interface ScrollServiceSectionProps {
    service: ServiceItem;
    index: number;
}

export default function ScrollServiceSection({ service, index }: ScrollServiceSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Asimetrik dizilim: Tek/çift sayıya göre sağda/solda.
    const isEven = index % 2 === 1;

    // Parallax / İvme efektleri için scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]); // İkon/Görsel Hızı
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);  // Metin Hızı

    return (
        <section
            ref={containerRef}
            className={clsx(
                "relative min-h-[80vh] flex items-center justify-center py-24 md:py-32 overflow-hidden",
                "border-t border-white/5 first:border-0"
            )}
        >
            <div className="container max-w-6xl mx-auto px-6 lg:px-12 relative z-10">

                <div className={clsx(
                    "flex flex-col lg:flex-row items-center gap-16 lg:gap-24",
                    isEven ? "lg:flex-row-reverse" : ""
                )}>

                    {/* İkon / Görsel Alanı (Motion Parallax) */}
                    <motion.div
                        style={{ y: y1 }}
                        initial={{ opacity: 0, scale: 0.8, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex justify-center"
                    >
                        <div className="relative group w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                            {/* Glow & Backdrop */}
                            <div className="absolute inset-0 bg-accent-1/20 blur-[60px] rounded-full group-hover:bg-accent-1/30 transition-colors duration-700 pointer-events-none" />
                            <div className="absolute inset-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 ease-out" />
                            <div className="absolute inset-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] -rotate-3 group-hover:-rotate-6 transition-transform duration-500 ease-out overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Metin / Detay Alanı (Motion Parallax) */}
                    <motion.div
                        style={{ y: y2 }}
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-150px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full lg:w-1/2 flex flex-col items-start space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground leading-tight tracking-tight">
                                {service.title}
                            </h2>
                            <div className="h-1 w-24 bg-gradient-to-r from-accent-1 to-transparent rounded-full" />
                            <p className="text-xl md:text-2xl text-muted-foreground font-playfair italic">
                                &quot;{service.motto}&quot;
                            </p>
                        </div>

                        <p className="text-base text-slate-300 font-inter leading-relaxed">
                            {service.vision}
                        </p>

                        <ul className="space-y-4 pt-4 border-t border-white/10 w-full">
                            {service.scope.map((item, i) => {
                                const [boldPart, rest] = item.split(": ");
                                return (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                                        className="flex text-sm md:text-base text-slate-400 font-inter items-start gap-4"
                                    >
                                        <span className="mt-1.5 flex h-2 w-2 rounded-full bg-accent-1/70 shrink-0 shadow-[0_0_10px_rgba(232,180,153,0.5)]" />
                                        <span>
                                            <strong className="text-white font-medium">{boldPart}:</strong> {rest}
                                        </span>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
