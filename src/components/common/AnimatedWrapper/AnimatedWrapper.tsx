import { CSSProperties, FC } from "react";
import { motion } from "framer-motion";

interface IAnimatedWrapperProps {
  initialValue: Object;
  animateValue: Object;
  transitionValue: Object;
  styles?: CSSProperties;
}

const AnimatedWrapper: FC<IAnimatedWrapperProps> = ({
  initialValue,
  animateValue,
  transitionValue,
  styles,
  children,
}): JSX.Element => {
  return (
    <motion.div
      initial={initialValue}
      animate={animateValue}
      style={styles}
      transition={transitionValue}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;
