import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import AnimatedNavbarLogo from "@/components/ui/AnimatedNavbarLogo";

export default function Footer() {
    return (
        <footer className="bg-surface-dark border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    <div className="flex flex-col gap-6 max-w-sm">
                        {/* Logo and About */}
                        <div className="space-y-6">
                            <Link href="/" className="inline-block">
                                <AnimatedNavbarLogo width={160} height={80} />
                            </Link>
                            <h3 className="text-xl font-bold mt-1">Lofty Dijital</h3>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Modern tasarım anlayışı ve yenilikçi teknolojilerle markanızı dijital dünyada yükseltiyoruz.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a className="size-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent-1 hover:text-background-dark transition-all" href="https://www.instagram.com/loftydijital">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a className="size-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent-1 hover:text-background-dark transition-all" href="https://www.linkedin.com/company/loftydijital">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a className="size-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-accent-1 hover:text-background-dark transition-all" href="https://www.x.com/loftydijital">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-16">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold">Hizmetler</h4>
                            <Link className="text-slate-400 text-sm hover:text-accent-1 transition-colors" href="/hizmetlerimiz/web-sitesi-kurulumu">Web Tasarım & Geliştirme</Link>
                            <Link className="text-slate-400 text-sm hover:text-accent-1 transition-colors" href="/hizmetlerimiz/sosyal-medya-yonetimi">Sosyal Medya Yönetimi</Link>
                            <Link className="text-slate-400 text-sm hover:text-accent-1 transition-colors" href="/hizmetlerimiz/seo-hizmeti">SEO & Dijital Pazarlama</Link>
                            <Link className="text-slate-400 text-sm hover:text-accent-1 transition-colors" href="/hizmetlerimiz/marka-kimligi-olusturma">Marka Kimliği Oluşturma</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="text-white font-bold">Kurumsal</h4>
                            <Link className="text-slate-400 text-sm hover:text-accent-1 transition-colors" href="/hakkimizda">Hakkımızda</Link>
                            <Link className="text-slate-400 text-sm hover:text-accent-1 transition-colors" href="/sektorler">Sektörler</Link>
                            <Link className="text-slate-400 text-sm hover:text-accent-1 transition-colors" href="/blog">Blog</Link>
                            <Link className="text-slate-400 text-sm hover:text-accent-1 transition-colors" href="/iletisim">İletişim</Link>
                        </div>

                        <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
                            <h4 className="text-white font-bold">Bize Ulaşın</h4>
                            <p className="text-slate-400 text-sm">loftydijital@gmail.com</p>
                            <p className="text-slate-400 text-sm">+90 533 543 98 90</p>
                            <p className="text-slate-400 text-sm">Çankaya, Ankara</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs">© 2026 Lofty Dijital. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6">
                        <Link className="text-slate-500 text-xs hover:text-accent-1 transition-colors" href="/gizlilik-politikasi">Gizlilik Politikası</Link>
                        <Link className="text-slate-500 text-xs hover:text-accent-1 transition-colors" href="/kullanim-sartlari">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
