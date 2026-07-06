"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export const StarParticle = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const drawStars = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < 50; i++) {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        const size = Math.random() * 3 + 1;
        const opacity = Math.random() * 0.7 + 0.2;

        const blur = Math.random() > 0.85 ? 1 : 0;
        const glow = Math.random() > 0.7;

        ctx.save();

        ctx.globalAlpha = opacity;
        ctx.fillStyle = "white"; // or your theme color

        if (blur) {
          ctx.filter = `blur(${blur}px)`;
        }

        if (glow) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = "white";
        }

        ctx.beginPath();
        ctx.arc(x, y, size / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    };

    drawStars();

    window.addEventListener("resize", drawStars);

    return () => {
      window.removeEventListener("resize", drawStars);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    />
  );
};
