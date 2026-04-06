export type { Book } from "./types";

import { harryPotterBooks } from "./books-harry-potter";
import { framedBooks, deadCityBooks, citySpiesBooks, sherlockSocietyBooks } from "./books-ponti";
import { bscBooks } from "./books-bsc";
import { clickBooks } from "./books-click";
import { pawsBooks } from "./books-paws";
import { covers } from "@/assets/covers";

const allBooks = [
  ...harryPotterBooks,
  ...framedBooks,
  ...deadCityBooks,
  ...citySpiesBooks,
  ...sherlockSocietyBooks,
  ...bscBooks,
  ...clickBooks,
  ...pawsBooks,
];

// Attach cover images by book ID
export const books = allBooks.map((book) => ({
  ...book,
  coverImage: covers[book.id] || book.coverImage,
}));

export const series = [
  { name: "Harry Potter", count: harryPotterBooks.length },
  { name: "Framed!", count: framedBooks.length },
  { name: "Dead City", count: deadCityBooks.length },
  { name: "City Spies", count: citySpiesBooks.length },
  { name: "The Sherlock Society", count: sherlockSocietyBooks.length },
  { name: "The Baby-Sitters Club Graphic Novels", count: bscBooks.length },
  { name: "Click", count: clickBooks.length },
  { name: "PAWS", count: pawsBooks.length },
];

export const categories = [
  { name: "Fantasy", emoji: "", color: "bg-cream", borderColor: "border-cream" },
  { name: "Mystery", emoji: "", color: "bg-sand/30", borderColor: "border-sand" },
  { name: "Spy Adventure", emoji: "", color: "bg-gold/15", borderColor: "border-gold" },
  { name: "Paranormal", emoji: "", color: "bg-warm/10", borderColor: "border-warm" },
  { name: "Graphic Novel", emoji: "", color: "bg-tan/20", borderColor: "border-tan" },
];

export { harryPotterBooks, framedBooks, deadCityBooks, citySpiesBooks, sherlockSocietyBooks, bscBooks, clickBooks, pawsBooks };
