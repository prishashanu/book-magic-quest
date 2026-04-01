import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BookCard from "@/components/BookCard";
import { books, categories } from "@/data/books";
import { allBadges } from "@/data/badges";
import { BookOpen, Search, ArrowRight } from "lucide-react";
import mascot from "@/assets/mascot.png";

const howItWorks = [
  { step: "01", title: "Pick a Book", desc: "Browse our collection and find a story that sounds interesting to you." },
  { step: "02", title: "Read the Summary", desc: "Get the key details — plot, characters, and what makes it worth reading." },
  { step: "03", title: "Save & Track", desc: "Save your favorites and track what you've read to earn badges." },
];

const testimonials = [
  { name: "Mia, 12", text: "I found five new books to read this week. Page Peek makes it so easy to figure out what's worth picking up.", initials: "M" },
  { name: "Jake, 13", text: "The mystery section is great. I feel like I can actually pick the right book now instead of guessing.", initials: "J" },
  { name: "Sofia, 11", text: "I like the badge system — it actually makes me want to keep reading and trying new genres.", initials: "S" },
];

const Index = () => {
  const featured = books.filter((b) => b.featured);
  const newest = books.filter((b) => b.newest);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream to-background py-16 md:py-24">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <img src={mascot} alt="Page Peek" className="h-20 md:h-28 drop-shadow-md" width={112} height={112} />
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-foreground leading-tight">
            Peek Inside Any Book<br />in Minutes
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Quick, thoughtful book summaries to help you discover your next favorite read. No spoilers — just the good stuff.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/browse">
              <Button size="lg" className="gap-2">
                <BookOpen className="h-4 w-4" /> Start Reading
              </Button>
            </Link>
            <Link to="/categories">
              <Button size="lg" variant="outline" className="gap-2">
                <Search className="h-4 w-4" /> Explore Books
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Book of the Week */}
      <section className="container mx-auto px-4 -mt-6 relative z-20">
        <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 warm-glow">
          <div className="bg-gold/10 rounded-xl p-6 flex-shrink-0">
            <span className="text-5xl">🏆</span>
          </div>
          <div className="text-center md:text-left">
            <span className="text-xs font-display font-bold text-gold uppercase tracking-wider">Book of the Week</span>
            <h2 className="font-display text-xl font-extrabold mt-1 mb-2">{featured[0]?.title}</h2>
            <p className="text-muted-foreground text-sm mb-3">by {featured[0]?.author} — {featured[0]?.preview}</p>
            <Link to={`/book/${featured[0]?.id}`}>
              <Button size="sm" variant="warm" className="gap-1">Read Summary <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-xl md:text-2xl font-extrabold">Featured Books</h2>
          <Link to="/browse" className="text-sm text-primary hover:underline font-medium flex items-center gap-1">
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
      <section className="bg-cream/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-xl md:text-2xl font-extrabold text-center mb-8">Explore by Genre</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                to={`/browse?genre=${encodeURIComponent(cat.name)}`}
                className="bg-card border border-border rounded-xl p-4 text-center card-hover"
              >
                <span className="text-xl block mb-1.5">{cat.emoji}</span>
                <span className="font-display text-sm font-semibold">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-display text-xl md:text-2xl font-extrabold text-center mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {howItWorks.map((step) => (
            <div key={step.step} className="bg-card rounded-xl border border-border p-6 card-hover">
              <span className="font-display text-3xl font-extrabold text-primary/20 block mb-3">{step.step}</span>
              <h3 className="font-display text-base font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Summaries */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-xl md:text-2xl font-extrabold">Latest Summaries</h2>
          <Link to="/browse" className="text-sm text-primary hover:underline font-medium flex items-center gap-1">
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
      <section className="bg-cream/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-xl md:text-2xl font-extrabold mb-3">Reading Badges</h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">Read books, build streaks, and unlock {allBadges.length} badges across six categories.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {allBadges.slice(0, 8).map((badge) => (
              <div key={badge.id} className="bg-card border border-border rounded-lg p-3 w-24 card-hover">
                <span className="text-2xl block mb-1">{badge.emoji}</span>
                <span className="font-display text-[11px] font-bold block leading-tight">{badge.name}</span>
              </div>
            ))}
          </div>
          <Link to="/tracker" className="inline-block mt-6">
            <Button variant="outline" size="sm" className="gap-1.5">
              View All Badges <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Daily Challenge */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-cream to-sand/30 rounded-xl p-8 text-center border border-border warm-glow">
          <h2 className="font-display text-xl font-extrabold mb-2">Daily Reading Challenge</h2>
          <p className="text-muted-foreground text-sm mb-4">Read one summary a day to build your streak and unlock new badges.</p>
          <Link to="/browse">
            <Button size="default" variant="warm" className="gap-2">
              Start Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="font-display text-xl md:text-2xl font-extrabold text-center mb-8">What Readers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-6 card-hover">
              <p className="text-sm text-muted-foreground italic mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-xs text-primary">
                  {t.initials}
                </div>
                <span className="font-display text-sm font-semibold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
