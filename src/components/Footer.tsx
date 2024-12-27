import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8" />
            <span className="text-xl font-bold">Noirgud</span>
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <Link to="/learn" className="hover:text-primary">Learn</Link>
            <Link to="/projects" className="hover:text-primary">Projects</Link>
            <Link to="/docs" className="hover:text-primary">Docs</Link>
          </nav>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Noirgud. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 