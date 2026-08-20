"use client";

import { motion } from "framer-motion";

type HeroRevealProps = {
  shouldAnimate: boolean;
  isVisible: boolean;
};

const heroWords = ["Sudeep", "Gupta"];

export default function HeroReveal({ shouldAnimate, isVisible }: HeroRevealProps) {
  const transitionDelay = shouldAnimate ? 0 : 0;

  return (
    <motion.div
      className="absolute inset-0 z-10 flex items-center justify-center"
      style={{ color: "var(--text-primary)" }}
      initial={shouldAnimate ? { opacity: 0 } : { opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: shouldAnimate ? 0.35 : 0, ease: "easeOut" }}
    >
      <motion.div
        className="absolute top-[18vh] flex flex-col items-center text-center sm:top-[16vh]"
        initial={shouldAnimate ? { opacity: 0, y: -16 } : { opacity: 1, y: 0 }}
        animate={isVisible ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: transitionDelay + 0.2, duration: 0.62, ease: "easeOut" }}
      >
        <p className="text-xs font-extrabold uppercase tracking-[0.34em] md:text-sm">
          Software Engineer
        </p>
        <span className="mt-3 h-[2px] w-28 rounded-full bg-[#D97F4E]" />
      </motion.div>

      <div className="pointer-events-none flex select-none flex-col items-center overflow-hidden text-center">
        {heroWords.map((word, index) => (
          <div key={word} className="overflow-hidden">
            <motion.h1
              className="text-[18vw] font-extrabold uppercase leading-[0.84] tracking-[-0.04em] sm:text-[15vw] lg:text-[10rem] xl:text-[11rem]"
              initial={shouldAnimate ? { y: "112%" } : { y: 0 }}
              animate={isVisible ? { y: 0 } : undefined}
              transition={{
                delay: transitionDelay + 0.05 + index * 0.14,
                duration: shouldAnimate ? 0.82 : 0,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              {word}
            </motion.h1>
          </div>
        ))}
      </div>

      <motion.p
        className="absolute left-5 top-[calc(38%-2rem)] max-w-[11rem] text-left text-[10px] font-extrabold uppercase leading-relaxed tracking-[0.22em] sm:left-10 sm:text-xs md:left-14"
        style={{ color: "var(--text-primary)", opacity: 0.55 }}
        initial={shouldAnimate ? { opacity: 0, x: -18 } : { opacity: 1, x: 0 }}
        animate={isVisible ? { opacity: 1, x: 0 } : undefined}
        transition={{ delay: transitionDelay + 0.48, duration: 0.62, ease: "easeOut" }}
      >
        Full-stack Developer
      </motion.p>

      <motion.p
        className="absolute right-5 top-[calc(62%+0.8rem)] max-w-[13rem] text-right text-[10px] font-extrabold uppercase leading-relaxed tracking-[0.22em] sm:right-10 sm:text-xs md:right-14"
        style={{ color: "var(--text-primary)", opacity: 0.55 }}
        initial={shouldAnimate ? { opacity: 0, x: 18 } : { opacity: 1, x: 0 }}
        animate={isVisible ? { opacity: 1, x: 0 } : undefined}
        transition={{ delay: transitionDelay + 0.56, duration: 0.62, ease: "easeOut" }}
      >
        Based in Gandhinagar, Gujarat
      </motion.p>
    </motion.div>
  );
}
