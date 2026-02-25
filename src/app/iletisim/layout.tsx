import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim",
    description: "Dijital dünyada iz bırakmak için hazırsanız, hemen bizimle iletişime geçin. Sizin için en uygun stratejiyi birlikte belirleyelim.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
