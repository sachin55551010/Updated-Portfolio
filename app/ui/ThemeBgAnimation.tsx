"use client";
import { motion } from "motion/react";
import { StarParticle } from "./StarParticle";
import { SnowParticle } from "./SnowParticle";
export default function ThemeBgAnimation() {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none`}>
      {/* bg stars */}

      <StarParticle />
      {/* lighting effect */}
      <motion.div
        className="inset-0 absolute overflow-hidden pointer-events-none bg-white"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.25, 0, 0.15, 0],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "easeOut",
        }}
      ></motion.div>

      {/* snow effect*/}
      <SnowParticle />

      {/* ---------------- SKY GLOW ---------------- */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-slate-900/20 via-transparent to-slate-950/40"></div> */}
    </div>
  );
}
