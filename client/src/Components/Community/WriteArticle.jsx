import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import Prism from 'prismjs';
import { backUrl } from '../../utils/useBackUrl';
import moment from 'moment';
// 안써도 자동으로 한국 시간을 불러온다. 명확하게 하기 위해 import
import 'moment/locale/ko';

import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
// color plugin
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

//chart plugin
import '@toast-ui/chart/dist/toastui-chart.css';
import chart from '@toast-ui/editor-plugin-chart';

// code syntax highliter plugin
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import { useSetRecoilState } from 'recoil';
import {
  ArticleTitle,
  ArticleContent,
  ArticleCreateDate,
} from '../../Store/atom';

export default function WriteArticle() {
  const titleRef = useRef();
  const editorRef = useRef();
  const setTitle = useSetRecoilState(ArticleTitle);
  const setDate = useSetRecoilState(ArticleCreateDate);
  const setContent = useSetRecoilState(ArticleContent);

  const history = useHistory();
  const routeToArticeList = () => {
    history.push({
      pathname: '/all',
    });
  };

  const routeWithData = () => {
    const newTitle = titleRef.current.value;
    setTitle(newTitle);
    const newContent = editorRef.current.getInstance().getMarkdown();
    setContent(newContent);
    const createDate = moment().format('YYYY-MM-DD HH:mm:ss');
    setDate(createDate);
    history.push({
      pathname: '/article-detail',
      state: {
        title: newTitle,
        content: newContent,
        date: createDate,
      },
    });
  };

  useEffect(() => {
    // 이미지 추가시 base64로 표현되는 오류. 추후 해결을 위해 코드를 작성함.
    return () => {};
  }, [editorRef]);
  return (
    <Div>
      <UpstreamSection>
        <span>커뮤니티</span>
        <span>전체 게시판</span>
      </UpstreamSection>
      <TitleOverview>
        <span className="title">제목</span>
        <input
          className="titleInput"
          ref={titleRef}
          onChange={() => {
            const innerTxt = titleRef.current.value;
            setTitle(innerTxt);
          }}
        />
      </TitleOverview>
      <ToastEditor>
        <Editor
          height="750px"
          ref={editorRef}
          previewStyle="tab"
          initialEditType="markdown"
          useCommandShortcut={true}
          placeholder="내용을 입력해주세요"
          plugins={[
            colorSyntax,
            chart,
            [codeSyntaxHighlight, { highlighter: Prism }],
          ]}
          onChange={() => {
            const innerTxt = editorRef.current.getInstance().getMarkdown();
            setContent(innerTxt);
          }}
        />
      </ToastEditor>
      <FileOverview>
        <span className="file">파일</span>
        <input className="fileInput"></input>
      </FileOverview>
      <SaveArticle>
        <button onClick={routeToArticeList}>목록으로</button>
        <button>임시저장</button>
        <button onClick={routeWithData}>등록하기</button>
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
  height: 65px;
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
    padding: 2em;
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
