"use client";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { initParticles } from "../lib/initParticle";
export const SnowParticle = () => {
  const { resolvedTheme } = useTheme();
  useEffect(() => {
    const init = async () => {
      await initParticles();

      await tsParticles.load({
        id: "snow",
        options: {
          fullScreen: {
            enable: false,
          },
          background: {
            color: "transparent",
          },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: {
              value: 40,
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: {
                min: 0.1,
                max: 0.8,
              },
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
            },
            move: {
              enable: true,
              direction: "bottom-right",
              speed: { min: 3, max: 5 },
              straight: true,
            },
          },
        },
      });
    };
    init();
  }, []);

  return (
    <div
      id="snow"
      className={`absolute inset-0 pointer-events-none ${
        resolvedTheme === "dark" ? "" : "hidden"
      }`}
    />
  );
};
