import { Link } from "react-router-dom";
import { categories } from "@/data/books";

const CategoriesPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="font-display text-2xl md:text-3xl font-extrabold text-center mb-1">Categories</h1>
    <p className="text-muted-foreground text-sm text-center mb-10">Pick a genre to start exploring.</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
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
  </div>
);

export default CategoriesPage;
