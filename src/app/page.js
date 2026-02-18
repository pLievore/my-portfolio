import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnalyticsGovernance from "@/components/AnalyticsGovernance";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { DATA } from "@/lib/data";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <AnalyticsGovernance />
      <Skills />
      <Experience />
      <Certifications />
      <Projects />
      <Contact />

      <footer className="py-10 text-center border-t border-white/10">
        <p className="text-zinc-400 text-sm">
          BI, Analytics Engineering & Data Platform · São Paulo, Brazil
        </p>
        <p suppressHydrationWarning className="mt-2 text-zinc-500 text-sm">
          © {new Date().getFullYear()} Paulo Lievore Leoni. All rights reserved.
        </p>
        {DATA.social?.linkedin && (
          <div className="mt-4 flex justify-center gap-6">
            <a
              href={DATA.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline text-sm font-medium"
            >
              LinkedIn
            </a>
          </div>
        )}
        <p className="mt-4 text-zinc-600 text-xs">Built with Next.js & Tailwind CSS</p>
      </footer>
    </main>
  );
}
