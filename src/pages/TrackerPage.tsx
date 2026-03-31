import { useBooks } from "@/context/BookContext";
import { books } from "@/data/books";

const badges = [
  { name: "Bookworm", emoji: "🐛", desc: "Read 5 books", threshold: 5, color: "bg-mint/20" },
  { name: "Mystery Master", emoji: "🕵️", desc: "Read 3 mysteries", threshold: 3, color: "bg-sky/20", genre: "Mystery" },
  { name: "Fantasy Fan", emoji: "🧙", desc: "Read 3 fantasy books", threshold: 3, color: "bg-lavender/20", genre: "Fantasy" },
  { name: "Reading Star", emoji: "⭐", desc: "Read 10 books", threshold: 10, color: "bg-sunshine/20" },
  { name: "Speed Reader", emoji: "⚡", desc: "Read 3 in one week", threshold: 3, color: "bg-coral/20" },
];

const TrackerPage = () => {
  const { readBooks, readingStreak } = useBooks();
  const readBookObjects = books.filter((b) => readBooks.includes(b.id));

  const genreCounts: Record<string, number> = {};
  readBookObjects.forEach((b) => {
    genreCounts[b.genre] = (genreCounts[b.genre] || 0) + 1;
  });
  const favoriteGenre = Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "None yet";

  const earnedBadge = (badge: typeof badges[0]) => {
    if (badge.genre) return (genreCounts[badge.genre] || 0) >= badge.threshold;
    return readBooks.length >= badge.threshold;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-display text-3xl md:text-4xl font-bold text-center mb-2">📊 Reading Tracker</h1>
      <p className="text-muted-foreground text-center mb-10">Track your reading journey and earn badges!</p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-sky/10 rounded-2xl p-6 text-center border border-sky/30">
          <span className="text-3xl block mb-2">📚</span>
          <p className="font-display text-3xl font-bold text-primary">{readBooks.length}</p>
          <p className="text-xs text-muted-foreground">Books Read</p>
        </div>
        <div className="bg-coral/10 rounded-2xl p-6 text-center border border-coral/30">
          <span className="text-3xl block mb-2">🔥</span>
          <p className="font-display text-3xl font-bold text-coral">{readingStreak}</p>
          <p className="text-xs text-muted-foreground">Day Streak</p>
        </div>
        <div className="bg-lavender/10 rounded-2xl p-6 text-center border border-lavender/30">
          <span className="text-3xl block mb-2">💜</span>
          <p className="font-display text-lg font-bold">{favoriteGenre}</p>
          <p className="text-xs text-muted-foreground">Favorite Genre</p>
        </div>
        <div className="bg-sunshine/10 rounded-2xl p-6 text-center border border-sunshine/30">
          <span className="text-3xl block mb-2">🏅</span>
          <p className="font-display text-3xl font-bold text-sunshine">{badges.filter(earnedBadge).length}</p>
          <p className="text-xs text-muted-foreground">Badges Earned</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-card rounded-2xl border border-border p-6 mb-10">
        <h2 className="font-display text-lg font-semibold mb-3">📈 Reading Progress</h2>
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-primary to-lavender h-full rounded-full transition-all duration-700"
              style={{ width: `${Math.min((readBooks.length / 12) * 100, 100)}%` }}
            />
          </div>
          <span className="text-sm font-display font-semibold">{readBooks.length}/12</span>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Read all 12 summaries to become a Reading Champion! 🏆</p>
      </div>

      {/* Badges */}
      <h2 className="font-display text-2xl font-bold mb-6">🏅 Badge Collection</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {badges.map((badge) => {
          const earned = earnedBadge(badge);
          return (
            <div
              key={badge.name}
              className={`rounded-2xl p-5 text-center border border-border transition-all ${
                earned ? `${badge.color} magic-glow` : "bg-muted/50 opacity-50 grayscale"
              }`}
            >
              <span className="text-4xl block mb-2">{badge.emoji}</span>
              <span className="font-display text-sm font-semibold block">{badge.name}</span>
              <span className="text-xs text-muted-foreground">{badge.desc}</span>
              {earned && <span className="block text-xs text-primary font-semibold mt-1">Earned! ✨</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackerPage;
