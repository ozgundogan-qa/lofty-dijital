import { Download } from "lucide-react";
import Image from "next/image";

export default function BrandKitPage() {
    return (
        <main className="flex-grow">
            {/* Hero Section */}
            <section className="relative px-4 md:px-10 pt-16 pb-12 overflow-hidden border-b border-white/5">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-accent-1/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
                    <div className="max-w-2xl">
                        <h2 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6 text-white">Marka Kimliği</h2>
                        <p className="text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
                            Lofty Dijital&apos;in görsel DNA&apos;sını keşfedin. Tutarlılık ve estetik bütünlük için oluşturulmuş kurumsal tasarım sistemimiz.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 border border-slate-700 hover:border-accent-1 hover:text-accent-1 text-slate-300 px-5 py-3 rounded-lg transition-all">
                        <Download className="w-5 h-5" />
                        <span className="font-medium">Tüm Varlıkları İndir</span>
                    </button>
                </div>
            </section>

            {/* Logo Showcase */}
            <section className="px-4 md:px-10 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold tracking-tight text-white">Logo Varyasyonları</h3>
                        <div className="h-px bg-white/10 flex-1 ml-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group flex flex-col gap-4">
                            <div className="w-full bg-surface-dark border border-white/5 rounded-xl aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden group-hover:border-accent-1/50 transition-all duration-300">
                                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#c18671_1px,transparent_1px)] [background-size:16px_16px]"></div>
                                <Image
                                    alt="Ana Logo"
                                    className="w-3/4 h-auto object-contain relative z-10"
                                    src="/logos/ana-logo.png"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Ana Logo</h4>
                                <p className="text-slate-400 text-sm mt-1">Koyu zeminler için öncelikli kullanım. Kurumsal kimliğin temel taşı.</p>
                            </div>
                        </div>

                        <div className="group flex flex-col gap-4">
                            <div className="w-full bg-background-light text-background-dark rounded-xl aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden group-hover:shadow-[0_0_30px_-5px_rgba(193,134,113,0.2)] transition-all duration-300">
                                <Image
                                    alt="Zıt Renk Logo"
                                    className="w-3/4 h-auto object-contain relative z-10"
                                    src="/logos/zit-renk.png"
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Zıt Renk Logo</h4>
                                <p className="text-slate-400 text-sm mt-1">Sosyal medya avatarları, favicon ve dar alanlar için simge kullanımı.</p>
                            </div>
                        </div>

                        <div className="group flex flex-col gap-4">
                            <div className="w-full bg-surface-dark border border-white/5 rounded-xl aspect-[4/3] flex items-center justify-center p-8 relative overflow-hidden group-hover:border-accent-1/50 transition-all duration-300">
                                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(193,134,113,0.1)_50%,transparent_75%,transparent_100%)]"></div>
                                <Image
                                    alt="Yatay Logo"
                                    className="w-4/5 h-auto object-contain relative z-10 opacity-90"
                                    src="/logos/renkli-logo.png"
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-white">Renkli Logo</h4>
                                <p className="text-slate-400 text-sm mt-1">Renkli veya karmaşık zeminler için tek renk beyaz kullanım.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Color Palette */}
            <section className="px-4 md:px-10 py-12 bg-surface-dark/50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold tracking-tight text-white">Renk Paleti</h3>
                        <div className="h-px bg-white/10 flex-1 ml-6"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-[#C08671] rounded-xl p-6 h-64 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform duration-300">
                            <span className="text-white/80 font-medium">Primary Accent</span>
                            <div>
                                <p className="text-white text-2xl font-bold">Terra Cotta</p>
                                <p className="text-white/90 font-mono mt-1">#C08671</p>
                            </div>
                        </div>

                        <div className="bg-[#0E1C30] border border-white/10 rounded-xl p-6 h-64 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                            <span className="text-slate-400 font-medium">Background Dark</span>
                            <div>
                                <p className="text-white text-2xl font-bold">Deep Ocean</p>
                                <p className="text-slate-400 font-mono mt-1">#0E1C30</p>
                            </div>
                        </div>

                        <div className="bg-[#2D3D54] rounded-xl p-6 h-64 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                            <span className="text-slate-300 font-medium">Surface</span>
                            <div>
                                <p className="text-white text-2xl font-bold">Slate Navy</p>
                                <p className="text-slate-300 font-mono mt-1">#2D3D54</p>
                            </div>
                        </div>

                        <div className="bg-[#E8B499] rounded-xl p-6 h-64 flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                            <span className="text-background-dark/60 font-medium">Secondary Accent</span>
                            <div>
                                <p className="text-background-dark text-2xl font-bold">Soft Peach</p>
                                <p className="text-background-dark/80 font-mono mt-1">#E8B499</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section className="px-4 md:px-10 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-2xl font-bold tracking-tight text-white">Tipografi</h3>
                        <div className="h-px bg-white/10 flex-1 ml-6"></div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                            <h4 className="text-accent-1 text-2xl font-bold font-sans">Montserrat</h4>
                            <span className="text-slate-400 text-sm">Tüm Metinler ve UI</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-white">
                            <div>
                                <p className="text-7xl font-black mb-2 tracking-tight">Aa</p>
                                <p className="text-slate-400">Black - 900</p>

                                <div className="mt-8 space-y-4">
                                    <p className="text-4xl md:text-5xl font-black tracking-tight">Dijital dünyada iz bırakın.</p>
                                    <p className="text-2xl md:text-3xl font-bold tracking-tight">Yaratıcı çözümlerimizle tanışın.</p>
                                    <p className="text-xl md:text-2xl font-medium">Modern tasarım anlayışı.</p>
                                </div>
                            </div>

                            <div>
                                <p className="text-7xl font-normal mb-2">Aa</p>
                                <p className="text-slate-400">Regular - 400</p>

                                <div className="mt-8 space-y-4">
                                    <p className="text-base leading-relaxed text-slate-300">
                                        Lofty Dijital, markanızın hikayesini en etkileyici şekilde anlatmak için modern tasarım prensiplerini stratejik düşünceyle birleştirir. Tipografi seçimimiz, okunabilirliği ve estetik dengeyi ön planda tutar.
                                    </p>
                                    <div className="flex gap-4 text-sm font-medium text-accent-1 uppercase tracking-widest mt-6">
                                        <span>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
                                    </div>
                                    <div className="flex gap-4 text-sm font-medium text-accent-1 mt-2">
                                        <span>a b c d e f g h i j k l m n o p q r s t u v w x y z</span>
                                    </div>
                                    <div className="flex gap-4 text-sm font-medium text-accent-1 mt-2">
                                        <span>0 1 2 3 4 5 6 7 8 9 ! @ # $ % & *</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
