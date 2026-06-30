"use client";
import { useMemo } from "react";
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
    </div>
  );
}
