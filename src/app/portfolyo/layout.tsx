import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolyo",
    description: "Lofty Dijital olarak başarıya ulaştırdığımız projeler. Hayata geçirdiğimiz yaratıcı web tasarım ve dijital pazarlama işlerine göz atın.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
