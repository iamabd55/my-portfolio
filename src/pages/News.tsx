import { motion } from "framer-motion";
import { newsArticles } from "@/data/news";

const NewsPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Press Room</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">News & Updates</h1>
            <p className="text-muted-foreground max-w-xl mb-10">
              Stay updated with the latest announcements, press releases, and events from Kama Automotive International.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="card-gradient rounded-xl border border-border/50 overflow-hidden group hover:border-primary/30 transition-colors"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(article.date).toLocaleDateString("en-PK", { year: "numeric", month: "short", day: "numeric" })}
                    </span>
                  </div>
                  <h2 className="font-heading font-semibold text-foreground line-clamp-2">{article.title}</h2>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <button className="text-primary text-sm font-medium mt-3 hover:underline">Read More →</button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
