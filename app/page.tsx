"use client";
import { HeroSection } from "./components/HeroSection";

import ThemeBgAnimation from "./ui/ThemeBgAnimation";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="h-dvh w-dvw flex flex-col items-center overflow-x-hidden">
      <ThemeBgAnimation />
      <HeroSection />
      <Footer />
    </main>
  );
}
