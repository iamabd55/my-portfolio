import { motion } from "framer-motion";
import { Building2, Handshake, Users, Globe } from "lucide-react";

const timeline = [
  { year: "2020", event: "Kama Automotive International founded in Pakistan" },
  { year: "2021", event: "Signed authorized partnership with Joylong Motors, China" },
  { year: "2023", event: "First 100 vehicles delivered across Punjab" },
  { year: "2024", event: "Expanded dealer network to 4 major cities" },
  { year: "2025", event: "Launched electric vehicle division with EV-100" },
  { year: "2026", event: "6 cities, 10+ models, 500+ vehicles delivered" },
];

const team = [
  { name: "Muhammad Zubair", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
  { name: "Sarah Ahmed", role: "COO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
  { name: "Ali Hassan", role: "Head of Sales", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" },
  { name: "Fatima Noor", role: "Marketing Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" },
];

const values = [
  { icon: Building2, title: "Reliability", desc: "Vehicles built for Pakistani roads and demanding commercial operations" },
  { icon: Handshake, title: "Trust", desc: "Transparent dealings with customers, dealers, and partners" },
  { icon: Users, title: "Service", desc: "After-sales support network across all major cities" },
  { icon: Globe, title: "Innovation", desc: "Bringing EV technology and modern logistics solutions to Pakistan" },
];

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">About Us</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              Driving Pakistan's Commercial Future
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Kama Automotive International (Pvt.) Ltd. is Pakistan's authorized distributor of Joylong Motors commercial vehicles. We bring world-class light trucks, vans, buses, and electric vehicles to the Pakistani market — backed by a growing national dealer and service network.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to modernize Pakistan's commercial fleet with reliable, efficient, and environmentally conscious vehicles. From last-mile delivery to intercity transport, Kama provides solutions that businesses trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Partnership</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Joylong Motors Partnership
            </h2>
            <div className="card-gradient rounded-xl p-8 border border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Joylong Motors, established in 2007, is one of China's leading commercial vehicle manufacturers with an annual production capacity of over 30,000 vehicles. Their range includes light trucks, passenger vans, buses, and new energy vehicles exported to 60+ countries.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As Joylong's authorized partner in Pakistan, Kama Automotive handles the full distribution chain — from import and customs clearance to sales, service, and spare parts supply across the country.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Our Values</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">What We Stand For</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-gradient rounded-xl p-6 border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">Company Timeline</h2>
          </motion.div>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <motion.div key={t.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 pb-8 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                </div>
                <div>
                  <p className="font-heading font-bold text-primary text-sm">{t.year}</p>
                  <p className="text-muted-foreground text-sm">{t.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Leadership</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10">Our Team</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-gradient rounded-xl border border-border/50 overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-heading font-semibold text-foreground">{m.name}</h3>
                  <p className="text-muted-foreground text-sm">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
