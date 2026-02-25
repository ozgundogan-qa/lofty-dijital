import type { Metadata } from 'next';
import ScrollServiceSection from "@/components/ScrollServiceSection";
import { services } from "@/constants/services";

export const metadata: Metadata = {
    title: 'Hizmetlerimiz | Lofty Dijital',
    description: 'Sosyal medya yönetiminden kreatif çekimlere, web tasarımından SEO\'ya tüm dijital ihtiyaçlarınızda yanınızdayız.',
};

export default function ServicesPage() {
    return (
        <div className="relative min-h-screen bg-background overflow-hidden selection:bg-primary selection:text-white px-4 pb-24 md:pb-32 pt-32 md:pt-40">

            {/* Background Ambience (Liquid Glass Glowing Orbs) */}
            <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-1/10 via-background to-background" />
            <div className="fixed top-0 -left-64 md:-left-32 w-96 md:w-[600px] h-96 md:h-[600px] bg-accent-1/20 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="fixed bottom-0 -right-64 md:-right-32 w-96 md:w-[600px] h-96 md:h-[600px] bg-accent-2/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            {/* Container */}
            <div className="container max-w-7xl mx-auto relative z-10 space-y-16 md:space-y-24">

                {/* Header Section */}
                <section className="max-w-3xl space-y-6 text-left md:text-center mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground tracking-tight">
                        Minimalist <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Lüks</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground font-inter leading-relaxed px-0 md:px-8">
                        Markanız için yazdığımız senfoni: Tek elden, tek vizyonla, zirveye.
                        Dijital dönüşümünüzde sadeliğin içindeki asaleti keşfedin.
                    </p>
                </section>

                {/* Scroll Services Section */}
                <section className="flex flex-col space-y-8 md:space-y-16">
                    {services.map((service, index) => (
                        <ScrollServiceSection key={service.id} service={service} index={index} />
                    ))}
                </section>

            </div>
        </div>
    );
}
