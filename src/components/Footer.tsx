import { Link } from "react-router-dom";
import mascot from "@/assets/mascot.png";

const Footer = () => (
  <footer className="bg-card border-t border-border mt-16">
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <img src={mascot} alt="Page Peek" className="h-7 w-7 rounded-full" loading="lazy" width={28} height={28} />
            <span className="font-display text-base font-extrabold text-foreground">Page Peek</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Quick, thoughtful book summaries for young readers who want to discover their next great read.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Explore</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/browse" className="hover:text-foreground transition-colors">Browse Books</Link>
            <Link to="/categories" className="hover:text-foreground transition-colors">Categories</Link>
            <Link to="/tracker" className="hover:text-foreground transition-colors">Reading Tracker</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">More</h4>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            <Link to="/favorites" className="hover:text-foreground transition-colors">My Favorites</Link>
          </nav>
        </div>
        <div>
          <h4 className="font-display font-semibold text-sm mb-3">Stay Curious</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            New summaries added regularly. Keep reading, keep exploring.
          </p>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
        <p>&copy; 2026 Page Peek. Made for readers, by readers.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
