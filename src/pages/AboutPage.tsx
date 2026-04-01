import mascot from "@/assets/mascot.png";

const AboutPage = () => (
  <div className="container mx-auto px-4 py-8 max-w-2xl">
    <div className="text-center mb-10">
      <img src={mascot} alt="Page Peek" className="h-20 mx-auto mb-4 drop-shadow-md" loading="lazy" width={80} height={80} />
      <h1 className="font-display text-2xl md:text-3xl font-extrabold mb-2">About Page Peek</h1>
      <p className="text-sm text-muted-foreground">A cozy corner of the internet for readers who love books.</p>
    </div>

    <div className="space-y-5">
      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="font-display text-base font-bold mb-2">What is Page Peek?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Page Peek is a place where you can read quick, well-written summaries of great books.
          We cover the plot, main characters, themes, and what makes each book worth reading —
          all in just a few minutes. Think of it as peeking inside a book before you commit.
        </p>
      </div>

      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="font-display text-base font-bold mb-2">Why we built this</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          There are so many books out there, and it can be hard to know what's worth your time.
          Page Peek helps you make that call. We write honest, spoiler-free summaries so you can
          discover stories you'll actually enjoy — whether you're into fantasy, mystery, sports, or graphic novels.
        </p>
      </div>

      <div className="bg-card rounded-xl border border-border p-6">
        <h2 className="font-display text-base font-bold mb-2">Our mission</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          To make book discovery easier and more enjoyable. We believe every reader deserves to
          find stories that resonate with them — and that a great summary can be the spark
          that leads to a great reading experience.
        </p>
      </div>

      <div className="bg-cream/60 rounded-xl border border-border p-6 flex items-start gap-4">
        <img src={mascot} alt="Paige" className="h-16 w-16 rounded-lg flex-shrink-0" loading="lazy" width={64} height={64} />
        <div>
          <p className="font-display text-base font-bold mb-1">Meet Paige</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Our golden retriever mascot and unofficial chief reading officer. Paige has read every
            summary on this site (at least twice) and is always happy to help you find your next favorite book.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
