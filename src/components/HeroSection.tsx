import { motion } from "framer-motion";
import { ArrowDown, Download, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(222_25%_18%/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(222_25%_18%/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(199_89%_48%/0.08)_0%,transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 text-sm text-muted-foreground mb-8"
          >
            <Code2 size={14} className="text-primary" />
            Available for opportunities
          </motion.div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Abdul Rehman
            <span className="text-gradient"> Ali</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-3 font-body">
            Computer Science Student · MERN Stack Developer
          </p>

          <p className="text-base text-muted-foreground/70 max-w-xl mx-auto mb-10 font-body leading-relaxed">
            Building scalable, modern web applications with clean code and great UX.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity glow"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="/Abdul_Rehman_Ali_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-secondary/50 text-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-muted-foreground/40" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
