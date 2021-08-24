import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import {
  modalActive,
  isLoginOrRegist,
  signupModalTitle,
  signupModalState,
  signupModalMessage,
  signupUserSubmit,
  oppositeIsLoginOrRegist,
} from '../../store/atom';

export default function SignupModalContents() {
  const signupFormRef = useRef();
  const setModalActive = useSetRecoilState(modalActive);
  const [LoginOrRegist, setLoginOrRegist] = useRecoilState(isLoginOrRegist);
  const [opposite, setOpposite] = useRecoilState(oppositeIsLoginOrRegist);
  const [modalState, setModalState] = useRecoilState(signupModalState);
  const [modalTitle, setModalTitle] = useRecoilState(signupModalTitle);
  const [modalMessage, setModalMessage] = useRecoilState(signupModalMessage);
  const [isUserSubmit, setIsUserSubmit] = useRecoilState(signupUserSubmit);

  useEffect(() => {
    setIsUserSubmit(false);
    if (modalState == 'login') {
      setModalTitle('반갑습니다!');
      setLoginOrRegist('로그인');
      setOpposite('회원가입');
      setModalMessage('아직 회원이 아니신가요?');
    } else if (modalState == 'regist') {
      setModalTitle('환영합니다!');
      setLoginOrRegist('회원가입');
      setOpposite('로그인');
      setModalMessage('이미 계정이 있으신가요?');
    }
  }, []);

  const closeSingupModal = () => {
    setModalActive(false);
  };

  const ChangeModalState = () => {
    setIsUserSubmit(false);
    if (modalState == 'login') {
      setModalTitle('환영합니다!');
      setLoginOrRegist('회원가입');
      setOpposite('로그인');
      setModalMessage('이미 계정이 있으신가요?');
      setModalState('regist');
    } else if (modalState == 'regist') {
      setModalTitle('반갑습니다!');
      setLoginOrRegist('로그인');
      setOpposite('회원가입');
      setModalMessage('아직 회원이 아니신가요?');
      setModalState('login');
    }
  };

  return (
    <SignupContents>
      <CloseModalButton onClick={closeSingupModal} />
      <h1>{modalTitle}</h1>
      <h2>{LoginOrRegist}</h2>
      {!isUserSubmit ? (
        <InputEmail ref={signupFormRef}>
          <input
            type="email"
            name="item"
            placeholder="이메일을 입력해주세요"
            autocomplete="off"
            required
          />
          <input
            type="submit"
            value={LoginOrRegist}
            onClick={() => setIsUserSubmit(true)}
          />
        </InputEmail>
      ) : (
        <SlideImg></SlideImg>
      )}
      <GoRegist>
        <span>{modalMessage}</span>
        <EmailFormBtn onClick={ChangeModalState}>{opposite}</EmailFormBtn>
      </GoRegist>
    </SignupContents>
  );
}

const SignupContents = styled.div`
  flex: 1 1 64%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  & > h1 {
    position: absolute;
    top: 100px;
    left: 25px;
    color: #4db7e6;
    text-align: center;
    margin: 0;
    font-weight: 900;
  }

  & > h2 {
    position: absolute;
    top: 200px;
    left: 25px;
    font-size: 24px;
    font-weight: 900;
  }
`;

const CloseModalButton = styled.button`
  position: absolute;
  top: 30px;
  right: 40px;
  width: 1.5em;
  height: 1.5em;
  border: 1px solid white;
  border-radius: 50%;
  background: #4db7e6;
  margin: 0;
  padding: 0;
  text-align: left;
  list-style: none;
  cursor: pointer;
`;

const InputEmail = styled.form`
  flex: 1 1 0%;
  position: absolute;
  bottom: 160px;
  left: 5px;
  margin-bottom: 20px;
  outline: 0;

  & > input[type='email'] {
    width: 18.5em;
    border: 1px solid #d1d1d1;
    border-radius: 30px/30px;
    font-size: 15px;
    padding: 10px 10px;
    padding-left: 20px;
  }

  & > input[type='submit'] {
    color: white;
    background-color: #4db7e6;
    border-radius: 30px/30px;
    font-size: 15px;
    font-weight: bold;
    padding: 10px 10px;
    margin-left: 4px;
    cursor: pointer;
  }
`;

const SlideImg = styled.img`
  float: right;
  margin-left: 20px;
  transition: all 0.2s;
  background: url('images/signup_modal/sendmail_img.svg') center no-repeat;
  background-size: cover;
`;

const GoRegist = styled.div`
  font-size: 16px;
  position: absolute;
  bottom: 30px;
  right: 33px;
`;

const EmailFormBtn = styled.button`
  font-size: 1rem;
  color: #4db7e6;
`;
