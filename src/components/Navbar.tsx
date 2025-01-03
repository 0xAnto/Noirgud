import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive ? 'text-primary font-bold' : 'hover:text-primary';
  };

  return (
    <nav className="flex justify-between items-center p-6">
      <Link to="/" className="text-2xl font-bold">Noirgud</Link>
      <div className="flex items-center space-x-6">
        <Link to="/home" className={`${getLinkClass('/home')} ${location.pathname === '/home' ? 'text-primary' : ''}`}>Home</Link>
        <Link to="/learn" className={`${getLinkClass('/learn')} ${location.pathname === '/learn' ? 'text-primary' : ''}`}>Learn</Link>
        <Link to="/libraries" className={`${getLinkClass('/libraries')} ${location.pathname === '/libraries' ? 'text-primary' : ''}`}>Libraries</Link>
        <Link to="/projects" className={`${getLinkClass('/projects')} ${location.pathname === '/projects' ? 'text-primary' : ''}`}>Projects</Link>
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