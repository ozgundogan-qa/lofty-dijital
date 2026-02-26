import Link from "next/link";
import { MoveDown, ArrowRight, Share2, Monitor, Video, Camera, TrendingUp } from "lucide-react";
import { featuredServices, iconMap } from "@/constants/featuredServices";
import { JsonLd } from "@/components/geo/JsonLd";
import { FaqSection } from "@/components/geo/FaqSection";

export default function ServicesPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Lofty Dijital Hizmetler",
        "description": "Markanızın dijital dünyada parlaması için stratejik, estetik ve sonuç odaklı hizmetler sunuyoruz."
    };

    return (
        <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16">
            <JsonLd data={serviceSchema} />
            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1 flex flex-col gap-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-1/10 border border-accent-1/20 w-fit">
                        <span className="text-xs font-semibold text-accent-1 uppercase tracking-wider">Premium Digital Agency</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-white">
                        Dijital <span className="text-accent-1">Çözümlerimiz</span> ve Kreatif Yaklaşımlarımız
                    </h1>
                    <p className="text-lg text-slate-400 max-w-xl">
                        Markanızın dijital dünyada parlaması için stratejik, estetik ve sonuç odaklı hizmetler sunuyoruz. Modern tasarım ve teknolojiyle markanızı geleceğe taşıyın.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Link href="#services" className="flex items-center justify-center gap-2 bg-white text-background-dark text-sm font-bold h-12 px-6 rounded-lg hover:opacity-90 transition-opacity">
                            <span>Keşfetmeye Başla</span>
                            <MoveDown className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="flex-1 w-full relative">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative group">
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent z-10"></div>
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7eZzCW6TUSOtSxNprCTEUI7CTWa9-lpKWwBvUcXAtmfciHRRQg4m1NLgx5VU2cKmT0YP0fj-3TTfgZmNhfL-mwWEenUAyyN18dr6f_UOqYVR-Bcf-7y5fglL0xJTaf80RZJoOQsbGhAzdFPiGGMUJ2t94K9akRU4eyqsxS3EsU0PmrpQwAYuH0JAVBB3ZJrfEE3IcdC6_ww9R98elz40UyG2EL0GMzUdYbe8FTmEYaDNb5abXk2JSKch-FTgJgKEkXFZISeIxqak')" }}
                        ></div>
                        <div className="absolute bottom-6 left-6 z-20">
                            <p className="text-white font-bold text-xl">360° Dijital Ajans</p>
                            <p className="text-slate-300 text-sm">Strateji, Tasarım, Geliştirme</p>
                        </div>
                    </div>
                    <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-accent-1/30 rounded-2xl hidden md:block"></div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services" className="flex flex-col gap-10 scroll-mt-24">
                <div className="flex flex-col gap-2 border-l-4 border-accent-1 pl-6">
                    <h3 className="text-3xl font-bold text-white">Öne Çıkan Hizmetler</h3>
                    <p className="text-slate-400">İşletmenizi büyütmek için tasarlanmış profesyonel servisler.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredServices.map((service, i) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <Link href={`/hizmetlerimiz/${service.slug}`} key={service.slug} className="group relative bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-accent-1/10 transition-all duration-300 border border-white/10 cursor-pointer block">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-accent-1/20 group-hover:bg-accent-1/10 transition-colors z-10"></div>
                                    <div
                                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                        style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/${service.img}')` }}
                                    ></div>
                                </div>
                                <div className="p-6 flex flex-col gap-3">
                                    <div className="size-10 rounded-lg bg-accent-1/10 flex items-center justify-center text-accent-1 mb-2">
                                        {Icon && <Icon className="w-5 h-5" />}
                                    </div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-accent-1 transition-colors">{service.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                    <div className="mt-2 inline-flex items-center text-sm font-semibold text-accent-1">
                                        Detayları İncele <ArrowRight className="w-4 h-4 ml-1" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Feature Section: Creative Shoots */}
            <section className="relative rounded-2xl overflow-hidden bg-surface-dark border border-white/10">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-1/10 border border-accent-1/20 w-fit text-accent-1">
                            <Camera className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase">Stüdyo & Dış Çekim</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                            Kreatif Çekimler ile <br />Ürünlerinizi Öne Çıkarın
                        </h3>
                        <p className="text-slate-400 text-lg">
                            Ürün ve hizmetlerinizi en iyi ışıkta yansıtan profesyonel fotoğraf ve video çekimleri. E-ticaret, katalog ve sosyal medya için yüksek çözünürlüklü görsel içerikler üretiyoruz.
                        </p>
                        <button className="w-fit mt-4 flex items-center justify-center gap-2 bg-accent-1 hover:bg-accent-1/90 text-background-dark text-sm font-bold h-10 px-6 rounded-lg transition-colors">
                            <span>Portfolyoyu İncele</span>
                        </button>
                    </div>
                    <div className="lg:w-1/2 min-h-[400px] relative">
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFCV_HzLt3RdmQB4yOMOF3RPMvbXvIvJa49DRW3PWaXuLQfBZC0fOX7kTMuKk-9GsI59syDi50ywuGtinMQhXLAUNa0JY3A6kVhUSte80J-HLC4J5rnvCBAMJVQq6EbHI23tkw4zWVmouI3pmbPYKCVqGrEpSZk70o138bWH1uMfz4lq2bblexrziARaVJiRX3MUgcUR-wDsb19r27EjyP4Uizj0k2mIfhPTYHg46F29ye8NyUX_Vu6ofWi9Qasjq_xguzGuo2FHw')" }}
                        >
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Section: SEO & Digital Marketing */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 relative rounded-2xl overflow-hidden bg-slate-900 border border-white/5 text-white p-8 md:p-12 flex flex-col justify-center min-h-[360px]">
                    <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at top right, #C08671 0%, transparent 40%), radial-gradient(circle at bottom left, #2D3D54 0%, transparent 40%)" }}></div>
                    <div className="relative z-10 max-w-xl flex flex-col gap-6">
                        <div className="size-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                            <TrendingUp className="text-accent-1" />
                        </div>
                        <h3 className="text-3xl font-bold">SEO & Dijital Pazarlama</h3>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            Arama motorlarında üst sıralarda yer alın ve hedef kitlenize ulaşın. Google Ads, Meta Reklamları ve organik SEO çalışmalarıyla satışlarınızı artırıyoruz.
                        </p>
                        <button className="flex items-center gap-2 text-accent-1 font-bold hover:text-white transition-colors w-fit">
                            <span className="underline underline-offset-4">Stratejinizi Oluşturun</span>
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="lg:col-span-1 bg-accent-1 rounded-2xl p-8 flex flex-col justify-between text-background-dark relative overflow-hidden group hover:scale-[1.02] transition-transform">
                    <div className="relative z-10">
                        <h4 className="text-2xl font-black mb-2">Hızlı İletişim</h4>
                        <p className="font-medium opacity-80">Projeniz için hemen teklif alın.</p>
                    </div>
                    <div className="relative z-10 mt-8 pt-6 border-t border-background-dark/20 flex flex-col gap-2">
                        <p className="font-bold">loftydijital@gmail.com</p>
                        <p className="font-bold">+90 533 543 98 90</p>
                    </div>
                </div>
            </section>

            <FaqSection
                title="Sıkça Sorulan Sorular"
                className="rounded-2xl mt-8"
                items={[
                    {
                        question: "Web projeleri ne kadar sürede tamamlanır?",
                        answer: "Projenin kapsamına göre değişmekle birlikte, kurumsal bir web sitesi ortalama 2-4 hafta içerisinde yayına alınmaktadır."
                    },
                    {
                        question: "Sosyal medya yönetimi neleri kapsar?",
                        answer: "Kapak / profil tasarımları, içerik planlaması, aylık post/reels gönderimleri, moderasyon ve stratejik büyüme hedeflerini kapsamaktadır."
                    },
                    {
                        question: "Sitenize sonradan özellik eklenebilir mi?",
                        answer: "Evet, geliştirdiğimiz tüm sistemler modüler yapıdadır. İlerleyen süreçte dilediğiniz yeni modülleri kolayca entegre edebiliriz."
                    }
                ]}
            />
        </main>
    );
}
