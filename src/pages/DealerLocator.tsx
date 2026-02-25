import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { dealers, provinces } from "@/data/dealers";

const DealerLocator = () => {
  const [selectedProvince, setSelectedProvince] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const filtered = dealers.filter((d) => {
    const matchProvince = selectedProvince === "All" || d.province === selectedProvince;
    const matchType = selectedType === "All" || d.type.includes(selectedType);
    return matchProvince && matchType;
  });

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Find Us</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Dealer & Service Locator</h1>
            <p className="text-muted-foreground max-w-xl mb-10">
              Find your nearest authorized Kama dealership or service center. We operate across all major commercial hubs in Pakistan.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-8">
            <select
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2 text-sm border border-border/50"
            >
              <option value="All">All Provinces</option>
              {provinces.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2 text-sm border border-border/50"
            >
              <option value="All">All Types</option>
              <option value="Dealer">Dealers</option>
              <option value="Service">Service Centers</option>
            </select>
          </div>

          {/* Map placeholder + list */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="aspect-[4/3] rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-primary mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">Interactive Google Map</p>
                <p className="text-muted-foreground text-xs mt-1">Will be integrated with Google Maps API</p>
              </div>
            </div>

            {/* Dealer cards */}
            <div className="space-y-4">
              {filtered.length === 0 ? (
                <p className="text-muted-foreground">No dealers found in this area.</p>
              ) : (
                filtered.map((d, i) => (
                  <motion.div
                    key={d.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="card-gradient rounded-xl p-5 border border-border/50"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-heading font-semibold text-foreground">{d.name}</h3>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                          {d.type}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2"><MapPin size={14} className="text-primary flex-shrink-0" />{d.address}</p>
                      <p className="flex items-center gap-2"><Phone size={14} className="text-primary flex-shrink-0" />{d.phone}</p>
                      <p className="flex items-center gap-2"><Clock size={14} className="text-primary flex-shrink-0" />Mon–Sat: 9 AM – 6 PM</p>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DealerLocator;
