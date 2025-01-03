import React from 'react';
import { libraries } from '../assets/libraries';
import LibraryCard from './LibraryCard';
import Navbar from './Navbar';

const LibrariesPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-4">Noir Libraries</h1>
                <h3 className="text-xl text-muted-foreground mb-12">
                    Explore Noir libraries for zero-knowledge proofs. Each library provides a set of tools and utilities for building Noir applications.    
                </h3>
                {libraries.map((category) => (
                    <div key={category.category} className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">{category.category}</h2>
                    {category.subcategories && category.subcategories.map((sub) => (
                        <div key={sub.name} className="mb-6">
                            <h3 className="text-2xl font-semibold text-primary">{sub.name}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {sub.libraries.map((lib) => (
                                    <LibraryCard
                                        key={lib.name}
                                        title={lib.name}
                                        description={lib.description}
                                        link={lib.link}
                                        subcategory={sub.name}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                    {category.libraries && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {category.libraries.map((lib) => (
                                <LibraryCard
                                    key={lib.name}
                                    title={lib.name}
                                    description={lib.description}
                                    link={lib.link}
                                />
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </main>
    </div>
    );
};

export default LibrariesPage; 