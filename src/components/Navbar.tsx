import { useEffect, useState } from "react";
import { HiMenu, HiX, HiChevronRight } from "react-icons/hi";
import { motion, AnimatePresence, Variants } from "framer-motion";
import logo from "@/assets/scaleahead-logo.svg";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#contact", label: "Contact" },
];

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.4,
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.96,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const barStyle: React.CSSProperties = {
    background: scrolled ? "rgba(255, 255, 255, 0.70)" : "rgba(255, 255, 255, 0.45)",
    backdropFilter: "blur(12px) saturate(220%)",
    WebkitBackdropFilter: "blur(12px) saturate(220%)",
    border: "1px solid rgba(226, 232, 240, 0.8)",
    boxShadow: scrolled ? "0 4px 32px rgba(0, 0, 0, 0.10)" : "0 4px 24px rgba(0, 0, 0, 0.06)",
    transition: "all 0.3s ease",
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pt-4 px-4"
      style={{ pointerEvents: "none" }}
    >
      <div className="w-full max-w-4xl mx-auto" style={{ pointerEvents: "auto" }}>
        {/* Main Desktop/Mobile Nav Pill */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-20 flex items-center justify-between px-5 py-3 rounded-2xl lg:px-7"
          style={barStyle}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
            }}
            className="flex items-center"
            aria-label="Scaleahead"
          >
            <img src={logo} alt="Scaleahead" className="h-6 w-auto" />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-500 hover:text-[#3B9787] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.03 }}
            className="hidden md:inline-block bg-[#3B9787] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#2E7D6F] transition-all duration-200"
          >
            Book Free Consultation
          </motion.a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden text-[#0F172A] p-1 rounded-full hover:bg-black/5 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </motion.nav>

        {/* Mobile Dropdown Menu Container */}
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden mt-2 relative z-10 w-full max-w-4xl mx-auto rounded-2xl px-5 py-5 flex flex-col gap-2 overflow-y-auto max-h-[75vh]"
              style={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(16px) saturate(200%)",
                WebkitBackdropFilter: "blur(16px) saturate(200%)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                boxShadow: "0 12px 48px rgba(0, 0, 0, 0.12)",
              }}
            >
              {links.map((l) => (
                <motion.a
                  variants={itemVariants}
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-3 px-4 rounded-xl text-[15px] font-semibold text-slate-700 hover:bg-[#3B9787]/10 hover:text-[#3B9787] transition-all duration-200"
                >
                  {l.label}
                  <HiChevronRight
                    size={18}
                    className="text-slate-400 group-hover:text-[#3B9787] group-hover:translate-x-1 transition-transform"
                  />
                </motion.a>
              ))}

              <motion.div
                variants={itemVariants}
                className="mt-4 pt-4 border-t border-slate-200/60"
              >
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center w-full bg-[#3B9787] text-white text-[15px] font-semibold py-3.5 rounded-full hover:bg-[#2E7D6F] hover:shadow-lg hover:shadow-[#3B9787]/20 transition-all duration-300"
                >
                  Book Free Consultation
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
