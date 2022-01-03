import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router';
import Prism from 'prismjs';
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

export default function AbroadEditor({ match }) {
  const titleRef = useRef();
  const editorRef = useRef();
  const history = useHistory();

  const routeToList = () => {
    history.push({
      pathname: '/all',
    });
  };

  const TEXT_EDITOR_ITEM = `text-editor-item_${match.path}`;
  const localEditData = localStorage.getItem(TEXT_EDITOR_ITEM);

  const initialValue = localEditData ?? '';
  const saveToLocalStorage = () => {
    const data = editorRef.current.getInstance().getMarkdown();
    localStorage.setItem(TEXT_EDITOR_ITEM, data);
  };

  const [userName, setUserName] = useState(null);
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [date, setDate] = useState(null);
  const routeWithData = () => {
    setDate(moment().format('YYYY-MM-DD HH:mm'));

    const pageData = {
      title,
      body,
      date,
      likes: 0,
      userName,
    };
    history.push({
      pathname: '/qna-detail',
    });
  };

  useEffect(() => {
    editorRef.current.getInstance().removeHook('addImageBlobHook');
    editorRef.current
      .getInstance()
      .addHook('addImageBlobHook', (blob, callback) => {
        (async () => {
          let formData = new FormData();
          formData.append('file', blob);

          axios.defaults.withCredentials = true;
          const { data: url } = await axios.post(
            // `${backUrl}image.do`,
            formData,
            {
              header: { 'content-type': 'multipart/formdata' },
            }
          );
          callback(url, 'alt text');
        })();

        return false;
      });

    return () => {};
  }, [editorRef]);

  return (
    <Div>
      <UpstreamSection>
        <span>커뮤니티</span>
        <span>전체 게시판</span>
      </UpstreamSection>
      <PageInfoBox>
        <span className="title">제목</span>
        <input
          className="titleInput"
          ref={titleRef}
          onChange={() => {
            const innerTxt = titleRef.current.value;
            setTitle(innerTxt);
          }}
        />
      </PageInfoBox>
      <ToastEditor>
        <Editor
          height="600px"
          previewStyle="tab"
          initialEditType="markdown"
          useCommandShortcut={true}
          placeholder="내용을 입력해주세요"
          initialValue={initialValue}
          plugins={[
            colorSyntax,
            chart,
            [codeSyntaxHighlight, { highlighter: Prism }],
          ]}
          onChange={() => {
            const innerTxt = editorRef.current.getInstance().getMarkdown();
            setBody(innerTxt);
          }}
          ref={editorRef}
        />
      </ToastEditor>
      <SaveArticle>
        <button onClick={routeToList}>목록으로</button>
        <button onClick={saveToLocalStorage}>임시저장</button>
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
  border-radius: 30px/30px;

  & > span:first-child::after {
    content: '|';
    margin: 0 5px;
  }
  & > span:last-child {
    font-weight: 900;
  }
`;

const PageInfoBox = styled.div`
  width: 100%;
  height: 65px;
  flex: 1 1 45%;
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
