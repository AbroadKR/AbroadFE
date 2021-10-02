import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

export default function WriteArticle() {
  const editorRef = useRef();

  return (
    <ToastEditor>
      <Editor
        initialValue="hello react editor world!"
        previewStyle="vertical"
        height="750px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
      />
    </ToastEditor>
  );
}

const ToastEditor = styled.div`
  width: 71vw;
  margin: 2em auto;
`;
