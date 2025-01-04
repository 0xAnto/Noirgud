import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 pt-32 pb-16 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Master Noir and Zero Knowledge Proofs
        </h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Dive into the world of privacy-preserving computation with our comprehensive Noir learning platform.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild className="text-lg px-8 py-6">
            <Link to="/learn">Start Learning →</Link>
          </Button>
          <Button asChild variant="outline" className="text-lg px-8 py-6">
            <Link to="/projects">Explore Projects</Link>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default HomePage; 