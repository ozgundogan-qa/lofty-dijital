import { featuredServices, iconMap } from "@/constants/featuredServices";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageSquare } from "lucide-react";
import { JsonLd } from "@/components/geo/JsonLd";
import { AuthorMeta } from "@/components/geo/AuthorMeta";
import { TARGET_CITIES } from "@/constants/seoBlogData";

export function generateStaticParams() {
    return featuredServices.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = featuredServices.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const Icon = iconMap[service.icon];

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "provider": {
            "@type": "Organization",
            "name": "Lofty Dijital",
            "url": "https://www.loftydijital.com"
        }
    };

    return (
        <main className="flex-grow w-full pb-20">
            <JsonLd data={serviceSchema} />
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-background-dark/30 z-10"></div>
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${service.heroImage}')` }}
                    ></div>
                </div>

                <div className="relative z-20 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-20">
                    <div className="mb-6">
                        <Link href="/hizmetlerimiz" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-semibold">
                            <ArrowLeft className="w-4 h-4" />
                            Tüm Hizmetler
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 mb-4 text-accent-1">
                        {Icon && <Icon className="w-8 h-8" />}
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight max-w-4xl mb-6">
                        {service.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl border-l-2 border-accent-1 pl-4">
                        {service.motto}
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Left Column - Description */}
                <div className="lg:col-span-7 flex flex-col gap-10">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">Hizmet Detayları</h2>

                        <AuthorMeta
                            authorName="Lofty Ekibi"
                            datePublished="2024-01-15T08:00:00+03:00"
                            dateModified="2024-02-20T08:00:00+03:00"
                            articleTitle={service.title}
                            articleDescription={service.desc}
                            articleUrl={`https://www.loftydijital.com/hizmetlerimiz/${slug}`}
                        />

                        <p className="text-lg text-slate-300 leading-relaxed">
                            {service.longDescription}
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-white">Neler Sunuyoruz?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {service.features.map((feature, i) => {
                                const FeatureIcon = iconMap[feature.icon] || CheckCircle2;
                                return (
                                    <div key={i} className="bg-surface-dark border border-white/5 p-6 rounded-2xl flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/5 hover:border-accent-1/30 hover:shadow-lg hover:shadow-accent-1/10 cursor-default group">
                                        <FeatureIcon className="w-6 h-6 text-accent-1 group-hover:scale-110 transition-transform duration-300" />
                                        <h4 className="text-lg font-bold text-white group-hover:text-accent-1 transition-colors duration-300">{feature.title}</h4>
                                        <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Right Column - Process & Sticky CTA */}
                <div className="lg:col-span-5 relative">
                    <div className="sticky top-32 flex flex-col gap-8">

                        {/* Process Section */}
                        <div className="bg-surface-dark border border-white/10 p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold text-white mb-8">Çalışma Sürecimiz</h3>
                            <div className="flex flex-col gap-8">
                                {service.process.map((step, i) => (
                                    <div key={i} className="relative pl-10 group">
                                        {/* Line connecting steps */}
                                        {i !== service.process.length - 1 && (
                                            <div className="absolute left-[11px] top-8 bottom-[-24px] w-px bg-white/10 group-hover:bg-accent-1/50 transition-colors duration-500"></div>
                                        )}
                                        {/* Step Circle */}
                                        <div className="absolute left-0 top-1 size-6 rounded-full bg-accent-1/10 border border-accent-1 text-accent-1 flex items-center justify-center text-[10px] font-bold group-hover:bg-accent-1 group-hover:text-background-dark group-hover:scale-110 transition-all duration-300 shadow-sm group-hover:shadow-accent-1/40">
                                            {step.step}
                                        </div>
                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent-1 transition-colors duration-300">{step.title}</h4>
                                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Direct Contact CTA */}
                        <div className="bg-gradient-to-br from-accent-1 to-[#8e5c4a] p-8 rounded-3xl text-background-dark flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(232,180,153,0.3)]">
                            <h3 className="text-2xl font-black">{service.title} İçin Randevu Alın</h3>
                            <p className="font-medium opacity-90">
                                Markanızın değerini artıracak profesyonel çözümler için hemen iletişime geçin.
                            </p>
                            <Link href="/iletisim" className="mt-4 flex items-center justify-center gap-2 bg-background-dark text-white text-sm font-bold h-12 px-6 rounded-xl hover:bg-black hover:scale-105 transition-all duration-300">
                                <MessageSquare className="w-5 h-5" />
                                <span>Bize Ulaşın</span>
                            </Link>
                        </div>

                        {/* Subtle SEO Regional Links */}
                        <div className="mt-4 px-4">
                            <p className="text-[11px] text-slate-500 mb-2 uppercase tracking-wider font-semibold">Bölgesel Hizmetlerimiz</p>
                            <div className="flex flex-wrap gap-x-3 gap-y-1">
                                {TARGET_CITIES.map((city) => (
                                    <Link
                                        key={city.slug}
                                        href={`/blog/${city.slug}/${service.slug}`}
                                        className="text-xs text-slate-600 hover:text-accent-1 transition-colors"
                                    >
                                        {city.name} {service.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </main>
    );
}
