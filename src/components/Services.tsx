import { motion } from "framer-motion";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FiCode, FiBriefcase, FiTrendingUp, FiInstagram, FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";

type Service = {
  icon: IconType;
  tag: string;
  title: string;
  desc: string;
  features: string[];
  span: string;
  bg: string;
};

const services: Service[] = [
  {
    icon: FaFacebook,
    tag: "Paid Social",
    title: "Meta Ads",
    desc: "High-converting Facebook & Instagram campaigns built around your audience. We handle creatives, targeting, and daily optimisation so you get consistent leads.",
    features: ["Facebook", "Instagram", "Retargeting"],
    span: "lg:col-span-3",
    bg: "bg-[#F8FFFE]",
  },
  {
    icon: FaGoogle,
    tag: "Paid Search",
    title: "Google Ads",
    desc: "Capture buyers actively searching for your product. Smart bidding, keyword strategy, and conversion-focused landing pages.",
    features: ["Search", "Display"],
    span: "lg:col-span-2",
    bg: "bg-white",
  },
  {
    icon: FiCode,
    tag: "Web",
    title: "Website Development",
    desc: "Fast, modern, mobile-ready websites built to convert visitors into leads — not just look good.",
    features: ["Landing Pages", "SEO Ready"],
    span: "lg:col-span-2",
    bg: "bg-[#F8FFFE]",
  },
  {
    icon: FiBriefcase,
    tag: "Growth",
    title: "Lead Generation",
    desc: "Consistent, qualified leads delivered straight to your pipeline. We combine paid ads, landing pages, and follow-up automations to fill your calendar.",
    features: ["Qualified Leads", "Automation", "CRM"],
    span: "lg:col-span-3",
    bg: "bg-white",
  },
  {
    icon: FiTrendingUp,
    tag: "Organic",
    title: "SEO",
    desc: "Rank higher on Google and drive free, long-term traffic that compounds over time.",
    features: ["On-Page", "Link Building"],
    span: "lg:col-span-2",
    bg: "bg-[#F8FFFE]",
  },
  {
    icon: FiInstagram,
    tag: "Social",
    title: "Social Media Management",
    desc: "Consistent posting, engaging content, and community management that builds trust and converts followers into buyers.",
    features: ["Content", "Engagement"],
    span: "lg:col-span-2",
    bg: "bg-white",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="bg-[#ECF8F6] text-[#3B9787] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest w-fit mx-auto mb-4 inline-block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            Everything You Need to Grow
          </h2>
          <p className="text-base text-slate-400 mt-3 mb-14">
            Six performance-driven services, one focused team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-2xl p-8 border border-slate-100 ${s.bg} ${s.span} flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#A9DFD5] hover:shadow-[0_20px_48px_rgba(59,151,135,0.10)]`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#ECF8F6] opacity-60"
                />

                <div className="relative flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#ECF8F6] flex items-center justify-center">
                    <Icon className="text-[#3B9787]" size={22} />
                  </div>
                  <span className="bg-[#F1F5F9] text-slate-400 text-xs px-3 py-1 rounded-full font-medium">
                    {s.tag}
                  </span>
                </div>

                <h3 className="relative text-xl font-bold text-[#0F172A] mb-2">{s.title}</h3>
                <p className="relative text-sm text-slate-500 leading-relaxed mb-6">{s.desc}</p>

                <div className="relative mt-auto flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {s.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs text-[#3B9787] bg-[#ECF8F6] px-2.5 py-1 rounded-full font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <FiArrowUpRight
                    className="text-slate-300 text-lg group-hover:text-[#3B9787] transition-colors"
                    size={20}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
