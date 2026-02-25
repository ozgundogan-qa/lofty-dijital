import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda",
    description: "Lofty Dijital hakkında daha fazla bilgi edinin. Yenilikçi yaklaşımımız, vizyonumuz ve deneyimli ekibimizle markanıza değer katıyoruz.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
