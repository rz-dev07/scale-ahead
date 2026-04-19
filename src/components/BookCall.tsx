import { motion } from "framer-motion";
import {
  FiClock,
  FiVideo,
  FiGift,
  FiCalendar,
  FiLock,
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
} from "react-icons/fi";

const CALENDLY_URL = "https://calendly.com/sujay-scaleahead/sample-event-";

const details = [
  { icon: FiClock, text: "30-minute focused strategy session" },
  { icon: FiVideo, text: "Google Meet or Phone — your choice" },
  { icon: FiGift, text: "Completely free, zero commitment" },
];

const dayHeaders = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const calendarCells: (number | null)[] = [
  null,
  null,
  ...Array.from({ length: 30 }, (_, i) => i + 1),
];
const availableDates = new Set([17, 18, 21, 22, 23, 24, 25]);
const selectedDate = 22;
const timeSlots = ["10:00 AM", "11:30 AM", "2:00 PM"];

export default function BookCall() {
  return (
    <section id="book-call" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#ECF8F6] text-[#3B9787] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest w-fit mb-4">
              Book a Call
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] leading-tight mb-4">
              Schedule Your Free Strategy Call
            </h2>

            <p className="text-base text-slate-500 leading-relaxed mb-8">
              Pick a time that works for you. 30 minutes. No pressure. Just a focused conversation
              about growing your business.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {details.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={d.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#ECF8F6] flex items-center justify-center shrink-0">
                      <Icon size={16} color="#3B9787" />
                    </div>
                    <p className="text-sm font-medium text-[#0F172A]">{d.text}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="bg-[#3B9787] text-white font-bold px-8 py-4 rounded-full hover:bg-[#2E7D6F] transition inline-flex items-center gap-2 w-full justify-center md:w-fit mb-4"
            >
              <FiCalendar size={18} />
              Schedule a Free Call
              <FiExternalLink size={14} />
            </motion.a>

            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <FiLock size={12} />
              <span>Free · No credit card · No commitment</span>
            </div>
          </motion.div>

          {/* RIGHT — VISUAL PREVIEW CARD (links to Calendly) */}
          <motion.a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="block bg-[#F8FFFE] border border-[#CBECE6] rounded-2xl p-6 shadow-[0_16px_48px_rgba(59,151,135,0.08)] cursor-pointer group transition-all duration-300 hover:shadow-[0_20px_60px_rgba(59,151,135,0.14)]"
          >
            {/* Card top */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-[#3B9787]" size={16} />
                  <span className="text-sm font-bold text-[#0F172A]">Strategy Call</span>
                </div>
                <p className="text-xs text-slate-400 mt-0.5">30 min · Free</p>
              </div>
              <span className="bg-[#DCFCE7] text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
                Available
              </span>
            </div>

            {/* Month header */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-[#0F172A]">April 2026</span>
              <div className="flex items-center gap-2">
                <FiChevronLeft className="text-slate-400" />
                <FiChevronRight className="text-slate-400" />
              </div>
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-0.5 md:gap-1 text-center mb-5">
              {dayHeaders.map((d) => (
                <div key={d} className="text-xs text-slate-400 font-medium py-1">
                  {d}
                </div>
              ))}
              {calendarCells.map((cell, idx) => {
                if (cell === null) return <div key={`empty-${idx}`} className="py-1.5" />;
                if (cell === selectedDate) {
                  return (
                    <div
                      key={cell}
                      className="bg-[#3B9787] text-white rounded-lg py-1.5 text-xs font-bold"
                    >
                      {cell}
                    </div>
                  );
                }
                if (availableDates.has(cell)) {
                  return (
                    <div
                      key={cell}
                      className="text-[#0F172A] text-xs font-semibold py-1.5 rounded-lg"
                    >
                      {cell}
                    </div>
                  );
                }
                return (
                  <div key={cell} className="text-slate-300 text-xs py-1.5">
                    {cell}
                  </div>
                );
              })}
            </div>

            {/* Time slots */}
            <p className="text-xs text-slate-400 mb-2">Available times · Apr 22</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {timeSlots.map((slot, i) => (
                <div
                  key={slot}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition ${
                    i === 0
                      ? "bg-[#3B9787] text-white border border-[#3B9787]"
                      : "border border-[#CBECE6] text-[#3B9787] bg-white"
                  }`}
                >
                  {slot}
                </div>
              ))}
            </div>

            {/* Book now CTA */}
            <div className="w-full bg-[#0F172A] text-white text-xs font-semibold py-3 rounded-xl mt-2 text-center group-hover:bg-[#1E293B] transition flex items-center justify-center gap-2">
              Book on Calendly
              <FiExternalLink size={12} />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
