import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { vehicles } from "@/data/vehicles";

const ProductDetail = () => {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return (
      <div className="pt-32 text-center">
        <h1 className="font-heading text-2xl font-bold text-foreground">Vehicle not found</h1>
        <Link to="/products" className="text-primary mt-4 inline-block">← Back to catalog</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-6">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <ChevronRight size={14} />
          <span className="text-foreground">{vehicle.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="section-padding pb-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-[4/3] rounded-xl overflow-hidden border border-border/50"
            >
              <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-primary font-heading text-sm font-semibold uppercase tracking-widest">
                {vehicle.category} · {vehicle.series}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-3">
                {vehicle.name}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">{vehicle.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(vehicle.specs).map(([key, value]) => (
                  <div key={key} className="bg-secondary/50 rounded-lg p-3">
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider">{key}</p>
                    <p className="text-foreground font-medium text-sm mt-0.5">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <p className="font-heading font-semibold text-foreground text-sm mb-2">Key Features</p>
                <div className="flex flex-wrap gap-2">
                  {vehicle.features.map((f) => (
                    <span key={f} className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs border border-border/30">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="font-heading font-semibold">
                  <Download size={16} /> Download Brochure
                </Button>
                <Button variant="outline" asChild className="font-heading font-semibold">
                  <a href="#inquiry">Inquire About This Vehicle</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="section-padding bg-secondary/30">
        <div className="container mx-auto max-w-xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Inquire About {vehicle.name}
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Fill out the form below and our sales team will get back to you within 24 hours.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name" />
                <Input placeholder="Phone Number" />
              </div>
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Company / Fleet Name (optional)" />
              <Textarea placeholder="Your message or specific requirements..." rows={4} />
              <Button className="w-full font-heading font-semibold">Submit Inquiry</Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
