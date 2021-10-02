import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';

export default function WriteArticle() {
  const editorRef = useRef();

  const saveFunction = () => {
    console.log('hi');
  };

  return (
    <Div>
      <UpstreamSection>
        <span>커뮤니티</span>
        <span>자유게시판</span>
      </UpstreamSection>
      <TitleOverview>
        <span className="title">제목</span>
        <input className="titleInput"></input>
      </TitleOverview>
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
      <FileOverview>
        <span className="file">파일</span>
        <input className="fileInput"></input>
      </FileOverview>
      <SaveArticle onClick={saveFunction}>
        <button>목록으로</button>
        <button>임시저장</button>
        <button>등록하기</button>
      </SaveArticle>
    </Div>
  );
}

const Div = styled.div`
  width: 71%;
  height: 100%;
  margin: 0 auto;
  margin: 3.5em auto;
`;

const UpstreamSection = styled.div`
  width: 100%;
  min-height: 4em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 3em;
  background-color: #66a6ff;
  color: white;
  padding-left: 2em;

  & > span:first-child::after {
    content: '|';
    margin: 0 5px;
  }
  & > span:last-child {
    font-weight: 900;
  }
`;

const TitleOverview = styled.div`
  width: 100%;
  height: 70px;
  border: 0.2px solid #d1d1d1;
  border-radius: 30px/30px;
  display: flex;
  align-items: center;
  margin: 2em auto;

  & > .title {
    flex: 1 1 10%;
    height: 100%;
    border-right: 0.2px solid #d1d1d1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #66a6ff;
    font-size: 1rem;
    font-weight: bold;
  }

  & > .titleInput {
    flex: 1 1 90%;
    height: 100%;
    overflow: hidden;
  }
`;

const ToastEditor = styled.div`
  width: 100%;
  margin: 2em auto;
  border: 0.2px solid #d1d1d1;
  overflow: hidden;
  border-radius: 30px/30px;
`;

const FileOverview = styled.div`
  width: 100%;
  height: 90px;
  border: 0.2px solid #d1d1d1;
  border-radius: 30px/30px;
  display: flex;
  align-items: center;
  margin: 2em auto;

  & > .file {
    flex: 1 1 10%;
    height: 100%;
    border-right: 0.2px solid #d1d1d1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #66a6ff;
    font-size: 1rem;
    font-weight: bold;
  }

  & > .fileInput {
    flex: 1 1 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SaveArticle = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.3em 1em;

  & > button {
    width: 180px;
    height: 55px;
    border: 0.2px solid #66a6ff;
    border-radius: 30px/30px;
    margin: 0 0.5em;
  }

  & > button:last-child {
    background: #66a6ff;
    color: white;
  }
`;
