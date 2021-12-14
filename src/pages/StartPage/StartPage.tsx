import { FC, useCallback, useState } from "react";

import Typography from "components/Typography/Typography";
import TypistAnimation from "components/TypistAnimation/TypistAnimation";

import {
  StartPageContainer,
  StartPageBody,
  StartPageInput,
  StartPageInputBlock,
  StartPageOutput,
  StartPageOutputBlock,
} from "./StartPage.styled";

const useIsTypingDone = () => {
  const [isTypingDone, setIsTypingDone] = useState<boolean>(false);

  const toggleTypingDone = useCallback(() => {
    setIsTypingDone(() => true);
  }, []);

  return { toggleTypingDone, isTypingDone };
};

const StartPage: FC<{}> = (): JSX.Element => {
  const { toggleTypingDone, isTypingDone } = useIsTypingDone();

  const onTypingDoneHandler = () => {
    toggleTypingDone();
  };

  console.log(isTypingDone);

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
              avgTypingDelay={100}
              startDelay={1000}
              cursorHideWhenDone={true}
              onTypingDone={onTypingDoneHandler}
              styles={{ margin: "7px 0", fontSize: "24px", fontWeight: 500 }}
            >
              React makes it painless to create interactive UIs.
            </TypistAnimation>
            {/* <TypistAnimation
              avgTypingDelay={100}
              startDelay={1000}
              cursorHideWhenDone={true}
              styles={{ margin: "7px 0", fontSize: "24px", fontWeight: 500 }}
            >
              Build encapsulated components that manage their own state, then
              compose them to make complex UIs.
            </TypistAnimation>
            <TypistAnimation
              avgTypingDelay={100}
              startDelay={1000}
              cursorHideWhenDone={true}
              styles={{ margin: "7px 0", fontSize: "24px", fontWeight: 500 }}
            >
              Since component logic is written in JavaScript instead of
              templates, you can easily pass rich data through your app and keep
              state out of the DOM
            </TypistAnimation> */}
          </StartPageInputBlock>
        </StartPageInput>
        <StartPageOutput>
          <Typography
            styles={{ display: "flex", fontSize: "24px", lineHeight: "42px" }}
          >
            Output:
          </Typography>
          <StartPageOutputBlock>
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
            <Typography
              styles={{
                display: "flex",
                margin: "7px 0",
                fontSize: "24px",
              }}
            >
              {
                "<p>Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM&nbsp;</p>"
              }
            </Typography>
          </StartPageOutputBlock>
        </StartPageOutput>
      </StartPageBody>
    </StartPageContainer>
  );
};

export default StartPage;
