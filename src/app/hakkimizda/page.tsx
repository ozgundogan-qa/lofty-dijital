import Image from "next/image";
import { CheckCircle2, HeartHandshake, Eye, Target } from "lucide-react";

export default function HakkimizdaPage() {
  return (
    <main className="flex-1 w-full">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-surface-dark/50 z-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col gap-6">
          <span className="text-accent-1 text-sm font-bold tracking-widest uppercase mb-2">Hakkımızda</span>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
            Dijital Zarafetin <br /> <span className="text-accent-1">Mimarları</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-4">
            Lofty Dijital olarak; estetiği teknolojiyle harmanlıyor, markanızı kalıcı bir dijital deneyime dönüştürüyoruz.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Biz Kimiz?</h2>
            <div className="w-12 h-1 bg-accent-1 rounded-full"></div>
            <p className="text-slate-300 text-lg leading-relaxed">
              Biz, tasarıma tutkuyla bağlı, koda hayat veren ve stratejiyle büyüyen yaratıcı bir ekibiz. Kurulduğumuz günden bu yana, iş ortaklarımızın dijital potansiyellerini en üst düzeye çıkarmak için çalışıyoruz.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Her markanın kendine özgü bir hikayesi olduğuna inanıyoruz. Bizim görevimiz, bu hikayeyi en doğru araçlarla, en estetik biçimde dijital dünyaya taşımak. Hazır şablonlardan, sıradanlıktan uzak; "Minimalist Luxury" anlayışımızla markanıza vizyon katıyoruz.
            </p>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFCV_HzLt3RdmQB4yOMOF3RPMvbXvIvJa49DRW3PWaXuLQfBZC0fOX7kTMuKk-9GsI59syDi50ywuGtinMQhXLAUNa0JY3A6kVhUSte80J-HLC4J5rnvCBAMJVQq6EbHI23tkw4zWVmouI3pmbPYKCVqGrEpSZk70o138bWH1uMfz4lq2bblexrziARaVJiRX3MUgcUR-wDsb19r27EjyP4Uizj0k2mIfhPTYHg46F29ye8NyUX_Vu6ofWi9Qasjq_xguzGuo2FHw')" }}
            ></div>
            <div className="absolute inset-0 bg-accent-1/10 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface-dark py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-background-dark p-10 rounded-2xl border border-white/5 flex flex-col gap-6">
            <div className="size-14 rounded-full bg-accent-1/10 flex items-center justify-center text-accent-1">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white">Misyonumuz</h3>
            <p className="text-slate-400 leading-relaxed">
              Müşterilerimizin dijital varlıklarını güçlendirerek, onları kendi sektörlerinde lider konuma taşımak. Kullanıcı deneyimini merkeze alan, estetik ve teknolojik açıdan kusursuz projeler üreterek kalıcı değerler yaratmak.
            </p>
          </div>

          <div className="bg-background-dark p-10 rounded-2xl border border-white/5 flex flex-col gap-6">
            <div className="size-14 rounded-full bg-accent-1/10 flex items-center justify-center text-accent-1">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white">Vizyonumuz</h3>
            <p className="text-slate-400 leading-relaxed">
              Dijital dünyadaki hızlı dönüşüme öncülük eden, yenilikçi yaklaşımları belirleyen ve "Premium Dijital Ajans" denildiğinde akla ilk gelen global ölçekli kreatif güç olmak.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Değerlerimiz</h2>
          <p className="text-slate-400 text-lg">
            Bizi biz yapan, her projede taviz vermeden uyguladığımız temel ilkelerimiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-accent-1"><CheckCircle2 className="w-8 h-8" /></div>
            <h4 className="text-xl font-bold text-white">Kalite Odaklılık</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Attığımız her adımda, yazdığımız her satır kodda en yüksek kalite standartlarını hedefleriz.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-accent-1"><HeartHandshake className="w-8 h-8" /></div>
            <h4 className="text-xl font-bold text-white">Şeffaflık</h4>
            <p className="text-slate-400 text-sm leading-relaxed">İş ortaklarımızla sürdürdüğümüz ilişkilerde dürüstlük ve açıklık en büyük sermayemizdir.</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-accent-1"><Eye className="w-8 h-8" /></div>
            <h4 className="text-xl font-bold text-white">Yenilikçilik</h4>
            <p className="text-slate-400 text-sm leading-relaxed">Sürekli öğrenir, dener ve en son dijital trendleri markanıza uyarlamak için durmaksızın çalışırız.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
