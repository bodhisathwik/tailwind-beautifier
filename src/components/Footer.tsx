import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="gradient-text font-bold text-lg">TechEvent</span>
            <span className="text-muted-foreground font-mono text-xs">2026</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/schedule" className="hover:text-foreground transition-colors">Schedule</Link>
            <Link to="/speakers" className="hover:text-foreground transition-colors">Speakers</Link>
            <Link to="/register" className="hover:text-foreground transition-colors">Register</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
          </nav>
          <p className="text-xs text-muted-foreground">
            © 2026 CODE777. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
