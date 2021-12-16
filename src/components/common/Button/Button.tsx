import React, { memo, FC, CSSProperties } from "react";

import { ButtonContainer } from "./Button.styled";

interface IButtonProps {
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
  styles?: CSSProperties;
  children: React.ReactNode;
}

const Button: FC<IButtonProps> = ({
  onClick,
  disabled,
  ariaLabel,
  styles,
  children,
}): JSX.Element => {
  return (
    <ButtonContainer
      onClick={onClick}
      disabled={disabled}
      isDisabled={disabled}
      type="button"
      aria-label={ariaLabel}
      style={styles}
    >
      {children}
    </ButtonContainer>
  );
};

export default memo(Button);
