export interface ServiceItem {
    id: number;
    title: string;
    motto: string;
    vision: string;
    scope: string[];
    icon: string;
    image: string;
}

export const services: ServiceItem[] = [
    {
        id: 1,
        title: "Sosyal Medya Yönetimi",
        motto: "Markanızın dijital dünyadaki nefesi, sesi ve duruşu.",
        vision: "Markayı gürültüden çekip almak ve asil bir sahne kurmak.",
        scope: [
            "Küratör Titizliği: Sanat galerisi tadında hesap düzeni ve görsel bütünlük.",
            "Hikayesi Olan İçerikler: Üründen ziyade hisse odaklanan kreatif çekim ve editler.",
            "Markanın Sesi: Karakterli ve harekete geçirici metin yazarlığı.",
            "Stratejik Zamanlama: Hedef kitlenin en aktif olduğu anlarda iletişim."
        ],
        icon: "Share2",
        image: "/images/services/sosyal_medya.png"
    },
    {
        id: 2,
        title: "Web Sitesi Kurulumu",
        motto: "Dijitaldeki en prestijli adresiniz, 7/24 açık lüks mağazanız.",
        vision: "Hızlı, modern ve \"bu firma işini ciddiye alıyor\" dedirten güvenli yapılar.",
        scope: [
            "Mimarın Kalemi: Mobil uyumlu ve estetik kaygısı yüksek modern arayüzler.",
            "İşlevsel Zeka: Randevu ve ödeme sistemleri gibi entegre modüller.",
            "Ulaşılabilirlik: Stratejik WhatsApp ve destek hattı yerleşimleri.",
            "Rekabet Üstünlüğü: Rakip analizi odaklı artı değer oluşturma."
        ],
        icon: "Globe",
        image: "/images/services/web_site.png"
    },
    {
        id: 3,
        title: "Bütüncül Öne Çıkartma (All-in-One)",
        motto: "Markanız için yazdığımız senfoni: Tek elden, tek vizyonla, zirveye.",
        vision: "Sosyal medya, web sitesi ve fiziksel materyallerin tam uyumu (Lofty Standartları).",
        scope: [
            "Tam Entegrasyon: Birbirini besleyen dijital ekosistem kurulumu.",
            "Görsel ve Sözel Birlik: Tüm ekibin tek bir hedef ve dilde birleşmesi.",
            "Fiziksel Dokunuş: El broşüründen promosyon ürünlerine kadar marka yüzü tasarımı.",
            "Stratejik Liderlik: Sadece uygulayıcı değil, yön veren çözüm ortağı."
        ],
        icon: "Sparkles",
        image: "/images/services/all_in_one.png"
    },
    {
        id: 4,
        title: "Grafik Tasarım",
        motto: "Sözcüklerin bittiği yerde, markanızın görsel nezaketi başlar.",
        vision: "Kalite algısını bilinçaltına işleyen, hayranlık uyandıran görseller.",
        scope: [
            "Kurumsal Zarafet: Zarf, antetli kağıt ve dosya gibi resmi evrak tasarımları.",
            "Etkileyici Tanıtım: Saklanmak istenen değerli katalog ve broşürler.",
            "İlk İzlenim: Hayranlık bırakan kartvizit tasarımları.",
            "Dijitalin Renkleri: Tıklanma odaklı değil, durup inceleten bannerlar."
        ],
        icon: "PenTool",
        image: "/images/services/grafik_tasarim.png"
    },
    {
        id: 5,
        title: "Video Editleri",
        motto: "Gürültülü bir dünyada, sadeliğin ve asaletin sesi oluyoruz.",
        vision: "Sinematik bir hikaye anlatımıyla güven ve estetik hazzı artırmak.",
        scope: [
            "Rafine Kurgu: Gereksiz detaylardan arındırılmış akıcı post-prodüksiyon.",
            "Motion Graphics: Fotoğrafları yaşayan videolara dönüştüren hareketli grafikler.",
            "Color Grading: Sinema kalitesinde premium renk tonlamaları.",
            "Ses Tasarımı: Görüntüyle senkronize ritmik ses mühendisliği."
        ],
        icon: "Video",
        image: "/images/services/video_edit.png"
    },
    {
        id: 6,
        title: "Logo Tasarımı",
        motto: "Sadece bir şekil değil, markanızın ruhuna atılan asil bir imza.",
        vision: "Markanın parmak izi niteliğinde, zamansız ve özgün eserler.",
        scope: [
            "Özgünlük: Hazır kalıptan uzak, tamamen elde şekillenen tasarımlar.",
            "Psikolojik Analiz: Sektör dinamiklerine uygun güven ve lüks algısı.",
            "Teknik Kusursuzluk: Her mecrada (tabela, kumaş, kağıt) hatasız görünen vektörel oranlar."
        ],
        icon: "Aperture",
        image: "/images/services/logo_tasarimi.png"
    },
    {
        id: 7,
        title: "Marka Kimliği Oluşturma",
        motto: "Markanızın görsel anayasasını yazıyor, ona sarsılmaz bir karakter kazandırıyoruz.",
        vision: "Dağınık imajı ortadan kaldıran, \"itibar kılavuzu\" niteliğinde marka kiti.",
        scope: [
            "Karakter İnşası: Markanın ruhunu (lüks, ciddi veya samimi) tanımlama.",
            "Tipografi ve Renk: Güven ve huzur uyandıran stratejik yazı tipi ve palet seçimi.",
            "Görsel Standartlar: Sosyal medya ve web vitrinlerinin standartlaştırılması."
        ],
        icon: "Fingerprint",
        image: "/images/services/marka_kimligi.png"
    },
    {
        id: 8,
        title: "Kreatif Çekimler",
        motto: "Objektifimizden yansıyan sadece bir görüntü değil, markanızın aurasıdır.",
        vision: "4K 60 FPS netliğinde, prestij kaydeden prodüksiyonlar.",
        scope: [
            "Sahada Sanat: Bizzat mekana gelerek ruhu kadraja alan çekimler.",
            "Hikaye Anlatımı: İşığın ve gölgenin dansıyla ürün potansiyelini yansıtma."
        ],
        icon: "Camera",
        image: "/images/services/kreatif_cekim.png"
    },
    {
        id: 9,
        title: "SEO Hizmeti",
        motto: "Arama motorlarında zirveye çıkan sarsılmaz marka otoritesi.",
        vision: "Markanızın dijital görünürlüğünü ve prestijini arama motorlarında zirveye taşımak.",
        scope: [
            "Teknik Özelleştirme: Site hızı, mobil uyumluluk ve index yönetimi.",
            "İçerik Stratejisi: Hedef kitleye hitap eden semantik anahtar kelime optimizasyonu.",
            "Otorite İnşası: Kaliteli backlinkler ile güvenilirliğin artırılması."
        ],
        icon: "SearchCheck",
        image: "/images/services/seo.png"
    }
];
