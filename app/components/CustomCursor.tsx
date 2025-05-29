"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0,
      mouseY = 0;
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener("mousemove", onMove);

    const loop = () => {
      if (dotRef.current && circleRef.current) {
        const transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        // dot jumps immediately
        dotRef.current.style.transform = transform;
        // circle transitions
        circleRef.current.style.transform = transform;
      }
      requestAnimationFrame(loop);
    };
    loop();

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="
    pointer-events-none fixed z-50 h-2 w-2
    top-0 left-0
    -translate-x-1/2 -translate-y-1/2
    rounded-full bg-foreground
  "
      />
      <div
        ref={circleRef}
        className="fixed top-0 left-0
          pointer-events-none z-50
          h-14 w-14 -translate-x-1/2 -translate-y-1/2
          rounded-full border border-foreground
          transition-transform duration-400 ease-out
         
        "
      />
    </>
  );
}
