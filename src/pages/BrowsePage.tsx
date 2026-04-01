import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";
import { books, categories } from "@/data/books";

const ageGroups = ["All Ages", "8-10", "10-13"];
const sortOptions = ["Newest", "Most Popular", "Shortest Summary"];

const BrowsePage = () => {
  const [searchParams] = useSearchParams();
  const initialGenre = searchParams.get("genre") || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [selectedAge, setSelectedAge] = useState("All Ages");
  const [sortBy, setSortBy] = useState("Newest");

  let filtered = books.filter((b) => {
    const matchSearch =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchGenre = selectedGenre === "All" || b.genre === selectedGenre;
    const matchAge = selectedAge === "All Ages" || b.ageRange === selectedAge;
    return matchSearch && matchGenre && matchAge;
  });

  if (sortBy === "Most Popular") filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
  if (sortBy === "Shortest Summary") filtered.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
  if (sortBy === "Newest") filtered.sort((a, b) => (b.newest ? 1 : 0) - (a.newest ? 1 : 0));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-2 text-center">Browse Books</h1>
      <p className="text-muted-foreground text-center mb-8">Find your next favorite read 📖</p>

      {/* Search */}
      <div className="relative max-w-lg mx-auto mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search books or authors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary font-body"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div>
          <span className="text-xs font-display font-bold text-muted-foreground block mb-2">Genre</span>
          <div className="flex flex-wrap gap-1.5">
            <Button size="sm" variant={selectedGenre === "All" ? "default" : "outline"} onClick={() => setSelectedGenre("All")}>All</Button>
            {categories.map((c) => (
              <Button key={c.name} size="sm" variant={selectedGenre === c.name ? "default" : "outline"} onClick={() => setSelectedGenre(c.name)}>
                {c.emoji} {c.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div>
          <span className="text-xs font-display font-bold text-muted-foreground block mb-2">Age Group</span>
          <div className="flex gap-1.5">
            {ageGroups.map((age) => (
              <Button key={age} size="sm" variant={selectedAge === age ? "default" : "outline"} onClick={() => setSelectedAge(age)}>{age}</Button>
            ))}
          </div>
        </div>
        <div>
          <span className="text-xs font-display font-bold text-muted-foreground block mb-2">Sort By</span>
          <div className="flex gap-1.5">
            {sortOptions.map((opt) => (
              <Button key={opt} size="sm" variant={sortBy === opt ? "default" : "outline"} onClick={() => setSortBy(opt)}>{opt}</Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <p className="text-sm text-muted-foreground mb-4">{filtered.length} books found</p>
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <span className="text-4xl block mb-4">🔍</span>
          <p className="font-display text-lg font-bold">No books found</p>
          <p className="text-sm text-muted-foreground">Try a different search or filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePage;
