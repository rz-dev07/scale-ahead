import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Scaleahead transformed our lead flow completely. We went from 20 to 180 leads in 60 days.",
    name: "Rahul Mehta",
    role: "Real Estate Developer",
  },
  {
    quote: "Our ROAS jumped from 1.8x to 4.5x in 45 days. Extremely sharp execution.",
    name: "Priya Sharma",
    role: "E-commerce Brand Owner",
  },
  {
    quote: "90+ patient inquiries in the first month. Best marketing decision we made.",
    name: "Dr. Ankit Verma",
    role: "Healthcare Clinic",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  // carousel logic — wrap-around index helpers
  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total]);

  // autoplay
  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  // returns relative position: -1 (left), 0 (center), 1 (right), or "hidden"
  const getPosition = (index: number): "left" | "center" | "right" | "hidden" => {
    const diff = (index - active + total) % total;
    if (diff === 0) return "center";
    if (diff === 1) return "right";
    if (diff === total - 1) return "left";
    return "hidden";
  };

  // active card styling — variants for desktop carousel
  const variants = {
    center: { x: "0%", scale: 1, opacity: 1, zIndex: 30, rotateY: 0, filter: "blur(0px)" },
    left: { x: "-78%", scale: 0.8, opacity: 0.3, zIndex: 10, rotateY: 10, filter: "blur(3px)" },
    right: { x: "78%", scale: 0.8, opacity: 0.3, zIndex: 10, rotateY: -10, filter: "blur(3px)" },
    hidden: { x: "0%", scale: 0.7, opacity: 0, zIndex: 0, rotateY: 0, filter: "blur(4px)" },
  };

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Subtle dot background to match Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Soft spotlight behind active card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,151,135,0.18) 0%, rgba(59,151,135,0.06) 40%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#ECF8F6] text-[#3B9787] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0F172A]">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-500">
            Real results from real businesses we've scaled.
          </p>
        </motion.div>

        {/* DESKTOP CAROUSEL */}
        <div className="hidden md:block">
          <div
            className="relative h-[420px] flex items-center justify-center"
            style={{ perspective: "1400px" }}
          >
            {testimonials.map((t, i) => {
              const pos = getPosition(i);
              return (
                <motion.div
                  key={t.name}
                  className="absolute w-[520px] max-w-[90%]"
                  initial={false}
                  animate={variants[pos]}
                  transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card t={t} active={pos === "center"} />
                </motion.div>
              );
            })}

            {/* Nav arrows */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 lg:left-8 z-40 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-[#0F172A] hover:bg-[#3B9787] hover:text-white hover:border-[#3B9787] transition-all duration-300"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 lg:right-8 z-40 w-12 h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-[#0F172A] hover:bg-[#3B9787] hover:text-white hover:border-[#3B9787] transition-all duration-300"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* MOBILE — horizontal snap scroll */}
        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 scrollbar-hide">
            {testimonials.map((t) => (
              <div key={t.name} className="snap-center shrink-0 w-[88%] first:ml-2 last:mr-2">
                <Card t={t} active />
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-[#3B9787]" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

/* ---------------- Testimonial Card ---------------- */
function Card({ t, active }: { t: Testimonial; active: boolean }) {
  return (
    <motion.div
      whileHover={active ? { y: -6 } : {}}
      transition={{ duration: 0.3 }}
      className={`relative rounded-3xl p-8 md:p-10 border overflow-hidden ${
        active
          ? "bg-white border-slate-200 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)]"
          : "bg-white/80 backdrop-blur-xl border-slate-200/70 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.15)]"
      }`}
    >
      {/* Active glow */}
      {active && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,151,135,0.15), transparent 50%, rgba(59,151,135,0.08))",
          }}
        />
      )}

      {/* Large faint quote icon */}
      <FaQuoteLeft
        aria-hidden="true"
        className="absolute -top-2 -right-2 text-[#3B9787]/8 pointer-events-none"
        size={140}
        style={{ opacity: 0.07 }}
      />

      <div className="relative">
        {/* Stars */}
        <div className="flex items-center gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-400" size={16} />
          ))}
        </div>

        {/* Quote */}
        <p className="text-lg md:text-2xl leading-relaxed text-[#0F172A] font-medium tracking-tight">
          "{t.quote}"
        </p>

        {/* Author */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#3B9787] to-[#2E7D6F] flex items-center justify-center text-white font-bold text-lg shadow-md">
            {t.name.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-[#0F172A]">{t.name}</p>
            <p className="text-sm text-slate-500">{t.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
