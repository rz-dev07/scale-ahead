import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top green glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(59, 151, 135, 0.12) 0%, transparent 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center max-w-lg w-full"
      >
        {/* Logo — natural two-color theme */}
        <Link to="/" aria-label="Go to homepage">
          <Logo className="h-8 w-auto mb-12" variant="dark" />
        </Link>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-flex items-center gap-2 bg-[#ECF8F6] border border-[#3B9787]/30 text-[#3B9787] text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-widest uppercase"
        >
          <span className="w-2 h-2 bg-[#3B9787] rounded-full animate-pulse" />
          Coming Soon
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-4xl md:text-5xl font-black text-[#0F172A] leading-tight mb-4"
        >
          Something exciting
          <br />
          is <span className="text-[#3B9787]">on its way.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="text-slate-500 text-base leading-relaxed mb-10 max-w-sm"
        >
          We're working hard to bring you something great. Check back soon — it'll be worth the
          wait.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 w-full justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-[#3B9787] text-white font-semibold px-7 py-3 rounded-full text-sm hover:bg-[#2E7D6F] transition-all duration-200"
          >
            ← Back to Home
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center border-2 border-[#3B9787]/30 text-[#3B9787] font-semibold px-7 py-3 rounded-full text-sm hover:bg-[#ECF8F6] transition-all duration-200"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom subtle footer */}
      <p className="absolute bottom-6 text-xs text-slate-400 z-10">
        © 2026 Scaleahead. All rights reserved.
      </p>
    </div>
  );
}
