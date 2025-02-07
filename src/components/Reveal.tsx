import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
  children: JSX.Element;
  className?: string;
  controls?: {
    delay?: number;
    duration?: number;
    hidden?: {
      x?: number;
      y?: number;
    };
    visible?: {
      x?: number;
      y?: number;
    };
  };
}

export const Reveal = ({ children, className, controls }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: controls?.hidden?.y || 75,
            x: controls?.hidden?.x || 0,
          },
          visible: {
            opacity: 1,
            y: controls?.visible?.y || 0,
            x: controls?.visible?.x || 0,
          },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: controls?.duration || 0.75,
          delay: controls?.delay || 0.5,
        }}>
        {children}
      </motion.div>
    </div>
  );
};
