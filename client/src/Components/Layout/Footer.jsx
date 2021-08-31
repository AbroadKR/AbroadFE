import styled from 'styled-components';

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
          <img src="/images/main_view/footer_instagram_img.svg" />
          <h3>어브로드 인스타그램 바로가기</h3>
        </InstagramIcon>
        <YoutubeIcon>
          <img src="/images/main_view/footer_youtube_img.svg" />
          <FooterRightTexts>어브로드 유튜브 바로가기</FooterRightTexts>
        </YoutubeIcon>
      </FooterRight>
    </FooterWrap>
  );
}

const FooterWrap = styled.footer`
  width: 100%;
  height: calc(185px + 5vh);
  padding: 0.5em;
  background: #66a6ff;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: auto 0;
`;

const Logo = styled.div`
  display: flex;
  margin: 1.5em 0;
  margin-top: 0.5em;
`;

const LeftContent = styled.div`
  margin: 0;
`;

const LeftTexts = styled.p`
  margin: 0.6rem 0;
  font-weight: bold;
  text-align: start;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FooterRight = styled.div`
  height: 110px;
  width: calc(200px + 10vw);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InstagramIcon = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 5%;
`;

const YoutubeIcon = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-right: 5%;
`;

const FooterRightTexts = styled.h3`
  text-align: center;
  margin: auto 0;
  white-space: nowrap;
`;
