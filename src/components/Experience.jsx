"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative bg-zinc-900/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & <span className="text-primary">Education</span></h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto mt-2">
                        Enterprise BI, healthcare, and data platform roles across Brazil.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <GraduationCap className="text-primary" /> Education
                        </h3>
                        <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 py-2">
                            {DATA.education.map((edu, index) => (
                                <ExperienceItem
                                    key={index}
                                    title={edu.degree}
                                    subtitle={edu.institution}
                                    date={edu.year}
                                    description={edu.score ? `Score: ${edu.score}` : ""}
                                    delay={index * 0.1}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Work */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <Briefcase className="text-primary" /> Work Experience
                        </h3>
                        <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 py-2">
                            {DATA.experience.map((exp, index) => (
                                <ExperienceItem
                                    key={index}
                                    title={exp.role}
                                    subtitle={exp.company}
                                    subtitleContext={exp.companyContext}
                                    date={exp.period}
                                    description={exp.description}
                                    delay={index * 0.1}
                                    isCurrent={exp.current}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceItem({ title, subtitle, subtitleContext, date, description, delay, isCurrent }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="relative"
        >
            <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-zinc-900 border-2 border-primary" />
            <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors relative">
                {isCurrent && (
                    <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">
                        Current
                    </span>
                )}
                <span className="text-sm text-primary mb-2 block font-mono">{date}</span>
                <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
                <p className="text-zinc-400 text-sm mb-2">{subtitle}</p>
                {subtitleContext && <p className="text-zinc-500 text-xs mb-2 italic">{subtitleContext}</p>}
                <p className="text-zinc-500 text-sm leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}
