"use client";

import { motion } from "framer-motion";
import { DATA } from "@/lib/data";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="flex flex-wrap gap-2">
                        <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-primary">
                            👋 Welcome
                        </span>
                        {DATA.hero?.openToWork && (
                            <span className="inline-block px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
                                Open to opportunities
                            </span>
                        )}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        Hi, I&apos;m <br />
                        <span className="text-[#ffbf46] inline-block hover:scale-105 transition-transform duration-300 cursor-default">
                            {DATA.name}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-medium text-zinc-300 max-w-xl">
                        {DATA.hero?.headline || DATA.title}
                    </p>

                    <p className="text-lg text-zinc-400 max-w-lg leading-relaxed">
                        {DATA.about}
                    </p>

                    {DATA.hero?.languages?.length > 0 && (
                        <p className="text-sm text-zinc-500 flex flex-wrap gap-x-3 gap-y-1">
                            <span className="font-medium text-zinc-400">Languages:</span>
                            {DATA.hero.languages.join(" · ")}
                        </p>
                    )}

                    <div className="flex items-center gap-4 pt-4">
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-primary text-black font-semibold rounded-full hover:bg-orange-500 transition-colors flex items-center gap-2 group"
                        >
                            Contact Me
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex gap-3">
                            {DATA.social.github && (
                            <a
                                href={DATA.social.github}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 border border-white/10 rounded-full hover:bg-white/5 hover:text-white hover:border-white/20 transition-all text-zinc-400"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            )}
                            <a
                                href={DATA.social.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="p-3 border border-white/10 rounded-full hover:bg-white/5 hover:text-white hover:border-white/20 transition-all text-zinc-400"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#contact"
                                className="px-3 border border-white/10 rounded-full hover:bg-white/5 hover:text-white hover:border-white/20 transition-all text-zinc-400"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right side - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative block"
                >
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-teal-500/10 rounded-full blur-2xl opacity-50" />
                        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-white/10 hover:border-primary/50 transition-colors mx-auto duration-500">
                            <Image
                                src="/profile.jpg"
                                alt={DATA.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
