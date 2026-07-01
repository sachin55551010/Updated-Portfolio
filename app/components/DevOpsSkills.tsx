import Image from "next/image";

import { motion } from "motion/react";
import { ToolsDevops } from "../constants/tools_devops";
export const DevOps = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold mt-4">Tools & Devops</h2>
        <div className="grid grid-cols-3 gap-2">
          {ToolsDevops.map((elem, index) => {
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
