import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hizmet Verdiğimiz Sektörler",
    description: "E-ticaret, sağlık, teknoloji, eğitim ve daha birçok sektöre özel, stratejik ve büyüme odaklı dijital çözümler üretiyoruz.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
