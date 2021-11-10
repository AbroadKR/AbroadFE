<<<<<<< HEAD
import Axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import SearchBar from '../Components/Community/SearchBar';
import Pagination from '../Components/Community/Pagination';
import AriticleList from '../Components/Community/ArticleList';

export default function Community() {
  const [article, setArticle] = useState([]);
  const API_URL =
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=Dior';

  function getData() {
    Axios.get(API_URL) //
      .then((res) => {
        setArticle(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <CommunityWrap>
      <UpstreamSection>
        <span>커뮤니티</span>
        <span>자유게시판</span>
      </UpstreamSection>
      <Filter />
      <AriticleList article={article.slice(0, 15)} />
      <Pagination />
      <SearchBar />
    </CommunityWrap>
  );
}

const CommunityWrap = styled.div`
  width: 71vw;
  height: 100%;
  margin: 3.5em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Filter = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 3.5em;
  width: 20rem;
  margin-left: auto;
  & li {
    width: 5rem;
    padding: 0.5em 0;
    font-size: 1.1rem;
    text-align: center;
    cursor: pointer;
  }
  & li:nth-child(${(props) => props.order}) {
    color: #66a6ff;
  }
  & hr {
    height: 1rem;
    color: #444444;
  }
=======
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BsQuestionCircle } from 'react-icons/bs';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

function Community({ match }) {
  const param = match.params.continent;
  let continent;
  if (param === 'sa') {
    continent = '남미';
  } else if (param === 'na') {
    continent = '북미';
  } else if (param === 'asia') {
    continent = '아시아';
  } else if (param === 'africa') {
    continent = '아프리카';
  } else if (param === 'oceania') {
    continent = '오세아니아';
  } else if (param === 'europe') {
    continent = '유럽';
  }
  return (
    <Wrapper>
      <TitleBox>
        <h1>{continent} 커뮤니티</h1>
        <div>{continent} 대륙 교환학생들을 위한 단독 커뮤니티입니다.</div>
        <div>여러 학생들과 자유롭게 소통하고 궁금한 점들을 공유하세요.</div>
        <Hr />
      </TitleBox>
      <BtnBox>
        <FreeBox to={`${param}/freeboard`}>
          <IoChatbubbleEllipsesOutline
            style={{ fontSize: '7rem', height: '13rem', color: '#66A6FF' }}
          />
          <div>자유게시판 바로가기</div>
        </FreeBox>
        <QuestionBox to={`${param}/qna`}>
          <BsQuestionCircle style={{ fontSize: '7rem', height: '13rem' }} />
          <div>질문게시판 바로가기</div>
        </QuestionBox>
      </BtnBox>
    </Wrapper>
  );
}

export default Community;

const Wrapper = styled.div`
  width: 60vw;
  min-height: 50vh;
  height: 100%;
  margin: 0 auto;
`;

const TitleBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 18rem;
  & > h1 {
    margin: 0;
    height: 3.5rem;
    text-align: center;
    font-weight: 700;
    color: #66a6ff;
    margin-bottom: 1rem;
  }
  & > div {
    text-align: center;
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0.5rem 0;
    color: #66a6ff;
  }
`;

const Hr = styled.hr`
  position: absolute;
  width: 60px;
  height: 5px;
  background-color: #66a6ff;
  border: none;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  height: 37rem;
`;

const FreeBox = styled(Link)`
  border: 5px solid #66a6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5.5rem;
  border-radius: 25px;
  width: 18.75rem;
  height: 18.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  & > div {
    color: #66a6ff;
  }
`;
const QuestionBox = styled(Link)`
  border: none;
  background-color: #66a6ff;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5.5rem;
  border-radius: 25px;
  width: 18.75rem;
  height: 18.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
>>>>>>> develope
`;
