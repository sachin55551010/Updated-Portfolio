"use client";

import { useState } from "react";
import { Testimonnial_Data } from "../constants/Testimonial_data";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

export const TestimonialsSection = () => {
  const [active, setActive] = useState(Testimonnial_Data[0]);

  const handleNextBtn = () => {
    setActive((prev) => {
      const currentIndex = Testimonnial_Data.indexOf(prev);

      if (currentIndex === Testimonnial_Data.length - 1) {
        return Testimonnial_Data[0];
      }

      return Testimonnial_Data[currentIndex + 1];
    });
  };

  const handlePrevBtn = () => {
    setActive((prev) => {
      const currentIndex = Testimonnial_Data.indexOf(prev);

      if (currentIndex === 0) {
        return Testimonnial_Data[Testimonnial_Data.length - 1];
      }
      return Testimonnial_Data[currentIndex - 1];
    });
  };

  return (
    <div className="border border-primary-text/15 p-6 flex flex-col items-center justify-center backdrop-blur-[.15rem] rounded-2xl">
      {/* testimonial section */}
      <div className="flex gap-4 justify-center max-w-[90%]">
        {/* image */}
        <div className="h-35 min-w-35 bg-primary-text rounded-2xl"></div>

        {/* right side */}
        <div className="flex flex-col gap-2">
          <h4 className="text-[.8rem] font-bold">{active.name}</h4>
          <p className="text-[.6rem] text-primary-text/50">
            {active.description}
          </p>
          <p className="text-[.6rem] mt-2">{active.quote}</p>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={handlePrevBtn}
          className="p-2 rounded-lg bg-primary-text/10 text-primary-text hover:bg-primary-text/20 transition-all duration-300"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={handleNextBtn}
          className="p-2 rounded-lg bg-primary-text/10 text-primary-text hover:bg-primary-text/20 transition-all duration-300"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};
