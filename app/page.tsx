"use client";
import { HeroSection } from "./components/HeroSection";

import Stars from "./ui/Stars";

export default function Home() {
  return (
    <main className="h-dvh w-dvw flex flex-col items-center overflow-x-hidden">
      <Stars />
      <HeroSection />
    </main>
  );
}
