import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hizmetlerimiz",
    description: "Sosyal medya yönetimi, modern web tasarım & yazılım, kreatif video edit ve akılda kalıcı kurumsal kimlik tasarımı hizmetlerimiz.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
