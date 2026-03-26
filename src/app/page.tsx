import { Smile, CheckCircle2, Hourglass, ArrowRight, Sparkles, Rocket, Headset } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import AnimatedButton from "@/components/ui/AnimatedButton";
import HeroSection from "@/components/HeroSection";
import { JsonLd } from "@/components/geo/JsonLd";
import { featuredServices } from "@/constants/featuredServices";
import AnimatedLogoClient from "@/components/ui/AnimatedLogoClient";

export const metadata: Metadata = {
  title: "Lofty Dijital | Markaya Değer, Dijitale Zarafet Katıyoruz",
  description: "Minimalist, lüks ve modern dijital çözümlerle markanızı geleceğe taşıyın. İşlevselliği estetikle buluşturuyoruz.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lofty Dijital",
  url: "https://www.loftydijital.com",
  description: "Minimalist, lüks ve modern dijital çözümlerle markanızı geleceğe taşıyın.",
};

const stats = [
  { icon: Smile, label: "Mutlu Müşteri", value: "50+", badge: "+15%" },
  { icon: CheckCircle2, label: "Tamamlanan Proje", value: "120+", badge: "+20%" },
  { icon: Hourglass, label: "Yıllık Tecrübe", value: "10+", badge: null },
];

const whyItems = [
  { icon: Sparkles, title: "Özgün Tasarımlar", desc: "Hazır kalıplardan uzak, markanıza özel butik çözümler." },
  { icon: Rocket, title: "Hız ve Performans", desc: "Optimize edilmiş kod yapılarıyla maksimum hız." },
  { icon: Headset, title: "Sürekli Destek", desc: "Proje tesliminden sonra da yanınızdayız." },
];

export default function Home() {
  return (
    <main className="flex-1">
      <JsonLd data={websiteSchema} />

      {/* Hero — client component (parallax + typewriter) */}
      <HeroSection />

      {/* Stats Section */}
      <section className="border-y border-white/10 bg-background-dark py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ icon: Icon, label, value, badge }) => (
            <div key={label} className="flex flex-col items-center md:items-start p-6 rounded-xl bg-surface-dark shadow-sm border border-white/5 hover:border-accent-1/30 transition-colors">
              <div className="size-12 rounded-full bg-accent-1/20 flex items-center justify-center mb-4 text-accent-1">
                <Icon />
              </div>
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">{label}</p>
              <div className="flex items-end gap-2">
                <p className="text-white text-4xl font-bold">{value}</p>
                {badge && (
                  <span className="text-green-500 text-sm font-bold mb-1 bg-green-500/10 px-2 py-0.5 rounded-full">{badge}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="flex flex-col gap-3 max-w-2xl">
            <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight">Dijital Zarafet</h2>
            <p className="text-slate-300 text-lg">Markanızın potansiyelini ortaya çıkaran, strateji odaklı tasarım ve yazılım çözümleri.</p>
          </div>
          <AnimatedButton href="/hizmetlerimiz" variant="outline" icon={<ArrowRight className="w-5 h-5" />}>
            Tüm Hizmetler
          </AnimatedButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices
            .filter(s => ['sosyal-medya-yonetimi', 'web-sitesi-kurulumu', 'marka-kimligi-olusturma'].includes(s.slug))
            .map((service, index) => (
              <Link
                href={`/hizmetlerimiz/${service.slug}`}
                key={index}
                className="group bg-surface-dark rounded-2xl shadow-sm hover:shadow-xl hover:shadow-accent-1/5 transition-shadow duration-300 border border-white/5 cursor-pointer h-full flex flex-col overflow-hidden rounded-2xl"
              >
                <div className="h-64 w-full relative overflow-hidden">
                  <Image
                    src={service.img}
                    alt={`${service.title} - Lofty Dijital`}
                    fill
                    loading="lazy"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 pt-2 flex flex-col gap-2 flex-grow">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-xl font-bold">{service.title}</h3>
                    <ArrowRight className="text-accent-1 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Feature / About Section */}
      <section className="bg-surface-dark py-20 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[600px] shadow-2xl flex items-center justify-center bg-background-dark border border-white/5 group">
            <AnimatedLogoClient width="80%" height="80%" className="group-hover:scale-105 transition-transform duration-1000 ease-[0.22,1,0.36,1]" />
            <div className="absolute inset-0 bg-accent-1/20 mix-blend-multiply pointer-events-none" />
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-4xl lg:text-5xl font-bold tracking-tight">Neden Lofty?</h2>
              <h3 className="text-accent-1 text-xl font-medium">Lüks, Minimalizm ve Teknoloji</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Biz sadece bir dijital ajans değiliz; markanızın dijital dünyadaki mimarlarıyız. Her projeyi bir sanat eseri titizliğiyle ele alıyor, en son teknolojileri minimalist tasarım prensipleriyle birleştiriyoruz.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {whyItems.map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="bg-accent-1/10 p-3 rounded-lg h-fit text-accent-1 group-hover:bg-accent-1/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="text-white text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <AnimatedButton href="/iletisim" variant="primary">
                Tanışalım
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-background-dark/50 backdrop-blur-3xl z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-1/20 rounded-full blur-[100px] z-0 pointer-events-none animate-pulse" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col gap-8 items-center bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-3xl shadow-2xl border border-white/10">
          <h2 className="text-white text-4xl lg:text-6xl font-black tracking-tight">Projelerinizi Hayata Geçirelim</h2>
          <p className="text-slate-300 text-lg lg:text-xl max-w-2xl">
            Dijital dünyada iz bırakmak için hazırsanız, hemen teklif alın. Sizin için en uygun stratejiyi birlikte belirleyelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <AnimatedButton variant="primary">
              Hemen Teklif Alın
            </AnimatedButton>
            <AnimatedButton variant="outline">
              İletişime Geçin
            </AnimatedButton>
          </div>
        </div>
      </section>
    </main>
  );
}
