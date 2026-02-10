import { motion } from "framer-motion";
import { ExternalLink, Brain, Server, Wallet } from "lucide-react";

const projects = [
  {
    icon: Server,
    title: "Tech Event Management System",
    description:
      "Full-stack web application for managing tech events and registrations with a React frontend, Node/Express backend, and MySQL database.",
    tech: ["React", "Node.js", "Express", "MySQL", "REST APIs"],
    tag: "Full-Stack",
  },
  {
    icon: Wallet,
    title: "Expense Tracker Pro",
    description:
      "MERN stack application with JWT authentication, secure login, CRUD operations, real-time balance updates, and filtering.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
    tag: "MERN",
  },
  {
    icon: Brain,
    title: "Behavioral Cloning for Self-Driving Cars",
    description:
      "CNN model using TensorFlow/Keras and OpenCV for image preprocessing, trained using the Udacity simulator for autonomous driving.",
    tech: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN"],
    tag: "AI Project",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-gradient rounded-xl p-6 md:p-8 border border-border/50 group hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <project.icon size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs border border-border/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
