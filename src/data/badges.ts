export interface Badge {
  id: string;
  name: string;
  emoji: string;
  desc: string;
  threshold: number;
  color: string;
  category: "progress" | "genre" | "streak" | "favorites" | "challenge" | "milestone";
  genre?: string;
}

export const allBadges: Badge[] = [
  // Progress badges
  { id: "first-peek", name: "First Peek", emoji: "👀", desc: "Read your first summary", threshold: 1, color: "bg-sky/15", category: "progress" },
  { id: "bookworm", name: "Bookworm", emoji: "🐛", desc: "Read 5 summaries", threshold: 5, color: "bg-mint/15", category: "progress" },
  { id: "reading-star", name: "Reading Star", emoji: "⭐", desc: "Read 10 summaries", threshold: 10, color: "bg-sunshine/15", category: "progress" },
  { id: "page-turner", name: "Page Turner", emoji: "📖", desc: "Read 15 summaries", threshold: 15, color: "bg-lavender/15", category: "progress" },
  { id: "book-boss", name: "Book Boss", emoji: "👑", desc: "Read 25 summaries", threshold: 25, color: "bg-coral/15", category: "progress" },
  { id: "legend", name: "Legend", emoji: "🏆", desc: "Read 50 summaries", threshold: 50, color: "bg-sunshine/15", category: "progress" },

  // Genre badges
  { id: "mystery-master", name: "Mystery Master", emoji: "🕵️", desc: "Read 3 mysteries", threshold: 3, color: "bg-sky/15", category: "genre", genre: "Mystery" },
  { id: "fantasy-fan", name: "Fantasy Fan", emoji: "🧙", desc: "Read 3 fantasy books", threshold: 3, color: "bg-lavender/15", category: "genre", genre: "Fantasy" },
  { id: "adventure-ace", name: "Adventure Ace", emoji: "🗺️", desc: "Read 3 adventures", threshold: 3, color: "bg-mint/15", category: "genre", genre: "Adventure" },
  { id: "comedy-king", name: "Comedy King", emoji: "😂", desc: "Read 3 funny books", threshold: 3, color: "bg-sunshine/15", category: "genre", genre: "Funny Books" },
  { id: "animal-ally", name: "Animal Ally", emoji: "🐾", desc: "Read 3 animal stories", threshold: 3, color: "bg-coral/15", category: "genre", genre: "Animal Stories" },
  { id: "sports-star", name: "Sports Star", emoji: "⚽", desc: "Read 3 sports books", threshold: 3, color: "bg-mint/15", category: "genre", genre: "Sports" },
  { id: "school-scholar", name: "School Scholar", emoji: "🏫", desc: "Read 3 school stories", threshold: 3, color: "bg-sky/15", category: "genre", genre: "School Stories" },
  { id: "fairy-friend", name: "Fairy Friend", emoji: "🧚", desc: "Read 3 fairy tales", threshold: 3, color: "bg-lavender/15", category: "genre", genre: "Fairy Tales" },
  { id: "art-lover", name: "Art Lover", emoji: "✏️", desc: "Read 3 graphic novels", threshold: 3, color: "bg-sunshine/15", category: "genre", genre: "Graphic Novels" },
  { id: "friendship-guru", name: "Friendship Guru", emoji: "🤝", desc: "Read 3 friendship books", threshold: 3, color: "bg-coral/15", category: "genre", genre: "Friendship" },
  { id: "genre-explorer", name: "Genre Explorer", emoji: "🌎", desc: "Read from 5 genres", threshold: 5, color: "bg-primary/15", category: "genre" },
  { id: "genre-master", name: "Genre Master", emoji: "🎓", desc: "Read from all 10 genres", threshold: 10, color: "bg-lavender/15", category: "genre" },

  // Streak badges
  { id: "spark", name: "Spark", emoji: "🔥", desc: "3-day streak", threshold: 3, color: "bg-coral/15", category: "streak" },
  { id: "on-fire", name: "On Fire", emoji: "🔥", desc: "7-day streak", threshold: 7, color: "bg-coral/15", category: "streak" },
  { id: "unstoppable", name: "Unstoppable", emoji: "💥", desc: "14-day streak", threshold: 14, color: "bg-sunshine/15", category: "streak" },
  { id: "streak-legend", name: "Streak Legend", emoji: "⚡", desc: "30-day streak", threshold: 30, color: "bg-primary/15", category: "streak" },

  // Favorites badges
  { id: "collector", name: "Collector", emoji: "💖", desc: "Save 3 favorites", threshold: 3, color: "bg-coral/15", category: "favorites" },
  { id: "super-saver", name: "Super Saver", emoji: "📌", desc: "Save 10 favorites", threshold: 10, color: "bg-lavender/15", category: "favorites" },
  { id: "library-builder", name: "Library Builder", emoji: "📚", desc: "Save 25 favorites", threshold: 25, color: "bg-sky/15", category: "favorites" },

  // Challenge badges
  { id: "speed-reader", name: "Speed Reader", emoji: "⚡", desc: "Read 3 in one day", threshold: 3, color: "bg-sunshine/15", category: "challenge" },
  { id: "weekend-warrior", name: "Weekend Warrior", emoji: "🛡️", desc: "Read 5 on a weekend", threshold: 5, color: "bg-mint/15", category: "challenge" },
  { id: "night-owl", name: "Night Owl", emoji: "🦉", desc: "Read after 8 PM", threshold: 1, color: "bg-lavender/15", category: "challenge" },
  { id: "early-bird", name: "Early Bird", emoji: "🐦", desc: "Read before 8 AM", threshold: 1, color: "bg-sunshine/15", category: "challenge" },

  // Milestone badges
  { id: "first-fave", name: "First Fave", emoji: "❤️", desc: "Save your first book", threshold: 1, color: "bg-coral/15", category: "milestone" },
  { id: "reviewer", name: "Reviewer", emoji: "✍️", desc: "Leave a review", threshold: 1, color: "bg-sky/15", category: "milestone" },
  { id: "explorer", name: "Explorer", emoji: "🔍", desc: "Visit every page", threshold: 1, color: "bg-mint/15", category: "milestone" },
  { id: "completionist", name: "Completionist", emoji: "✅", desc: "Read all summaries", threshold: 12, color: "bg-primary/15", category: "milestone" },
];

export const badgeCategories = [
  { key: "progress", label: "Reading Progress", emoji: "📈" },
  { key: "genre", label: "Genre Mastery", emoji: "📚" },
  { key: "streak", label: "Streaks", emoji: "🔥" },
  { key: "favorites", label: "Favorites", emoji: "💖" },
  { key: "challenge", label: "Challenges", emoji: "🎯" },
  { key: "milestone", label: "Milestones", emoji: "🏅" },
] as const;
