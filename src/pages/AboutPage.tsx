import mascot from "@/assets/mascot.png";

const AboutPage = () => (
  <div className="container mx-auto px-4 py-8 max-w-2xl">
    <div className="text-center mb-10">
      <img src={mascot} alt="Page Peek mascot" className="h-24 mx-auto mb-4 drop-shadow-md" loading="lazy" width={96} height={96} />
      <h1 className="font-display text-3xl md:text-4xl font-extrabold mb-4">About Page Peek</h1>
    </div>

    <div className="space-y-6">
      <div className="bg-card rounded-2xl border border-border p-6">
        <h2 className="font-display text-lg font-bold mb-2">📖 What is Page Peek?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Page Peek is your go-to spot for quick, fun book summaries. We help readers ages 8–15 
          discover amazing books in just a few minutes — like peeking inside a book before you commit to reading it.
        </p>
      </div>

      <div className="bg-card rounded-2xl border border-border p-6">
        <h2 className="font-display text-lg font-bold mb-2">🎯 Why We Built This</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          With so many books out there, it's hard to know what to read next. Page Peek gives you 
          the inside scoop on each book — the plot, characters, and what makes it worth reading — 
          so you can find stories you'll actually love.
        </p>
      </div>

      <div className="bg-card rounded-2xl border border-border p-6">
        <h2 className="font-display text-lg font-bold mb-2">🚀 Our Mission</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          To make book discovery fun and easy. Whether you're into fantasy, mysteries, sports, or 
          graphic novels — we've got summaries that help you decide what to read next.
        </p>
      </div>

      <div className="bg-gradient-to-r from-lavender/10 to-primary/10 rounded-2xl border border-border p-6 text-center">
        <img src={mascot} alt="Paige the mascot" className="h-20 mx-auto mb-3 drop-shadow-sm" loading="lazy" width={80} height={80} />
        <p className="font-display text-lg font-bold mb-1">Meet Paige! 🐾</p>
        <p className="text-sm text-muted-foreground">
          Paige is our golden retriever mascot who's always got her nose in a good book.
          She's read every summary on this site (and probably a few extra). She's here to 
          help you find your next great read!
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
