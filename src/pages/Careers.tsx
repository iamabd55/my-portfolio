import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { jobs } from "@/data/jobs";

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Join Us</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Careers at Kama</h1>
            <p className="text-muted-foreground max-w-xl mb-10">
              We're building the future of commercial transport in Pakistan. Join our growing team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job list */}
            <div className="lg:col-span-2 space-y-4">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`card-gradient rounded-xl p-6 border cursor-pointer transition-colors ${
                    selectedJob === job.id ? "border-primary/50" : "border-border/50 hover:border-primary/30"
                  }`}
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-heading font-semibold text-foreground">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1"><Briefcase size={14} />{job.department}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} />{job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={14} />{job.type}</span>
                      </div>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium flex-shrink-0">
                      {job.type}
                    </span>
                  </div>

                  {selectedJob === job.id && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-4 pt-4 border-t border-border/50">
                      <p className="text-muted-foreground text-sm mb-3">{job.description}</p>
                      <p className="text-foreground text-sm font-medium mb-2">Requirements:</p>
                      <ul className="space-y-1">
                        {job.requirements.map((r) => (
                          <li key={r} className="text-muted-foreground text-sm flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />{r}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Application form */}
            <div>
              <div className="card-gradient rounded-xl p-6 border border-border/50 sticky top-24">
                <h3 className="font-heading font-semibold text-foreground mb-4">Apply Now</h3>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <Input placeholder="Full Name" />
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" />
                  <div className="border border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors">
                    <Upload size={24} className="text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Upload CV (PDF, DOC)</p>
                  </div>
                  <Textarea placeholder="Cover letter or additional notes..." rows={3} />
                  <Button className="w-full font-heading font-semibold">Submit Application</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
