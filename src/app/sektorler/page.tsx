import { Stethoscope, HardHat, Plane, Building2, UtensilsCrossed, Headphones, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SektorlerPage() {
  const sectors = [
    {
      id: "saglik",
      title: "Sağlık & Medikal",
      desc: "Klinikler, hastaneler ve sağlık profesyonelleri için güven veren, bilgilendirici ve hasta odaklı dijital çözümler.",
      icon: Stethoscope,
      bgClass: "from-blue-900/40 to-surface-dark"
    },
    {
      id: "insaat",
      title: "İnşaat & Gayrimenkul",
      desc: "Mimarlık ofisleri ve inşaat firmaları için prestijli, portfolyo odaklı ve güven aşılayan kurumsal tasarımlar.",
      icon: HardHat,
      bgClass: "from-amber-900/40 to-surface-dark"
    },
    {
      id: "turizm",
      title: "Turizm & Konaklama",
      desc: "Oteller, seyahat acenteleri ve tur şirketleri için rezervasyon odaklı, görsel açıdan zengin ve ikna edici deneyimler.",
      icon: Plane,
      bgClass: "from-teal-900/40 to-surface-dark"
    },
    {
      id: "kurumsal",
      title: "Kurumsal Firmalar",
      desc: "B2B şirketleri ve holdingler için profesyonelliği ön plana çıkaran, güvenilir kurumsal web siteleri.",
      icon: Building2,
      bgClass: "from-slate-800/60 to-surface-dark"
    },
    {
      id: "gastronomi",
      title: "Restoran & Gastronomi",
      desc: "Mekanlar ve şefler için iştah açıcı görsel sunumlar, menü entegrasyonları ve rezervasyon sistemleri.",
      icon: UtensilsCrossed,
      bgClass: "from-rose-900/40 to-surface-dark"
    },
    {
      id: "teknoloji",
      title: "Teknoloji & Yazılım",
      desc: "SaaS ürünleri, girişimler ve teknoloji firmaları için modern, hızlı ve yenilikçi arayüz tasarımları.",
      icon: Headphones,
      bgClass: "from-indigo-900/40 to-surface-dark"
    }
  ];

  return (
    <main className="flex-1 max-w-7xl mx-auto px-6 py-16 w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-white/10 pb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-1/10 border border-accent-1/20 w-fit mb-6">
            <span className="text-xs font-semibold text-accent-1 uppercase tracking-wider">Uzmanlık Alanlarımız</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Her Sektöre Özel <br /> <span className="text-accent-1">Dijital Stratejiler</span>
          </h1>
        </div>
        <p className="text-slate-400 text-lg max-w-sm">
          Sektörünüzün dinamiklerini anlıyor, hedef kitlenize en uygun dili konuşan dijital deneyimler yaratıyoruz.
        </p>
      </div>

      {/* Sectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectors.map((sector) => (
          <div
            key={sector.id}
            className={`group flex flex-col p-8 rounded-2xl bg-gradient-to-br ${sector.bgClass} border border-white/5 hover:border-accent-1/30 transition-all duration-300 shadow-lg`}
          >
            <div className="size-14 rounded-xl bg-background-dark/50 flex items-center justify-center text-accent-1 mb-6 border border-white/10 group-hover:bg-accent-1 group-hover:text-background-dark transition-colors">
              <sector.icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{sector.title}</h3>
            <p className="text-slate-400 leading-relaxed mb-8 flex-1">
              {sector.desc}
            </p>
            <Link
              href="/iletisim"
              className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-accent-1 transition-colors w-fit"
            >
              <span>Projeleri İncele</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="mt-20 bg-accent-1 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden text-background-dark">
        <div className="absolute top-0 right-0 p-12 opacity-10 blur-3xl rounded-full bg-white w-96 h-96 pointer-events-none"></div>
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Sektörünüz listede yok mu?</h2>
          <p className="text-background-dark/80 text-lg font-medium">
            Özel projeler, farklı sektörler veya niş hedef kitleler için terzi işi dijital çözümler üretiyoruz. Bize projenizden bahsedin.
          </p>
        </div>
        <button className="relative z-10 flex-shrink-0 flex items-center justify-center rounded-lg h-14 px-8 bg-background-dark text-white text-base font-bold hover:bg-surface-dark transition-all shadow-xl">
          İletişime Geçin
        </button>
      </div>
    </main>
  );
}
