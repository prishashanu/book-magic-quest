import { Link } from "react-router-dom";
import { categories } from "@/data/books";

const CategoriesPage = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">📚 Book Categories</h1>
    <p className="text-muted-foreground text-center mb-10">Pick a genre and dive into a reading adventure!</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={`/browse?genre=${encodeURIComponent(cat.name)}`}
          className={`${cat.color} border-2 ${cat.borderColor} rounded-2xl p-6 text-center card-hover`}
        >
          <span className="text-5xl block mb-3">{cat.emoji}</span>
          <span className="font-display text-base font-semibold">{cat.name}</span>
        </Link>
      ))}
    </div>
  </div>
);

export default CategoriesPage;
