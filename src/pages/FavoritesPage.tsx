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
      <h1 className="font-display text-2xl md:text-3xl font-extrabold text-center mb-1">My Favorites</h1>
      <p className="text-muted-foreground text-sm text-center mb-10">Books you've saved for later.</p>

      {favBooks.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-display text-base font-bold mb-2">No favorites yet</p>
          <p className="text-sm text-muted-foreground mb-4">Browse books and tap the heart icon to save ones you like.</p>
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
