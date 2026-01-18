import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");
    const move = (e) => {
      if (!glow) return;
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="cursor-glow"
      className="pointer-events-none fixed z-[1] w-[320px] h-[320px]
      -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-40
      bg-gradient-to-r from-pink-500 via-violet-500 to-indigo-500"
    />
  );
}
