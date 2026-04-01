import { Link, useLocation } from "react-router-dom";
import { Heart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import mascot from "@/assets/mascot.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/browse", label: "Browse" },
  { to: "/categories", label: "Categories" },
  { to: "/tracker", label: "Tracker" },
  { to: "/favorites", label: "Favorites" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/85 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-14">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={mascot} alt="Page Peek" className="h-8 w-8 rounded-full" />
          <span className="font-display text-lg font-extrabold text-foreground">
            Page Peek
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-1">
          <Link to="/browse">
            <Button variant="ghost" size="icon"><Search className="h-4 w-4" /></Button>
          </Link>
          <Link to="/favorites">
            <Button variant="ghost" size="icon"><Heart className="h-4 w-4" /></Button>
          </Link>
        </div>

        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-card border-b border-border p-4 animate-fade-in-up">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent/60"
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
