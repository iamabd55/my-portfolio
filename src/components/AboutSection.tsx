import { motion } from "framer-motion";
import { GraduationCap, Zap, Globe } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "CGPA 3.83", desc: "COMSATS University" },
  { icon: Zap, label: "Full-Stack", desc: "MERN Expertise" },
  { icon: Globe, label: "Problem Solver", desc: "DSA & OOP" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-8" />

          <p className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
            I'm a Computer Science student at COMSATS University Lahore with a strong passion for
            full-stack web development, problem solving, and emerging technologies. I specialize in
            the MERN stack, building performant REST APIs, and crafting intuitive user interfaces.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10 text-base md:text-lg">
            With a solid foundation in Java, Python, and C++, along with experience in databases,
            JWT authentication, and basic AI/ML, I'm always eager to learn and take on new challenges.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-gradient rounded-xl p-5 border border-border/50 text-center"
              >
                <item.icon size={28} className="text-primary mx-auto mb-3" />
                <p className="font-heading font-semibold text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
