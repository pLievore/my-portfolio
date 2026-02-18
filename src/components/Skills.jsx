"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";

export default function Skills() {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        What I bring to your team: enterprise BI tools, semantic modeling, data engineering, and analytics governance.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <SkillCard title="BI & Semantic Modeling" skills={DATA.skills.biModeling} delay={0} />
                    <SkillCard title="Data Engineering" skills={DATA.skills.dataEngineering} delay={0.1} />
                    <SkillCard title="DevOps & Governance" skills={DATA.skills.devopsGovernance} delay={0.2} />
                    <SkillCard title="Tools & Platforms" skills={DATA.skills.tools} delay={0.3} />
                </div>
            </div>
        </section>
    );
}

function SkillCard({ title, skills, delay }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:border-primary/50 transition-colors group"
        >
            <h3 className="text-xl font-semibold mb-6 text-white group-hover:text-primary transition-colors">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium text-zinc-300 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
