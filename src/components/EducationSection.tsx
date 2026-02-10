import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    degree: "BS Computer Science",
    institution: "COMSATS University Lahore",
    detail: "CGPA: 3.83",
    year: "2024 – Present",
  },
  {
    icon: GraduationCap,
    degree: "Intermediate in Computer Science (ICS)",
    institution: "Superior College Lahore",
    detail: "Grade A+ (950/1100)",
    year: "Completed",
  },
];

const certifications = [
  "NodeJS Masterclass (Express, MongoDB, OpenAI)",
  "PHP & MySQL for Web Applications",
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="space-y-5 mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-gradient rounded-xl p-6 border border-border/50 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                <edu.icon size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground text-sm">{edu.institution}</p>
                <p className="text-primary text-sm font-medium mt-1">
                  {edu.detail} · {edu.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Award size={20} className="text-primary" />
            Certifications
          </h3>
          <div className="space-y-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="pl-4 border-l-2 border-primary/40 text-muted-foreground text-sm py-1"
              >
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
