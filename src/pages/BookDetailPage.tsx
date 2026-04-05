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
        <h1 className="font-display text-2xl font-extrabold mb-2">Book Not Found</h1>
        <p className="text-sm text-muted-foreground mb-4">We couldn't find the book you're looking for.</p>
        <Link to="/browse"><Button>Browse Books</Button></Link>
      </div>
    );
  }

  const related = books.filter((b) => b.series === book.series && b.id !== book.id).slice(0, 4);
  const fav = isFavorite(book.id);
  const read = isRead(book.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/browse" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to Browse
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cover */}
        <div className="md:col-span-1">
          <div className={`${book.coverColor} rounded-xl p-12 flex items-center justify-center aspect-square warm-glow`}>
            <span className="text-[100px]">{book.coverEmoji}</span>
          </div>
          <div className="flex gap-2 mt-4">
            <Button variant={fav ? "warm" : "outline"} className="flex-1 gap-2" onClick={() => toggleFavorite(book.id)}>
              <Heart className={`h-4 w-4 ${fav ? "fill-current" : ""}`} />
              {fav ? "Saved" : "Save"}
            </Button>
            <Button variant={read ? "default" : "outline"} className="flex-1 gap-2" onClick={() => markAsRead(book.id)}>
              <BookOpen className="h-4 w-4" />
              {read ? "Read" : "Mark Read"}
            </Button>
          </div>
        </div>

        {/* Details */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-0.5 mb-2">
            {Array.from({ length: Math.floor(book.rating) }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" />
            ))}
            <span className="text-sm text-muted-foreground ml-1.5">{book.rating}</span>
          </div>
          <h1 className="font-display text-2xl md:text-3xl font-extrabold mb-1">{book.title}</h1>
          <p className="text-muted-foreground text-sm mb-1">by {book.author}</p>
          <p className="text-muted-foreground text-xs mb-4">Series: {book.series}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-primary/8 text-primary px-3 py-1 rounded-md text-sm font-display font-semibold">{book.genre}</span>
            <span className="bg-muted px-3 py-1 rounded-md text-sm flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {book.readTime} read
            </span>
            <span className="bg-cream text-cream-foreground px-3 py-1 rounded-md text-sm font-medium">Ages {book.ageRange}</span>
          </div>

          <div className="space-y-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h2 className="font-display text-sm font-bold mb-3">Summary</h2>
              <ul className="space-y-3">
                {book.summary.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    <span className="font-display font-semibold text-foreground">{point.label}:</span>{" "}
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border p-5">
              <h2 className="font-display text-sm font-bold mb-2">Main Characters</h2>
              <ul className="space-y-1.5">
                {book.characters.map((char, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-0.5 text-xs">—</span> {char}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border p-5">
              <h2 className="font-display text-sm font-bold mb-2">Themes</h2>
              <div className="flex flex-wrap gap-2">
                {book.themes.map((theme, i) => (
                  <span key={i} className="bg-cream/60 text-foreground px-3 py-1 rounded-md text-sm">{theme}</span>
                ))}
              </div>
            </div>

            <div className="bg-cream/50 rounded-xl border border-border p-5">
              <h2 className="font-display text-sm font-bold mb-2">Why You Might Like It</h2>
              <p className="text-sm text-muted-foreground">{book.whyYouMightLikeIt}</p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-lg font-extrabold mb-6">More in {book.series}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((b) => <BookCard key={b.id} book={b} />)}
          </div>
        </section>
      )}
    </div>
  );
};

export default BookDetailPage;
