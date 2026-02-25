export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: "Press Release" | "Event" | "Announcement";
  image: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Kama Automotive Launches EV-100 Electric Commercial Vehicle in Pakistan",
    excerpt: "Pakistan's first locally distributed electric commercial vehicle is now available for fleet operators across Punjab, marking a major step towards sustainable logistics.",
    date: "2026-02-10",
    category: "Press Release",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
  },
  {
    id: "2",
    title: "Kama Expands Dealer Network to 6 Cities Across Pakistan",
    excerpt: "With new dealerships in Multan and Peshawar, Kama now operates authorized sales and service centers in all major commercial hubs.",
    date: "2026-01-25",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=80",
  },
  {
    id: "3",
    title: "Kama Participates in Pakistan Auto Show 2026",
    excerpt: "Our full lineup of commercial vehicles was showcased at the Pakistan International Auto Show, attracting significant interest from fleet buyers and logistics companies.",
    date: "2026-01-15",
    category: "Event",
    image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?w=600&q=80",
  },
];
