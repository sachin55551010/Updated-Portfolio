import { motion } from "motion/react";

import type { ReactNode } from "react";

type SectionModalAnimationProps = {
  children: ReactNode;
};

export const SectionModalAnimation = ({
  children,
}: SectionModalAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};
