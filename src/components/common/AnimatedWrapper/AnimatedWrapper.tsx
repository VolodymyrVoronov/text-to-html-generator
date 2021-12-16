import { FC } from "react";
import { motion } from "framer-motion";

interface IAnimatedWrapperProps {
  initialValue: Object;
  animateValue: Object;
  transitionValue: Object;
}

const AnimatedWrapper: FC<IAnimatedWrapperProps> = ({
  initialValue,
  animateValue,
  transitionValue,
  children,
}): JSX.Element => {
  return (
    <motion.div
      initial={initialValue}
      animate={animateValue}
      transition={transitionValue}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
