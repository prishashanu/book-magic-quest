export interface Book {
  id: string;
  title: string;
  author: string;
  series: string;
  genre: string;
  ageRange: string;
  coverColor: string;
  coverEmoji: string;
  rating: number;
  summary: { label: string; text: string }[];
  characters: string[];
  themes: string[];
  whyYouMightLikeIt: string;
  readTime: string;
  popular?: boolean;
  featured?: boolean;
  newest?: boolean;
}
