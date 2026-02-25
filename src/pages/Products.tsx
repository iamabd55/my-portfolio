import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { vehicles, categories } from "@/data/vehicles";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("cat") || "All";
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [search, setSearch] = useState("");

  const filtered = vehicles.filter((v) => {
    const matchCat = activeCategory === "All" || v.category === activeCategory;
    const matchSearch = v.name.toLowerCase().includes(search.toLowerCase()) || v.series.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding pb-10">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Our Lineup</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Vehicle Catalog</h1>
            <p className="text-muted-foreground max-w-xl">
              Browse our full range of commercial vehicles — from light trucks and vans to buses and electric vehicles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-10 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {["All", ...categories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search models..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-4 md:px-8 pb-20">
        <div className="container mx-auto">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground text-center py-20">No vehicles found matching your criteria.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((v, i) => (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/products/${v.id}`}
                    className="block card-gradient rounded-xl border border-border/50 overflow-hidden group hover:border-primary/30 transition-colors"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={v.image}
                        alt={v.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] text-primary font-medium uppercase tracking-wider">{v.category}</span>
                        <span className="text-[11px] text-muted-foreground">· {v.series}</span>
                      </div>
                      <h3 className="font-heading font-semibold text-foreground text-lg">{v.name}</h3>
                      <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{v.tagline}</p>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex gap-3 text-xs text-muted-foreground">
                          <span>{v.specs.power}</span>
                          <span>·</span>
                          <span>{v.specs.payload} payload</span>
                        </div>
                        <ArrowRight size={16} className="text-primary" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
