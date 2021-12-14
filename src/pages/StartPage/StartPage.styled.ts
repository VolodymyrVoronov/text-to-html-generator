import styled from "styled-components";
import { colors } from "styles/colors";

const StartPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

const StartPageBody = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;

  width: 1024px;
`;

const StartPageInput = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

const StartPageInputBlock = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 170px;

  margin: 15px 0;
  padding: 15px;

  border: 2px solid ${colors.primaryLightBlack};
  border-radius: 15px;
`;

const StartPageOutput = styled(StartPageInput)``;

const StartPageOutputBlock = styled(StartPageInputBlock)``;

export {
  StartPageContainer,
  StartPageBody,
  StartPageInput,
  StartPageInputBlock,
  StartPageOutput,
  StartPageOutputBlock,
};
