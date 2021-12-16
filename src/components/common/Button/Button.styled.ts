import styled from "styled-components";

import { colors } from "styles/colors";

interface IButtonContainerProps {
  isDisabled?: boolean;
}

const ButtonContainer = styled.button<IButtonContainerProps>`
  display: flex;

  margin: 0 auto;
  padding: 10px 25px;

  font-size: 32px;
  color: ${colors.black};

  border: 2px solid ${colors.blackOpacity03};
  border-radius: 15px;

  background: ${colors.blackOpacity01};

  cursor: pointer;

  transition: 250ms ease;

  &:hover {
    border: 2px solid ${colors.blackOpacity09};

    background: ${colors.primaryYellow};

    transition: 250ms ease;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export { ButtonContainer };
