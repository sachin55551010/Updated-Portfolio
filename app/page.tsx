"use client";
import { HeroSection } from "./components/HeroSection";
import { useTheme } from "next-themes";
import Stars from "./ui/Stars";

export default function Home() {
  const { resolvedTheme } = useTheme();
  console.log(resolvedTheme);

  return (
    <main className="h-dvh w-dvw flex flex-col items-center overflow-x-hidden">
      {resolvedTheme === "dark" && <Stars />}

      <HeroSection />
    </main>
  );
}
