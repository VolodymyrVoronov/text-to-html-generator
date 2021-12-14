import { CSSProperties, FC, ReactNode } from "react";
import Typist from "react-typist";

interface ITypistAnimationProps {
  avgTypingDelay?: number;
  startDelay?: number;
  stdTypingDelay?: number;
  cursorShow?: boolean;
  cursorBlink?: boolean;
  cursorElement?: string;
  cursorHideWhenDone?: boolean;
  cursorHideWhenDoneDelay?: number;
  onTypingDone?: () => void;
  styles?: CSSProperties;
  children?: string | ReactNode;
}

const TypistAnimation: FC<ITypistAnimationProps> = ({
  avgTypingDelay,
  startDelay,
  stdTypingDelay,
  cursorShow = true,
  cursorBlink = false,
  cursorElement = "|",
  cursorHideWhenDone = false,
  cursorHideWhenDoneDelay = 1000,
  onTypingDone,
  styles,
  children,
}): JSX.Element => {
  return (
    <span style={{ ...styles }}>
      <Typist
        avgTypingDelay={avgTypingDelay}
        startDelay={startDelay}
        stdTypingDelay={stdTypingDelay}
        onTypingDone={onTypingDone}
        cursor={{
          show: cursorShow,
          blink: cursorBlink,
          element: cursorElement,
          hideWhenDone: cursorHideWhenDone,
          hideWhenDoneDelay: cursorHideWhenDoneDelay,
        }}
      >
        {children}
      </Typist>
    </span>
  );
};

export default TypistAnimation;
