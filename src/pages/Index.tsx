import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";
import { books, categories } from "@/data/books";
import { Sparkles, BookOpen, Search, Heart, Trophy, Star, ArrowRight } from "lucide-react";

const howItWorks = [
  { emoji: "🔍", title: "Pick a Book", desc: "Browse our collection and find a story that excites you!" },
  { emoji: "📖", title: "Read the Summary", desc: "Get the fun parts in a quick, easy-to-read summary!" },
  { emoji: "⭐", title: "Rate & Save", desc: "Love it? Save it to your favorites and track your reading!" },
];

const testimonials = [
  { name: "Mia, age 10", text: "I found 5 new books to read this week! Story Spark is the best! 🌟", emoji: "👧" },
  { name: "Jake, age 12", text: "The mystery books section is SO cool. I feel like a real detective!", emoji: "👦" },
  { name: "Sofia, age 9", text: "I love collecting badges! I'm already a Fantasy Fan! ✨", emoji: "👧" },
];

const badges = [
  { name: "Bookworm", emoji: "🐛", desc: "Read 5 books", color: "bg-mint/20" },
  { name: "Mystery Master", emoji: "🕵️", desc: "Read 3 mysteries", color: "bg-sky/20" },
  { name: "Fantasy Fan", emoji: "🧙", desc: "Read 3 fantasy books", color: "bg-lavender/20" },
  { name: "Reading Star", emoji: "⭐", desc: "Read 10 books", color: "bg-sunshine/20" },
  { name: "Speed Reader", emoji: "⚡", desc: "Read 3 in one week", color: "bg-coral/20" },
];

const Index = () => {
  const featured = books.filter((b) => b.featured);
  const popular = books.filter((b) => b.popular);
  const newest = books.filter((b) => b.newest);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-lavender/10 to-coral/10 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center gap-3 mb-6">
            <span className="text-4xl animate-float">📚</span>
            <span className="text-4xl animate-float" style={{ animationDelay: "0.3s" }}>✨</span>
            <span className="text-4xl animate-float" style={{ animationDelay: "0.6s" }}>🌟</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-lavender to-coral bg-clip-text text-transparent leading-tight">
            Discover Amazing Books<br />in Minutes!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Read fun, easy book summaries and find your next favorite story! 
            Your magical reading adventure starts here ✨
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
        {/* Floating decorations */}
        <div className="absolute top-10 left-10 text-4xl animate-float opacity-20">📖</div>
        <div className="absolute bottom-10 right-10 text-4xl animate-float opacity-20" style={{ animationDelay: "1s" }}>🐉</div>
        <div className="absolute top-1/3 right-20 text-3xl animate-sparkle-spin opacity-20">⭐</div>
      </section>

      {/* Book of the Week */}
      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-card rounded-2xl border border-border shadow-lg p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 magic-glow">
          <div className="bg-sunshine/20 rounded-2xl p-8 flex-shrink-0">
            <span className="text-7xl">🏆</span>
          </div>
          <div className="text-center md:text-left">
            <span className="text-xs font-display font-semibold text-sunshine uppercase tracking-wider">⭐ Book of the Week</span>
            <h2 className="font-display text-2xl font-bold mt-1 mb-2">{featured[0]?.title}</h2>
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
          <h2 className="font-display text-2xl md:text-3xl font-bold flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-sunshine" /> Featured Books
          </h2>
          <Link to="/browse" className="text-sm text-primary hover:underline font-semibold flex items-center gap-1">
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gradient-to-r from-lavender/5 via-primary/5 to-mint/5 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
            📚 Explore by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/browse?genre=${encodeURIComponent(cat.name)}`}
                className={`${cat.color} border ${cat.borderColor} rounded-2xl p-4 text-center card-hover`}
              >
                <span className="text-3xl block mb-2">{cat.emoji}</span>
                <span className="font-display text-sm font-semibold">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">
          ✨ How Story Spark Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step, i) => (
            <div key={i} className="text-center bg-card rounded-2xl border border-border p-8 card-hover">
              <span className="text-5xl block mb-4">{step.emoji}</span>
              <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm mx-auto mb-3">
                {i + 1}
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Summaries */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold flex items-center gap-2">
            🆕 Latest Summaries
          </h2>
          <Link to="/browse" className="text-sm text-primary hover:underline font-semibold flex items-center gap-1">
            See All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newest.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Badges */}
      <section className="bg-gradient-to-r from-sunshine/5 via-coral/5 to-lavender/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            🏅 Collect Reading Badges!
          </h2>
          <p className="text-muted-foreground mb-8">Read books and earn awesome badges. How many can you collect?</p>
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge) => (
              <div key={badge.name} className={`${badge.color} rounded-2xl p-5 w-36 card-hover border border-border`}>
                <span className="text-4xl block mb-2">{badge.emoji}</span>
                <span className="font-display text-sm font-semibold block">{badge.name}</span>
                <span className="text-xs text-muted-foreground">{badge.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Challenge */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-primary/10 to-lavender/10 rounded-2xl p-8 text-center border border-border magic-glow">
          <span className="text-5xl block mb-4">🎯</span>
          <h2 className="font-display text-2xl font-bold mb-2">Daily Reading Challenge</h2>
          <p className="text-muted-foreground mb-4">Can you read one book summary every day? Start your streak today!</p>
          <Link to="/browse">
            <Button size="lg" variant="coral" className="gap-2">
              <Trophy className="h-5 w-5" /> Take the Challenge!
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-8">
          💬 What Kids Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-6 card-hover text-center">
              <span className="text-4xl block mb-3">{t.emoji}</span>
              <p className="text-sm text-muted-foreground italic mb-3">"{t.text}"</p>
              <span className="font-display text-sm font-semibold text-primary">{t.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
