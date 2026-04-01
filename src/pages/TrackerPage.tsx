import { useBooks } from "@/context/BookContext";
import { books } from "@/data/books";
import { allBadges, badgeCategories } from "@/data/badges";
import { useState } from "react";
import { Bookmark, BookOpen, Star, Crown, Trophy, Search, Wand2, Compass, Smile, PawPrint, Target, GraduationCap, Sparkles, Pencil, Users, Globe, Award, Flame, Zap, Heart, Library, Timer, Calendar, Moon, Sunrise, PenTool, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  bookmark: <Bookmark className="h-5 w-5" />,
  "book-open": <BookOpen className="h-5 w-5" />,
  star: <Star className="h-5 w-5" />,
  book: <BookOpen className="h-5 w-5" />,
  crown: <Crown className="h-5 w-5" />,
  trophy: <Trophy className="h-5 w-5" />,
  search: <Search className="h-5 w-5" />,
  wand: <Wand2 className="h-5 w-5" />,
  compass: <Compass className="h-5 w-5" />,
  smile: <Smile className="h-5 w-5" />,
  paw: <PawPrint className="h-5 w-5" />,
  target: <Target className="h-5 w-5" />,
  graduation: <GraduationCap className="h-5 w-5" />,
  sparkles: <Sparkles className="h-5 w-5" />,
  pencil: <Pencil className="h-5 w-5" />,
  users: <Users className="h-5 w-5" />,
  globe: <Globe className="h-5 w-5" />,
  award: <Award className="h-5 w-5" />,
  flame: <Flame className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
  bolt: <Zap className="h-5 w-5" />,
  heart: <Heart className="h-5 w-5" />,
  library: <Library className="h-5 w-5" />,
  timer: <Timer className="h-5 w-5" />,
  calendar: <Calendar className="h-5 w-5" />,
  moon: <Moon className="h-5 w-5" />,
  sunrise: <Sunrise className="h-5 w-5" />,
  pen: <PenTool className="h-5 w-5" />,
  "check-circle": <CheckCircle className="h-5 w-5" />,
};

const TrackerPage = () => {
  const { readBooks, readingStreak, favorites } = useBooks();
  const readBookObjects = books.filter((b) => readBooks.includes(b.id));
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const genreCounts: Record<string, number> = {};
  readBookObjects.forEach((b) => {
    genreCounts[b.genre] = (genreCounts[b.genre] || 0) + 1;
  });
  const uniqueGenres = Object.keys(genreCounts).length;
  const favoriteGenre = Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

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
      <h1 className="font-display text-2xl md:text-3xl font-extrabold text-center mb-1">Reading Tracker</h1>
      <p className="text-muted-foreground text-sm text-center mb-10">Track your progress and unlock badges as you read.</p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-card rounded-xl p-5 text-center border border-border">
          <p className="font-display text-3xl font-extrabold text-foreground">{readBooks.length}</p>
          <p className="text-xs text-muted-foreground mt-1">Summaries Read</p>
        </div>
        <div className="bg-card rounded-xl p-5 text-center border border-border">
          <p className="font-display text-3xl font-extrabold text-foreground">{readingStreak}</p>
          <p className="text-xs text-muted-foreground mt-1">Day Streak</p>
        </div>
        <div className="bg-card rounded-xl p-5 text-center border border-border">
          <p className="font-display text-lg font-bold text-foreground">{favoriteGenre}</p>
          <p className="text-xs text-muted-foreground mt-1">Top Genre</p>
        </div>
        <div className="bg-card rounded-xl p-5 text-center border border-border">
          <p className="font-display text-3xl font-extrabold text-foreground">{earnedCount}</p>
          <p className="text-xs text-muted-foreground mt-1">Badges Earned</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-card rounded-xl border border-border p-6 mb-10">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display text-sm font-bold">Reading Progress</h2>
          <span className="text-sm font-display font-bold text-muted-foreground">{readBooks.length} / 12</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-primary h-full rounded-full transition-all duration-700"
            style={{ width: `${Math.min((readBooks.length / 12) * 100, 100)}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">Read all 12 summaries to earn the Completionist badge.</p>
      </div>

      {/* Badge filters */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg font-extrabold">Badges</h2>
        <span className="text-xs text-muted-foreground">{earnedCount} of {allBadges.length} unlocked</span>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-6">
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
            activeCategory === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          All
        </button>
        {badgeCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeCategory === cat.key ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Badges grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {displayBadges.map((badge) => {
          const earned = earnedBadge(badge);
          return (
            <div
              key={badge.id}
              className={`rounded-xl p-4 text-center border transition-all ${
                earned ? "bg-card border-primary/20 warm-glow" : "bg-muted/30 border-border/50 opacity-40"
              }`}
            >
              <div className={`mx-auto mb-2 w-10 h-10 rounded-lg flex items-center justify-center ${
                earned ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
              }`}>
                {iconMap[badge.icon] || <Star className="h-5 w-5" />}
              </div>
              <span className="font-display text-xs font-bold block leading-tight">{badge.name}</span>
              <span className="text-[10px] text-muted-foreground leading-tight block mt-0.5">{badge.desc}</span>
              {earned && <span className="block text-[10px] text-primary font-semibold mt-1">Unlocked</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrackerPage;
