import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Sheffield, Arkansas, Lincoln } from '../../../../images';

class Second extends Component {
  render() {
    return (
      <Section>
        <Title>어떤 교환학교들이 있을까요?</Title>
        <List>
          <Item>
            <Anchor href="#top">
              <Content>
                <StyledSheffield src={Sheffield} alt="sheffield univ" />
                <Location>유럽 / 영국</Location>
                <UnivName kor>셰필드 대학교</UnivName>
                <UnivName>The University of Sheffield</UnivName>
              </Content>
            </Anchor>
            <Anchor href="#top">
              <Button>바로가기</Button>
            </Anchor>
          </Item>
          <Item>
            <Anchor href="#top">
              <Content>
                <StyledLincoln src={Lincoln} alt="lincoln univ" />
                <Location>오세아니아 / 뉴질랜드</Location>
                <UnivName kor>링컨 대학교</UnivName>
                <UnivName>Lincoln University</UnivName>
              </Content>
            </Anchor>
            <Anchor href="#top">
              <Button>바로가기</Button>
            </Anchor>
          </Item>
          <Item>
            <Anchor href="#top">
              <Content>
                <StyledArkansas src={Arkansas} alt="arkansas univ" />
                <Location>북아메리카 / 미국</Location>
                <UnivName kor>아칸소 대학교</UnivName>
                <UnivName>The University of Arkansas</UnivName>
              </Content>
            </Anchor>
            <Anchor href="#top">
              <Button>바로가기</Button>
            </Anchor>
          </Item>
        </List>
      </Section>
    );
  }
}

export default Second;

const Section = styled.div`
  position: relative;
  width: 75vw;
  margin: 7rem auto 0;
`;

const Title = styled.span`
  font-size: 3rem;
  font-weight: 800;
  color: #444444;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin-top: 2rem;
`;

const Item = styled.li`
  margin-top: 3.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #444444;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 18vw;
  padding: 1.4em;
  box-shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 1.4rem;
  background-color: #ffff;
`;

const imgStyle = css`
  border-radius: 1.4rem;
`;

const StyledSheffield = styled.img`
  ${imgStyle}
`;

const StyledArkansas = styled.img`
  ${imgStyle}
`;

const StyledLincoln = styled.img`
  ${imgStyle}
`;

const Location = styled.span`
  font-weight: 700;
  font-size: 1.13rem;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;

  padding: 1.25rem 0.2rem;
  border-bottom: 1px solid rgba(68, 68, 68, 0.3);
  margin-bottom: 1.25rem;
`;

const UnivName = styled.h5`
  font-weight: 800;
  font-size: ${(props) => (props.kor ? '1.5rem' : '1.13rem')};
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  padding: 0 0.2rem;
  line-height: 2rem;
`;
const Button = styled.button`
  margin-top: 3.3rem;
  background: #66a6ff;
  border-radius: 1.88rem;
  font-size: 1.13rem;
  font-weight: 700;
  color: #ffffff;
  border: none;
  padding: 1rem 0;
  width: 9.81rem;
  cursor: pointer;
`;
