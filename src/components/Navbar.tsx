import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '@/components/theme-toggle';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive ? 'text-primary font-bold' : 'hover:text-primary';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6">
      <Link to="/" className="text-4xl font-bold text-primary hover:text-primary/90 transition-colors duration-300">Noirgud</Link>
      
      {/* Hamburger Icon */}
      <button 
        className="block md:hidden text-gray-700 dark:text-gray-300 focus:outline-none" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
          />
        </svg>
      </button>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6">
        <Link to="/learn" className={`${getLinkClass('/learn')}`}>Learn</Link>
        <Link to="/libraries" className={`${getLinkClass('/libraries')}`}>Libraries</Link>
        <Link to="/projects" className={`${getLinkClass('/projects')}`}>Projects</Link>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-inherit md:hidden shadow-md">
          <div className="flex flex-col items-start p-4 space-y-4">
            <Link 
              to="/learn" 
              className={`${getLinkClass('/learn')}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Learn
            </Link>
            <Link 
              to="/libraries" 
              className={`${getLinkClass('/libraries')}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Libraries
            </Link>
            <Link 
              to="/projects" 
              className={`${getLinkClass('/projects')}`} 
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <a 
              href="https://noir-lang.org/docs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </a>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
