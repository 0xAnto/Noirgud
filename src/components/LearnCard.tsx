import React from 'react';

interface LearnCardProps {
    title: string;
    link: string;
    description: string;
}

const LearnCard: React.FC<LearnCardProps> = ({ title, link, description }) => {
    return (
        <div className="group relative rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors mt-6">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-500 hover:underline">
                Learn More
            </a>
        </div>
    );
};

export default LearnCard; 