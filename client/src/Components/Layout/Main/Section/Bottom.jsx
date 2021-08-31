import React, { useState } from 'react';
import styled from 'styled-components';
import { Iphone, MsgBox, Quotes } from '../../../../images';

const Bottom = () => {
  return (
    <Section>
      <Title>타지에서 외롭기만한 나.. 과연 잘 온 걸까요?</Title>
      <Container>
        <Content>
          <Topic>
            <Quotes />
            <Phrases>
              <Phrase>
                유학생들을 위한 정보공유와 새 친구들을 만날 수 있는 공간,
              </Phrase>
              <Phrase blue>어브로드라면 가능합니다.</Phrase>
            </Phrases>
            <RightQuotes />
          </Topic>
          <Messages>
            <Message>
              <Comment>
                매번 혼밥하기 외로웠는데 어브로드 덕분에 같이 밥먹는 친구가
                생겼어요!
              </Comment>
              <CommentInfo>임○한 님 &nbsp;|&nbsp; 2020년 07월 01일</CommentInfo>
              <StyledMsgBox />
            </Message>
            <Message>
              <Comment>
                입국한지 얼마 되지 않아 친구가 없었는데 다양한 친구들을 사귈 수
                있었어요!
              </Comment>
              <CommentInfo>김○범 님 &nbsp;|&nbsp; 2020년 07월 01일</CommentInfo>
              <StyledMsgBox />
            </Message>
            <Message>
              <Comment>
                교환학생을 알아보고 있었는데 어브로드에서 한 눈에 편리하게
                정보를 알 수 있었어요.
              </Comment>
              <CommentInfo>최○준 님 &nbsp;|&nbsp; 2020년 07월 01일</CommentInfo>
              <StyledMsgBox />
            </Message>
          </Messages>
        </Content>
        <StyledIphone src={Iphone} alt="Iphone Mockup" />
      </Container>
    </Section>
  );
};

export default Bottom;

const Section = styled.section`
  width: 75vw;
  margin: 15rem auto 10rem;
`;

const Title = styled.h3`
  font-size: 3rem;
  font-weight: 800;
  color: #444444;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  margin-top: 6.94rem;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
`;

const Topic = styled.div`
  display: flex;
`;

const Phrases = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.75em;
  position: relative;
  top: 1.5em;
`;

const Phrase = styled.p`
  color: ${(props) => (props.blue ? '#66A6FF' : '#444444')};
`;

const Messages = styled.div`
  margin-top: 3.75em;
`;

const Message = styled.div`
  position: relative;
  width: 40em;
  height: 7.56em;
  margin-bottom: 2em;
  line-height: 1.75em;
  padding: 2.13em 0 0 3em;
`;

const Comment = styled.p`
  font-weight: 400;
`;

const CommentInfo = styled.span`
  font-weight: 700;
`;

const StyledMsgBox = styled(MsgBox)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const StyledIphone = styled.img`
  width: 24rem;
  height: 37rem;
`;

const RightQuotes = styled(Quotes)`
  transform: rotate(180deg);
`;
