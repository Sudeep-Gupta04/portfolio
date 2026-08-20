"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL = "sudeepkgupta2001@gmail.com";

export default function ContactAction() {
  const [copied, setCopied] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleReachOut = async () => {
    setClicked(true);

    // Try to open mailto
    window.location.href = `mailto:${EMAIL}?subject=Hello Sudeep&body=Hi Sudeep,`;

    // Also copy email to clipboard as fallback
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setClicked(false);
      }, 3000);
    } catch {
      // clipboard not available, just show the mailto link feedback
      setTimeout(() => setClicked(false), 2000);
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-4">
      <button
        onClick={handleReachOut}
        className="group relative inline-block text-xl font-extrabold uppercase tracking-[0.15em] text-[#1e1e1e] md:text-3xl"
        style={{ background: "none", border: "none", padding: 0, cursor: "none" }}
      >
        Reach out
        <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#1e1e1e] transition-transform duration-500 group-hover:scale-x-0" />
      </button>

      {/* Email address shown below */}
      <a
        href={`mailto:${EMAIL}`}
        className="text-xs font-bold uppercase tracking-[0.18em] transition-opacity duration-300 hover:opacity-80"
        style={{ color: "rgba(30,30,30,0.55)" }}
      >
        {EMAIL}
      </a>

      {/* Toast notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            key="toast"
            className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "#1e1e1e",
              color: "#f1d85f",
            }}
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.22 }}
          >
            ✓ Email copied to clipboard
          </motion.div>
        )}
        {clicked && !copied && (
          <motion.div
            key="opening"
            className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-5 py-2.5 text-[11px] font-extrabold uppercase tracking-[0.2em]"
            style={{
              backgroundColor: "#1e1e1e",
              color: "#f1d85f",
            }}
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.22 }}
          >
            Opening email client…
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
