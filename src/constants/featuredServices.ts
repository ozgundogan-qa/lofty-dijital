import { Share2, Monitor, Video, SearchCheck, PenTool, Camera, Sparkles } from "lucide-react";
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
        desc: "Marka bilinirliğinizi artıran, etkileşim odaklı içerik stratejileri ve topluluk yönetimi. Hedef kitlenizle bağ kurun.",
        img: "AB6AXuCV7JluOSzrb_kEEkIcmphwrdf-zTAMD9d24Nuo9QFuvKqtPIshWCUwVd1Vffen6jrWpURo7NgmczgfsSfbTUMd6aOxzNO4SvsIih6ja2bGJ8tEIw3iYkNIixDiF1aQhNqDnZw2TV6gCi8ZV6LFvlSDXPetv21iPNwNBjgtgjYKcUkvPiyhzOU1V5GVbnnhv9eTi0A61mgBn5lcXwB29Ygp8trdnNlHG131YNTZ8Gri9S6pPXM2Dpr5FryM-TBUEudtOba-GBL4eI4",
        heroImage: "AB6AXuCV7JluOSzrb_kEEkIcmphwrdf-zTAMD9d24Nuo9QFuvKqtPIshWCUwVd1Vffen6jrWpURo7NgmczgfsSfbTUMd6aOxzNO4SvsIih6ja2bGJ8tEIw3iYkNIixDiF1aQhNqDnZw2TV6gCi8ZV6LFvlSDXPetv21iPNwNBjgtgjYKcUkvPiyhzOU1V5GVbnnhv9eTi0A61mgBn5lcXwB29Ygp8trdnNlHG131YNTZ8Gri9S6pPXM2Dpr5FryM-TBUEudtOba-GBL4eI4", // Reusing the same image ID for simplicity, it will be loaded from the same source
        icon: "Share2",
        motto: "Markanızın dijital dünyadaki nefesi, sesi ve duruşu.",
        longDescription: "Günümüzde sosyal medya, bir markanın en büyük ve en hızlı etkileşim kurduğu vitrinidir. Sadece görsel paylaşmak değil; bir hikaye anlatmak, topluluk inşa etmek ve marka sadakati oluşturmak sosyal medya yönetiminin temelidir. Hedef kitlenizin nabzını tutuyor, onların dilinden konuşan, estetik ve strateji odaklı içeriklerle markanızı dijitalde konuşturuyoruz.",
        features: [
            { title: "İçerik Stratejisi", description: "Veri odaklı ve markanızın hedeflerine uygun, etkileşim garantili içerik planlaması.", icon: "Sparkles" },
            { title: "Topluluk Yönetimi", description: "Takipçilerinizle anında iletişim, kriz yönetimi ve marka savunucuları yaratma.", icon: "Share2" },
            { title: "Görsel Estetik", description: "Premium, estetik ve marka kimliğine %100 uyumlu kreatif tasarımlar.", icon: "PenTool" }
        ],
        process: [
            { step: "01", title: "Analiz & Strateji", desc: "Mevcut durum analizi, rakip araştırması ve aylık içerik rotasının çizilmesi." },
            { step: "02", title: "Kreatif Üretim", desc: "Hikayesi olan görsel ve metin içeriklerinin (Reels, Carousel, Post) hazırlanması." },
            { step: "03", title: "Yayın & Etkileşim", desc: "En verimli saatlerde yayınlama ve anlık topluluk iletişimi." },
            { step: "04", title: "Raporlama", desc: "Aylık performans analizi ve bir sonraki ayın stratejisinin güncellenmesi." }
        ]
    },
    {
        slug: "web-tasarim-ve-gelistirme",
        title: "Web Tasarım & Geliştirme",
        desc: "Modern, hızlı ve tüm cihazlarla uyumlu, dönüşüm odaklı web siteleri. Kullanıcı deneyimini (UX) ön planda tutan tasarımlar.",
        img: "AB6AXuBHP2H8dYzZetQfCfeK31BeDv5k4vpyfnQaC09XYJsqhTeIa7Febp3lSWTYw09NLqOR_BuL20i2R-fHklCZAAf40zjJwzzOj343reBoCGeQV35S-jC95g4MsOJ2ZYKzswi8uW5rXgfsEUBC1jaZDlqroRurSvIX76X5WiPTuj3H-dcJebBeTqIswOM8zNxoxKODGfiQwOB6MPSucP3SS6wXJ8V1VEa4x43RnUYUlehCtX146H3k-7r89UW0Tek4EgtM5WyzqSJ_YfU",
        heroImage: "AB6AXuBHP2H8dYzZetQfCfeK31BeDv5k4vpyfnQaC09XYJsqhTeIa7Febp3lSWTYw09NLqOR_BuL20i2R-fHklCZAAf40zjJwzzOj343reBoCGeQV35S-jC95g4MsOJ2ZYKzswi8uW5rXgfsEUBC1jaZDlqroRurSvIX76X5WiPTuj3H-dcJebBeTqIswOM8zNxoxKODGfiQwOB6MPSucP3SS6wXJ8V1VEa4x43RnUYUlehCtX146H3k-7r89UW0Tek4EgtM5WyzqSJ_YfU",
        icon: "Monitor",
        motto: "Dijitaldeki en prestijli adresiniz, 7/24 açık lüks mağazanız.",
        longDescription: "Kötü tasarlanmış ve yavaş bir web sitesi, fiziksel mağazanızın kapalı veya dağınık olmasıyla eşdeğerdir. Modern web teknolojileri kullanarak, saniyeler içinde açılan, SEO dostu, hem masaüstü hem de mobil cihazlarda kusursuz görünen kullanıcı odaklı arayüzler inşa ediyoruz. Amacımız sadece güzel görünen değil, aynı zamanda ziyaretçiyi müşteriye dönüştüren güçlü platformlar yaratmak.",
        features: [
            { title: "UX / UI Tasarımı", description: "Ziyaretçiyi yormayan, dönüşüm oranını maksimize eden modern ve akıcı arayüzler.", icon: "PenTool" },
            { title: "Yüksek Performans", description: "Next.js gibi modern mimariler ile anında yüklenen, SEO uyumlu, hızlı pageler.", icon: "Sparkles" },
            { title: "Tam Uyumluluk", description: "Mobil, tablet ve masaüstü dahil tüm cihazlarda hatasız Responsive (duyarlı) görünüm.", icon: "Monitor" }
        ],
        process: [
            { step: "01", title: "Keşif & Planlama", desc: "Marka ihtiyaçlarının belirlenmesi, hedef kitle uyumlu bilgi mimarisinin oluşturulması." },
            { step: "02", title: "Arayüz Tasarımı", desc: "Marka kimliğine uygun, estetik ve premium UI/UX tasarım prototiplerinin çizilmesi." },
            { step: "03", title: "Yazılım Geliştirme", desc: "Modern frontend (React, Next.js) teknolojileriyle performanslı ve güvenli kodlama." },
            { step: "04", title: "Test & Yayına Alma", desc: "Hız testleri, cihaz uyumluluk kontrolleri ve optimizasyonlar sonrası pürüzsüz lansman." }
        ]
    },
    {
        slug: "kreatif-video-edit",
        title: "Kreatif Video Edit",
        desc: "Hikayenizi en etkileyici şekilde anlatan profesyonel video kurgu ve post-prodüksiyon hizmetleri. Reels ve YouTube içerikleri.",
        img: "AB6AXuCyM94B115pRJcVXHV1s6jCb2Xbvyt57GyhIngsE6R6o8RWd5sfCvBgVIeWv72nBph5TvtKrFYBMDVYTeaA8-wODOfXPtyHJ-FOt47XcE7r3r7hjDHvg7L6xRAKZP5YLnOUc2SAlE1D8OEh3Qkh1i4Zp9gCeUSG7rJx3YcEqeQatYVKveJMsxBtfX8xcGmkaH19Ccj8xXRTT4de_LJz3QOYHrbMk163xr-9RhKsu3c277T4uNgbtK9G7MQ_jX8LkIzxmaEaWqeQf_8",
        heroImage: "AB6AXuCyM94B115pRJcVXHV1s6jCb2Xbvyt57GyhIngsE6R6o8RWd5sfCvBgVIeWv72nBph5TvtKrFYBMDVYTeaA8-wODOfXPtyHJ-FOt47XcE7r3r7hjDHvg7L6xRAKZP5YLnOUc2SAlE1D8OEh3Qkh1i4Zp9gCeUSG7rJx3YcEqeQatYVKveJMsxBtfX8xcGmkaH19Ccj8xXRTT4de_LJz3QOYHrbMk163xr-9RhKsu3c277T4uNgbtK9G7MQ_jX8LkIzxmaEaWqeQf_8",
        icon: "Video",
        motto: "Gürültülü bir dünyada, sadeliğin ve asaletin sesi oluyoruz.",
        longDescription: "Artık kimsenin uzun metinler okumaya vakti yok; devir video devri. Markanızın mesajını dinamik bir kurgu, doğru ritim, sinematik renk düzenlemesi (Color Grading) ve dikkat çekici ses tasarımı ile birleştiriyoruz. Hem kısa form (Reels, TikTok) hem de YouTube veya reklam kampanyaları için marka auranızı yansıtan, yüksek kalitede post-prodüksiyon hizmeti sunuyoruz.",
        features: [
            { title: "Sinematik Kurgu", description: "İzleyiciyi ekranda tutan akıcı, ritmik ve duyguya hitap eden gelişmiş montaj.", icon: "Video" },
            { title: "Color Grading", description: "Sıradan görüntüleri Hollywood standartlarında premium bir atmosfere taşıyan renk düzenlemesi.", icon: "Camera" },
            { title: "Ses ve Müzik Tasarımı", description: "Videoya ruh katan, lisanslı ve özel ritmik ses mühendisliği.", icon: "Sparkles" }
        ],
        process: [
            { step: "01", title: "Kavramsallaştırma", desc: "Videonun amacına uygun hikaye oluşturma, moodboard ve müzik seçimi." },
            { step: "02", title: "Kaba Kurgu", desc: "Ham görüntülerin elenmesi, en etkili anların bir araya getirilerek iskeletin çatılması." },
            { step: "03", title: "Color & Efekt", desc: "İleri düzey renk düzenlemesi, motion graphics, alt yazılar ve görsel efektlerin entegrasyonu." },
            { step: "04", title: "Final Ses Miksajı", desc: "Ses seviyelerinin dengelenmesi, ses efektlerinin eklenmesi ve yayın formatlarında çıktı alınması." }
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
    Sparkles
};
