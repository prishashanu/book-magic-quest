import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";
import { books, categories } from "@/data/books";
import { allBadges } from "@/data/badges";
import { BookOpen, Search, Trophy, ArrowRight } from "lucide-react";
import mascot from "@/assets/mascot.png";

const howItWorks = [
  { emoji: "🔍", title: "Pick a Book", desc: "Browse our collection and find a story that sounds awesome." },
  { emoji: "📖", title: "Read the Summary", desc: "Get the highlights in a quick, easy-to-read peek." },
  { emoji: "⭐", title: "Rate & Save", desc: "Love it? Save it to your list and track your reading." },
];

const testimonials = [
  { name: "Mia, age 12", text: "I found 5 new books to read this week! Page Peek is amazing. 🌟", emoji: "👧🏽" },
  { name: "Jake, age 13", text: "The mystery section is incredible. Feels like being a real detective.", emoji: "👦🏻" },
  { name: "Sofia, age 11", text: "I love collecting badges! Already earned Fantasy Fan ✨", emoji: "👧🏼" },
];

const Index = () => {
  const featured = books.filter((b) => b.featured);
  const newest = books.filter((b) => b.newest);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-lavender/8 to-coral/8 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <img src={mascot} alt="Page Peek mascot" className="h-24 md:h-32 drop-shadow-lg" width={128} height={128} />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary via-lavender to-coral bg-clip-text text-transparent leading-tight">
            Peek Inside Any Book<br />in Minutes
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Quick, fun book summaries to help you discover your next favorite read.
            Your reading adventure starts here 📖
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/browse">
              <Button size="xl" className="gap-2">
                <BookOpen className="h-5 w-5" /> Start Reading
              </Button>
            </Link>
            <Link to="/categories">
              <Button size="xl" variant="lavender" className="gap-2">
                <Search className="h-5 w-5" /> Explore Books
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute top-10 left-10 text-3xl animate-float opacity-15">📖</div>
        <div className="absolute bottom-10 right-10 text-3xl animate-float opacity-15" style={{ animationDelay: "1s" }}>🐾</div>
        <div className="absolute top-1/3 right-20 text-2xl animate-sparkle-spin opacity-15">⭐</div>
      </section>

      {/* Book of the Week */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-card rounded-2xl border border-border shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 magic-glow">
          <div className="bg-sunshine/15 rounded-2xl p-6 flex-shrink-0">
            <span className="text-6xl">🏆</span>
          </div>
          <div className="text-center md:text-left">
            <span className="text-xs font-display font-bold text-sunshine uppercase tracking-wider">⭐ Book of the Week</span>
            <h2 className="font-display text-2xl font-extrabold mt-1 mb-2">{featured[0]?.title}</h2>
            <p className="text-muted-foreground text-sm mb-3">by {featured[0]?.author} — {featured[0]?.preview}</p>
            <Link to={`/book/${featured[0]?.id}`}>
              <Button size="sm" variant="sunshine" className="gap-1">Read Summary <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold flex items-center gap-2">
            ✨ Featured Books
          </h2>
          <Link to="/browse" className="text-sm text-primary hover:underline font-semibold flex items-center gap-1">
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gradient-to-r from-lavender/5 via-primary/5 to-mint/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-center mb-8">
            📚 Explore by Genre
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/browse?genre=${encodeURIComponent(cat.name)}`}
                className={`${cat.color} border ${cat.borderColor} rounded-xl p-4 text-center card-hover`}
              >
                <span className="text-2xl block mb-1.5">{cat.emoji}</span>
                <span className="font-display text-sm font-bold">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-center mb-10">
          How Page Peek Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {howItWorks.map((step, i) => (
            <div key={i} className="text-center bg-card rounded-2xl border border-border p-7 card-hover">
              <span className="text-4xl block mb-3">{step.emoji}</span>
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm mx-auto mb-3">
                {i + 1}
              </div>
              <h3 className="font-display text-base font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Summaries */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold flex items-center gap-2">
            🆕 Latest Summaries
          </h2>
          <Link to="/browse" className="text-sm text-primary hover:underline font-semibold flex items-center gap-1">
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {newest.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Badges Preview */}
      <section className="bg-gradient-to-r from-sunshine/5 via-coral/5 to-lavender/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
            🏅 Collect Reading Badges
          </h2>
          <p className="text-muted-foreground mb-8">Read books, build streaks, and earn {allBadges.length}+ badges.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {allBadges.slice(0, 8).map((badge) => (
              <div key={badge.id} className={`${badge.color} rounded-xl p-4 w-28 card-hover border border-border`}>
                <span className="text-3xl block mb-1">{badge.emoji}</span>
                <span className="font-display text-xs font-bold block">{badge.name}</span>
              </div>
            ))}
          </div>
          <Link to="/tracker" className="inline-block mt-6">
            <Button variant="outline" className="gap-2">
              View All Badges <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Daily Challenge */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary/8 to-lavender/8 rounded-2xl p-8 text-center border border-border magic-glow">
          <span className="text-4xl block mb-3">🎯</span>
          <h2 className="font-display text-2xl font-extrabold mb-2">Daily Reading Challenge</h2>
          <p className="text-muted-foreground mb-4">Can you read one summary every day? Start your streak!</p>
          <Link to="/browse">
            <Button size="lg" variant="coral" className="gap-2">
              <Trophy className="h-5 w-5" /> Take the Challenge
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="font-display text-2xl md:text-3xl font-extrabold text-center mb-8">
          💬 What Readers Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-6 card-hover text-center">
              <span className="text-3xl block mb-2">{t.emoji}</span>
              <p className="text-sm text-muted-foreground italic mb-3">"{t.text}"</p>
              <span className="font-display text-sm font-bold text-primary">{t.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
