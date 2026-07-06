"use client";
import { HeroSection } from "./components/HeroSection";

import { useEffect, useState } from "react";
import ThemeBgAnimation from "./ui/ThemeBgAnimation";
import { Footer } from "./components/Footer";

export default function Home() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMount(true);
  }, []);

  if (!mount) return null;

  return (
    <main className="h-dvh w-dvw flex flex-col items-center overflow-x-hidden">
      <ThemeBgAnimation />
      <HeroSection />
      <Footer />
    </main>
  );
}
