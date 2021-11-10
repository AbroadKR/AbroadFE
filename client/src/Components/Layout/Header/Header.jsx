import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CommunitySub from './SubMenu';
import SignupModal from '../../../Modals/signUp/SignupModal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalActive, signupModalState } from '../../../Store/atom';
import { UserIcon, LogoHorizontal } from '../../../images';

function Header() {
  const [isDown, setIsDown] = useState(false);

  const dropdown = (e) => {
    setIsDown(true);
    e.currentTarget.classList.add('dropdown');
  };
  const closeDropdown = (e) => {
    setIsDown(false);
    e.currentTarget.classList.remove('dropdown');
  };

  const [isModalActive, setModalActive] = useRecoilState(modalActive);
  const setModalState = useSetRecoilState(signupModalState);

  useEffect(() => {
    setModalActive(false);
  }, []);

  const onModalActive = (index) => {
    if (index === 'login') {
      setModalState('login');
    } else if (index === 'regist') {
      setModalState('regist');
    }
    setModalActive(true);
  };

  return (
    <Head>
      <HeadLogo>
        <Link to="/">
          <img src={LogoHorizontal} alt="horizontal_logo" />
        </Link>
      </HeadLogo>
      <HeadNav className="header_nav">
        <NavMenu onMouseEnter={dropdown} onMouseLeave={closeDropdown}>
          <NavLink to="#">커뮤니티</NavLink>
          <CommunitySub isDown={isDown} />
        </NavMenu>
        <NavMenu>
          <NavLink to="#">해외교 평가</NavLink>
        </NavMenu>
        <NavMenu>
          <NavLink to="#">도움문의</NavLink>
        </NavMenu>
      </HeadNav>
      <SignBox>
        <li onMouseEnter={dropdown} onMouseLeave={closeDropdown}>
          <img src={UserIcon} alt="user" />
          <ul>
            <li id="header_signup_login" onClick={() => onModalActive('login')}>
              로그인
            </li>
            <li
              id="header_signup_regist"
              onClick={() => onModalActive('login')}
            >
              회원가입
            </li>
          </ul>
        </li>
      </SignBox>
      <div>{isModalActive && <SignupModal />}</div>
    </Head>
  );
}

export default Header;

const Head = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 9rem;
  border-bottom: 1px solid #d1d1d1d1;
  margin: 0 auto;
`;
const HeadLogo = styled.div`
  width: 15rem;
  margin-left: 12.5vw;
  margin-right: 1%;
`;
const HeadNav = styled.ul`
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  flex-basis: 50%;
`;
const NavMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: auto;
  width: 15%;
  text-align: center;
  &.dropdown > ul {
    max-height: 30rem;
    & > li {
      opacity: 100%;
    }
  }
`;
const NavLink = styled(Link)`
  min-width: 8rem;
  font-size: 1.1rem;
  font-weight: 800;
  padding: 1em;
`;
const SignBox = styled.ul`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  margin-right: 12.25vw;
  height: 100%;
  & > li {
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 0;
  }
  & > li img {
    width: 3rem;
    cursor: pointer;
  }
  & > li ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 0;
    width: 13rem;
    height: 10rem;
    background-color: #ffff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    top: 75%;
    overflow: hidden;
    z-index: 15;
    transition: max-height 0.4s;
    cursor: pointer;
  }
  & li.dropdown ul {
    max-height: 15rem;
    & > li {
      opacity: 100%;
    }
  }
  & > li ul > li {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    opacity: 0;
    padding-left: 1.5em;
    font-weight: 700;
    width: 100%;
    height: 33%;
    &:hover::before {
      content: '';
      position: absolute;
      left: 0;
      width: 5px;
      height: 20%;
      background-color: #66a6ff;
    }
  }
`;
