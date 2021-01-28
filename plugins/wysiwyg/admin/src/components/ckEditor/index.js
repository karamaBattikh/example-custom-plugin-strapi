import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const configuration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "indent",
    "outdent",
    "|",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
  ],
};

const Editor = ({ onChange, name, value }) => (
  <CKEditor
    editor={ClassicEditor}
    config={configuration}
    data={value}
    onChange={(event, editor) => {
      const data = editor.getData();
      onChange({ target: { name, value: data } });
    }}
  />
);

export default Editor;
