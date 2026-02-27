import { featuredServices } from "@/constants/featuredServices";
import { TARGET_CITIES } from "@/constants/seoBlogData";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata = {
    title: "Lofty Dijital Blog ve Hizmet Bölgeleri",
    description: "Lofty Dijital'in hizmet verdiği bölgeler ve sunduğu dijital pazarlama, sosyal medya ve web tasarım çözümleri hakkında detaylı yazılar.",
};

export default function BlogIndexPage() {
    return (
        <main className="flex-grow w-full pb-20 pt-32">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                        Blog ve Hizmet Bölgelerimiz
                    </h1>
                    <p className="text-lg text-slate-300 max-w-2xl">
                        Türkiye&apos;nin dört bir yanındaki işletmeler için ürettiğimiz profesyonel dijital çözümleri ve sektörel içgörüleri keşfedin.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TARGET_CITIES.map((city) => (
                        <div key={city.slug} className="bg-surface-dark border border-white/10 rounded-2xl p-6 hover:border-accent-1/50 transition-all duration-300 group">
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                                <div className="p-2.5 rounded-xl bg-accent-1/10 text-accent-1">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <h2 className="text-2xl font-bold text-white group-hover:text-accent-1 transition-colors">{city.name}</h2>
                            </div>

                            <div className="flex flex-col gap-3">
                                {featuredServices.map((service) => (
                                    <Link
                                        key={service.slug}
                                        href={`/blog/${city.slug}/${service.slug}`}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors text-slate-300 hover:text-white group/link"
                                    >
                                        <span className="text-sm font-medium">{service.title}</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-accent-1" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
