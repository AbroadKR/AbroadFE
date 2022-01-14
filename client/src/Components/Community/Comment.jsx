import React from 'react';
import styled from 'styled-components';

function Comment({ comments }) {
  return comments.map((comment) => (
    <CommentBox key={comment._id}>
      <CommentInfo>
        <span>{comment.owner.name}님의 답변</span>
        <CreatedAt>답변일 | {Date(comment.createdAt)}</CreatedAt>
      </CommentInfo>
      <CommentsContent>{comment.text}</CommentsContent>
    </CommentBox>
  ));
}

export default Comment;

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
  padding: 0 2em;
  color: #66a6ff;
  font-weight: bold;
`;
const CreatedAt = styled.span`
  color: #444444;
  font-weight: 700;
`;
const CommentsContent = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  margin: 1.5em auto;
  padding: 1.5em;
  border: 0.2px solid #d1d1d1;
  border-radius: 35px;
`;
