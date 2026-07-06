"use client";

import { useEffect } from "react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const SnowParticle = () => {
  useEffect(() => {
    const init = async () => {
      await loadSlim(tsParticles);

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
                min: 2,
                max: 5,
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
      className="fixed top-0 left-0 h-dvh w-screen -z-10 pointer-events-none"
    />
  );
};
