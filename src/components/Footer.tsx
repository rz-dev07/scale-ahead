import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiCalendar, FiChevronRight, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Logo from "@/components/Logo";

const company = [
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Contact", href: "/#contact" },
];

const legal = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Refund Policy", to: "/refund-policy" },
];

const socials = [
  { Icon: FaInstagram, href: "/coming-soon", label: "Instagram" },
  { Icon: FaFacebook, href: "/coming-soon", label: "Facebook" },
  { Icon: FaLinkedin, href: "/coming-soon", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628]">
      {/* CTA BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl mx-4 lg:mx-auto max-w-6xl mb-16 px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{
          background: "linear-gradient(135deg, #3B9787 0%, #2E7D6F 100%)",
        }}
      >
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
            Ready to Scale Your Business?
          </h3>
          <p className="text-sm text-[#CBECE6] mt-2">
            Let's build your growth system — free consultation, no commitment.
          </p>
        </div>
        <div className="flex gap-3 flex-wrap justify-center">
          <a
            href="https://calendly.com/sujay-scaleahead/sample-event-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#3B9787] font-bold px-6 py-3 rounded-full text-sm hover:bg-[#ECF8F6] transition"
          >
            <FiCalendar size={16} /> Book Free Consultation
          </a>
          <a
            href="https://wa.me/917980555967?text=Hi+Scaleahead!+I%27d+like+to+book+a+free+consultation+for+my+business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/10 transition"
          >
            <FaWhatsapp size={16} /> Chat on WhatsApp
          </a>
        </div>
      </motion.div>

      {/* MAIN BODY */}
      <div className="max-w-6xl mx-auto px-4 pt-4 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* COL 1 — BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="flex items-center">
              <Logo className="h-7 w-auto" variant="light" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-[180px] mt-3 mb-5">
              Results-driven digital marketing for ambitious businesses.
            </p>
            <div className="flex gap-3 mt-2">
              {socials.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  to={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-[#1E293B] border border-slate-700/50 flex items-center justify-center hover:bg-[#3B9787] hover:border-[#3B9787] transition group"
                >
                  <Icon size={16} className="text-slate-400 group-hover:text-white transition" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* COL 2 — COMPANY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {company.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-400 hover:text-[#45BAA5] transition flex items-center gap-2"
                  >
                    <FiChevronRight size={12} className="text-slate-600" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COL 3 — LEGAL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {legal.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-slate-400 hover:text-[#45BAA5] transition flex items-center gap-2"
                  >
                    <FiChevronRight size={12} className="text-slate-600" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COL 4 — CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E293B] flex items-center justify-center shrink-0 border border-slate-700/50">
                  <FiPhone size={14} className="text-[#45BAA5]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Phone / WhatsApp</div>
                  <a
                    href="tel:+917980555967"
                    className="text-sm text-slate-300 hover:text-[#45BAA5] transition"
                  >
                    +91 79805 55967
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E293B] flex items-center justify-center shrink-0 border border-slate-700/50">
                  <FiMail size={14} className="text-[#45BAA5]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email</div>
                  <a
                    href="mailto:team@scaleahead.in"
                    className="text-sm text-slate-300 hover:text-[#45BAA5] transition"
                  >
                    team@scaleahead.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E293B] flex items-center justify-center shrink-0 border border-slate-700/50">
                  <FiMapPin size={14} className="text-[#45BAA5]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Address</div>
                  <div className="text-sm text-slate-300">NS Road, Kolkata, West Bengal</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DIVIDER + BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-slate-800 mt-14 pt-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500">© 2026 Scaleahead. All rights reserved.</p>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              Developed by{" "}
              <a
                href="https://son-u.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#45BAA5] hover:text-[#3B9787] transition font-medium ml-1"
              >
                Sonu
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
