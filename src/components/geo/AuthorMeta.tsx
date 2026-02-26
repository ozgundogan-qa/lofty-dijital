import React from 'react';
import { JsonLd } from './JsonLd';

export interface AuthorMetaProps {
    authorName: string;
    authorUrl?: string;
    jobTitle?: string;
    datePublished: string;
    dateModified?: string;
    articleTitle: string;
    articleDescription?: string;
    articleUrl?: string;
}

export const AuthorMeta: React.FC<AuthorMetaProps> = ({
    authorName,
    authorUrl = "https://www.loftydijital.com/hakkimizda",
    jobTitle = "Dijital Pazarlama Uzmanı",
    datePublished,
    dateModified,
    articleTitle,
    articleDescription,
    articleUrl,
}) => {
    const finalDateModified = dateModified || datePublished;

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: articleTitle,
        description: articleDescription,
        url: articleUrl,
        author: {
            '@type': 'Person',
            name: authorName,
            url: authorUrl,
            jobTitle: jobTitle
        },
        datePublished: datePublished,
        dateModified: finalDateModified,
        publisher: {
            '@type': 'Organization',
            name: 'Lofty Dijital',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.loftydijital.com/logos/lofty-dijital-logo.png'
            }
        }
    };

    return (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-neutral-800 mb-8 mt-4 text-sm text-neutral-400">
            <JsonLd data={articleSchema} />
            <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                <div className="w-10 h-10 rounded-full bg-rose-900/30 border border-rose-500/20 flex items-center justify-center text-rose-300 font-bold uppercase">
                    {authorName.charAt(0)}
                </div>
                <div>
                    <div className="font-medium text-neutral-200">{authorName}</div>
                    <div className="text-xs text-rose-300/80">{jobTitle}</div>
                </div>
            </div>

            <div className="flex flex-col sm:text-right">
                <div><span className="text-neutral-500">Yayınlanma:</span> {new Date(datePublished).toLocaleDateString('tr-TR')}</div>
                {dateModified && (
                    <div><span className="text-neutral-500">Son Güncelleme:</span> {new Date(dateModified).toLocaleDateString('tr-TR')}</div>
                )}
            </div>
        </div>
    );
};
