import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "", favoriteBook: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for your message! We'll check it out soon 📖");
    setForm({ name: "", email: "", message: "", favoriteBook: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-2">💬 Get in Touch</h1>
      <p className="text-muted-foreground text-center mb-8">Got feedback, a book suggestion, or just want to say hi? We're all ears.</p>

      <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 space-y-4">
        <div>
          <label className="font-display text-sm font-bold block mb-1">Your Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary font-body"
            placeholder="What's your name?"
          />
        </div>
        <div>
          <label className="font-display text-sm font-bold block mb-1">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary font-body"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="font-display text-sm font-bold block mb-1">Message</label>
          <textarea
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary font-body resize-none"
            placeholder="Tell us what you think, suggest a book, or just say hi."
          />
        </div>
        <div>
          <label className="font-display text-sm font-bold block mb-1">Favorite Book (optional)</label>
          <input
            type="text"
            value={form.favoriteBook}
            onChange={(e) => setForm({ ...form, favoriteBook: e.target.value })}
            className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary font-body"
            placeholder="What's your all-time fave?"
          />
        </div>
        <Button type="submit" size="lg" className="w-full">Send Message 🚀</Button>
      </form>
    </div>
  );
};

export default ContactPage;
