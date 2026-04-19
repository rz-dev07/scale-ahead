import { motion } from "framer-motion";
import { useState } from "react";
import { FiUser, FiMail, FiBriefcase, FiPhone, FiLock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

type FormState = {
  name: string;
  email: string;
  business: string;
  phone: string;
  revenue: string;
};
  
export default function ConsultationForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    business: "",
    phone: "",
    revenue: "",
  });
  const [errors, setErrors] = useState<Record<keyof FormState, boolean>>({
    name: false,
    email: false,
    business: false,
    phone: false,
    revenue: false,
  });
  const [shake, setShake] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (value.trim()) setErrors((e) => ({ ...e, [key]: false }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name: !form.name.trim(),
      email: !form.email.trim(),
      business: !form.business.trim(),
      phone: !form.phone.trim(),
      revenue: !form.revenue.trim(),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    const text =
      `Hi Scaleahead!\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Business: ${form.business}\n` +
      `Phone: ${form.phone}\n` +
      `Revenue: ${form.revenue}\n` +
      `I'd like a free consultation.`;
    const url = `https://wa.me/917980555967?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const fieldBase =
    "w-full bg-[#0F172A] border rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#3B9787]/20 transition-all duration-200";

  const borderClass = (hasError: boolean) =>
    hasError ? "border-red-500" : "border-slate-700 focus:border-[#3B9787]";

  return (
    <section id="contact" className="bg-[#0F172A] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN — TRUST */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block bg-[#ECF8F6]/10 text-[#45BAA5] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest border border-[#3B9787]/30 w-fit mb-4">
              Free Consultation
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Let's Build Something That Actually Grows.
            </h2>

            <p className="text-base text-slate-400 leading-relaxed">
              Fill the form and we'll reach out on WhatsApp within 24 hours with a custom strategy
              for your business.
            </p>

            {/* Social proof */}
            <div className="mt-10 pt-8 border-t border-slate-800 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[
                  { bg: "bg-[#3B9787]", letter: "R" },
                  { bg: "bg-[#45BAA5]", letter: "P" },
                  { bg: "bg-[#2E7D6F]", letter: "A" },
                ].map((a) => (
                  <div
                    key={a.letter}
                    className={`w-9 h-9 rounded-full border-2 border-[#0F172A] ${a.bg} flex items-center justify-center text-white text-xs font-bold`}
                  >
                    {a.letter}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-[#45BAA5] text-xs">⭐⭐⭐⭐⭐</div>
                <p className="text-sm text-slate-400">25+ founders already scaling with us</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            animate={shake ? { x: [0, -8, 8, -6, 6, -3, 3, 0] } : undefined}
            className="order-1 lg:order-2 bg-[#1E293B] border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-[0_32px_64px_rgba(0,0,0,0.3)]"
          >
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white">Book Your Free Session</h3>
              <p className="text-xs text-slate-400 mt-1">Takes less than 2 minutes</p>
            </div>

            <form onSubmit={submit} noValidate>
              {/* Name */}
              <label className="text-xs font-medium text-slate-400 mb-1.5 block">Full Name</label>
              <div className="relative mb-4">
                <FiUser
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={`${fieldBase} ${borderClass(errors.name)}`}
                />
              </div>

              {/* Email */}
              <label className="text-xs font-medium text-slate-400 mb-1.5 block">
                Email Address
              </label>
              <div className="relative mb-4">
                <FiMail
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                  size={16}
                />
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={`${fieldBase} ${borderClass(errors.email)}`}
                />
              </div>

              {/* Business */}
              <label className="text-xs font-medium text-slate-400 mb-1.5 block">
                Business Name
              </label>
              <div className="relative mb-4">
                <FiBriefcase
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Your company or brand name"
                  value={form.business}
                  onChange={(e) => update("business", e.target.value)}
                  className={`${fieldBase} ${borderClass(errors.business)}`}
                />
              </div>

              {/* Phone */}
              <label className="text-xs font-medium text-slate-400 mb-1.5 block">
                WhatsApp Number
              </label>
              <div className="relative mb-4">
                <FiPhone
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                  size={16}
                />
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={`${fieldBase} ${borderClass(errors.phone)}`}
                />
              </div>

              {/* Revenue */}
              <label className="text-xs font-medium text-slate-400 mb-1.5 block">
                Current Monthly Revenue
              </label>
              <div className="relative mb-2">
                <select
                  value={form.revenue}
                  onChange={(e) => update("revenue", e.target.value)}
                  className={`w-full bg-[#0F172A] border rounded-xl px-4 py-3.5 text-sm ${form.revenue ? "text-white" : "text-slate-500"} focus:outline-none focus:ring-2 focus:ring-[#3B9787]/20 transition-all duration-200 appearance-none ${borderClass(errors.revenue)}`}
                >
                  <option value="" disabled>
                    Select your revenue range...
                  </option>
                  <option value="Under ₹1 Lakh">Under ₹1 Lakh</option>
                  <option value="₹1L – ₹5L">₹1L – ₹5L</option>
                  <option value="₹5L – ₹20L">₹5L – ₹20L</option>
                  <option value="₹20L+">₹20L+</option>
                </select>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full bg-[#3B9787] hover:bg-[#2E7D6F] text-white font-bold text-sm py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <FaWhatsapp size={18} className="text-white" />
                Enquire on WhatsApp
              </motion.button>

              <div className="mt-4 flex items-center justify-center gap-1.5">
                <FiLock className="text-slate-500" size={12} />
                <p className="text-xs text-slate-500">Your info is private. We never spam.</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
