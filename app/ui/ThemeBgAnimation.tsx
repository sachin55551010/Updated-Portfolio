"use client";

import { StarParticle } from "./StarParticle";

export default function ThemeBgAnimation() {
  return (
    <div
      className={`fixed top-0 left-0 h-dvh w-screen overflow-hidden pointer-events-none`}
    >
      {/* stars */}
      <StarParticle />
    </div>
  );
}
