"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.75,
      touchMultiplier: 1.5,
    });

    let frameId = 0;

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    const handleScrollTo = (event: Event) => {
      const { target } = (event as CustomEvent<{ target: string }>).detail;
      lenis.scrollTo(target, {
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    };

    window.addEventListener("portfolio-scroll-to", handleScrollTo);
    frameId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("portfolio-scroll-to", handleScrollTo);
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
