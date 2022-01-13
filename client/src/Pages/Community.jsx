import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BsQuestionCircle } from 'react-icons/bs';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import All from './All';

function Community() {
  const [continentName, setContinentName] = useState(null);
  const params = useParams();
  const { continent } = params;
  const checkContinent = () => {
    if (continent === 'sa') {
      setContinentName('남미');
    } else if (continent === 'na') {
      setContinentName('북미');
    } else if (continent === 'asia') {
      setContinentName('아시아');
    } else if (continent === 'africa') {
      setContinentName('아프리카');
    } else if (continent === 'oceania') {
      setContinentName('오세아니아');
    } else if (continent === 'europe') {
      setContinentName('유럽');
    }
  };
  useEffect(() => {
    checkContinent();
  }, []);
  return continent === 'all' ? (
    <All />
  ) : (
    <Wrapper>
      <TitleBox>
        <h1>{continentName} 커뮤니티</h1>
        <div>{continentName} 대륙 교환학생들을 위한 단독 커뮤니티입니다.</div>
        <div>여러 학생들과 자유롭게 소통하고 궁금한 점들을 공유하세요.</div>
        <Hr />
      </TitleBox>
      <BtnBox>
        <FreeBox to={`/community/${continent}/free`}>
          <IoChatbubbleEllipsesOutline
            style={{ fontSize: '7rem', height: '13rem', color: '#66A6FF' }}
          />
          <div>자유게시판 바로가기</div>
        </FreeBox>
        <QuestionBox to={`/community/${continent}/qna`}>
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
`;
