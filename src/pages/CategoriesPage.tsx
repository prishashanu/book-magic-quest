import { Link } from "react-router-dom";
import { categories, series as allSeries } from "@/data/books";

const CategoriesPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="font-display text-2xl md:text-3xl font-extrabold text-center mb-1">Categories</h1>
    <p className="text-muted-foreground text-sm text-center mb-10">Browse by genre or series.</p>

    <h2 className="font-display text-lg font-bold mb-4">By Genre</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={`/browse?genre=${encodeURIComponent(cat.name)}`}
          className="bg-card border border-border rounded-xl p-5 text-center card-hover"
        >
          <span className="text-3xl block mb-2">{cat.emoji}</span>
          <span className="font-display text-sm font-semibold">{cat.name}</span>
        </Link>
      ))}
    </div>

    <h2 className="font-display text-lg font-bold mb-4">By Series</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {allSeries.map((s) => (
        <Link
          key={s.name}
          to={`/browse?series=${encodeURIComponent(s.name)}`}
          className="bg-card border border-border rounded-xl p-5 card-hover"
        >
          <span className="font-display text-sm font-semibold">{s.name}</span>
          <span className="text-xs text-muted-foreground block mt-1">{s.count} books</span>
        </Link>
      ))}
    </div>
  </div>
);

export default CategoriesPage;
