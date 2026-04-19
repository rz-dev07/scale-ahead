import { motion } from "framer-motion";
import { MdRocketLaunch } from "react-icons/md";
import {
  FaShoppingBag,
  FaHospital,
  FaHome,
  FaGraduationCap,
  FaCar,
  FaDumbbell,
  FaUtensils,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const WA =
  "https://wa.me/917980555967?text=Hi+Scaleahead!+I+visited+your+website+and+I%27d+love+to+know+how+you+can+help+grow+my+business.";

const LOGOS: { icon: IconType; name: string }[] = [
  { icon: FaShoppingBag, name: "ShopNest" },
  { icon: FaHospital, name: "MediCore" },
  { icon: FaHome, name: "NestRealty" },
  { icon: FaGraduationCap, name: "EduRise" },
  { icon: FaCar, name: "AutoDrive" },
  { icon: FaDumbbell, name: "FitForge" },
  { icon: FaUtensils, name: "TasteHub" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-white pt-14 md:pt-16 lg:pt-24 pb-12 px-4 md:px-8 lg:px-4"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0 }}
          className="flex items-center gap-2 w-fit mx-auto bg-[#ECF8F6] text-[#3B9787] text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
        >
          <MdRocketLaunch size={16} color="#3B9787" />
          Digital Marketing Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-[#0F172A] mt-2 mb-4"
        >
          Scale Your Business
          <br />
          with <span className="text-[#3B9787]">Smarter Ads.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-slate-500 font-normal mx-auto mb-8 whitespace-nowrap"
        >
          Meta Ads · Google Ads · Lead Gen · Social Media
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.03 }}
            className="w-full sm:w-auto bg-[#3B9787] text-white px-7 py-3.5 rounded-full font-semibold text-base hover:bg-[#2E7D6F] transition-all duration-200 text-center"
          >
            Book Free Consultation
          </motion.a>
          <motion.a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="w-full sm:w-auto border-2 border-[#3B9787] text-[#3B9787] px-7 py-3.5 rounded-full font-semibold text-base hover:bg-[#ECF8F6] transition-all duration-200 text-center"
          >
            Chat on WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Logo Marquee Strip */}
      <div className="relative mt-20 md:mt-28 w-full max-w-7xl mx-auto">
        <p className="text-sm text-slate-400 text-center mb-6 uppercase tracking-widest font-medium">
          Trusted by brands across industries
        </p>
        <div className="marquee-container relative w-full overflow-hidden py-8">
          <div className="marquee-track flex flex-row items-center gap-6 sm:gap-10 w-max">
            {[...LOGOS, ...LOGOS].map((logo, i) => {
              const Icon = logo.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-[#0F172A] text-white px-5 py-4 rounded-lg whitespace-nowrap text-sm font-bold tracking-wide opacity-90 hover:opacity-100 transition min-w-fit shrink-0"
                >
                  <Icon size={14} color="#ffffff" />
                  {logo.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
        }
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }
        .marquee-container {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
      `}</style>
    </section>
  );
}
