import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp, FiZap, FiAward } from "react-icons/fi";
import type { IconType } from "react-icons";

type ValueCard = {
  icon: IconType;
  stat: string;
  label: string;
  dark?: boolean;
};

const cards: ValueCard[] = [
  { icon: FiTarget, stat: "25+", label: "Clients Scaled" },
  { icon: FiTrendingUp, stat: "3x", label: "Average ROAS", dark: true },
  { icon: FiZap, stat: "14", label: "Days to First Results" },
  { icon: FiAward, stat: "₹50L+", label: "Revenue Generated" },
];

const steps = [
  { n: "01", title: "Understand Your Business", desc: "We analyze your goals, audience, and current setup to identify growth opportunities." },
  { n: "02", title: "Build a Growth Plan", desc: "A custom strategy tailored to your business goals and growth potential." },
  { n: "03", title: "Launch & Optimize Campaigns", desc: "We launch high-converting campaigns and continuously optimize for better results." },
  { n: "04", title: "Scale What Works", desc: "We double down on winning strategies to maximize growth and revenue." },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-[#ECF8F6] text-[#3B9787] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest w-fit inline-block mb-6">
              Who We Are
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-[#0F172A] leading-[1.1] tracking-tight mb-6">
              We Don't Just
              <br />
              Run Ads.
              <br />
              <span className="text-[#3B9787]">We Build Systems.</span>
            </h2>

            <div className="w-12 h-1 bg-[#3B9787] rounded-full mb-6" />

            <p className="text-base text-slate-500 leading-relaxed max-w-sm mb-8">
              Scaleahead helps businesses generate consistent leads and grow revenue through
              data-driven advertising. We focus on one thing building growth systems that deliver
              predictable, scalable results.
            </p>

            <div className="flex items-center gap-4 mt-2">
              <div className="flex -space-x-2">
                <div className="w-9 h-9 rounded-full border-2 border-white bg-[#3B9787] flex items-center justify-center text-white text-xs font-bold">
                  R
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white bg-[#45BAA5] flex items-center justify-center text-white text-xs font-bold">
                  P
                </div>
                <div className="w-9 h-9 rounded-full border-2 border-white bg-[#2E7D6F] flex items-center justify-center text-white text-xs font-bold">
                  A
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-[#0F172A]">
                  Built by a team obsessed with results
                </p>
                <p className="text-xs text-slate-400">25+ businesses scaled</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                  className={`group h-full rounded-2xl p-6 border border-slate-100 transition-all duration-300 hover:border-[#A9DFD5] hover:shadow-lg hover:-translate-y-1 ${
                    c.dark ? "bg-[#0F172A] hover:bg-[#1E293B]" : "bg-[#F8FFFE]"
                  }`}
                >
                  <Icon
                    className={`text-2xl mb-4 ${c.dark ? "text-[#45BAA5]" : "text-[#3B9787]"}`}
                  />
                  <div
                    className={`text-3xl font-black ${c.dark ? "text-white" : "text-[#0F172A]"}`}
                  >
                    {c.stat}
                  </div>
                  <div
                    className={`text-xs font-medium mt-1 ${
                      c.dark ? "text-[#45BAA5]" : "text-slate-400"
                    }`}
                  >
                    {c.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* APPROACH */}
        <div className="mt-20">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest text-center mb-10">
            Our Approach
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
                className="text-center relative"
              >
                {i < 3 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute right-0 top-8 w-full h-px bg-[#3B9787]/20"
                  />
                )}
                <div className="text-6xl font-black text-[#3B9787]/20 leading-none mb-2">{s.n}</div>
                <h3 className="text-sm font-bold text-[#0F172A] mb-1">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
