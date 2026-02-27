import React from "react";
import { Shield } from "lucide-react";

export const metadata = {
    title: "Gizlilik Politikası | Lofty Dijital",
    description: "Lofty Dijital gizlilik politikası ve kişisel verilerin korunması (KVKK) aydınlatma metni.",
};

export default function GizlilikPolitikasiPage() {
    return (
        <main className="flex-1 w-full bg-background-dark">
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-surface-dark/50 z-0"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col gap-6 items-center">
                    <div className="size-16 rounded-full bg-accent-1/10 flex items-center justify-center text-accent-1 mb-2">
                        <Shield className="w-8 h-8" />
                    </div>
                    <span className="text-accent-1 text-sm font-bold tracking-widest uppercase mb-2">Yasal Bilgilendirme</span>
                    <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                        Gizlilik Politikası
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mt-2">
                        Kişisel verilerinizin güvenliği ve gizliliği bizim için en önemli önceliklerden biridir.
                    </p>
                    <div className="text-slate-500 text-sm mt-4">Son Güncelleme: {new Date().toLocaleDateString("tr-TR")}</div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-6 max-w-4xl mx-auto">
                <div className="prose prose-invert prose-slate max-w-none">
                    <p className="lead text-xl text-slate-300 mb-8">
                        Lofty Dijital olarak, iletişim formlarımız, web sitemiz ve hizmetlerimiz aracılığıyla bizimle paylaştığınız kişisel verilerinizin gizliliğine saygı duyuyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) ve ilgili mevzuat uyarınca Veri Sorumlusu sıfatıyla sizi bilgilendirmek istiyoruz.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">1.</span> Toplanan Veriler ve Amacı
                    </h2>
                    <p className="text-slate-400 mb-4">
                        Web sitemizi ziyaretleriniz sırasında ve bizimle iletişime geçtiğinizde aşağıdaki kişisel verileriniz toplanabilmektedir:
                    </p>
                    <ul className="list-disc pl-6 text-slate-400 space-y-2 mb-8 marker:text-accent-1">
                        <li><strong>Kimlik Bilgileri:</strong> Adınız, soyadınız.</li>
                        <li><strong>İletişim Bilgileri:</strong> E-posta adresiniz, telefon numaranız.</li>
                        <li><strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, tarayıcı bilgileri, site içi hareketleriniz (çerezler vasıtasıyla).</li>
                        <li><strong>Müşteri İşlem Bilgileri:</strong> Talep ve şikayetleriniz, proje detaylarınız.</li>
                    </ul>
                    <p className="text-slate-400 mb-8">
                        Bu veriler; tarafınıza hizmet sunabilmek, projelerinizi değerlendirebilmek, sizinle iletişime geçebilmek, web sitemizin performansını artırmak ve yasal yükümlülüklerimizi yerine getirmek amacıyla işlenmektedir.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">2.</span> Kişisel Verilerin Aktarılması
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Kişisel verileriniz, kural olarak üçüncü kişilerle paylaşılmamaktadır. Ancak; yasal zorunluluklar kapsamında yetkili kamu kurumlarıyla veya hizmet kalitemizi artırmak amacıyla (sunucu barındırma, altyapı hizmetleri vb.) yurt içi veya yurt dışındaki güvenilir iş ortaklarımız ve hizmet sağlayıcılarımızla, KVKK&apos;nın 8. ve 9. maddelerine uygun olarak, gerekli güvenlik önlemleri alınarak paylaşılabilir.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">3.</span> Çerezler (Cookies)
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Web sitemizdeki deneyiminizi iyileştirmek, site trafiğini analiz etmek ve hizmetlerimizi geliştirmek için çerezler (cookies) kullanmaktayız. Tarayıcı ayarlarınızı değiştirerek çerezleri reddedebilir veya uyarı alabilirsiniz. Ancak bazı çerezlerin reddedilmesi, sitenin bazı özelliklerinin tam kapasiteyle çalışmasını engelleyebilir.
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">4.</span> KVKK Kapsamında Haklarınız
                    </h2>
                    <p className="text-slate-400 mb-4">
                        KVKK&apos;nın 11. maddesi uyarınca, veri sahibi olarak aşağıdaki haklara sahipsiniz:
                    </p>
                    <ul className="list-disc pl-6 text-slate-400 space-y-2 mb-8 marker:text-accent-1">
                        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                        <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                        <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                        <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
                        <li>KVKK&apos;da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme,</li>
                        <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
                        <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
                        <span className="text-accent-1">5.</span> İletişim
                    </h2>
                    <p className="text-slate-400 mb-8">
                        Gizlilik Politikamız ile ilgili her türlü soru, görüş ve talepleriniz ile KVKK kapsamındaki haklarınızı kullanmak için bizimle aşağıdaki iletişim kanallarından irtibata geçebilirsiniz:
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
