import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-20">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">✨</span>
            <span className="font-display text-lg font-bold bg-gradient-to-r from-primary via-lavender to-coral bg-clip-text text-transparent">
              Story Spark
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            A magical place for kids who love stories and want to discover books faster! ⭐
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Explore</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/browse" className="hover:text-primary transition-colors">Browse Books</Link>
            <Link to="/categories" className="hover:text-primary transition-colors">Categories</Link>
            <Link to="/tracker" className="hover:text-primary transition-colors">Reading Tracker</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">More</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link to="/favorites" className="hover:text-primary transition-colors">My Favorites</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Fun Stuff</h4>
          <div className="flex gap-2 text-2xl">
            <span className="animate-float">📚</span>
            <span className="animate-float" style={{ animationDelay: "0.5s" }}>⭐</span>
            <span className="animate-float" style={{ animationDelay: "1s" }}>🐉</span>
            <span className="animate-float" style={{ animationDelay: "1.5s" }}>🧚</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
        <p>Made with ❤️ for young readers everywhere • © 2026 Story Spark</p>
      </div>
    </div>
  </footer>
);

export default Footer;
