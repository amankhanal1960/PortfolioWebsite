"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show cursor when it moves
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    // Hide cursor when it leaves the window
    const handleMouseLeave = () => {
      setVisible(false);
    };

    // Show cursor when it enters the window
    const handleMouseEnter = () => {
      setVisible(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className={`${visible ? "opacity-100" : "opacity-0"}`}>
      {/* Small dot cursor */}
      <div
        className="pointer-events-none fixed z-50 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black mix-blend-difference transition-transform duration-300 ease-out dark:bg-white"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />

      {/* Larger circle cursor with delay */}
      <div
        className="pointer-events-none fixed z-40 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black mix-blend-difference transition-all duration-600 ease-out dark:border-white"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </div>
  );
}
