import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Logo_Symbol } from '../images';

function Loading() {
  return (
    <LoadingContainer>
      <LoadingLogo src={Logo_Symbol} alt="symbol" />
    </LoadingContainer>
  );
}

export default Loading;
const flip = keyframes`
    0% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
    }
    50% {
        -webkit-transform: rotateY(0);
              transform: rotateY(0);
    }
    100% {
      -webkit-transform: rotateY(360deg);
              transform: rotateY(360deg);
    }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 85vh;
`;

const LoadingLogo = styled.img`
  width: 3rem;
  height: 3rem;
  animation: ${flip} 1.8s 0.5s infinite cubic-bezier(0.42, 0, 1, 1.38);
`;
