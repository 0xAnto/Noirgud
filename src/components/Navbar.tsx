import { Link } from 'react-router-dom';
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6">
      <Link to="/" className="text-2xl font-bold">Noirgud</Link>
      <div className="flex items-center space-x-6">
        <Link to="/learn" className="hover:text-primary">Learn</Link>
        <Link to="/projects" className="hover:text-primary">Projects</Link>
        <a 
          href="https://noir-lang.org/docs" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-primary"
        >
          Docs
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar; 