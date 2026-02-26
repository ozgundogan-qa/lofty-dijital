import { featuredServices, iconMap } from "@/constants/featuredServices";
import { TARGET_CITIES, getMetaDescription } from "@/constants/seoBlogData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageSquare, ArrowRight, MapPin } from "lucide-react";
import { JsonLd } from "@/components/geo/JsonLd";
import { AuthorMeta } from "@/components/geo/AuthorMeta";
import type { Metadata } from 'next';

type Props = {
    params: Promise<{ city: string; service: string }>;
};

export function generateStaticParams() {
    const params = [];
    for (const city of TARGET_CITIES) {
        for (const service of featuredServices) {
            params.push({
                city: city.slug,
                service: service.slug,
            });
        }
    }
    return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { city: citySlug, service: serviceSlug } = await params;
    const city = TARGET_CITIES.find(c => c.slug === citySlug);
    const service = featuredServices.find(s => s.slug === serviceSlug);

    if (!city || !service) {
        return {};
    }

    return {
        title: `${city.name} ${service.title} Ajansı | Lofty Dijital`,
        description: getMetaDescription(service.title, city.name),
    };
}

export default async function ProgrammaticBlogPage({ params }: Props) {
    const { city: citySlug, service: serviceSlug } = await params;

    const city = TARGET_CITIES.find(c => c.slug === citySlug);
    const service = featuredServices.find(s => s.slug === serviceSlug);

    if (!city || !service) {
        notFound();
    }

    const Icon = iconMap[service.icon];

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": `${city.name} ${service.title} Hizmetleri`,
        "description": getMetaDescription(service.title, city.name),
        "author": {
            "@type": "Organization",
            "name": "Lofty Dijital"
        }
    };

    return (
        <main className="flex-grow w-full pb-20 pt-24">
            <JsonLd data={blogSchema} />

            {/* Header Section */}
            <div className="w-full bg-surface-dark border-b border-white/5 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-6">
                        <Link href="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold">
                            <ArrowLeft className="w-4 h-4" />
                            Blog & Bölgeler
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <div className="px-3 py-1 rounded-full bg-accent-1/10 border border-accent-1/20 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent-1" />
                            <span className="text-sm font-medium text-accent-1">{city.name}</span>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-2">
                            {Icon && <Icon className="w-4 h-4 text-slate-300" />}
                            <span className="text-sm font-medium text-slate-300">{service.title}</span>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-4xl mb-6">
                        {city.name} Bölgesinde Etkili {service.title} Çözümleri
                    </h1>

                    <AuthorMeta
                        authorName="Lofty Dijital Ekibi"
                        datePublished="2024-03-01T08:00:00+03:00"
                        dateModified="2024-03-01T08:00:00+03:00"
                        articleTitle={`${city.name} ${service.title} Hizmetleri`}
                        articleDescription={getMetaDescription(service.title, city.name)}
                        articleUrl={`https://www.loftydijital.com/blog/${city.slug}/${service.slug}`}
                    />
                </div>
            </div>

            {/* Main Content */}
            <section className="w-full max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Left Column - Article Content */}
                <article className="lg:col-span-8 flex flex-col gap-10">
                    <div className="prose prose-invert prose-lg prose-headings:font-bold prose-headings:text-white prose-a:text-accent-1 prose-a:no-underline hover:prose-a:underline max-w-none">

                        <p className="lead text-xl text-slate-300 border-l-4 border-accent-1 pl-6 py-2 bg-white/5 rounded-r-xl">
                            Lofty Dijital olarak, <strong>{city.name}</strong> bölgesindeki işletmelerin dijital potansiyellerini maksimuma çıkarmak için modern ve sonuç odaklı <strong>{service.title.toLowerCase()}</strong> hizmetleri sunuyoruz. {service.motto}
                        </p>

                        <div className="my-10 w-full h-[400px] rounded-2xl overflow-hidden relative border border-white/10 group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/${service.heroImage}')` }}
                            ></div>
                        </div>

                        <h2>Neden {city.name} İçin Bizi Tercih Etmelisiniz?</h2>
                        <p>
                            {service.longDescription} Yerel pazar dinamiklerini ve bölgesel rekabeti analiz ederek, markanızın hedef kitlesine en doğru mesajla ulaşmasını sağlıyoruz. Amacımız sadece dijital varlığınızı iyileştirmek değil, aynı zamanda işletmenizin büyümesine doğrudan katkı sağlamaktır.
                        </p>

                        <h3>Profesyonel Yaklaşımımız ve Sunduklarımız</h3>
                        <p>
                            {service.title} ihtiyaçlarınıza yönelik sunduğumuz yenilikçi yeteneklerimizden bazıları:
                        </p>

                        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                            {service.features.map((feature, i) => {
                                const FeatureIcon = iconMap[feature.icon] || CheckCircle2;
                                return (
                                    <div key={i} className="bg-surface-dark border border-white/5 p-6 rounded-2xl flex items-start gap-4">
                                        <div className="p-2 rounded-lg bg-white/5 shrink-0 text-accent-1">
                                            <FeatureIcon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-bold text-white mb-1">{feature.title}</h4>
                                            <p className="text-sm text-slate-400 leading-snug">{feature.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <h2>{city.name} Bölgesinde Nasıl Çalışıyoruz?</h2>
                        <p>
                            Şeffaf, veriye dayalı ve proaktif bir çalışma yöntemi benimsiyoruz. İşte sürecimizin temel adımları:
                        </p>

                        <div className="not-prose flex flex-col gap-6 my-8">
                            {service.process.map((step, i) => (
                                <div key={i} className="flex gap-6 bg-surface-dark/50 p-6 rounded-2xl border border-white/5">
                                    <div className="shrink-0 flex flex-col items-center">
                                        <div className="size-10 rounded-full bg-accent-1/10 text-accent-1 flex items-center justify-center font-bold text-sm border border-accent-1/20 shadow-[0_0_15px_rgba(232,180,153,0.1)]">
                                            {step.step}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                        <p className="text-base text-slate-400 leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p>
                            Eğer siz de <strong>{city.name}</strong> pazarında rekabette öne çıkmak ve markanızın hak ettiği değeri görmesini istiyorsanız, alanında uzman ekibimizle tanışmanın tam zamanı.
                        </p>
                    </div>

                </article>

                {/* Right Column - Sidebar CTA */}
                <aside className="lg:col-span-4 relative">
                    <div className="sticky top-32 flex flex-col gap-6">
                        <div className="bg-surface-dark border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-1/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-1/20 transition-all duration-700"></div>

                            <h3 className="text-xl font-bold text-white mb-4 relative z-10">Markanızı Büyütmeye Hazır Mısınız?</h3>
                            <p className="text-sm text-slate-400 mb-8 relative z-10 leading-relaxed">
                                {city.name} özelindeki <strong>{service.title.toLowerCase()}</strong> projeleriniz için ücretsiz ön danışmanlık alın veya detaylı teklif isteyin.
                            </p>

                            <div className="flex flex-col gap-4 relative z-10">
                                <Link href="/iletisim" className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent-1 to-[#8e5c4a] text-background-dark font-bold h-12 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(232,180,153,0.3)] hover:scale-[1.02] transition-all duration-300">
                                    <MessageSquare className="w-5 h-5" />
                                    <span>Hemen İletişime Geçin</span>
                                </Link>
                                <Link href={`/hizmetlerimiz/${service.slug}`} className="flex items-center justify-center gap-2 bg-white/5 text-white font-medium h-12 px-6 rounded-xl hover:bg-white/10 transition-all duration-300">
                                    <span>Hizmeti İncele</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="bg-surface-dark border border-white/10 p-6 rounded-3xl">
                            <h4 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Diğer Bölgelerimiz</h4>
                            <div className="flex flex-wrap gap-2">
                                {TARGET_CITIES.filter(c => c.slug !== citySlug).map(c => (
                                    <Link
                                        key={c.slug}
                                        href={`/blog/${c.slug}/${service.slug}`}
                                        className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-400 hover:text-accent-1 hover:border-accent-1/30 transition-all"
                                    >
                                        {c.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>

            </section>
        </main>
    );
}
