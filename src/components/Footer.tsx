import { Link, useLocation } from 'react-router-dom';
import { GITHUB_URL } from '@/constants';
import { Github } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return `transition-colors duration-200 ${
      isActive ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-primary'
    }`;
  };

  return (
    <footer className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4 m-auto">
            <Link
              to="/"
              className="inline-block text-3xl font-bold text-primary hover:text-primary/90 transition-colors duration-300"
            >
              Noirgud
            </Link>
            {/* <p className="text-sm text-muted-foreground max-w-xs">
              Empowering developers with modern, accessible, and beautiful components.
            </p> */}
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <nav className="flex flex-col space-y-3">
              <Link to="/learn" className={getLinkClass('/learn')}>
                Learning Center
              </Link>
              <Link to="/libraries" className={getLinkClass('/libraries')}>
                Libraries
              </Link>
              <Link to="/docs" className={getLinkClass('/docs')}>
                Documentation
              </Link>
              <Link to="/projects" className={getLinkClass('/projects')}>
                Projects
              </Link>
            </nav>
          </div>

          {/* Contribute Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contribute</h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Join our community and help make Noirgud even better.
              </p>
              <a
                href={`${GITHUB_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              >
                <Github className="h-4 w-4" />
                <span>Start Contributing</span>
              </a>
            </div>
          </div>

          {/* Community Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Github</h3>
            </div>
            <div className="space-y-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
              </a>
              <a
                href={`${GITHUB_URL}/issues`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <span>Create Issues</span>
              </a>
              <a
                href={`${GITHUB_URL}/pulls`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <span>Create PR</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Noirgud. All rights reserved.
          </p>
          <nav className="flex items-center space-x-6">
            <Link 
              to="/privacy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms
            </Link>
            <Link 
              to="/sitemap" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;