import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "Responsive Design", "UI/UX Basics"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQL Server"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "Java", "Python", "C++"],
  },
  {
    title: "Tools & Concepts",
    skills: ["Git", "GitHub", "VS Code", "Postman", "OOP", "DSA"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-gradient rounded-xl p-6 border border-border/50"
            >
              <h3 className="font-heading text-lg font-semibold text-foreground mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium border border-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
