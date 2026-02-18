"use client";

import { motion } from "framer-motion";
import { Shield, GitBranch, BarChart3, Layers } from "lucide-react";

export default function AnalyticsGovernance() {
  const pillars = [
    {
      icon: Layers,
      title: "Semantic Modeling",
      description: "Enterprise-grade semantic models and single source of truth for consistent reporting across the organization.",
    },
    {
      icon: GitBranch,
      title: "CI/CD for Analytics",
      description: "Version-controlled datasets and automated deployment pipelines to ensure reliable, repeatable releases.",
    },
    {
      icon: Shield,
      title: "Governance & Standards",
      description: "Structured governance, validation tools, and standard enforcement for analytics quality and compliance.",
    },
    {
      icon: BarChart3,
      title: "Scalable Data Platforms",
      description: "Architecture and processes designed for growth, performance, and high-impact decision support.",
    },
  ];

  return (
    <section id="analytics-governance" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Analytics Engineering & <span className="text-primary">Governance</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            I focus on building scalable BI platforms with strong governance: semantic models, CI/CD automation, and analytics standards that power global decision-making.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 text-primary group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
