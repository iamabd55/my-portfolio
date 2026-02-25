import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+92 42 1234567", href: "tel:+92421234567" },
  { icon: Mail, label: "Email", value: "info@kamaautomotive.pk", href: "mailto:info@kamaautomotive.pk" },
  { icon: MessageCircle, label: "WhatsApp", value: "+92 300 1234567", href: "https://wa.me/923001234567" },
  { icon: MapPin, label: "Head Office", value: "Main Boulevard, Gulberg III, Lahore, Pakistan", href: "#" },
  { icon: Clock, label: "Business Hours", value: "Mon–Sat: 9:00 AM – 6:00 PM", href: "#" },
];

const ContactPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Get in Touch</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-xl mb-10">
              Have questions about our vehicles, need a quote, or want to become a dealer? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Send us a message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Phone Number" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your message..." rows={5} />
                <Button className="font-heading font-semibold">Send Message</Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-5">
                {contactInfo.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-start gap-4 group"
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <c.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium text-sm">{c.label}</p>
                      <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-video rounded-xl bg-secondary/50 border border-border/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-primary mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Google Maps Embed</p>
                  <p className="text-muted-foreground text-xs mt-1">Gulberg III, Lahore</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
