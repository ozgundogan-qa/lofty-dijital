"use client";

import dynamic from "next/dynamic";

// Lazy-load AnimatedLogo so anime.js is excluded from the initial bundle
const AnimatedLogo = dynamic(() => import("@/components/ui/AnimatedLogo"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-24 h-24 rounded-full border-2 border-accent-1/30 animate-pulse" />
    </div>
  ),
});

export default function AnimatedLogoClient({ className, width, height }: { className?: string; width?: number | string; height?: number | string }) {
  return <AnimatedLogo className={className} width={width} height={height} />;
}
