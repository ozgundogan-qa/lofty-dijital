export const TARGET_CITIES = [
    { name: "Ankara", slug: "ankara" },
    { name: "İzmir", slug: "izmir" },
    { name: "Konya", slug: "konya" },
    { name: "Eskişehir", slug: "eskisehir" },
    { name: "Kırıkkale", slug: "kirikkale" },
    { name: "Manisa", slug: "manisa" },
    { name: "İstanbul", slug: "istanbul" }
];

export const formatSlug = (text: string) => {
    const trMap: { [key: string]: string } = {
        'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u',
        'Ç': 'C', 'Ğ': 'G', 'İ': 'I', 'Ö': 'O', 'Ş': 'S', 'Ü': 'U'
    };
    return text
        .replace(/[çğıöşüÇĞİÖŞÜ]/g, match => trMap[match])
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
};

export const getMetaDescription = (serviceTitle: string, cityName: string) => {
    return `Lofty Dijital olarak ${cityName} bölgesinde profesyonel ${serviceTitle} hizmetleri sunuyoruz. İşletmenizi dijitalde büyütmek için hemen bizimle iletişime geçin.`;
};
