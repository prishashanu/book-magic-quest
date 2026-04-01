import { Link } from "react-router-dom";
import { Heart, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBooks } from "@/context/BookContext";
import type { Book } from "@/data/books";

const BookCard = ({ book }: { book: Book }) => {
  const { toggleFavorite, isFavorite } = useBooks();
  const fav = isFavorite(book.id);

  return (
    <div className="bg-card rounded-xl border border-border card-hover overflow-hidden group">
      <div className={`${book.coverColor} p-6 flex items-center justify-center relative`}>
        <span className="text-5xl group-hover:scale-105 transition-transform duration-300">{book.coverEmoji}</span>
        <button
          onClick={(e) => { e.preventDefault(); toggleFavorite(book.id); }}
          className="absolute top-3 right-3 p-2 rounded-md bg-card/70 backdrop-blur-sm hover:bg-card transition-colors"
        >
          <Heart className={`h-4 w-4 ${fav ? "fill-primary text-primary" : "text-muted-foreground"}`} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-0.5 mb-1">
          {Array.from({ length: book.rating }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-gold text-gold" />
          ))}
          <span className="text-xs text-muted-foreground ml-1">{book.rating}.0</span>
        </div>
        <h3 className="font-display font-bold text-sm leading-tight mb-1 line-clamp-1">{book.title}</h3>
        <p className="text-xs text-muted-foreground mb-1.5">by {book.author}</p>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-primary/8 text-primary px-2 py-0.5 rounded-md font-medium">{book.genre}</span>
          <span className="text-xs bg-muted px-2 py-0.5 rounded-md flex items-center gap-1">
            <Clock className="h-3 w-3" /> {book.readTime}
          </span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{book.preview}</p>
        <Link to={`/book/${book.id}`}>
          <Button size="sm" className="w-full text-xs">Read Summary</Button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
