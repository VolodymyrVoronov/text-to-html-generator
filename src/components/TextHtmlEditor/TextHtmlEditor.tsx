import { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import Button from "components/common/Button/Button";
import Typography from "components/Typography/Typography";

import {
  TextHtmlEditorContainer,
  TextHtmlEditorButtons,
} from "./TextHtmlEditor.styled";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class TextHtmlEditor extends Component<any> {
  textArea: any;
  copySuccess: boolean | undefined;

  constructor(props: any) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      copySuccess: false,
    };
  }

  onEditorStateChange: any = (editorState: string) => {
    this.setState({
      editorState,
      copySuccess: false,
    });
  };

  onClearButtonClick = () => {
    this.setState({
      editorState: EditorState.createEmpty(),
      copySuccess: false,
    });
  };

  onCopeButtonClick = () => {
    this.textArea.select();
    document.execCommand("copy");
    this.textArea.focus();
    this.setState({ copySuccess: true });
  };

  render() {
    const { editorState, copySuccess }: any = this.state;

    return (
      <TextHtmlEditorContainer>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          ref={(textarea) => (this.textArea = textarea)}
          readOnly
        />

        <TextHtmlEditorButtons>
          <Button
            onClick={this.onClearButtonClick}
            ariaLabel="Clear fields"
            styles={{ margin: 0, marginRight: 25 }}
          >
            Clear
          </Button>

          <Button
            onClick={this.onCopeButtonClick}
            ariaLabel="Copy"
            styles={{ margin: 0 }}
          >
            {copySuccess ? (
              <Typography
                styles={{
                  fontSize: "32px",
                }}
              >
                Copied&nbsp;&#10004;
              </Typography>
            ) : (
              <Typography
                styles={{
                  fontSize: "32px",
                }}
              >
                Copy&nbsp;&#9998;
              </Typography>
            )}
          </Button>
        </TextHtmlEditorButtons>
      </TextHtmlEditorContainer>
    );
  }
}

export default TextHtmlEditor;
