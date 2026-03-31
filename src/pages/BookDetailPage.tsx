import { useParams, Link } from "react-router-dom";
import { Heart, Star, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";
import { books } from "@/data/books";
import { useBooks } from "@/context/BookContext";

const BookDetailPage = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);
  const { toggleFavorite, isFavorite, markAsRead, isRead } = useBooks();

  if (!book) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <span className="text-5xl block mb-4">📖</span>
        <h1 className="font-display text-2xl font-bold mb-2">Book Not Found</h1>
        <Link to="/browse"><Button>Browse Books</Button></Link>
      </div>
    );
  }

  const related = books.filter((b) => b.genre === book.genre && b.id !== book.id).slice(0, 4);
  const fav = isFavorite(book.id);
  const read = isRead(book.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/browse" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Browse
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cover */}
        <div className="md:col-span-1">
          <div className={`${book.coverColor} rounded-2xl p-12 flex items-center justify-center aspect-square magic-glow`}>
            <span className="text-[120px]">{book.coverEmoji}</span>
          </div>
          <div className="flex gap-2 mt-4">
            <Button
              variant={fav ? "coral" : "outline"}
              className="flex-1 gap-2"
              onClick={() => toggleFavorite(book.id)}
            >
              <Heart className={`h-4 w-4 ${fav ? "fill-current" : ""}`} />
              {fav ? "Saved!" : "Save Book"}
            </Button>
            <Button
              variant={read ? "mint" : "outline"}
              className="flex-1 gap-2"
              onClick={() => markAsRead(book.id)}
            >
              <BookOpen className="h-4 w-4" />
              {read ? "Read ✓" : "Mark as Read"}
            </Button>
          </div>
        </div>

        {/* Details */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: book.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-sunshine text-sunshine" />
            ))}
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-1">{book.title}</h1>
          <p className="text-muted-foreground mb-4">by {book.author}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-display font-semibold">{book.genre}</span>
            <span className="bg-muted px-3 py-1 rounded-full text-sm flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {book.readTime} read
            </span>
            <span className="bg-mint/20 text-mint-foreground px-3 py-1 rounded-full text-sm font-medium">Ages {book.ageRange}</span>
          </div>

          {/* Summary sections */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">📖 What This Book Is About</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{book.summary}</p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">👥 Main Characters</h2>
              <ul className="space-y-2">
                {book.characters.map((char, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">⭐</span> {char}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">💖 Why Kids May Like It</h2>
              <p className="text-sm text-muted-foreground">{book.whyKidsLikeIt}</p>
            </div>

            <div className="bg-gradient-to-r from-sunshine/10 to-coral/10 rounded-2xl border border-border p-6">
              <h2 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">💡 Lesson or Message</h2>
              <p className="text-sm text-muted-foreground italic">"{book.lesson}"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold mb-6">📚 More {book.genre} Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((b) => <BookCard key={b.id} book={b} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default BookDetailPage;
