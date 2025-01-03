import { learningResources } from '../assets/learingMaterials'; // Import the new data structure
import LearnCard from './LearnCard'; // Import the new LearnCard component
import Navbar from './Navbar';

const LearnPage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="container mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold mb-4">Learning Resources</h1>
                <h3 className="text-xl text-muted-foreground mb-12">
                    Explore various resources to enhance your knowledge of Noir and zero-knowledge proofs.
                </h3>

                <h2 className="text-2xl font-semibold mt-8">Interactive Tutorials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningResources.tutorials.map((tutorial, index) => (
                        <LearnCard key={index} title={tutorial.title} link={tutorial.link} description={tutorial.description} />
                    ))}
                </div>

                <h2 className="text-2xl font-semibold mt-8">Educational Curriculums</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningResources.curriculums.map((curriculum, index) => (
                        <LearnCard key={index} title={curriculum.title} link={curriculum.link} description={curriculum.description} />
                    ))}
                </div>

                <h2 className="text-2xl font-semibold mt-8">Examples</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningResources.examples.map((example, index) => (
                        <LearnCard key={index} title={example.title} link={example.link} description={example.description} />
                    ))}
                </div>

                <h2 className="text-2xl font-semibold mt-8">Talks & Workshops</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningResources.talks.map((talk, index) => (
                        <LearnCard key={index} title={talk.title} link={talk.link} description={talk.description} />
                    ))}
                </div>

                <h2 className="text-2xl font-semibold mt-8">Blog Posts & Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningResources.blogs.map((blog, index) => (
                        <LearnCard key={index} title={blog.title} link={blog.link} description={blog.description} />
                    ))}
                </div>

                <h2 className="text-2xl font-semibold mt-8">International Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {learningResources.international.map((resource, index) => (
                        <LearnCard key={index} title={resource.title} link={resource.link} description={resource.description} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default LearnPage; 