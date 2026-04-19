import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <span className="bg-[#0F172A] text-white text-xs rounded px-2 py-1">Chat with us!</span>
      )}
      <motion.a
        href="https://wa.me/917980555967?text=Hi+Scaleahead!+I%27d+like+to+know+more+about+your+services."
        target="_blank"
        rel="noopener noreferrer"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="bg-[#25D366] rounded-full p-4 shadow-xl flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </motion.a>
    </div>
  );
}
