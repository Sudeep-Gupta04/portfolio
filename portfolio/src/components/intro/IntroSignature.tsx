"use client";

import { motion } from "framer-motion";

type IntroSignatureProps = {
  shouldAnimate: boolean;
  showTail: boolean;
  fadeOut: boolean;
};

export default function IntroSignature({
  shouldAnimate,
  showTail,
  fadeOut,
}: IntroSignatureProps) {
  return (
    <motion.svg
      viewBox="0 0 420 180"
      fill="none"
      className="h-auto w-[min(78vw,420px)]"
      aria-hidden="true"
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <motion.path
        d="M38 100 C72 46, 112 49, 116 88 C121 136, 64 134, 86 96 C110 55, 166 70, 156 110 C146 151, 99 125, 135 92 C175 55, 220 58, 211 98 C203 135, 162 133, 187 101 C216 64, 269 70, 254 111 C240 151, 288 132, 326 88"
        stroke="#D97F4E"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={shouldAnimate ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: shouldAnimate ? 0.8 : 0, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.path
        d="M323 88 C350 70, 374 76, 392 94"
        stroke="#D97F4E"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: showTail ? 1 : 0,
          opacity: showTail && !fadeOut ? 1 : 0,
        }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.svg>
  );
}
