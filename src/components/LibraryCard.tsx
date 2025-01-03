import React from 'react';

interface LibraryCardProps {
    title: string;
    description: string;
    link: string;
    subcategory?: string;
}

const LibraryCard: React.FC<LibraryCardProps> = ({ title, description, link, subcategory }) => {
    return (
        <div className="group relative rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors  mt-6">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p className="text-muted-foreground">{description}</p>
                {subcategory && <p className="text-muted-foreground">Subcategory: {subcategory}</p>}
                <div className="flex items-center justify-between pt-4">
                    <a href={link} className="text-blue-500 hover:underline">Learn more</a>
                </div>
            </div>
        </div>
    );
};

export default LibraryCard; 