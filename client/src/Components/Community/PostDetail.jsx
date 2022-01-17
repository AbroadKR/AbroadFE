import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Loading from '../Loading';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Comment from './Comment';

export default function PostDetail() {
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commentText, setCommentText] = useState('');
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const { id } = params;
  const {
    state: { category, continent },
  } = location;
  const getPost = async () => {
    const { data: res } = await axios.get('/api/getSinglePost', {
      params: { category, board: continent, id },
    });
    setPost(res);
    setIsLoading(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentText) {
      return;
    }
    const { data: res } = await axios.post('/api/postComment', {
      owner: '61c474fbf5f1305f4fc84576',
      target: id,
      category,
      continent,
      comment: { text: commentText, createdAt: Date.now() },
    });
    if (res === 'OK') window.alert('댓글이 작성되었습니다!');
    setCommentText('');
    history.go(0);
  };
  const handleToList = () => {
    history.goBack();
  };
  const handleInput = (e) => {
    setCommentText(e.target.value);
  };
  useEffect(() => {
    getPost();
  }, []);
  // console.log(post);
  return isLoading ? (
    <Loading />
  ) : (
    <CommunityWrap>
      <UpstreamSection>
        <span>커뮤니티</span>
        <span>{continent === 'all' && '전체 게시판'}</span>
      </UpstreamSection>
      <UserBox>
        <UserInfoBox>
          <div>
            <span>작성자&nbsp; |</span>
            <UserName>
              {post.owner.name} <span>님</span>
            </UserName>
          </div>
          <CreatedAt>게시일 | {Date(post.CreatedAt)}</CreatedAt>
        </UserInfoBox>
        <ContentBox>
          <ContentTitleBox>
            <h4>제목</h4>
            <h2>{post.title}</h2>
          </ContentTitleBox>
          <ContentBodyBox>
            <h4>내용</h4>
            <p>{post.content}</p>
          </ContentBodyBox>
        </ContentBox>
      </UserBox>
      <Comment comments={post.comments} />
      <CommentInput onSubmit={handleSubmit}>
        <h3>답변하기</h3>
        <textarea
          onChange={handleInput}
          onKeyUp={handleInput}
          value={commentText}
          placeholder="내용을 입력해주세요"
        />
        <ButtonBox>
          <button onClick={handleToList}>목록으로</button>
          <button>등록하기</button>
        </ButtonBox>
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
  margin-bottom: 1.5rem;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  margin-top: 1em;
  padding: 0 2em;
  border: 0.2px solid #d1d1d1;
  border-radius: 35px;
  color: #66a6ff;
  & > div {
    color: black;
  }
`;
const UserName = styled.span`
  color: #66a6ff;
  font-weight: 700;
  margin-left: 1rem;
  & > span {
    color: #444444;
    font-weight: 400;
  }
`;
const CreatedAt = styled.span`
  color: #444444;
  font-weight: 700;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 280px;
  border: 0.2px solid #d1d1d1;
  border-radius: 35px;
  margin: 2em auto;
`;
const ContentTitleBox = styled.div`
  display: flex;
  flex-basis: 20%;
  align-items: center;
  border-bottom: 1px solid #d1d1d1;
  & > h4 {
    border-right: 1px solid #d1d1d1;
    height: 100%;
    color: #66a6ff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 10%;
    font-weight: 700;
  }
  & > h2 {
    padding-left: 1.5em;
  }
`;
const ContentBodyBox = styled.div`
  display: flex;
  flex-basis: 80%;
  & > h4 {
    border-right: 1px solid #d1d1d1;
    color: #66a6ff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 10%;
    font-weight: 700;
  }
  & > p {
    padding: 1.5em;
    width: 90%;
  }
`;

const CommentInput = styled.form`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  & > h3 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-left: 1.5em;
    color: #66a6ff;
    font-size: 1.3rem;
    font-weight: 700;
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
    padding: 1.5em;
    resize: none;
  }
`;
const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;
  height: 4rem;
  & > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 700;
    border: 0.2px solid #66a6ff;
    border-radius: 30px/30px;
    margin: 0 0.5em;
    color: #66a6ff;
  }
  & > button:last-child {
    background-color: #66a6ff;
    color: #ffffff;
  }
`;
