import React from "react";
import { FileText } from "lucide-react";

export const metadata = {
    title: "Kullanım Şartları | Lofty Dijital",
    description: "Lofty Dijital web sitesi kullanım şartları ve yasal uyarılar.",
};

export default function KullanimSartlariPage() {
    return (
        <main className="flex-1 w-full bg-background-dark">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-surface-dark/50 z-0"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col gap-6 items-center">
                    <div className="size-16 rounded-full bg-accent-1/10 flex items-center justify-center text-accent-1 mb-2">
                        <FileText className="w-8 h-8" />
                    </div>
                    <span className="text-accent-1 text-sm font-bold tracking-widest uppercase mb-2">Yasal Bilgilendirme</span>
                    <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                        Kullanım Şartları
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-2">
                        Lütfen sitemizi kullanmadan önce aşağıdaki Kullanım Şartları&apos;nı dikkatlice okuyunuz.
                    </p>
                    <div className="text-slate-500 text-sm mt-4">Son Güncelleme: {new Date().toLocaleDateString("tr-TR")}</div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-6 max-w-4xl mx-auto">
                <div className="prose prose-invert prose-slate max-w-none">
                    <p className="lead text-xl text-slate-300 mb-8">
                        Bu web sitesine (&quot;Site&quot;) erişim sağlayarak ve Site&apos;yi kullanarak, Lofty Dijital (&quot;Biz&quot;, &quot;Şirket&quot;, &quot;Ajans&quot;) tarafından belirlenen aşağıdaki Kullanım Şartları&apos;nı (&quot;Şartlar&quot;) kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız, Site&apos;yi kullanmayı derhal bırakmalısınız.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">1.</span> Hizmetlerin Kapsamı
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Lofty Dijital, web tasarımı, sosyal medya yönetimi, SEO ve marka kimliği oluşturma gibi dijital pazarlama ve tasarım hizmetleri sunmaktadır. Sitede yer alan bilgiler, paketler ve fiyatlar önceden haber verilmeksizin değiştirilebilir veya tamamen kaldırılabilir.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">2.</span> Fikri Mülkiyet Hakları
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Bu Site&apos;de yer alan tüm metinler, grafikler, logolar, simgeler, görüntüler, ses klipleri, dijital indirmeler, veri derlemeleri ve yazılımlar dahil olmak üzere tüm içerik; Lofty Dijital&apos;in veya içerik tedarikçilerinin mülkiyetindedir ve telif hakkı yasalarıyla korunmaktadır. Önceden yazılı izin alınmaksızın kopyalanamaz, çoğaltılamaz, dağıtılamaz veya ticari amaçlarla kullanılamaz. Sitemizde yayınlanan portfolyo işlerimiz, ilgili müşterilerin mülkiyetindedir ve sergilenme amaçlı olarak Ajans tarafından telif hakkı kapsamında korunmaktadır.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">3.</span> Kullanıcı Sorumlulukları
                    </h2>
                    <p className="text-slate-400 mb-4">
                        Site&apos;yi kullanırken aşağıdaki kurallara uymayı kabul edersiniz:
                    </p>
                    <ul className="list-disc pl-6 text-slate-400 space-y-2 mb-8 marker:text-accent-1">
                        <li>Site&apos;yi yasadışı, hileli veya zarar verici amaçlar için kullanmamak.</li>
                        <li>Site&apos;nin güvenliğini bozacak, sunucuya, ağa aşırı yük bindirecek veya çalışmasını engelleyecek yöntemler (virüs, truva atı vb.) kullanmamak.</li>
                        <li>Site üzerinde otomatik araçlar (bot, spider vb.) kullanarak izinsiz veri çekmemek.</li>
                        <li>İletişim formlarında yanlış, yanıltıcı veya üçüncü şahıslara ait kişisel bilgileri izinsiz kullanmamak.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">4.</span> Sorumluluğun Sınırlandırılması
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Lofty Dijital, Sitedeki bilgilerin doğruluğunu ve güncelliğini sağlamak için makul çabayı gösterir ancak bu bilgilerin eksiksiz, hatasız veya güvenilir olduğuna dair herhangi bir garanti vermez. Site&apos;nin kullanımından veya kullanılamamasından doğabilecek doğrudan, dolaylı, tesadüfi veya sonuçsal zararlardan Lofty Dijital sorumlu tutulamaz. Sitemizden üçüncü taraf web sitelerine verilen bağlantılar (linkler) yalnızca kullanım kolaylığı sağlamak içindir; bu sitelerin içeriğinden Şirketimiz sorumlu değildir.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">5.</span> Şartlarda Yapılacak Değişiklikler
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Lofty Dijital, tamamen kendi takdirine bağlı olarak, bu Kullanım Şartları&apos;nı herhangi bir zamanda değiştirme hakkını saklı tutar. Değişiklikler Site&apos;de yayınlandığı anda yürürlüğe girer. Site&apos;yi kullanmaya devam etmeniz, değiştirilmiş Şartlar&apos;ı kabul ettiğiniz anlamına gelir.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">6.</span> Uygulanacak Hukuk ve Yetkili Mahkeme
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Bu Kullanım Şartları&apos;nın yorumlanması, uygulanması ve Site&apos;nin kullanımından doğabilecek uyuşmazlıklarda Türkiye Cumhuriyeti kanunları uygulanacaktır. Doğabilecek her türlü ihtilafın çözümünde Ankara Mahkemeleri ve İcra Daireleri yetkilidir.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">7.</span> İletişim
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Bu şartlar ile ilgili herhangi bir sorunuz varsa, lütfen aşağıdaki kanallar aracılığıyla bizimle iletişime geçin:
                    </p>
                    <div className="bg-surface-dark border border-white/10 rounded-xl p-6 mb-8 mt-4">
                        <p className="text-white font-medium mb-2">Lofty Dijital</p>
                        <p className="text-slate-400 mb-1"><strong>E-posta:</strong> loftydijital@gmail.com</p>
                        <p className="text-slate-400 mb-1"><strong>Telefon:</strong> +90 533 543 98 90</p>
                        <p className="text-slate-400"><strong>Adres:</strong> Çankaya, Ankara</p>
                    </div>
                    <p className="text-sm text-slate-500 italic mt-8 border-t border-white/10 pt-8">
                        Feragatname: Bu belge bilgilendirme amaçlı bir şablondur. Kendi durumunuza özel hukuki tavsiye için nitelikli bir avukata danışmanız önerilir.
                    </p>
                </div>
            </section>
        </main>
    );
}
