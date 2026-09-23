import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const pos = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const handleMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
    };

    let raf;
    const animateRing = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    const handleOver = (e) => {
      if (e.target.closest("a, button, .magnetic, input, textarea, .icon-btn")) {
        setHovering(true);
      }
    };
    const handleOut = (e) => {
      if (e.target.closest("a, button, .magnetic, input, textarea, .icon-btn")) {
        setHovering(false);
      }
    };

    const handleMagnetic = (e) => {
      document.querySelectorAll(".magnetic").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const radius = 90;
        if (dist < radius) {
          const pull = (1 - dist / radius) * 0.3;
          el.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
        } else {
          el.style.transform = "";
        }
      });
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousemove", handleMagnetic);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousemove", handleMagnetic);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? "cursor-ring--hover" : ""}`} />
    </>
  );
}