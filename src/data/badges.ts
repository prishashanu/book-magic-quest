export interface Badge {
  id: string;
  name: string;
  icon: string;
  desc: string;
  threshold: number;
  category: "progress" | "genre" | "streak" | "favorites" | "challenge" | "milestone";
  genre?: string;
}

export const allBadges: Badge[] = [
  // Progress
  { id: "first-peek", name: "First Peek", icon: "bookmark", desc: "Read your first summary", threshold: 1, category: "progress" },
  { id: "bookworm", name: "Bookworm", icon: "book-open", desc: "Read 5 summaries", threshold: 5, category: "progress" },
  { id: "reading-star", name: "Rising Reader", icon: "star", desc: "Read 10 summaries", threshold: 10, category: "progress" },
  { id: "page-turner", name: "Page Turner", icon: "book", desc: "Read 15 summaries", threshold: 15, category: "progress" },
  { id: "book-boss", name: "Book Boss", icon: "crown", desc: "Read 25 summaries", threshold: 25, category: "progress" },
  { id: "legend", name: "Legend", icon: "trophy", desc: "Read 50 summaries", threshold: 50, category: "progress" },

  // Genre
  { id: "mystery-master", name: "Mystery Master", icon: "search", desc: "Read 3 mysteries", threshold: 3, category: "genre", genre: "Mystery" },
  { id: "fantasy-fan", name: "Fantasy Fan", icon: "wand", desc: "Read 3 fantasy books", threshold: 3, category: "genre", genre: "Fantasy" },
  { id: "adventure-ace", name: "Adventure Ace", icon: "compass", desc: "Read 3 adventures", threshold: 3, category: "genre", genre: "Adventure" },
  { id: "comedy-king", name: "Comedy Fan", icon: "smile", desc: "Read 3 funny books", threshold: 3, category: "genre", genre: "Funny Books" },
  { id: "animal-ally", name: "Animal Ally", icon: "paw", desc: "Read 3 animal stories", threshold: 3, category: "genre", genre: "Animal Stories" },
  { id: "sports-star", name: "Sports Star", icon: "target", desc: "Read 3 sports books", threshold: 3, category: "genre", genre: "Sports" },
  { id: "school-scholar", name: "Scholar", icon: "graduation", desc: "Read 3 school stories", threshold: 3, category: "genre", genre: "School Stories" },
  { id: "fairy-friend", name: "Tale Keeper", icon: "sparkles", desc: "Read 3 fairy tales", threshold: 3, category: "genre", genre: "Fairy Tales" },
  { id: "art-lover", name: "Art Lover", icon: "pencil", desc: "Read 3 graphic novels", threshold: 3, category: "genre", genre: "Graphic Novels" },
  { id: "friendship-guru", name: "Good Friend", icon: "users", desc: "Read 3 friendship books", threshold: 3, category: "genre", genre: "Friendship" },
  { id: "genre-explorer", name: "Genre Explorer", icon: "globe", desc: "Read from 5 different genres", threshold: 5, category: "genre" },
  { id: "genre-master", name: "Genre Master", icon: "award", desc: "Read from all 10 genres", threshold: 10, category: "genre" },

  // Streak
  { id: "spark", name: "Getting Started", icon: "flame", desc: "3-day reading streak", threshold: 3, category: "streak" },
  { id: "on-fire", name: "On a Roll", icon: "flame", desc: "7-day reading streak", threshold: 7, category: "streak" },
  { id: "unstoppable", name: "Unstoppable", icon: "zap", desc: "14-day reading streak", threshold: 14, category: "streak" },
  { id: "streak-legend", name: "Streak Legend", icon: "bolt", desc: "30-day reading streak", threshold: 30, category: "streak" },

  // Favorites
  { id: "collector", name: "Collector", icon: "heart", desc: "Save 3 favorites", threshold: 3, category: "favorites" },
  { id: "super-saver", name: "Curator", icon: "bookmark", desc: "Save 10 favorites", threshold: 10, category: "favorites" },
  { id: "library-builder", name: "Library Builder", icon: "library", desc: "Save 25 favorites", threshold: 25, category: "favorites" },

  // Challenge
  { id: "speed-reader", name: "Speed Reader", icon: "timer", desc: "Read 3 summaries in one day", threshold: 3, category: "challenge" },
  { id: "weekend-warrior", name: "Weekend Reader", icon: "calendar", desc: "Read 5 on a weekend", threshold: 5, category: "challenge" },
  { id: "night-owl", name: "Night Owl", icon: "moon", desc: "Read after 8 PM", threshold: 1, category: "challenge" },
  { id: "early-bird", name: "Early Bird", icon: "sunrise", desc: "Read before 8 AM", threshold: 1, category: "challenge" },

  // Milestone
  { id: "first-fave", name: "First Favorite", icon: "heart", desc: "Save your first book", threshold: 1, category: "milestone" },
  { id: "reviewer", name: "Reviewer", icon: "pen", desc: "Leave a review", threshold: 1, category: "milestone" },
  { id: "explorer", name: "Explorer", icon: "compass", desc: "Visit every section", threshold: 1, category: "milestone" },
  { id: "completionist", name: "Completionist", icon: "check-circle", desc: "Read all available summaries", threshold: 12, category: "milestone" },
];

export const badgeCategories = [
  { key: "progress", label: "Progress" },
  { key: "genre", label: "Genres" },
  { key: "streak", label: "Streaks" },
  { key: "favorites", label: "Favorites" },
  { key: "challenge", label: "Challenges" },
  { key: "milestone", label: "Milestones" },
] as const;
