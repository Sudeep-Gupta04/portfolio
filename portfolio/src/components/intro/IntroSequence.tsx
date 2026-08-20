"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroReveal from "./HeroReveal";
import IntroSignature from "./IntroSignature";
import TypewriterBubble from "./TypewriterBubble";

const INTRO_SEEN_KEY = "introSeen";

type IntroState = {
  isReady: boolean;
  shouldAnimate: boolean;
  bubbleText: string;
  bubbleVisible: boolean;
  bubbleAbove: boolean;
  heroVisible: boolean;
  tailVisible: boolean;
  introFaded: boolean;
};

const finalState: IntroState = {
  isReady: true,
  shouldAnimate: false,
  bubbleText: "",
  bubbleVisible: false,
  bubbleAbove: true,
  heroVisible: true,
  tailVisible: false,
  introFaded: true,
};

export default function IntroSequence() {
  const prefersReducedMotion = useReducedMotion();
  const [state, setState] = useState<IntroState>({
    isReady: false,
    shouldAnimate: true,
    bubbleText: "",
    bubbleVisible: false,
    bubbleAbove: false,
    heroVisible: false,
    tailVisible: false,
    introFaded: false,
  });

  useEffect(() => {
    const hasSeenIntro = window.sessionStorage.getItem(INTRO_SEEN_KEY) === "true";
    const shouldSkip = hasSeenIntro || prefersReducedMotion;

    if (shouldSkip) {
      setState(finalState);
      window.dispatchEvent(new CustomEvent("portfolio-intro-complete"));
      return;
    }

    setState((current) => ({ ...current, isReady: true, shouldAnimate: true }));

    const timers = [
      window.setTimeout(() => {
        setState((current) => ({
          ...current,
          bubbleText: "Hey there!",
          bubbleVisible: true,
        }));
      }, 800),
      window.setTimeout(() => {
        setState((current) => ({ ...current, bubbleAbove: true }));
      }, 1600),
      window.setTimeout(() => {
        setState((current) => ({ ...current, heroVisible: true }));
      }, 2200),
      window.setTimeout(() => {
        window.dispatchEvent(new CustomEvent("portfolio-intro-complete"));
      }, 2800),
      window.setTimeout(() => {
        setState((current) => ({ ...current, bubbleText: "Curious?" }));
      }, 3200),
      window.setTimeout(() => {
        setState((current) => ({
          ...current,
          bubbleText: "Curious? Take a look",
          tailVisible: true,
        }));
      }, 3650),
      window.setTimeout(() => {
        setState((current) => ({
          ...current,
          bubbleVisible: false,
          introFaded: true,
        }));
      }, 4550),
      window.setTimeout(() => {
        window.sessionStorage.setItem(INTRO_SEEN_KEY, "true");
      }, 4850),
    ];

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [prefersReducedMotion]);

  if (!state.isReady) {
    return (
      <section
        id="hero"
        className="relative z-0 h-screen w-full overflow-hidden" style={{ backgroundColor: "var(--bg-hero)" }}
      />
    );
  }

  return (
    <section
      id="hero"
      className="sticky top-0 z-0 h-screen w-full overflow-hidden" style={{ backgroundColor: "var(--bg-hero)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(30,30,30,0.13)_1px,transparent_1px)] bg-[length:24px_24px] opacity-45" />
      <div className="absolute left-0 right-0 top-[38%] h-px bg-[#1e1e1e]/16" />
      <div className="absolute left-0 right-0 top-[62%] h-px bg-[#1e1e1e]/16" />

      <HeroReveal
        shouldAnimate={state.shouldAnimate}
        isVisible={state.heroVisible}
      />

      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center"
        animate={{ opacity: state.introFaded ? 0 : 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        style={{ pointerEvents: "none" }}
      >
        <div className="relative flex h-[44vh] min-h-[250px] w-full items-center justify-center px-6">
          <IntroSignature
            shouldAnimate={state.shouldAnimate}
            showTail={state.tailVisible}
            fadeOut={state.introFaded}
          />
          <TypewriterBubble
            text={state.bubbleText}
            isAbove={state.bubbleAbove}
            isVisible={state.bubbleVisible}
          />
        </div>
      </motion.div>
    </section>
  );
}
