import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:arehmanali000@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <span className="text-sm">arehmanali000@gmail.com</span>
              </a>
              <a
                href="https://github.com/iamabd55"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github size={18} className="text-primary" />
                </div>
                <span className="text-sm">github.com/iamabd55</span>
              </a>
              <a
                href="https://linkedin.com/in/iamabd55"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <span className="text-sm">linkedin.com/in/iamabd55</span>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
