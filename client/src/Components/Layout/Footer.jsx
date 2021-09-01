import styled from 'styled-components';
import {FaInstagram, FaYoutube} from "react-icons/fa"

export default function Footer() {
  return (
    <FooterWrap>
      <FooterLeft>
        <Logo>
          <img src="images/logos/logo_bottom.svg" alt="logo" />
        </Logo>
        <LeftContent>
          <LeftTexts>
            상담 : 010-9220-1407 | Email : teamabroad@gamil.com
          </LeftTexts>
          <LeftTexts>
            팀 어브로드 | 박훈주, 주재성, 이효범, 김세은, 최재혁
          </LeftTexts>
          <LeftTexts>COPYRIGHT © TEAM Abroad ALL Rights Reserved.</LeftTexts>
        </LeftContent>
      </FooterLeft>
      <FooterRight>
        <InstagramIcon>
          <FaInstagram style={{fontSize : "2.5rem", marginRight:"1.2rem"}}/>
          <FooterRightTexts>어브로드 인스타그램 바로가기</FooterRightTexts>
        </InstagramIcon>
        <YoutubeIcon>
          <FaYoutube style={{fontSize : "2.5rem", marginRight:"1.2rem"}}/> 
          <FooterRightTexts>어브로드 유튜브 바로가기</FooterRightTexts>
        </YoutubeIcon>
      </FooterRight>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  display : flex;
  align-items : center;
  width: 100%;
  height: 33vh;
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
  height : fit-content;
`;

const Logo = styled.div`
  transform : translateX(-8%);
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
  height : fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InstagramIcon = styled.div`
  display: flex;
  height : 5rem;
  justify-content: start;
  align-items: center;
  margin-top : 1rem;
`;

const YoutubeIcon = styled.div`
  display: flex;
  height : 5rem;
  justify-content: start;
  align-items: center;
`;

const FooterRightTexts = styled.h3`
  text-align: center;
  margin: auto 0;
  font-size : 1.2rem;
  font-weight : 700;
  white-space: nowrap;
`;
