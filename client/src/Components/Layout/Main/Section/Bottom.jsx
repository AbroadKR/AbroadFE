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
<<<<<<< HEAD
                유학생들을 위한 정보공유와 새 친구들을 만날 수 있는 공간,<div>어브로드라면 가능합니다.</div>
=======
                유학생들을 위한 정보공유와 새 친구들을 만날 수 있는 공간,
                <span>어브로드라면 가능합니다.</span>
>>>>>>> develope
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
<<<<<<< HEAD
              <StyledMsgBox preserveAspectRatio="none"/>
=======
              <StyledMsgBox preserveAspectRatio="none" />
>>>>>>> develope
            </Message>
            <Message>
              <Comment>
                입국한지 얼마 되지 않아 친구가 없었는데 다양한 친구들을 사귈 수
                있었어요!
              </Comment>
              <CommentInfo>김○범 님 &nbsp;|&nbsp; 2020년 07월 01일</CommentInfo>
<<<<<<< HEAD
              <StyledMsgBox preserveAspectRatio="none"/>
=======
              <StyledMsgBox preserveAspectRatio="none" />
>>>>>>> develope
            </Message>
            <Message>
              <Comment>
                교환학생을 알아보고 있었는데 어브로드에서 한 눈에 편리하게
                정보를 알 수 있었어요.
              </Comment>
              <CommentInfo>최○준 님 &nbsp;|&nbsp; 2020년 07월 01일</CommentInfo>
              <StyledMsgBox preserveAspectRatio="none" />
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
<<<<<<< HEAD
  position : relative;
=======
  position: relative;
>>>>>>> develope
  margin-top: 5.5rem;
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  justify-content : center;
  margin-right: 2rem;
  width : 60%;
=======
  justify-content: center;
  margin-right: 2rem;
  width: 60%;
>>>>>>> develope
`;

const Topic = styled.div`
  display: flex;
`;

const Phrases = styled.div`
<<<<<<< HEAD
  display : flex;
  justify-content : center;
  position: relative;
  margin-bottom : 4.5rem;
  padding : 0 0.8em;
=======
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 4.5rem;
  padding: 0 0.8em;
>>>>>>> develope
  top: 1.5em;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.75em;
<<<<<<< HEAD
  color : #444444;
  &  div {
    text-align : center;
    color : #66A6FF;
=======
  color: #444444;
  & span {
    display: block;
    text-align: center;
    color: #66a6ff;
>>>>>>> develope
  }
`;

const Phrase = styled.p`
<<<<<<< HEAD
  white-space : nowrap;
=======
  white-space: nowrap;
>>>>>>> develope
`;

const Messages = styled.div`
  margin-top: 3em;
`;

const Message = styled.div`
  position: relative;
<<<<<<< HEAD
  overflow : hidden;
  white-space : nowrap;
  text-overflow : ellipsis;
  display : flex;
  flex-direction : column;
  justify-content : center;
  align-items : center;
=======
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
>>>>>>> develope
  width: 100%;
  height: 7.56em;
  margin-bottom: 2em;
  line-height: 1.75em;
`;

const Comment = styled.p`
<<<<<<< HEAD
  display : block;
  width : 85%;
=======
  display: block;
  width: 85%;
>>>>>>> develope
  font-weight: 400;
`;

const CommentInfo = styled.span`
<<<<<<< HEAD
  display : block;
  width : 85%;
=======
  display: block;
  width: 85%;
>>>>>>> develope
  font-weight: 700;
`;

const StyledMsgBox = styled(MsgBox)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
<<<<<<< HEAD
  max-width : 750px;
=======
  max-width: 750px;
>>>>>>> develope
  height: 100%;
  z-index: -1;
`;

const PhoneBox = styled.div`
<<<<<<< HEAD
  display : flex;
  align-items : center;
  width : 40%;
`

const StyledIphone = styled.img`
  margin : auto 0 2rem 3rem;
  /* margin-left : 3rem;
  margin-top : auto; */
  width : 85%;
  max-width : 420px;
=======
  display: flex;
  align-items: center;
  width: 40%;
`;

const StyledIphone = styled.img`
  margin: auto 0 2rem 3rem;
  /* margin-left : 3rem;
  margin-top : auto; */
  width: 85%;
  max-width: 420px;
>>>>>>> develope
`;

const RightQuotes = styled(Quotes)`
  transform: rotate(180deg);
<<<<<<< HEAD
`;
=======
`;
>>>>>>> develope
