import Navbar from './Navbar';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Simple Token Transfer",
    description: "A basic implementation of a token transfer system using Noir, demonstrating how to create and verify proofs of valid transfers.",
    tags: ["tokens", "transfer", "basic"],
    difficulty: "Beginner" as const,
    link: "/projects/token-transfer"
  },
  {
    title: "Zero-Knowledge Voting",
    description: "An anonymous voting system that uses zero-knowledge proofs to ensure vote privacy while maintaining the integrity of the voting process.",
    tags: ["voting", "privacy", "zk-proofs"],
    difficulty: "Intermediate" as const,
    link: "/projects/zk-voting"
  },
  {
    title: "Noir Sudoku Solver",
    description: "A Sudoku solver implemented in Noir that generates a proof of a valid solution without revealing the solution itself.",
    tags: ["game", "puzzle", "constraint-satisfaction"],
    difficulty: "Advanced" as const,
    link: "/projects/sudoku-solver"
  },
  {
    title: "Private Document Notarization",
    description: "A system for notarizing documents without revealing their contents, using Merkle trees and zero-knowledge proofs.",
    tags: ["documents", "merkle-trees", "privacy"],
    difficulty: "Intermediate" as const,
    link: "/projects/document-notarization"
  },
  {
    title: "Zero-Knowledge Identity Verification",
    description: "An identity verification system that proves a user meets certain criteria without revealing any specific information about the user.",
    tags: ["identity", "verification", "privacy"],
    difficulty: "Advanced" as const,
    link: "/projects/zk-identity"
  }
];

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