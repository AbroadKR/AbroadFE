import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import {
  ArticleTitle,
  ArticleContent,
  ArticleCreateDate,
} from '../../Store/atom';

export default function ArticleDetail() {
  const title = useRecoilValue(ArticleTitle);
  const content = useRecoilValue(ArticleContent);
  const date = useRecoilValue(ArticleCreateDate);
  return (
    <CommunityWrap>
      <UpstreamSection>
        <span>커뮤니티</span>
        <span>아시아 질문게시판</span>
      </UpstreamSection>
      <UserBox>
        <UserInfoBox>
          <span>작성자 | Abroad12님</span>
          <span>{title}</span>
          <span>게시일 | {date}</span>
        </UserInfoBox>
        <ContentBox readOnly value={content} />
      </UserBox>
      <CommentBox>
        <CommentInfo>
          <span>Abroad12님 님의답변</span>
          <span>답변일 | 2021년 08월 08일(월)</span>
        </CommentInfo>
        <CommentsContent />
      </CommentBox>
      <CommentBox>
        <CommentInfo>
          <span>Abroad12님 님의답변</span>
          <span>답변일 | 2021년 08월 08일(월)</span>
        </CommentInfo>
        <CommentsContent />
      </CommentBox>
      <CommentInput>
        <p>이 질문에 답변하기</p>
        <textarea placeholder="내용을 입력해주세요" />
      </CommentInput>
    </CommunityWrap>
  );
}

const CommunityWrap = styled.div`
  width: 75vw;
  height: 100%;
  margin: 3.5em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UpstreamSection = styled.div`
  width: 85%;
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

const UserBox = styled.article`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UserInfoBox = styled.section`
  width: 100%;
  height: 45px;
  border: 0.2px solid #d1d1d1;
  border-radius: 35px;
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  color: #66a6ff;
  font-weight: bold;

  & > span:nth-child(2) {
    color: black;
  }
`;
const ContentBox = styled.textarea`
  width: 100%;
  height: 250px;
  border: 0.2px solid #d1d1d1;
  border-radius: 35px;
  margin: 1em auto;
  padding: 1.3em;
  -webkit-appearance: none;
`;

const CommentBox = styled.article`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CommentInfo = styled.section`
  width: 100%;
  height: 45px;
  border: 0.2px solid #d1d1d1;
  border-radius: 35px;
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  color: #66a6ff;
  font-weight: bold;
`;
const CommentsContent = styled.section`
  width: 100%;
  height: 100px;
  border: 0.2px solid #d1d1d1;
  border-radius: 35px;
  margin: 1em auto;
`;
const CommentInput = styled.article`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    width: 100%;
    color: #66a6ff;
    font-size: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & > textarea {
    width: 100%;
    height: 250px;
    border: 0.2px solid #d1d1d1;
    border-radius: 35px;
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1.3em;
  }
`;
