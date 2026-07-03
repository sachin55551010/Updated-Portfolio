"use client";

import { Testimonnial_Data } from "../constants/Testimonial_data";

export const TestimonialsSection = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-8 rounded-2xl">
      <div className="flex gap-6 flex-col">
        {Testimonnial_Data.map((elem, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-2 border rounded-2xl p-4 backdrop-blur-[.15rem] border-primary-text/15"
            >
              <h6>{elem.name}</h6>
              <p className="text-sm italic">{elem.quote}</p>
              <p className="text-sm">{elem.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
