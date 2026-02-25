import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { vehicles } from "@/data/vehicles";
import { newsArticles } from "@/data/news";

const stats = [
  { value: "6+", label: "Cities Covered" },
  { value: "10+", label: "Vehicle Models" },
  { value: "500+", label: "Vehicles Delivered" },
  { value: "6", label: "Authorized Dealers" },
];

const strengths = [
  { icon: Truck, title: "Full Vehicle Range", desc: "Light trucks, vans, buses, EVs, and special-purpose vehicles" },
  { icon: Shield, title: "Euro II Compliant", desc: "All vehicles meet international emission and safety standards" },
  { icon: MapPin, title: "Nationwide Network", desc: "Authorized dealers and service centers across Pakistan" },
  { icon: Zap, title: "EV Ready", desc: "Pakistan's first locally distributed electric commercial vehicles" },
];

const testimonials = [
  { name: "Ahmed Khan", role: "Fleet Manager, FastCargo Pvt Ltd", text: "Kama's trucks have been incredibly reliable for our last-mile delivery operations. Great after-sales support." },
  { name: "Saima Raza", role: "Operations Director, EduTrans", text: "We switched our school transport fleet to Joylong vans through Kama. The ride quality and fuel efficiency are outstanding." },
  { name: "Bilal Hussain", role: "CEO, GreenLogistics", text: "The EV-100 has cut our fuel costs by 60%. Kama is leading the EV revolution for commercial vehicles in Pakistan." },
];

const HomePage = () => {
  const featuredVehicles = vehicles.filter((v) => v.featured).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-4">
                Authorized Joylong Motors Partner — Pakistan
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
                Powering Pakistan's{" "}
                <span className="text-gradient">Commercial</span>{" "}
                Fleet
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
                Light trucks, vans, buses, and electric vehicles — built for performance, delivered with trust. Discover the full Kama lineup.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="font-heading font-semibold">
                  <Link to="/products">
                    Explore Vehicles <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="font-heading font-semibold">
                  <Link to="/dealers">Find a Dealer</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-heading text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
                <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Our Lineup</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
              Featured Vehicles
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
                    <span className="text-[11px] text-primary font-medium uppercase tracking-wider">
                      {v.category}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground text-lg mt-1">{v.name}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{v.tagline}</p>
                    <div className="flex items-center gap-1 mt-3 text-primary text-sm font-medium">
                      View Details <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild className="font-heading font-semibold">
              <Link to="/products">View All Vehicles <ArrowRight size={16} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Why Kama</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
              Built for Business
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-gradient rounded-xl p-6 border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">
              What Our Clients Say
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-gradient rounded-xl p-6 border border-border/50"
              >
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Stay Updated</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">Latest News</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsArticles.map((article, i) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-gradient rounded-xl border border-border/50 overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <span className="text-[11px] text-primary font-medium uppercase tracking-wider">{article.category}</span>
                  <h3 className="font-heading font-semibold text-foreground mt-1 line-clamp-2">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{article.excerpt}</p>
                  <p className="text-muted-foreground text-xs mt-3">{new Date(article.date).toLocaleDateString("en-PK", { year: "numeric", month: "long", day: "numeric" })}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-gradient rounded-2xl border border-border/50 p-10 md:p-16 text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Find Your Next Vehicle?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Contact us today for pricing, specs, or to schedule a test drive at your nearest Kama dealership.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild className="font-heading font-semibold">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-heading font-semibold">
                <Link to="/dealers">Locate a Dealer</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
