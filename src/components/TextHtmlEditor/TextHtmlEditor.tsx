import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import { TextHtmlEditorContainer } from "./TextHtmlEditor.styled";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class TextHtmlEditor extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange: any = (editorState: any) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <TextHtmlEditorContainer>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </TextHtmlEditorContainer>
    );
  }
}

export default TextHtmlEditor;
