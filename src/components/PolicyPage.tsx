import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface PolicySection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

interface PolicyPageProps {
  badge: string;
  title: string;
  lastUpdated: string;
  sections: PolicySection[];
}

export default function PolicyPage({ badge, title, lastUpdated, sections }: PolicyPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <div className="min-h-screen bg-white pt-24">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#ECF8F6] text-[#3B9787] text-xs font-bold uppercase tracking-widest mb-5">
            {badge}
          </span>
          <h1 className="text-4xl font-bold text-[#0F172A]">{title}</h1>
          <p className="text-sm text-slate-400 mt-2 mb-12">Last updated: {lastUpdated}</p>
          <div className="w-full h-px bg-slate-100 mb-12" />
        </motion.div>

        {sections.map((section, i) => (
          <motion.section
            key={section.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <h2 className="text-lg font-bold text-[#0F172A] mb-3 mt-10">
              {i + 1}. {section.heading}
            </h2>
            {section.paragraphs?.map((p, idx) => (
              <p key={idx} className="text-sm text-slate-500 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {section.list && (
              <ul className="list-disc ml-5 text-sm text-slate-500 leading-relaxed space-y-2">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </motion.section>
        ))}
      </main>
      <Footer />
    </div>
  );
}
