import Navbar from './Navbar';
import ProjectCard from './ProjectCard';
import { projects } from '../assets/projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4">Noir Projects</h1>
        <h3 className="text-xl text-muted-foreground mb-12">
          Explore real-world applications of Noir in zero-knowledge proofs. Each project demonstrates different aspects of Noir's capabilities.
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage; 