"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { Award } from "lucide-react";

export default function Certifications() {
  const certs = DATA.certifications || [];

  if (certs.length === 0) return null;

  return (
    <section id="certifications" className="py-20 relative bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-primary">Training</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Formal credentials in BI, data, and analytics to support enterprise delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {certs.map((cert, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-white/5 text-zinc-300 text-sm hover:border-primary/30 hover:text-white transition-colors"
            >
              <Award className="w-4 h-4 text-primary shrink-0" />
              {cert}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
