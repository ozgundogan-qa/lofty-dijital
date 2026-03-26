"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedButtonProps {
    children: ReactNode;
    href?: string;
    icon?: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    onClick?: () => void;
}

export default function AnimatedButton({
    children,
    href,
    icon: Icon,
    variant = "primary",
    className = "",
    onClick,
}: AnimatedButtonProps) {
    const isPrimary = variant === "primary";

    const content = (
        <motion.button
            onClick={onClick}
            className={`relative flex items-center justify-center rounded-lg h-14 px-8 text-base font-bold overflow-hidden transition-shadow ${isPrimary ? "shadow-xl shadow-accent-1/20" : "border border-white/20 backdrop-blur"
                } ${className}`}
            initial="initial"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            variants={{
                initial: {
                    backgroundColor: isPrimary ? "#C08671" : "rgba(255,255,255,0.05)",
                    color: isPrimary ? "#0E1C30" : "#ffffff",
                    scale: 1,
                },
                hover: {
                    backgroundColor: isPrimary ? "#0E1C30" : "rgba(255,255,255,0.15)",
                    color: "#ffffff",
                    scale: 1.02,
                },
            }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
            <span className="relative z-10 flex items-center">
                {Icon && (
                    <motion.span
                        variants={{
                            initial: { x: 0 },
                            hover: { x: 2 },
                        }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="mr-2 flex items-center"
                    >
                        {Icon}
                    </motion.span>
                )}
                {children}
            </span>
            {isPrimary && (
                <motion.div
                    className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                    variants={{
                        initial: { x: "-100%" },
                        hover: { x: "200%" },
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            )}
        </motion.button>
    );

    if (href) {
        return (
            <Link href={href} className="w-fit inline-block">
                {content}
            </Link>
        );
    }

    return content;
}
