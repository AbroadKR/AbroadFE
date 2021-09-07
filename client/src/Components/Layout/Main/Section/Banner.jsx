import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { animated, useSprings } from '@react-spring/web';
import { Banner1, Banner2, Banner3 } from '../../../../images';

const Banner = () => {
  const [curIndex, setCurIndex] = useState(0);
  const banners = [Banner1, Banner2, Banner3];

  const autoChange = useRef();

  useEffect(() => {
    autoChange.current = nextImg;
  });

  useEffect(() => {
    const play = () => {
      autoChange.current();
    };

    const interval = setInterval(play, 3500);
    return () => clearInterval(interval);
  }, [curIndex]);

  const springs = useSprings(
    banners.length,
    banners.map((_, index) => {
      return {
        opacity: curIndex === index ? 1 : 0,
        config: { duration: 1000 },
      };
    })
  );

  const animatedBanners = springs.map((animatedStyle, index) => {
    return (
      <StyledBanner
        key={index}
        style={animatedStyle}
        src={banners[index]}
      ></StyledBanner>
    );
  });

  const nextImg = () => {
    if (curIndex === banners.length - 1) {
      return setCurIndex(0);
    }

    setCurIndex(curIndex + 1);
  };

  return <Banners>{animatedBanners}</Banners>;
};

export default Banner;

const Banners = styled.div`
  height: 55vh;
  width: 75vw;
  margin: 2rem auto 0;
  position: relative;
`;

const StyledBanner = styled(animated.img)`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 1.563rem;
`;
