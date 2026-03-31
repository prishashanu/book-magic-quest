const AboutPage = () => (
  <div className="container mx-auto px-4 py-8 max-w-2xl">
    <div className="text-center mb-10">
      <span className="text-6xl block mb-4 animate-float">✨</span>
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">About Story Spark</h1>
    </div>

    <div className="space-y-6">
      <div className="bg-card rounded-2xl border border-border p-6">
        <h2 className="font-display text-lg font-semibold mb-2">🌟 What is Story Spark?</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Story Spark is a magical place for kids who love stories and want to discover books faster! 
          We write short, fun summaries of amazing books so you can find your next favorite read in just a few minutes.
        </p>
      </div>

      <div className="bg-card rounded-2xl border border-border p-6">
        <h2 className="font-display text-lg font-semibold mb-2">📚 Why We Made This</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We believe every kid deserves to find stories they love! Sometimes there are SO many books 
          that it's hard to choose. Story Spark helps you peek inside a book before you read it — 
          like having a friend who tells you about the best parts!
        </p>
      </div>

      <div className="bg-card rounded-2xl border border-border p-6">
        <h2 className="font-display text-lg font-semibold mb-2">🎯 Our Mission</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          To spark a love of reading in every kid! We want to make book discovery fun, easy, and exciting. 
          Whether you love dragons, mysteries, funny stories, or sports — there's something here for you!
        </p>
      </div>

      <div className="bg-gradient-to-r from-lavender/10 to-primary/10 rounded-2xl border border-border p-6 text-center">
        <span className="text-4xl block mb-3">🐉</span>
        <p className="font-display text-lg font-semibold mb-1">Meet Sparky!</p>
        <p className="text-sm text-muted-foreground">
          Sparky is our friendly dragon mascot who loves reading bedtime stories. 
          He guards our magical library and makes sure every book gets the love it deserves!
        </p>
      </div>
    </div>
  </div>
);

export default AboutPage;
