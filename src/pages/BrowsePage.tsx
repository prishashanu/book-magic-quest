import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";
import { books, categories } from "@/data/books";

const ageGroups = ["All Ages", "8-10", "10-13"];
const sortOptions = ["Newest", "Most Popular", "Shortest"];

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
  if (sortBy === "Shortest") filtered.sort((a, b) => parseInt(a.readTime) - parseInt(b.readTime));
  if (sortBy === "Newest") filtered.sort((a, b) => (b.newest ? 1 : 0) - (a.newest ? 1 : 0));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-2xl md:text-3xl font-extrabold mb-1 text-center">Browse Books</h1>
      <p className="text-muted-foreground text-sm text-center mb-8">Find your next favorite read.</p>

      {/* Search */}
      <div className="relative max-w-md mx-auto mb-8">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search books or authors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 font-body"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        <div>
          <span className="text-xs font-display font-semibold text-muted-foreground block mb-1.5">Genre</span>
          <div className="flex flex-wrap gap-1">
            <Button size="sm" variant={selectedGenre === "All" ? "default" : "outline"} onClick={() => setSelectedGenre("All")}>All</Button>
            {categories.map((c) => (
              <Button key={c.name} size="sm" variant={selectedGenre === c.name ? "default" : "outline"} onClick={() => setSelectedGenre(c.name)}>
                {c.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div>
          <span className="text-xs font-display font-semibold text-muted-foreground block mb-1.5">Age Group</span>
          <div className="flex gap-1">
            {ageGroups.map((age) => (
              <Button key={age} size="sm" variant={selectedAge === age ? "default" : "outline"} onClick={() => setSelectedAge(age)}>{age}</Button>
            ))}
          </div>
        </div>
        <div>
          <span className="text-xs font-display font-semibold text-muted-foreground block mb-1.5">Sort</span>
          <div className="flex gap-1">
            {sortOptions.map((opt) => (
              <Button key={opt} size="sm" variant={sortBy === opt ? "default" : "outline"} onClick={() => setSortBy(opt)}>{opt}</Button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <p className="text-xs text-muted-foreground mb-4">{filtered.length} books found</p>
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-display text-base font-bold mb-1">No books found</p>
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
