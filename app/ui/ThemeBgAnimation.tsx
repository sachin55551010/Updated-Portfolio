"use client";
import { motion } from "motion/react";
import { StarParticle } from "./StarParticle";
import { SnowParticle } from "./SnowParticle";
// import { StarParticle } from "./StarParticle";
// import { SnowParticle } from "./SnowParticle";
export default function ThemeBgAnimation() {
  return (
    <div
      className={`fixed top-0 left-0 h-dvh w-screen overflow-hidden pointer-events-none`}
    >
      <motion.div
        className="fixed top-0 left-0 h-dvh w-screen overflow-hidden pointer-events-none bg-white"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.25, 0, 0.15, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 6,
          ease: "easeOut",
        }}
      ></motion.div>

      {/* snow effect*/}
      <SnowParticle />

      {/* stars */}
      <StarParticle />
    </div>
  );
}
