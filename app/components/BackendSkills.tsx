import Image from "next/image";

import { motion } from "motion/react";
import { BackendSkills } from "../constants/backend_skills";

export const Backend = () => {
  return (
    <div className="border border-primary-text/15 rounded-2xl backdrop-blur-[.15rem] p-2 mt-4">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold mt-4">Backend Skills</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {BackendSkills.map((elem, index) => {
            return (
              <motion.div
                key={index}
                className="flex items-center gap-3 w-fit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex justify-center items-center h-8 w-8 bg-badge rounded-lg">
                  <Image
                    src={elem.icon}
                    alt={elem.title}
                    height={25}
                    width={25}
                  />
                </div>
                <h6 className="text-sm">{elem.title}</h6>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
