"use client";

import Link from "next/link";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import AnimatedNavbarLogo from "@/components/ui/AnimatedNavbarLogo";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-6 py-4 lg:px-10 bg-background-dark/90 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="flex items-center justify-center group-hover:scale-105 transition-transform">
                        <AnimatedNavbarLogo width={120} height={60} />
                    </div>
                    <h2 className="text-white text-xl font-bold leading-tight tracking-tight mt-1">
                        Lofty Dijital
                    </h2>
                </Link>
            </div>

            <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
                <nav className="flex items-center gap-8 relative">
                    <Link href="/hakkimizda" className="text-slate-300 hover:text-accent-1 text-sm font-medium transition-colors">
                        Hakkımızda
                    </Link>

                    <div
                        className="relative"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                        <Link href="/hizmetlerimiz" className="text-slate-300 hover:text-accent-1 text-sm font-medium transition-colors py-2">
                            Hizmetlerimiz
                        </Link>

                        <AnimatePresence>
                            {isMegaMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-surface-dark border border-white/10 rounded-2xl shadow-xl overflow-hidden"
                                >
                                    <div className="grid grid-cols-2 p-6 gap-6">
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-white font-bold opacity-50 text-xs tracking-wider uppercase">Temel Hizmetler</h3>
                                            <Link href="/hizmetlerimiz" className="flex items-start gap-3 group">
                                                <div className="bg-accent-1/10 p-2 rounded-lg text-accent-1 group-hover:bg-accent-1 group-hover:text-background-dark transition-colors">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-white text-sm font-bold">Sosyal Medya Yönetimi</p>
                                                    <p className="text-slate-400 text-xs mt-1 text-wrap">Markanızın sesini sosyal medyada duyurun.</p>
                                                </div>
                                            </Link>
                                            <Link href="/hizmetlerimiz" className="flex items-start gap-3 group">
                                                <div className="bg-accent-1/10 p-2 rounded-lg text-accent-1 group-hover:bg-accent-1 group-hover:text-background-dark transition-colors">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-white text-sm font-bold">Web Tasarım & Yazılım</p>
                                                    <p className="text-slate-400 text-xs mt-1 text-wrap">Estetik ve hızlı web siteleri.</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <h3 className="text-white font-bold opacity-50 text-xs tracking-wider uppercase">Kreatif Çözümler</h3>
                                            <Link href="/hizmetlerimiz" className="flex items-start gap-3 group">
                                                <div className="bg-accent-1/10 p-2 rounded-lg text-accent-1 group-hover:bg-accent-1 group-hover:text-background-dark transition-colors">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-white text-sm font-bold">Kurumsal Kimlik</p>
                                                    <p className="text-slate-400 text-xs mt-1 text-wrap">Akılda kalıcı marka tasarımları.</p>
                                                </div>
                                            </Link>
                                            <Link href="/hizmetlerimiz" className="flex items-start gap-3 group">
                                                <div className="bg-accent-1/10 p-2 rounded-lg text-accent-1 group-hover:bg-accent-1 group-hover:text-background-dark transition-colors">
                                                    <ArrowRight className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-white text-sm font-bold">Kreatif Video Edit</p>
                                                    <p className="text-slate-400 text-xs mt-1 text-wrap">Etkileyici video prodüksiyonu.</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-4 flex justify-between items-center text-sm">
                                        <span className="text-slate-300">Tüm hizmetleri keşfetmek ister misiniz?</span>
                                        <Link href="/hizmetlerimiz" className="text-accent-1 font-bold hover:underline">Hizmetlere Git</Link>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link href="/portfolyo" className="text-slate-300 hover:text-accent-1 text-sm font-medium transition-colors">
                        Portfolyo
                    </Link>
                    <Link href="/sektorler" className="text-slate-300 hover:text-accent-1 text-sm font-medium transition-colors">
                        Sektörler
                    </Link>
                    <Link href="/marka-kiti" className="text-slate-300 hover:text-accent-1 text-sm font-medium transition-colors">
                        Marka Kiti
                    </Link>
                </nav>
                <Link href="/iletisim" className="flex items-center justify-center overflow-hidden rounded-lg h-10 px-6 bg-accent-1 hover:bg-accent-1/90 transition-all text-background-dark text-sm font-bold shadow-lg shadow-accent-1/20">
                    <span>İletişim</span>
                </Link>
            </div>

            <button
                className="lg:hidden text-white p-2 -mr-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 w-full bg-surface-dark border-b border-white/10 overflow-y-auto lg:hidden min-h-[calc(100vh-73px)]"
                    >
                        <nav className="flex flex-col p-6 gap-6 pb-24">
                            <Link
                                href="/hakkimizda"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-lg font-medium hover:text-accent-1 transition-colors"
                            >
                                Hakkımızda
                            </Link>

                            <div className="flex flex-col gap-4">
                                <Link
                                    href="/hizmetlerimiz"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-white text-lg font-medium hover:text-accent-1 transition-colors"
                                >
                                    Hizmetlerimiz
                                </Link>
                                <div className="pl-4 ml-2 border-l-2 border-white/10 flex flex-col gap-4">
                                    <Link href="/hizmetlerimiz" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors">Sosyal Medya Yönetimi</Link>
                                    <Link href="/hizmetlerimiz" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors">Web Tasarım & Yazılım</Link>
                                    <Link href="/hizmetlerimiz" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors">Kurumsal Kimlik</Link>
                                    <Link href="/hizmetlerimiz" onClick={() => setIsMobileMenuOpen(false)} className="text-slate-300 hover:text-white transition-colors">Kreatif Video Edit</Link>
                                </div>
                            </div>

                            <Link
                                href="/portfolyo"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-lg font-medium hover:text-accent-1 transition-colors"
                            >
                                Portfolyo
                            </Link>

                            <Link
                                href="/sektorler"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-lg font-medium hover:text-accent-1 transition-colors"
                            >
                                Sektörler
                            </Link>

                            <Link
                                href="/marka-kiti"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white text-lg font-medium hover:text-accent-1 transition-colors"
                            >
                                Marka Kiti
                            </Link>

                            <Link
                                href="/iletisim"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center rounded-lg h-12 mt-4 bg-accent-1 hover:bg-accent-1/90 transition-all text-background-dark text-base font-bold shadow-lg shadow-accent-1/20"
                            >
                                İletişim
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
