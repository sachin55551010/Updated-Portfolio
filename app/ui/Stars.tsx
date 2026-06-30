"use client";
import { useMemo } from "react";
import { motion } from "motion/react";
export default function Stars({ count = 70, className = "" }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      // eslint-disable-next-line react-hooks/purity
      top: Math.random() * 100,
      // eslint-disable-next-line react-hooks/purity
      left: Math.random() * 100,

      // Tiny star sizes
      // eslint-disable-next-line react-hooks/purity
      size: [1, 1.2, 1.5, 1.8, 2][Math.floor(Math.random() * 5)],

      // eslint-disable-next-line react-hooks/purity
      opacity: 0.4 + Math.random() * 0.6,

      // Slight blur for some stars
      // eslint-disable-next-line react-hooks/purity
      blur: Math.random() > 0.85,

      // Few brighter stars
      // eslint-disable-next-line react-hooks/purity
      bright: Math.random() > 0.9,
    }));
  }, [count]);

  const rain = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      // eslint-disable-next-line react-hooks/purity
      left: Math.random() * 100,
      // eslint-disable-next-line react-hooks/purity
      delay: Math.random() * 2,
      // eslint-disable-next-line react-hooks/purity
      duration: 0.45 + Math.random() * 0.45,
      // eslint-disable-next-line react-hooks/purity
      length: 10 + Math.random() * 18,
      // eslint-disable-next-line react-hooks/purity
      opacity: 0.15 + Math.random() * 0.35,
    }));
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className={`absolute rounded-full bg-white ${
            star.blur ? "blur-[1px]" : ""
          } ${star.bright ? "shadow-[0_0_8px_white]" : ""}`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}

      {/* lighting effect */}
      <motion.div
        className="inset-0 absolute bg-white"
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

      {/* rain effect */}

      <div className="absolute inset-0 overflow-hidden">
        {rain.map((drop) => (
          <motion.span
            key={drop.id}
            className="absolute top-[-20%] rounded-full bg-linear-to-b from-white via-white/70 to-transparent"
            style={{
              left: `${drop.left}%`,
              width: "1.2px",
              height: `${drop.length}px`,
              opacity: drop.opacity,
            }}
            animate={{
              x: [0, 35],
              y: ["-10vh", "120vh"],
            }}
            transition={{
              duration: drop.duration,
              delay: drop.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ---------------- SKY GLOW ---------------- */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/20 via-transparent to-slate-950/40"></div>
    </div>
  );
}
