"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const playClick = () => {
    const audio = new Audio("/sounds/Keycap.mp3");
    audio.volume = 1;
    audio.play().catch(() => {});
  };

  const toggleTheme = () => {
    playClick();

    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);

    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    // Fallback for browsers that don't support View Transitions
    if (!document.startViewTransition) {
      setTheme(nextTheme);
      return;
    }

    document.startViewTransition(() => {
      setTheme(nextTheme);
    });
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button ref={buttonRef} className="w-5 h-5" aria-label="Toggle theme" />
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="cursor-pointer"
    >
      {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
