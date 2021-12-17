import styled from "styled-components";

import { colors } from "styles/colors";

const TextHtmlEditorContainer = styled.div`
  display: block;

  width: 1200px;
  height: 100vh;

  margin: 0 auto;
  margin-bottom: 25px;

  .demo-wrapper.rdw-editor-wrapper {
    display: block;

    min-height: 450px;
  }

  .demo-editor.rdw-editor-main {
    min-height: 350px;

    margin-bottom: 25px;
    padding: 5px;

    border: 2px solid ${colors.blackOpacity03};
    border-radius: 15px;

    background-color: ${colors.blackOpacity01};
  }

  textarea {
    display: block;

    width: 100%;
    min-height: 350px;

    padding: 5px;

    font-size: 18px;
    font-weight: bold;

    border: 2px solid ${colors.blackOpacity03};
    border-radius: 15px;

    background-color: ${colors.blackOpacity01};

    cursor: default;
    pointer-events: none;
  }
`;

const TextHtmlEditorButtons = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 25px;
`;

export { TextHtmlEditorContainer, TextHtmlEditorButtons };
