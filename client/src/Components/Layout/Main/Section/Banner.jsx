import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { animated, useSprings } from '@react-spring/web';
import { Banner1, Banner2, Banner3, Banner4 } from '../../../../images';

const Banner = () => {
  const [curIndex, setCurIndex] = useState(0);
  const banners = [Banner1, Banner2, Banner3, Banner4];

  const autoChange = useRef();

  useEffect(() => {
    autoChange.current = nextImg;
  });

  useEffect(() => {
    const play = () => {
      autoChange.current();
    };

    const interval = setInterval(play, 2500);
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
  height: 50vh;
  width: 75vw;
  margin: 7rem auto 0;
  position: relative;
`;

const StyledBanner = styled(animated.img)`
  height: 100%;
  width: 100%;
  position: absolute;
`;
