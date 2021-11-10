import styled from 'styled-components';

import { FaInstagram, FaGithub } from 'react-icons/fa';
import { LogoBottom } from '../../images';

export default function Footer() {
  return (
    <FooterWrap>
      <FooterLeft>
        <Logo>
          <img src={LogoBottom} alt="logo" />
        </Logo>
        <LeftContent>
          <LeftTexts>
            상담 : 010-9220-1407 | Email : teamabroad@gamil.com
          </LeftTexts>

          <LeftTexts>팀 어브로드 | 박훈주, 주재성, 이효범, 최재혁</LeftTexts>
          <LeftTexts>COPYRIGHT © TEAM Abroad ALL Rights Reserved.</LeftTexts>
        </LeftContent>
      </FooterLeft>
      <FooterRight>
        <InstagramIcon>
          <FaInstagram style={{ fontSize: '2.5rem', marginRight: '1.2rem' }} />
          <FooterRightTexts>어브로드 인스타그램 바로가기</FooterRightTexts>
        </InstagramIcon>
        <GithubIcon>
          <FaGithub style={{ fontSize: '2.5rem', marginRight: '1.2rem' }} />
          <FooterRightTexts>어브로드 깃헙 바로가기</FooterRightTexts>
        </GithubIcon>
      </FooterRight>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 0.5em;
  background: #66a6ff;
  color: #ffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  height: fit-content;
`;

const Logo = styled.div`
  transform: translateX(-17%);
  & img {
    width: 20rem;
  }
`;

const LeftContent = styled.div`
  margin: 0;
`;

const LeftTexts = styled.p`
  margin: 1rem 0;
  font-weight: bold;
  text-align: start;
`;

const FooterRight = styled.div`
  width: 25%;

  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InstagramIcon = styled.div`
  display: flex;

  height: 5rem;
  justify-content: start;
  align-items: center;
  margin-top: 1rem;
`;

const GithubIcon = styled.div`
  display: flex;
  height: 5rem;
  justify-content: start;
  align-items: center;
`;

const FooterRightTexts = styled.h3`
  text-align: center;
  margin: auto 0;

  font-size: 1.2rem;
  font-weight: 700;
  white-space: nowrap;
`;
