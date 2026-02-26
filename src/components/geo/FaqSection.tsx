import React from 'react';
import { JsonLd } from './JsonLd';

export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqSectionProps {
    title?: string;
    description?: string;
    items: FaqItem[];
    className?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
    title = "Sıkça Sorulan Sorular",
    description,
    items,
    className = ""
}) => {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };

    return (
        <section className={`py-12 bg-neutral-900 text-white ${className}`}>
            <JsonLd data={faqSchema} />
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl font-bold mb-6 text-rose-300">{title}</h2>
                {description && <p className="text-neutral-300 mb-8">{description}</p>}

                <div className="space-y-6">
                    {items.map((item, index) => (
                        <div key={index} className="bg-neutral-800 p-6 rounded-lg border border-neutral-700">
                            <h3 className="text-xl font-semibold mb-3 text-white">{item.question}</h3>
                            <p className="text-neutral-400 leading-relaxed">{item.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
