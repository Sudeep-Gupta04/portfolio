"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TypewriterBubbleProps = {
  text: string;
  isAbove: boolean;
  isVisible: boolean;
  onComplete?: () => void;
};

export default function TypewriterBubble({
  text,
  isAbove,
  isVisible,
  onComplete,
}: TypewriterBubbleProps) {
  const [visibleText, setVisibleText] = useState("");

  useEffect(() => {
    setVisibleText("");

    if (!text) return;

    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      setVisibleText(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(interval);
        onComplete?.();
      }
    }, 48);

    return () => window.clearInterval(interval);
  }, [text, onComplete]);

  return (
    <motion.div
      className="absolute left-1/2 z-30 -translate-x-1/2 rounded-full bg-[#4FB8E8] px-5 py-3 text-xs font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_18px_45px_rgba(79,184,232,0.28)] sm:px-7 sm:py-4 sm:text-sm md:text-base"
      initial={{ opacity: 0, scale: 0.82, y: 18 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.96,
        top: isAbove ? "calc(50% - 120px)" : "calc(50% + 60px)",
        y: isVisible ? 0 : 10,
      }}
      transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
    >
      <span>{visibleText}</span>
      <motion.span
        className="ml-1 inline-block h-4 w-[2px] translate-y-[2px] bg-white"
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.85, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}
