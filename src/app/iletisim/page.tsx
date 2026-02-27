"use client";

import { motion, Variants } from "framer-motion";
import { MessageCircle, Mail, Instagram, Linkedin, ArrowRight } from "lucide-react";

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

export default function ContactPage() {
    return (
        <main className="flex-1 flex flex-col items-center">
            {/* Background Decor */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.03, 0.05, 0.03]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-accent-1/30 blur-[120px]"
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-16"
                >
                    {/* Hero Section */}
                    <div className="text-center flex flex-col gap-6 items-center max-w-3xl mx-auto">
                        <motion.span variants={fadeUp} className="text-accent-1 text-sm font-bold tracking-widest uppercase">
                            Bize Ulaşın
                        </motion.span>
                        <motion.h1
                            variants={fadeUp}
                            className="text-white text-5xl lg:text-7xl font-black leading-tight tracking-tight"
                        >
                            Hemen <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-1 to-accent-2">İletişime Geçin</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeUp}
                            className="text-slate-300 text-lg lg:text-xl font-normal leading-relaxed mt-2"
                        >
                            Projelerinizi hayata geçirmek için sabırsızlanıyoruz. Hızlı iletişim için WhatsApp üzerinden mesaj gönderebilirsiniz.
                        </motion.p>
                    </div>

                    {/* Contact Methods Grid */}
                    <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* WhatsApp (Primary) */}
                        <motion.a
                            variants={fadeUp}
                            href="https://wa.me/905335439890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between p-8 rounded-3xl bg-surface-dark border border-accent-1/30 hover:border-accent-1 shadow-lg shadow-accent-1/5 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-1/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div className="flex flex-col gap-4">
                                    <div className="size-16 rounded-2xl bg-accent-1/20 text-accent-1 flex items-center justify-center border border-accent-1/20 group-hover:scale-110 group-hover:bg-accent-1 group-hover:text-background-dark transition-all duration-300">
                                        <MessageCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-white text-3xl font-bold tracking-tight">WhatsApp ile Yazın</h3>
                                    <p className="text-slate-400 max-w-sm">
                                        En hızlı iletişim kanalımız. Sorularınız, proje fikirleriniz veya detaylı bilgi için bize hemen Whatsapp üzerinden mesaj atın.
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 text-accent-1 font-bold group-hover:translate-x-2 transition-transform duration-300">
                                    <span className="hidden sm:inline">Mesaj Gönder</span>
                                    <div className="size-10 rounded-full bg-accent-1/20 flex items-center justify-center">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </motion.a>

                        {/* Email */}
                        <motion.a
                            variants={fadeUp}
                            href="mailto:loftydijital@gmail.com"
                            className="group relative flex flex-col justify-between p-8 rounded-3xl bg-surface-dark border border-white/5 hover:border-white/20 shadow-sm overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="relative z-10 flex flex-col gap-4 h-full">
                                <div>
                                    <div className="size-12 rounded-xl bg-white/5 text-slate-300 flex items-center justify-center border border-white/5 group-hover:scale-110 group-hover:text-white transition-all duration-300 mb-6">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-white text-xl font-bold tracking-tight mb-2">E-posta</h3>
                                    <p className="text-slate-400 text-sm">
                                        Detaylı proje talepleriniz ve teklif istekleriniz için bize e-posta gönderebilirsiniz.
                                    </p>
                                </div>
                                <div className="mt-auto pt-6 flex justify-between items-center text-slate-300 group-hover:text-white transition-colors">
                                    <span className="font-medium text-sm">loftydijital@gmail.com</span>
                                    <ArrowRight className="w-4 h-4 group-hover:-rotate-45 transition-transform" />
                                </div>
                            </div>
                        </motion.a>

                        {/* Social Media (Instagram / LinkedIn) */}
                        <motion.div
                            variants={fadeUp}
                            className="group relative col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center justify-between p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10 shadow-sm overflow-hidden transition-all duration-500"
                        >
                            <div className="flex flex-col gap-2 mb-6 md:mb-0 text-center md:text-left">
                                <h3 className="text-white text-2xl font-bold tracking-tight">Sosyal Medyada Biz</h3>
                                <p className="text-slate-400 text-sm max-w-md">
                                    Tasarımlarımızı, ofis arkası hallerimizi ve güncel duyurularımızı sosyal medya hesaplarımızdan takip edin.
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <a href="https://instagram.com/loftydijital" target="_blank" rel="noopener noreferrer" className="size-14 rounded-2xl bg-white/5 hover:bg-accent-1 hover:text-background-dark text-slate-300 flex items-center justify-center border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-1/20">
                                    <Instagram className="w-6 h-6" />
                                </a>
                                <a href="https://linkedin.com/company/loftydijital" target="_blank" rel="noopener noreferrer" className="size-14 rounded-2xl bg-white/5 hover:bg-accent-1 hover:text-background-dark text-slate-300 flex items-center justify-center border border-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent-1/20">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </motion.div>

                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
