import { FC } from "react";

import TextHtmlEditor from "components/TextHtmlEditor/TextHtmlEditor";

const EditorPage: FC<{}> = (): JSX.Element => {
  return (
    <div>
      <TextHtmlEditor />
    </div>
  );
};

export default EditorPage;
