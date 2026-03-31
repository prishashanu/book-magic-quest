import { Link, useLocation } from "react-router-dom";
import { Book, Heart, Search, Star, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/browse", label: "Browse Books" },
  { to: "/categories", label: "Categories" },
  { to: "/tracker", label: "Reading Tracker" },
  { to: "/favorites", label: "Favorites" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-3xl animate-wiggle">✨</span>
          <span className="font-display text-xl font-bold bg-gradient-to-r from-primary via-lavender to-coral bg-clip-text text-transparent">
            Story Spark
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                location.pathname === link.to
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Link to="/browse">
            <Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button>
          </Link>
          <Link to="/favorites">
            <Button variant="ghost" size="icon"><Heart className="h-4 w-4" /></Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-b border-border p-4 animate-fade-in-up">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
