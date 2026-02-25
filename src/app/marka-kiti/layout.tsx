import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Marka Kiti",
    description: "Lofty Dijital marka kimliği, resmi logolarımız, kurumsal renk paletimiz ve tipografi gibi tasarım varlıklarımıza ulaşın.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
