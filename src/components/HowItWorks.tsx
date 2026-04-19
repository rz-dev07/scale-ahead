import { motion } from "framer-motion";
import { FiPhoneCall, FiLayout, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import type { IconType } from "react-icons";

type Step = {
  number: string;
  pill: string;
  icon: IconType;
  title: string;
  desc: string;
  bottom: string;
};

const steps: Step[] = [
  {
    number: "01",
    pill: "Step 01",
    icon: FiPhoneCall,
    title: "Book a Free Call",
    desc: "Schedule a free 30-minute strategy session. We learn about your business, goals, and current challenges before anything else.",
    bottom: "Takes less than 2 minutes to book",
  },
  {
    number: "02",
    pill: "Step 02",
    icon: FiLayout,
    title: "We Build Your Strategy",
    desc: "We audit your existing marketing, research your competitors, and craft a custom growth plan tailored to your business and budget.",
    bottom: "Custom plan delivered in 48 hours",
  },
  {
    number: "03",
    pill: "Step 03",
    icon: FiTrendingUp,
    title: "We Launch & Scale",
    desc: "We execute the strategy, run your campaigns, optimise weekly based on data, and scale aggressively what's working.",
    bottom: "Results typically within 30 days",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="bg-[#ECF8F6] text-[#3B9787] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest w-fit mx-auto mb-4 inline-block">
            The Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            Simple Steps. Real Results.
          </h2>
          <p className="text-base text-slate-400 mt-3 mb-16">
            From first call to measurable growth — here's how we work.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{
              top: "56px",
              left: "calc(16.67% + 32px)",
              right: "calc(16.67% + 32px)",
              height: "1px",
              background: "linear-gradient(to right, #A9DFD5 0%, #3B9787 50%, #A9DFD5 100%)",
              transformOrigin: "left",
            }}
            className="hidden md:block absolute z-0 pointer-events-none"
          />

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * (i + 1) }}
                className="group relative z-10 bg-white border border-slate-100 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#A9DFD5] hover:shadow-[0_24px_48px_rgba(59,151,135,0.10)]"
              >
                <span
                  aria-hidden
                  style={{ letterSpacing: "-4px", lineHeight: 1 }}
                  className="pointer-events-none select-none absolute -top-4 -right-2 text-[8rem] font-black text-[#ECF8F6] group-hover:text-[#CBECE6] transition-colors duration-300 z-0"
                >
                  {s.number}
                </span>

                <div className="relative z-10">
                  <span className="bg-[#ECF8F6] text-[#3B9787] text-xs font-bold px-3 py-1 rounded-full w-fit inline-block mb-6">
                    {s.pill}
                  </span>

                  <div className="w-14 h-14 rounded-2xl bg-[#ECF8F6] flex items-center justify-center mb-5 group-hover:bg-[#3B9787] transition-all duration-300">
                    <Icon
                      size={24}
                      className="text-[#3B9787] group-hover:text-white transition-colors duration-300"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>

                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3B9787]" />
                    <span className="text-xs text-slate-400 font-medium">{s.bottom}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: "linear-gradient(135deg, #3B9787 0%, #2E7D6F 100%)",
          }}
          className="mt-16 rounded-2xl px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Ready to get started?</h3>
            <p className="text-sm text-[#CBECE6] mt-1">
              Book your free call today — no commitment, no pressure.
            </p>
          </div>
          <motion.a
            href="/#book-call"
            whileHover={{ scale: 1.03 }}
            className="bg-white text-[#3B9787] font-bold px-7 py-3.5 rounded-full hover:bg-[#ECF8F6] transition inline-flex items-center gap-2"
          >
            Book Free Consultation
            <FiArrowRight />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
