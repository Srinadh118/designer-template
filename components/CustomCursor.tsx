"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports touch/pointer accurately
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsTouchDevice(false);
    } else {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest("[data-cursor]");
      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else {
        const isClickable = target?.closest("button, a, input, select, textarea");
        if (isClickable) {
          setIsHovered(true);
          setCursorText("");
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  // Smooth trailing effect
  useEffect(() => {
    if (isTouchDevice) return;
    let animationFrameId: number;

    const render = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Magnetic Ring with Contextual Label */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center rounded-full transition-transform duration-150 ease-out will-change-transform ${
          cursorText
            ? "w-20 h-20 -ml-10 -mt-10 bg-[#141413]/90 text-[#F7F5F0] backdrop-blur-xs border border-[#FAF8F5]/20 shadow-xl"
            : isHovered
            ? "w-12 h-12 -ml-6 -mt-6 bg-[#141413]/10 border border-[#141413]/40"
            : "w-8 h-8 -ml-4 -mt-4 border border-[#141413]/30"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        {cursorText && (
          <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-center select-none animate-fade-in">
            {cursorText}
          </span>
        )}
      </div>

      {/* Center Precise Dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 w-1.5 h-1.5 -ml-[3px] -mt-[3px] rounded-full bg-[#141413] transition-opacity duration-150 will-change-transform ${
          cursorText ? "opacity-0" : "opacity-100"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />
    </>
  );
}
