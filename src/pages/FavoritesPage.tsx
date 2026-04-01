import { useBooks } from "@/context/BookContext";
import { books } from "@/data/books";
import BookCard from "@/components/BookCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FavoritesPage = () => {
  const { favorites } = useBooks();
  const favBooks = books.filter((b) => favorites.includes(b.id));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-2">My Favorites</h1>
      <p className="text-muted-foreground text-center mb-10">Your saved books live here 📌</p>

      {favBooks.length === 0 ? (
        <div className="text-center py-16">
          <span className="text-5xl block mb-4">📖</span>
          <p className="font-display text-xl font-bold mb-2">No favorites yet</p>
          <p className="text-sm text-muted-foreground mb-4">Start browsing and tap the heart to save books you like.</p>
          <Link to="/browse"><Button>Browse Books</Button></Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {favBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
