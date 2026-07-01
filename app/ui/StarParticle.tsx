"use client";

import { useEffect } from "react";
import { Fill, tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const StarParticle = () => {
  useEffect(() => {
    const init = async () => {
      await loadSlim(tsParticles);

      await tsParticles.load({
        id: "stars",
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
              value: 500,
              density: {
                enable: true,
                width: 1920,
                height: 1080,
              },
            },
            color: {
              value: {
                value: "#00ff00",
              },
            },
            shape: {
              type: "star",
            },
            opacity: {
              value: {
                min: 0.2,
                max: 1,
              },
            },
            size: {
              value: {
                min: 0.5,
                max: 0.9,
              },
            },
            move: {
              enable: false,
            },
          },
        },
      });
    };
    init();
  }, []);

  return (
    <div id="stars" className="absolute inset-0 -z-10 pointer-events-none" />
  );
};
