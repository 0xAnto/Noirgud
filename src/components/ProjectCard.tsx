import { Link } from 'react-router-dom';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  return (
    <div className="group relative rounded-lg border border-border bg-card p-6 hover:border-primary transition-colors">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="bg-primary/10">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4">
          {/* <Badge 
            variant={difficulty.toLowerCase() as 'beginner' | 'intermediate' | 'advanced'}
          >
            {difficulty}
          </Badge> */}
          <Button asChild variant="outline">
            <Link to={link}>View Project</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 