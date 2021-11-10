import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { IoArrowBackCircleSharp } from 'react-icons/io5';

function CommunitySub({ isDown }) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  useEffect(() => {
    setActiveMenu('main');
    setMenuHeight(null);
  }, [isDown]);

  const calcHeight = (el) => {
    const height = el.offsetHeight;
    return setMenuHeight(height);
  };
  const goToMain = () => {
    setMenuHeight(null);
    setActiveMenu('main');
  };

  return (
    <SubMenu style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'continent' || activeMenu === 'travel'}
        timeout={250}
        classNames="move"
      >
        <FirstSub>
          <li>
<<<<<<< HEAD
            <Link to="/community">자유 게시판</Link>
=======
            <Link to="/all">전체 게시판</Link>
>>>>>>> develope
          </li>
          <li onClick={() => setActiveMenu('continent')}>대륙</li>
          <li onClick={() => setActiveMenu('travel')}>여행</li>
        </FirstSub>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'continent'}
        timeout={500}
        classNames="slide"
        unmountOnExit
        onEnter={calcHeight}
      >
        <SecondSub>
          <div>
            <IoArrowBackCircleSharp className="returnIcon" onClick={goToMain} />
          </div>
<<<<<<< HEAD
          <SubLink to="/communityentrance/sa">남미</SubLink>
          <SubLink to="/communityentrance/na">북미</SubLink>
          <SubLink to="/communityentrance/asia">아시아</SubLink>
          <SubLink to="/communityentrance/africa">아프리카</SubLink>
          <SubLink to="/communityentrance/oceania">오세아니아</SubLink>
          <SubLink to="/communityentrance/europe">유럽</SubLink>
=======
          <SubLink to="/community/sa">남미</SubLink>
          <SubLink to="/community/na">북미</SubLink>
          <SubLink to="/community/asia">아시아</SubLink>
          <SubLink to="/community/africa">아프리카</SubLink>
          <SubLink to="/community/oceania">오세아니아</SubLink>
          <SubLink to="/community/europe">유럽</SubLink>
>>>>>>> develope
        </SecondSub>
      </CSSTransition>
      <CSSTransition
        in={activeMenu === 'travel'}
        timeout={500}
        classNames="slide"
        unmountOnExit
        onEnter={calcHeight}
      >
        <SecondSub>
          <div>
            <IoArrowBackCircleSharp className="returnIcon" onClick={goToMain} />
          </div>
<<<<<<< HEAD
          <SubLink to="/travel">정보/일정 공유</SubLink>
=======
          <SubLink to="/travel/info">정보/일정 공유</SubLink>
>>>>>>> develope
          <SubLink to="/travel/party">동행 찾기</SubLink>
        </SecondSub>
      </CSSTransition>
    </SubMenu>
  );
}

export default CommunitySub;

const SubMenu = styled.ul`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 0;
  height: 13rem;
  width: 10rem;
  color: #444444;
  font-weight: 700;
  overflow: hidden;
  top: 75%;
  border: none;
  border-radius: 25px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: max-height 0.4s;
  background-color: #ffffff;
  z-index: 15;
`;
const FirstSub = styled.ul`
  width: 100%;
  height: fit-content;
  &.move-enter {
    transform: translateX(0);
  }
  &.move-enter-active {
    transform: translateX(-100%);
    transition: all 0.4s ease;
  }
  &.move-exit {
    transform: translateX(-100%);
  }
  &.move-exit-active {
    transform: translateX(0);
    transition: all 0.4s ease;
  }
  & > li {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-start;
    transition: all 0.2s;
    padding-left: 1.5em;
    width: 100%;
    height: 3.25rem;
    cursor: pointer;
    &:hover::before {
      content: '';
      position: absolute;
      left: 0;
      width: 5px;
      height: 70%;
      background-color: #66a6ff;
    }
    &:hover::after {
      content: '▶';
      margin: 0 1.5rem 0 auto;
      font-size: 0.7rem;
      color: #66a6ff;
    }
  }
`;

const SecondSub = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  position: absolute;
  top: 0;
  width: 10rem;
  min-height: 13rem;
  padding: 1em 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 25px;
  &.slide-enter {
    transform: translateX(100%);
    position: absolute;
  }
  &.slide-enter-active {
    transform: translateX(0);
    transition: all 0.4s ease;
  }
  &.slide-exit {
  }
  &.slide-exit-active {
    transform: translateX(100%);
    transition: all 0.4s ease;
  }
  & > div {
    display: flex;
    height: 2.6rem;
    align-items: center;
    padding-left: 1.5em;
    & > .returnIcon {
      margin-right: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;
      color: #66a6ff;
    }
  }
`;
const SubLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1.5em;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 3.25rem;
  &:hover::before {
    content: '';
    position: absolute;
    left: 0;
    width: 5px;
    height: 70%;
    background-color: #66a6ff;
  }
`;
