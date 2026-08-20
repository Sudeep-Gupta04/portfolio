"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

type CursorState = "default" | "hover" | "click";

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [cursorLabel, setCursorLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Main dot — fast
  const dotX = useSpring(rawX, { stiffness: 1200, damping: 40, mass: 0.2 });
  const dotY = useSpring(rawY, { stiffness: 1200, damping: 40, mass: 0.2 });

  // Ring / blob — slower, lags behind
  const ringX = useSpring(rawX, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(rawY, { stiffness: 180, damping: 22, mass: 0.6 });

  // Glow blob — very slow
  const glowX = useSpring(rawX, { stiffness: 80, damping: 18, mass: 1 });
  const glowY = useSpring(rawY, { stiffness: 80, damping: 18, mass: 1 });

  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Detect touch device on mount
  useEffect(() => {
    const checkTouch = () => {
      const isTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
    };
    checkTouch();
  }, []);

  useEffect(() => {
    // Don't set up any listeners on touch devices
    if (isTouchDevice) return;

    const checkTheme = () => {
      setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      const button = target.closest("button");

      if (link) {
        setCursorState("hover");
        const text = link.getAttribute("aria-label") || link.innerText?.trim() || "";
        const label = text.length > 0 && text.length < 16 ? text : "View";
        setCursorLabel(label);
      } else if (button) {
        setCursorState("hover");
        const text = button.getAttribute("aria-label") || button.innerText?.trim() || "";
        const label = text.length > 0 && text.length < 12 ? text : "";
        setCursorLabel(label);
      } else {
        setCursorState("default");
        setCursorLabel("");
      }
    };

    const onMouseDown = () => {
      setCursorState("click");
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
      clickTimeout.current = setTimeout(() => {
        setCursorState((s) => (s === "click" ? "default" : s));
      }, 180);
    };

    const onMouseUp = () => {
      setCursorState((s) => (s === "click" ? "default" : s));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      observer.disconnect();
      if (clickTimeout.current) clearTimeout(clickTimeout.current);
    };
  }, [rawX, rawY, isVisible, isTouchDevice]);

  // Don't render anything on touch devices
  if (isTouchDevice) return null;

  const isHovering = cursorState === "hover";
  const isClicking = cursorState === "click";

  // Theme-aware colors
  const dotColor = isDark ? "#f1d85f" : "#1e1e1e";
  const ringColor = isDark ? "rgba(241,216,95,0.30)" : "rgba(30,30,30,0.18)";
  const glowColor = isDark
    ? "rgba(241, 216, 95, 0.12)"
    : "rgba(30, 30, 30, 0.06)";

  return (
    <>
      {/* ── Glow blob — slowest layer ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[98] rounded-full"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 160 : 100,
          height: isHovering ? 160 : 100,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      />

      {/* ── Trailing ring — medium lag ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          border: `1.5px solid ${ringColor}`,
          opacity: isVisible ? 1 : 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        animate={{
          width: isHovering ? 80 : isClicking ? 28 : 44,
          height: isHovering ? 80 : isClicking ? 28 : 44,
          borderRadius: isHovering ? "12px" : "50%",
          backgroundColor: isHovering
            ? isDark ? "rgba(241,216,95,0.12)" : "rgba(30,30,30,0.06)"
            : "rgba(0,0,0,0)",
          borderColor: isHovering
            ? isDark ? "rgba(241,216,95,0.55)" : "rgba(30,30,30,0.35)"
            : ringColor,
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        {isHovering && cursorLabel && (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.18 }}
            style={{
              fontSize: "7px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: isDark ? "#f1d85f" : "#1e1e1e",
              whiteSpace: "nowrap",
              userSelect: "none",
              pointerEvents: "none",
            }}
          >
            {cursorLabel}
          </motion.span>
        )}
      </motion.div>

      {/* ── Main dot — fastest ── */}
      <motion.div
        className="cursor-main fixed top-0 left-0 pointer-events-none z-[100] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: dotColor,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isClicking ? 6 : isHovering ? 8 : 10,
          height: isClicking ? 6 : isHovering ? 8 : 10,
          scale: isClicking ? 0.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 900, damping: 30 }}
      />
    </>
  );
}
