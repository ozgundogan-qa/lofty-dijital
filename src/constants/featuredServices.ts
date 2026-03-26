import { Share2, Monitor, Video, SearchCheck, PenTool, Camera, Sparkles, Layers, Hexagon, Fingerprint, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FeaturedService {
    slug: string;
    title: string;
    desc: string;
    img: string; // Used for the card
    heroImage: string; // Used for the detail page header
    icon: string; // String identifier for mapping, or directly imported icon if we use it directly here
    motto: string;
    longDescription: string;
    features: { title: string; description: string; icon: string }[];
    process: { step: string; title: string; desc: string }[];
}

export const featuredServices: FeaturedService[] = [
    {
        slug: "sosyal-medya-yonetimi",
        title: "Sosyal Medya Yönetimi",
        desc: "Küratör titizliği ile hikayesi olan içerikler üretiyor, markanızın gürültüden sıyrılıp asil bir sahne kurmasını sağlıyoruz.",
        img: "/images/services/sosyal_medya.webp",
        heroImage: "/images/services/sosyal_medya.webp",
        icon: "Share2",
        motto: "Markanızın dijital dünyadaki nefesi, sesi ve duruşu.",
        longDescription: "Sosyal medya yönetimi sadece görsel paylaşmak değil; bir hikaye anlatmak, topluluk inşa etmek ve marka sadakati oluşturmaktır. Küratör titizliğiyle sanat galerisi tadında hesap düzeni oluşturuyor, hedef kitlenizin en aktif olduğu anlarda stratejik iletişim kuruyoruz.",
        features: [
            { title: "Küratör Titizliği", description: "Sanat galerisi tadında hesap düzeni ve görsel bütünlük.", icon: "Sparkles" },
            { title: "Hikayesi Olan İçerikler", description: "Üründen ziyade hisse odaklanan kreatif çekim ve editler.", icon: "Camera" },
            { title: "Markanın Sesi", description: "Karakterli ve harekete geçirici metin yazarlığı.", icon: "PenTool" }
        ],
        process: [
            { step: "01", title: "Kürasyon & Strateji", desc: "Sanat galerisi tadında hesap düzeninin ve marka dilinin belirlenmesi." },
            { step: "02", title: "Kreatif Üretim", desc: "Ürüne değil, hisse odaklanan özgün içerik ve çekimlerin hazırlanması." },
            { step: "03", title: "Yayın & Yönetim", desc: "Stratejik zamanlama ile hedef kitle iletişiminin sağlanması." }
        ]
    },
    {
        slug: "web-sitesi-kurulumu",
        title: "Web Sitesi Kurulumu",
        desc: "Hızlı, modern ve \"bu firma işini ciddiye alıyor\" dedirten güvenli yapılar, dijitaldeki en prestijli adresiniz.",
        img: "/images/services/web_site.webp",
        heroImage: "/images/services/web_site.webp",
        icon: "Monitor",
        motto: "Dijitaldeki en prestijli adresiniz, 7/24 açık lüks mağazanız.",
        longDescription: "Mimarın kalemiyle çizilmiş gibi estetik kaygısı yüksek ve mobil uyumlu modern arayüzler tasarlıyoruz. Sadece güzel görünen değil, randevu ve ödeme sistemleri gibi entegre modüllerle donatılmış, rakip analizi odaklı işlevsel ve güvenli yapılar sunuyoruz.",
        features: [
            { title: "Mimarın Kalemi", description: "Mobil uyumlu ve estetik kaygısı yüksek modern arayüzler.", icon: "PenTool" },
            { title: "İşlevsel Zeka", description: "Randevu ve ödeme sistemleri gibi entegre modüller.", icon: "Layers" },
            { title: "Ulaşılabilirlik", description: "Stratejik WhatsApp ve destek hattı yerleşimleri.", icon: "Share2" }
        ],
        process: [
            { step: "01", title: "Mimari Planlama", desc: "Marka prestijine uygun estetik ve fonksiyonel web mimarisinin çizilmesi." },
            { step: "02", title: "Arayüz Tasarımı", desc: "Mobil uyumlu, lüks ve kullanıcı dostu arayüz geliştirme." },
            { step: "03", title: "Sistem & Yayına Alma", desc: "Randevu, ödeme ve destek sistemlerinin entegrasyonu ile kusursuz lansman." }
        ]
    },
    {
        slug: "butuncul-one-cikartma",
        title: "Bütüncül Öne Çıkartma (All-in-One)",
        desc: "Sosyal medya, web sitesi ve fiziksel materyallerin tam uyumuyla, markanız için yazdığımız senfoni.",
        img: "/images/services/all_in_one.webp",
        heroImage: "/images/services/all_in_one.webp",
        icon: "Layers",
        motto: "Markanız için yazdığımız senfoni: Tek elden, tek vizyonla, zirveye.",
        longDescription: "Sadece uygulayıcı değil, yön veren çözüm ortağınız olarak, markanızın tüm dijital ve fiziksel ekosistemini birbirini besleyen bir yapıda kurguluyoruz. Tüm ekibin tek bir hedef ve dilde birleştiği, sosyal medyadan el broşürüne kadar Lofty standartlarında bir görsel ve sözel birlik oluşturuyoruz.",
        features: [
            { title: "Tam Entegrasyon", description: "Birbirini besleyen dijital ekosistem kurulumu.", icon: "Share2" },
            { title: "Görsel ve Sözel Birlik", description: "Tüm ekibin tek bir hedef ve dilde birleşmesi.", icon: "Sparkles" },
            { title: "Marka Yüzü Tasarımı", description: "El broşüründen promosyon ürünlerine kadar fiziksel dokunuş.", icon: "PenTool" }
        ],
        process: [
            { step: "01", title: "Stratejik Liderlik", desc: "Markanın ihtiyaçlarına göre 360 derece ekosistem yol haritasının çıkarılması." },
            { step: "02", title: "Entegrasyon & Üretim", desc: "Web, sosyal medya ve fiziksel tasarımların eş zamanlı ve uyumlu üretimi." },
            { step: "03", title: "Bütüncül Yayın", desc: "Tüm mecralarda aynı dil ve yüksek standartlarla marka yüzünün konumlandırılması." }
        ]
    },
    {
        slug: "grafik-tasarim",
        title: "Grafik Tasarım",
        desc: "Sözcüklerin bittiği yerde, kalite algısını bilinçaltına işleyen ve hayranlık uyandıran görsel nezaket.",
        img: "/images/services/grafik_tasarim.webp",
        heroImage: "/images/services/grafik_tasarim.webp",
        icon: "PenTool",
        motto: "Sözcüklerin bittiği yerde, markanızın görsel nezaketi başlar.",
        longDescription: "Tıklanma odaklı değil, durup inceleten tasarımlarla markanızın zarafetini ortaya çıkarıyoruz. Zarf, antetli kağıt gibi kurumsal evraklardan, saklanmak istenen kataloglara ve hayranlık bırakan kartvizitlere kadar uzanan görsel çözümler sunuyoruz.",
        features: [
            { title: "Kurumsal Zarafet", description: "Zarf, antetli kağıt ve dosya gibi resmi evrak tasarımları.", icon: "Hexagon" },
            { title: "Etkileyici Tanıtım", description: "Saklanmak istenen değerli katalog ve broşürler.", icon: "Layers" },
            { title: "Dijitalin Renkleri", description: "Tıklanma odaklı değil, durup inceleten bannerlar.", icon: "Sparkles" }
        ],
        process: [
            { step: "01", title: "Görsel Keşif", desc: "Marka kimliğine uygun estetik ve nezaket algısının belirlenmesi." },
            { step: "02", title: "Tasarım Üretimi", desc: "Kurumsal kimlikten dijital bannerlara kadar uzanan geniş yelpazede tasarım." },
            { step: "03", title: "Son Dokunuş", desc: "Baskı ve dijital mecralar için kusursuz teknik teslimat." }
        ]
    },
    {
        slug: "video-editleri",
        title: "Video Editleri",
        desc: "Sinematik hikaye anlatımıyla, gürültülü bir dünyada sadeliğin ve asaletin sesini yükseltiyoruz.",
        img: "/images/services/video_edit.webp",
        heroImage: "/images/services/video_edit.webp",
        icon: "Video",
        motto: "Gürültülü bir dünyada, sadeliğin ve asaletin sesi oluyoruz.",
        longDescription: "Gereksiz detaylardan arındırılmış akıcı post-prodüksiyon ve sinema kalitesinde premium renk tonlamaları ile firmanızın değerini yükseltiyoruz. Fotoğrafları yaşayan videolara dönüştüren motion graphics ve görüntüyle senkronize ritmik ses mühendisliğiyle benzersiz işler ortaya koyuyoruz.",
        features: [
            { title: "Rafine Kurgu", description: "Gereksiz detaylardan arındırılmış akıcı post-prodüksiyon.", icon: "Video" },
            { title: "Color Grading", description: "Sinema kalitesinde premium renk tonlamaları.", icon: "Camera" },
            { title: "Ses Tasarımı", description: "Görüntüyle senkronize ritmik ses mühendisliği.", icon: "Sparkles" }
        ],
        process: [
            { step: "01", title: "Hikaye Kurgusu", desc: "Rafine ve sinematik anlatıma yaraşır senaryo/kurgu iskeletinin oluşturulması." },
            { step: "02", title: "Montaj & Renk", desc: "Akıcı post-prodüksiyon ve Hollywood kalitesinde color grading." },
            { step: "03", title: "Motion & Ses", desc: "Hareketli grafikler ve ritmik ses mühendisliği ile videonun son haline getirilmesi." }
        ]
    },
    {
        slug: "logo-tasarimi",
        title: "Logo Tasarımı",
        desc: "Markanızın ruhuna atılan asil bir imza; hazır kalıplardan uzak, tamamen elde şekillenen zamansız eserler.",
        img: "/images/services/logo_tasarimi.webp",
        heroImage: "/images/services/logo_tasarimi.webp",
        icon: "Hexagon",
        motto: "Sadece bir şekil değil, markanızın ruhuna atılan asil bir imza.",
        longDescription: "Logonuz markanızın parmak izidir. Sektör dinamiklerine uygun güven ve lüks algısını psikolojik olarak analiz ediyor, hazır kalıplardan uzak tamamen özgün tasarımlar ortaya koyuyoruz. Her mecrada hatasız görünen vektörel oranlarla teknik olarak kusursuz bir imza yaratıyoruz.",
        features: [
            { title: "Özgünlük", description: "Hazır kalıptan uzak, tamamen elde şekillenen tasarımlar.", icon: "PenTool" },
            { title: "Psikolojik Analiz", description: "Sektör dinamiklerine uygun güven ve lüks algısı.", icon: "Fingerprint" },
            { title: "Teknik Kusursuzluk", description: "Her mecrada hatasız görünen vektörel oranlar.", icon: "Layers" }
        ],
        process: [
            { step: "01", title: "Psikolojik Analiz", desc: "Sektörün ve markanın gerektirdiği lüks ve güven duygusunun analizi." },
            { step: "02", title: "El Çizimi & Fikir", desc: "Kalıplardan uzak, tamamen özgün karalamalarla logonun iskeletinin oluşturulması." },
            { step: "03", title: "Vektörel Çizim", desc: "Tabela, kumaş, kağıt gibi her alanda basılabilecek teknik kusursuzluğa ulaşma." }
        ]
    },
    {
        slug: "marka-kimligi-olusturma",
        title: "Marka Kimliği Oluşturma",
        desc: "Markanızın görsel anayasasını yazıyor, ona itibar kılavuzu niteliğinde sarsılmaz bir karakter kazandırıyoruz.",
        img: "/images/services/marka_kimligi.webp",
        heroImage: "/images/services/marka_kimligi.webp",
        icon: "Fingerprint",
        motto: "Markanızın görsel anayasasını yazıyor, ona sarsılmaz bir karakter kazandırıyoruz.",
        longDescription: "Dağınık imajı ortadan kaldırarak itibar kılavuzu niteliğinde bir marka kiti oluşturuyoruz. Markanın ruhunu tanımlıyor, güven ve huzur uyandıran stratejik yazı tipi ve paletler seçiyoruz. Sosyal medya ve web vitrinleri için standartlaştırılmış bir görünüm sunuyoruz.",
        features: [
            { title: "Karakter İnşası", description: "Markanın ruhunu (lüks, ciddi veya samimi) tanımlama.", icon: "Fingerprint" },
            { title: "Tipografi ve Renk", description: "Güven ve huzur uyandıran stratejik yazı tipi ve palet seçimi.", icon: "PenTool" },
            { title: "Görsel Standartlar", description: "Sosyal medya ve web vitrinlerinin standartlaştırılması.", icon: "Layers" }
        ],
        process: [
            { step: "01", title: "Karakter Tayini", desc: "Lüks, ciddi veya samimi; markanın temel duruşunun belirlenmesi." },
            { step: "02", title: "Görsel Kurallar", desc: "Tipografi, renk paletleri ve kullanım senaryolarının anayasasının yazılması." },
            { step: "03", title: "Marka Kiti", desc: "Tüm platformlar için standartları ve dokümanları içeren itibar kılavuzunun teslimi." }
        ]
    },
    {
        slug: "kreatif-cekimler",
        title: "Kreatif Çekimler (Prodüksiyon)",
        desc: "4K 60 FPS netliğinde, ürününüzün aurasını yansıtan ve ışığın, gölgenin dansıyla şekillenen prestijli çekimler.",
        img: "/images/services/kreatif_cekim.webp",
        heroImage: "/images/services/kreatif_cekim.webp",
        icon: "Camera",
        motto: "Objektifimizden yansıyan sadece bir görüntü değil, markanızın aurasıdır.",
        longDescription: "Bizzat mekana gelerek, markanızın ruhunu kadraja alan kreatif saha çekimleri gerçekleştiriyoruz. Işığın ve gölgenin ustalıkla kullanıldığı bu çekimlerle, ürününüzün ve hizmetinizin gerçek potansiyelini öne çıkarıyor, prestijinizi hikayesel bir estetikle yansıtıyoruz.",
        features: [
            { title: "Sahada Sanat", description: "Bizzat mekana gelerek ruhu kadraja alan çekimler.", icon: "Camera" },
            { title: "Hikaye Anlatımı", description: "Işığın ve gölgenin dansıyla ürün potansiyelini yansıtma.", icon: "Sparkles" },
            { title: "Yüksek Kalite", description: "4K 60 FPS netliğinde prestijli prodüksiyon deneyimi.", icon: "Video" }
        ],
        process: [
            { step: "01", title: "Keşif & Kurgu", desc: "Mekan veya ürün analizi, ışık ve kompozisyon planlaması." },
            { step: "02", title: "Saha Prodüksiyonu", desc: "Planlanan senaryoya uygun, sinematik kalitede kreatif çekimlerin gerçekleştirilmesi." },
            { step: "03", title: "Post Prodüksiyon", desc: "Çekimlerin amaca uygun olarak düzenlenip yayına hazır hale getirilmesi." }
        ]
    },
    {
        slug: "seo-hizmeti",
        title: "SEO Hizmeti",
        desc: "Markanızın dijital görünürlüğünü ve prestijini arama motorlarında şans eseri değil, stratejiyle zirveye taşıyoruz.",
        img: "/images/services/seo.webp",
        heroImage: "/images/services/seo.webp",
        icon: "SearchCheck",
        motto: "Arama motorlarında görünürlüğünüzü prestijle buluşturuyoruz.",
        longDescription: "Dijital vitrininizin hak ettiği değeri görmesi için arama motoru optimizasyonu yapıyoruz. İçerik yapınızdan teknik altyapınıza kadar her detayı inceliyor, markanızın dijital dünyada rakiplerinden sıyrılarak üst sıralarda sağlam bir duruş sergilemesini sağlıyoruz.",
        features: [
            { title: "Teknik Optimizasyon", description: "Arama motoru standartlarına uygun, hızlı ve temiz kod yapısı.", icon: "Monitor" },
            { title: "İçerik Stratejisi", description: "Sadece kullanıcılara değil, arama algoritmalarına da hitap eden zengin metinler.", icon: "PenTool" },
            { title: "Görünürlük Artışı", description: "Organik trafik ile markanızın prestijini zirveye taşıma odaklı uzun vadeli planlama.", icon: "TrendingUp" }
        ],
        process: [
            { step: "01", title: "Teknik Denetim", desc: "Mevcut altyapının SEO kriterlerine göre analiz edilmesi ve eksiklerin tespiti." },
            { step: "02", title: "Strateji Geliştirme", desc: "Sektörel anahtar kelimelerin belirlenmesi ve rekabet avantajının planlanması." },
            { step: "03", title: "Sürekli Optimizasyon", desc: "Düzenli içerik güncellemeleri ve teknik iyileştirmelerle sıralama yükseltilmesi." }
        ]
    }
];

export const iconMap: Record<string, LucideIcon> = {
    Share2,
    Monitor,
    Video,
    SearchCheck,
    PenTool,
    Camera,
    Sparkles,
    Layers,
    Hexagon,
    Fingerprint,
    TrendingUp
};

