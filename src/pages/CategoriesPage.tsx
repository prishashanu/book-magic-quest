import { Link } from "react-router-dom";
import { Wand2, Search, Compass, Moon, Pencil, BookOpen } from "lucide-react";
import { categories, series as allSeries } from "@/data/books";

const genreIcon: Record<string, React.ReactNode> = {
  Fantasy: <Wand2 className="h-6 w-6" />,
  Mystery: <Search className="h-6 w-6" />,
  "Spy Adventure": <Compass className="h-6 w-6" />,
  Paranormal: <Moon className="h-6 w-6" />,
  "Graphic Novel": <Pencil className="h-6 w-6" />,
};

const CategoriesPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="font-display text-4xl md:text-5xl font-bold text-center mb-1">Categories</h1>
    <p className="text-muted-foreground text-sm text-center mb-10">Browse by genre or series.</p>

    <h2 className="font-display text-2xl font-bold mb-4">By Genre</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={`/browse?genre=${encodeURIComponent(cat.name)}`}
          className="bg-card border border-border rounded-xl p-5 text-center card-hover"
        >
          <div className="mx-auto mb-2 w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
            {genreIcon[cat.name] ?? <BookOpen className="h-6 w-6" />}
          </div>
          <span className="font-display text-xl font-semibold">{cat.name}</span>
        </Link>
      ))}
    </div>

    <h2 className="font-display text-2xl font-bold mb-4">By Series</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {allSeries.map((s) => (
        <Link
          key={s.name}
          to={`/browse?series=${encodeURIComponent(s.name)}`}
          className="bg-card border border-border rounded-xl p-5 card-hover"
        >
          <span className="font-display text-xl font-semibold">{s.name}</span>
          <span className="text-xs text-muted-foreground block mt-1 font-body">{s.count} books</span>
        </Link>
      ))}
    </div>
  </div>
);

export default CategoriesPage;
