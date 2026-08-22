"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const menuLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Achievement", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "Get Resume", href: "/resume/Sudeep_Gupta_Resume.pdf", isDownload: true },
];

export default function NavigationPill() {
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const hasSeenIntro = window.sessionStorage.getItem("introSeen") === "true";
    if (hasSeenIntro) {
      setIsReady(true);
      return;
    }

    const handleIntroComplete = () => setIsReady(true);
    const fallbackTimer = window.setTimeout(() => setIsReady(true), 3600);

    window.addEventListener("portfolio-intro-complete", handleIntroComplete);

    return () => {
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("portfolio-intro-complete", handleIntroComplete);
    };
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("portfolio-scroll-to", { detail: { target: href } }),
      );
    }, 180);
  };

  return (
    <>
      {/* ── Dark Mode Toggle ── */}
      <motion.button
        aria-label="Toggle dark mode"
        className="fixed top-6 right-6 z-[60] flex h-10 w-10 items-center justify-center rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-300"
        style={{
          background: isDark ? "#f1d85f" : "#1e1e1e",
          border: isDark ? "2px solid rgba(241,216,95,0.4)" : "2px solid rgba(30,30,30,0.2)",
        }}
        onClick={toggleTheme}
        whileTap={{ scale: 0.88 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isReady ? 1 : 0, scale: isReady ? 1 : 0.8 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="sun"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.22 }}
              style={{ fontSize: "16px", lineHeight: 1 }}
            >
              ☀️
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.22 }}
              style={{ fontSize: "16px", lineHeight: 1 }}
            >
              🌙
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Navigation Pill ── */}
      <motion.div
        className="fixed bottom-8 left-1/2 z-[60] -translate-x-1/2"
        initial={{ opacity: 0, y: 18, scale: 0.96 }}
        animate={{
          opacity: isReady ? 1 : 0,
          y: isReady ? 0 : 18,
          scale: isReady ? 1 : 0.96,
        }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        style={{ pointerEvents: isReady ? "auto" : "none" }}
      >
        <AnimatePresence>
          {isReady && isOpen && (
            <motion.nav
              className="absolute bottom-[calc(100%+0.75rem)] left-1/2 flex w-[min(90vw,320px)] -translate-x-1/2 flex-col overflow-hidden rounded-[1.35rem] p-2 shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-md"
              style={{
                border: isDark
                  ? "1px solid rgba(232,226,216,0.12)"
                  : "1px solid rgba(30,30,30,0.18)",
                background: isDark
                  ? "rgba(28,24,18,0.96)"
                  : "rgba(247,241,237,0.95)",
                color: isDark ? "#e8e2d8" : "#1e1e1e",
              }}
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.76, 0, 0.24, 1] }}
            >
              {menuLinks.map((link, i) =>
                link.isDownload ? (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="mt-1 flex items-center gap-2 rounded-[0.9rem] px-5 py-3 text-left text-[13px] font-extrabold uppercase tracking-[0.22em] transition-colors duration-200"
                    style={{
                      background: isDark
                        ? "rgba(241,216,95,0.12)"
                        : "rgba(30,30,30,0.06)",
                      color: isDark ? "#f1d85f" : "#1e1e1e",
                      borderTop: isDark
                        ? "1px solid rgba(232,226,216,0.08)"
                        : "1px solid rgba(30,30,30,0.08)",
                    }}
                    whileHover={{
                      backgroundColor: isDark ? "#f1d85f" : "#1e1e1e",
                      color: isDark ? "#1e1e1e" : "#f7f1ed",
                    }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ delay: i * 0.035, duration: 0.22 }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    {link.label}
                  </motion.a>
                ) : (
                  <motion.button
                    key={link.label}
                    onClick={() => handleClick(link.href)}
                    className="rounded-[0.9rem] px-5 py-3 text-left text-[13px] font-extrabold uppercase tracking-[0.22em] transition-colors duration-200"
                    style={{
                      color: isDark ? "rgba(232,226,216,0.65)" : "rgba(30,30,30,0.72)",
                    }}
                    whileHover={{
                      backgroundColor: isDark ? "#f1d85f" : "#1e1e1e",
                      color: isDark ? "#1e1e1e" : "#f7f1ed",
                    }}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ delay: i * 0.035, duration: 0.22 }}
                  >
                    {link.label}
                  </motion.button>
                ),
              )}
            </motion.nav>
          )}
        </AnimatePresence>

        <motion.button
          className="flex items-center gap-3 rounded-full px-7 py-3.5 text-xs font-bold uppercase tracking-widest shadow-[0_8px_30px_rgba(0,0,0,0.18)] transition-shadow duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.28)]"
          style={{
            background: "#f1d85f",
            border: isDark
              ? "1px solid rgba(241,216,95,0.35)"
              : "1px solid rgba(30,30,30,0.30)",
            color: "#1e1e1e",
          }}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          layout
        >
          <span>{isOpen ? "Close" : "Menu"}</span>
          <span className="text-base leading-none">{isOpen ? "×" : "≡"}</span>
        </motion.button>
      </motion.div>
    </>
  );
}
