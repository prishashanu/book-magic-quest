import { useBooks } from "@/context/BookContext";
import { books } from "@/data/books";
import { allBadges, badgeCategories } from "@/data/badges";
import { useState } from "react";

const TrackerPage = () => {
  const { readBooks, readingStreak, favorites } = useBooks();
  const readBookObjects = books.filter((b) => readBooks.includes(b.id));
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const genreCounts: Record<string, number> = {};
  readBookObjects.forEach((b) => {
    genreCounts[b.genre] = (genreCounts[b.genre] || 0) + 1;
  });
  const uniqueGenres = Object.keys(genreCounts).length;
  const favoriteGenre = Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "None yet";

  const earnedBadge = (badge: typeof allBadges[0]) => {
    if (badge.category === "genre" && badge.genre) return (genreCounts[badge.genre] || 0) >= badge.threshold;
    if (badge.id === "genre-explorer") return uniqueGenres >= badge.threshold;
    if (badge.id === "genre-master") return uniqueGenres >= badge.threshold;
    if (badge.category === "streak") return readingStreak >= badge.threshold;
    if (badge.category === "favorites") return favorites.length >= badge.threshold;
    if (badge.id === "first-fave") return favorites.length >= 1;
    if (badge.category === "progress" || badge.category === "milestone") return readBooks.length >= badge.threshold;
    return false;
  };

  const earnedCount = allBadges.filter(earnedBadge).length;
  const displayBadges = activeCategory === "all" ? allBadges : allBadges.filter(b => b.category === activeCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-2">Reading Tracker</h1>
      <p className="text-muted-foreground text-center mb-10">Track your progress and collect badges 🏅</p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-sky/10 rounded-2xl p-5 text-center border border-sky/20">
          <span className="text-2xl block mb-1.5">📚</span>
          <p className="font-display text-3xl font-extrabold text-primary">{readBooks.length}</p>
          <p className="text-xs text-muted-foreground mt-0.5">Summaries Read</p>
        </div>
        <div className="bg-coral/10 rounded-2xl p-5 text-center border border-coral/20">
          <span className="text-2xl block mb-1.5">🔥</span>
          <p className="font-display text-3xl font-extrabold text-coral">{readingStreak}</p>
          <p className="text-xs text-muted-foreground mt-0.5">Day Streak</p>
        </div>
        <div className="bg-lavender/10 rounded-2xl p-5 text-center border border-lavender/20">
          <span className="text-2xl block mb-1.5">💜</span>
          <p className="font-display text-lg font-bold">{favoriteGenre}</p>
          <p className="text-xs text-muted-foreground mt-0.5">Top Genre</p>
        </div>
        <div className="bg-sunshine/10 rounded-2xl p-5 text-center border border-sunshine/20">
          <span className="text-2xl block mb-1.5">🏅</span>
          <p className="font-display text-3xl font-extrabold text-sunshine">{earnedCount}</p>
          <p className="text-xs text-muted-foreground mt-0.5">Badges Earned</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-card rounded-2xl border border-border p-6 mb-10">
        <h2 className="font-display text-base font-bold mb-3">📈 Reading Progress</h2>
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-muted rounded-full h-3.5 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-lavender h-full rounded-full transition-all duration-700"
              style={{ width: `${Math.min((readBooks.length / 12) * 100, 100)}%` }}
            />
          </div>
          <span className="text-sm font-display font-bold">{readBooks.length}/12</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Read all 12 summaries to unlock Completionist! 🏆</p>
      </div>

      {/* Badge filters */}
      <h2 className="font-display text-2xl font-extrabold mb-4">🏅 Badge Collection</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
            activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          All ({allBadges.length})
        </button>
        {badgeCategories.map((cat) => {
          const count = allBadges.filter(b => b.category === cat.key).length;
          const earned = allBadges.filter(b => b.category === cat.key && earnedBadge(b)).length;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                activeCategory === cat.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.emoji} {cat.label} ({earned}/{count})
            </button>
          );
        })}
      </div>

      {/* Badges grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {displayBadges.map((badge) => {
          const earned = earnedBadge(badge);
          return (
            <div
              key={badge.id}
              className={`rounded-xl p-4 text-center border transition-all ${
                earned ? `${badge.color} border-border magic-glow` : "bg-muted/30 border-border/50 opacity-50 grayscale"
              }`}
            >
              <span className="text-3xl block mb-1.5">{badge.emoji}</span>
              <span className="font-display text-xs font-bold block leading-tight">{badge.name}</span>
              <span className="text-[10px] text-muted-foreground leading-tight block mt-0.5">{badge.desc}</span>
              {earned && <span className="block text-[10px] text-primary font-bold mt-1">Earned ✓</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackerPage;
