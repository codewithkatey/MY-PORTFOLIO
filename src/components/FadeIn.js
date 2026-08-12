import React from "react";
import { motion } from "framer-motion";
import useInView from "../hook/useInView";

function FadeIn({ children, delay = 0, y = 28, className }) {
  const [ref, inView] = useInView({ once: true, threshold: 0.08 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;
