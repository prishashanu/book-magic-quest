import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface BookContextType {
  favorites: string[];
  readBooks: string[];
  toggleFavorite: (id: string) => void;
  markAsRead: (id: string) => void;
  isFavorite: (id: string) => boolean;
  isRead: (id: string) => boolean;
  readingStreak: number;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem("storyspark-favorites");
    return saved ? JSON.parse(saved) : [];
  });
  const [readBooks, setReadBooks] = useState<string[]>(() => {
    const saved = localStorage.getItem("storyspark-read");
    return saved ? JSON.parse(saved) : [];
  });
  const [readingStreak] = useState(() => {
    const saved = localStorage.getItem("storyspark-streak");
    return saved ? parseInt(saved) : 3;
  });

  useEffect(() => {
    localStorage.setItem("storyspark-favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("storyspark-read", JSON.stringify(readBooks));
  }, [readBooks]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const markAsRead = (id: string) => {
    setReadBooks((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const isFavorite = (id: string) => favorites.includes(id);
  const isRead = (id: string) => readBooks.includes(id);

  return (
    <BookContext.Provider
      value={{ favorites, readBooks, toggleFavorite, markAsRead, isFavorite, isRead, readingStreak }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBooks = () => {
  const ctx = useContext(BookContext);
  if (!ctx) throw new Error("useBooks must be used within BookProvider");
  return ctx;
};
