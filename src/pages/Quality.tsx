import { motion } from "framer-motion";
import { Shield, Award, CheckCircle, FileCheck } from "lucide-react";

const standards = [
  { icon: Shield, title: "Euro II Emission Compliance", desc: "All vehicles meet Euro II emission standards, ensuring cleaner operations and regulatory compliance across Pakistan." },
  { icon: Award, title: "ISO 9001 Manufacturing", desc: "Joylong Motors' production facilities are ISO 9001 certified, guaranteeing consistent quality in every vehicle produced." },
  { icon: FileCheck, title: "CKD & CBU Import Standards", desc: "All imports comply with Pakistani customs and automotive regulations, with proper documentation and type-approval." },
  { icon: CheckCircle, title: "Pre-Delivery Inspection", desc: "Every vehicle undergoes a comprehensive multi-point inspection before delivery to ensure perfect condition." },
];

const certifications = [
  "Euro II Emission Standard Compliance",
  "ISO 9001:2015 Quality Management (Manufacturing)",
  "Pakistan Engineering Development Board (EDB) Approved",
  "DOT-Compliant Safety Glass",
  "OEM-Grade Steel Body Construction",
  "Factory Fire Safety Systems",
];

const QualityPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-primary font-heading text-sm font-semibold uppercase tracking-widest mb-2">Standards</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">Quality & Compliance</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Kama Automotive, quality is non-negotiable. Every vehicle in our lineup meets international manufacturing and emission standards, ensuring safety, durability, and compliance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30 pt-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {standards.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-gradient rounded-xl p-6 border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Certifications & Approvals</h2>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div key={c} className="flex items-center gap-3 text-sm">
                  <CheckCircle size={16} className="text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{c}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default QualityPage;
