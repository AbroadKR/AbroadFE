import React from 'react';
import styled from 'styled-components';
import { Iphone, MsgBox, Quotes } from '../../../../images';

const Bottom = () => {
  return (
    <Section>
      <Title>타지에서 외롭기만 한 나.. 과연 잘 온 걸까요?</Title>
      <Container>
        <Content>
          <Topic>
            <Quotes />
            <Phrases>
              <Phrase>
                유학생들을 위한 정보공유와 새 친구들을 만날 수 있는 공간,<br/><span>어브로드라면 가능합니다.</span>
              </Phrase>
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
        <PhoneBox>
          <StyledIphone src={Iphone} alt="Iphone Mockup" />
        </PhoneBox>
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
  margin-top: 5.5rem;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content : center;
  margin-right: 1.5rem;
  padding-left : 2em;
  width : 60%;
`;

const Topic = styled.div`
  display: flex;
`;

const Phrases = styled.div`
  display : flex;
  justify-content : center;
  position: relative;
  margin-bottom : 4.5rem;
  top: 1.5em;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.75em;
  color : #444444;
  &  span {
    color : #66A6FF;
  }
`;

const Phrase = styled.p`

`;

const Messages = styled.div`
  margin-top: 3em;
`;

const Message = styled.div`
  position: relative;
  overflow : hidden;
  white-space : nowrap;
  text-overflow : ellipsis;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
  width: 100%;
  height: 7.56em;
  margin-bottom: 2em;
  line-height: 1.75em;
`;

const Comment = styled.p`
  display : block;
  width : 85%;
  font-weight: 400;
`;

const CommentInfo = styled.span`
  display : block;
  width : 85%;
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

const PhoneBox = styled.div`
  display : flex;
  align-items : center;
  width : 40%;
  margin-left : 5%;
`

const StyledIphone = styled.img`
  /* width : 100%;
  height : 100%; */
`;

const RightQuotes = styled(Quotes)`
  transform: rotate(180deg);
`;
