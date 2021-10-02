import React, { Component } from 'react';
import styled from 'styled-components';
import { Imoge, Imac } from '../../../../images';

class Middle extends Component {
  render() {
    return (
      <Section>
        <Title>왜 어브로드를 찾을까요?</Title>
        <Container>
          <LeftColumn>
            <StyledImoge src={Imoge} alt="man image" />
            <StyledImac src={Imac} alt="imac image" />
          </LeftColumn>
          <RightColumn>
            <Phrase>
              <strong>
                보기 불편하고 턱없이 부족한 교환 관련 정보들로, 우리 대학생들은
                해외 교환학생 프로그램을 떠나기 전에 많은 답답함을 느낍니다.
              </strong>
            </Phrase>
            {/* <Arrow src={arrow} alt="down-arrow" /> */}
            <Phrase blue>
              <strong>
                어브로드는 유학생 및 교환학생들을 위한 다양하고 많은 정보들을 한
                눈에 보기 쉽게 제공하며, 서로 활발하게 소통할 수 있는 글로벌
                커뮤니티입니다.
              </strong>
            </Phrase>
          </RightColumn>
        </Container>
      </Section>
    );
  }
}

export default Middle;

const Section = styled.section`
  width: 75vw;
  margin: 15rem auto 0;
`;

const Title = styled.h2`
  margin-bottom: 6rem;
  font-size: 3rem;
  font-weight: 800;
  color: #444444;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  margin-top: 3rem;
  justify-content: space-between;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 35%;
  width: 35%;
`;

const StyledImoge = styled.img`
  width: 65%;
  margin-bottom: 1rem;
`;

const StyledImac = styled.img`
  width: 100%;
`;

const RightColumn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-basis: 60%;
`;

const Phrase = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  line-height: 2.5rem;
  font-size: 1.5rem;
  color: ${(props) => (props.blue ? '#66A6FF' : '#444444')};
  font-weight: ${(props) => (props.blue ? '700' : '400')};
  height: ${(props) => (props.blue ? '60%' : '40%')};
`;

// const Arrow = styled.img``;
