import { FC, useState } from "react";

import Typography from "components/Typography/Typography";
import TypistAnimation from "components/TypistAnimation/TypistAnimation";
import AnimatedWrapper from "components/common/AnimatedWrapper/AnimatedWrapper";

import {
  StartPageContainer,
  StartPageBody,
  StartPageInput,
  StartPageInputBlock,
  StartPageOutput,
  StartPageOutputBlock,
} from "./StartPage.styled";

const StartPage: FC<{}> = (): JSX.Element => {
  const [firstTextTyped, setFirstTextTyped] = useState<boolean>(false);
  const [secondTextTyped, setSecondTextTyped] = useState<boolean>(false);
  const [thirdTextTyped, setThirdTextTyped] = useState<boolean>(false);

  const firstTextTypingDoneHandler = () => setFirstTextTyped(() => true);
  const secondTextTypingDoneHandler = () => setSecondTextTyped(() => true);
  const thirdTextTypingDoneHandler = () => setThirdTextTyped(() => true);

  return (
    <StartPageContainer>
      <StartPageBody>
        <StartPageInput>
          <Typography
            styles={{ display: "flex", fontSize: "36px", lineHeight: "42px" }}
          >
            Input:
          </Typography>
          <StartPageInputBlock>
            <TypistAnimation
              avgTypingDelay={50}
              startDelay={250}
              cursorHideWhenDone={true}
              onTypingDone={firstTextTypingDoneHandler}
              styles={{ margin: "7px 0", fontSize: "24px", fontWeight: 500 }}
            >
              React makes it painless to create interactive UIs.
            </TypistAnimation>

            {firstTextTyped && (
              <TypistAnimation
                avgTypingDelay={50}
                startDelay={250}
                cursorHideWhenDone={true}
                onTypingDone={secondTextTypingDoneHandler}
                styles={{ margin: "7px 0", fontSize: "24px", fontWeight: 500 }}
              >
                Build encapsulated components that manage their own state, then
                compose them to make complex UIs.
              </TypistAnimation>
            )}

            {secondTextTyped && (
              <TypistAnimation
                avgTypingDelay={50}
                startDelay={250}
                cursorHideWhenDone={true}
                onTypingDone={thirdTextTypingDoneHandler}
                styles={{ margin: "7px 0", fontSize: "24px", fontWeight: 500 }}
              >
                Since component logic is written in JavaScript instead of
                templates, you can easily pass rich data through your app and
                keep state out of the DOM.
              </TypistAnimation>
            )}
          </StartPageInputBlock>
        </StartPageInput>
        <StartPageOutput>
          <Typography
            styles={{ display: "flex", fontSize: "36px", lineHeight: "42px" }}
          >
            Output:
          </Typography>
          <StartPageOutputBlock>
            {firstTextTyped && (
              <AnimatedWrapper
                initialValue={{ opacity: 0 }}
                animateValue={{ opacity: 1 }}
                transitionValue={{ ease: "easeOut", duration: 2 }}
              >
                <Typography
                  styles={{
                    display: "flex",
                    margin: "7px 0",
                    fontSize: "24px",
                  }}
                >
                  {
                    "<p>React makes it painless to create interactive UIs.&nbsp;</p>"
                  }
                </Typography>
              </AnimatedWrapper>
            )}

            {secondTextTyped && (
              <AnimatedWrapper
                initialValue={{ opacity: 0 }}
                animateValue={{ opacity: 1 }}
                transitionValue={{ ease: "easeOut", duration: 2 }}
              >
                <Typography
                  styles={{
                    display: "flex",
                    margin: "7px 0",
                    fontSize: "24px",
                  }}
                >
                  {
                    "<p>Build encapsulated components that manage their own state, then compose them to make complex UIs.&nbsp;</p>"
                  }
                </Typography>
              </AnimatedWrapper>
            )}

            {thirdTextTyped && (
              <AnimatedWrapper
                initialValue={{ opacity: 0 }}
                animateValue={{ opacity: 1 }}
                transitionValue={{ ease: "easeOut", duration: 2 }}
              >
                <Typography
                  styles={{
                    display: "flex",
                    margin: "7px 0",
                    fontSize: "24px",
                  }}
                >
                  {
                    "<p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.&nbsp;</p>"
                  }
                </Typography>
              </AnimatedWrapper>
            )}
          </StartPageOutputBlock>
        </StartPageOutput>
      </StartPageBody>
    </StartPageContainer>
  );
};

export default StartPage;
