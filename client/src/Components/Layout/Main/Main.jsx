import React from 'react';
import { HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import Top from './Section/Top';
import Middle from './Section/Middle';
import Bottom from './Section/Bottom';
import Second from './Section/Second';
import Banner from './Section/Banner';

const Body = styled.div`
  min-width: 100vw;
  width: 100%;
  height: 100%;
  padding-top: 4em;
  background: linear-gradient(
    180deg,
    rgba(102, 166, 255, 0.5) 0%,
    rgba(196, 196, 196, 0) 55%
  );
`;

const Wrapper = styled.div`
  width: 75vw;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;

function Main() {
  return (
    <HashRouter>
      <Body>
        <Wrapper>
          <Top />
          <Banner />
          <Second />
          <Middle />
          <Bottom />
        </Wrapper>
      </Body>
    </HashRouter>
  );
}

export default Main;
