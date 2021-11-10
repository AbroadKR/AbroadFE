import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  modalActive,
  isLoginOrRegist,
  signupModalTitle,
  signupModalState,
  signupModalMessage,
  signupUserSubmit,
  oppositeIsLoginOrRegist,
} from '../../Store/atom';

export default function SignupModalContents() {
  const setModalActive = useSetRecoilState(modalActive);
  const [modalState, setModalState] = useRecoilState(signupModalState);
  const [modalTitle, setModalTitle] = useRecoilState(signupModalTitle);
  const [opposite, setOpposite] = useRecoilState(oppositeIsLoginOrRegist);
  const [isUserSubmit, setIsUserSubmit] = useRecoilState(signupUserSubmit);
  const [LoginOrRegist, setLoginOrRegist] = useRecoilState(isLoginOrRegist);
  const [modalMessage, setModalMessage] = useRecoilState(signupModalMessage);

  useEffect(() => {
    setIsUserSubmit(false);
    if (modalState === 'login') {
      setModalTitle('반갑습니다!');
      setLoginOrRegist('로그인');
      setOpposite('회원가입');
      setModalMessage('아직 회원이 아니신가요?');
    } else if (modalState === 'regist') {
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
    if (modalState === 'login') {
      setModalTitle('환영합니다!');
      setLoginOrRegist('회원가입');
      setOpposite('로그인');
      setModalMessage('이미 계정이 있으신가요?');
      setModalState('regist');
    } else if (modalState === 'regist') {
      setModalTitle('반갑습니다!');
      setLoginOrRegist('로그인');
      setOpposite('회원가입');
      setModalMessage('아직 회원이 아니신가요?');
      setModalState('login');
    }
  };

  function validateEmail() {
    const re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const email = document.getElementById('useremail').value;

    if (email == '' || !re.test(email)) {
      alert('올바른 이메일 주소를 입력하세요');
      return false;
    } else {
      setIsUserSubmit(true);
    }
  }

  return (
    <SignupContents>
      <CloseModalButton onClick={closeSingupModal} />
      <h1>{modalTitle}</h1>
      <h2>{LoginOrRegist}</h2>
      {!isUserSubmit ? (
        <InputEmail>
          <input
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            autocomplete="off"
            required
            id="useremail"
          />
          <input
            type="submit"
            value={LoginOrRegist}
            required
            onClick={validateEmail}
          />
        </InputEmail>
      ) : LoginOrRegist === '로그인' ? (
        <SlideImgLogin />
      ) : (
        <SlideImgRegist />
      )}
      <SocialLogin>
        <span>
          <img
            src="images/signup_modal/google.svg"
            className="google"
            alt="modal_google"
            style={{ width: '30px' }}
          />{' '}
          <p>구글계정으로 로그인하기</p>
        </span>
        <span>
          <img
            src="images/signup_modal/kakkao.svg"
            className="kakao"
            alt="modal_kakao"
            style={{ width: '25px' }}
          />{' '}
          <p>카카오계정으로 로그인하기</p>
        </span>
      </SocialLogin>
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
  padding: 0 1.5em;

  & > h1 {
    position: absolute;
    top: 65px;
    left: 35px;
    color: #66a6ff;
    text-align: center;
    margin: 0;
    font-weight: 900;
  }

  & > h2 {
    position: absolute;
    top: 140px;
    left: 35px;
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
  background: #66a6ff;
  margin: 0;
  padding: 0;
  text-align: left;
  list-style: none;
  cursor: pointer;
`;

const InputEmail = styled.form`
  position: absolute;
  top: 195px;
  left: 35px;
  outline: 0;

  & > input[type='email'] {
    width: 18.5em;
    height: 45px;
    border: 1px solid #d1d1d1;
    border-radius: 30px/30px;
    font-size: 15px;
    padding: 0.8em;
    padding-left: 20px;
  }

  & > input[type='submit'] {
    color: white;
    background-color: #66a6ff;
    border-radius: 30px/30px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.8em;
    margin-left: 7px;
    cursor: pointer;
  }
`;

const SlideImgLogin = styled.div`
  width: 95%;
  height: 2.5em;
  position: absolute;
  top: 200px;
  left: 5px;
  margin-bottom: 20px;
  background: url('images/signup_modal/sendmail_img.svg') center no-repeat;
  background-size: cover;
  animation-duration: 0.17s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 70%;
      width: 150%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

const SlideImgRegist = styled.div`
  width: 95%;
  height: 2.5em;
  position: absolute;
  top: 200px;

  left: 5px;
  margin-bottom: 20px;
  background: url('images/signup_modal/regist_send_mail.svg') center no-repeat;
  background-size: cover;
  animation-duration: 0.17ss;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 70%;
      width: 150%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: absolute;
  top: 250px;
  left: 35px;
  color: #444444;
  font-weight: bold;

  & > span {
    width: 22em;
    height: 44px;
    border: 0.2px solid #d8d8d8;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5em auto;
    cursor: pointer;
    position: relative;
    & > img {
      width: 1.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      left: 20px;
    }

    & > .google {
      position: absolute;
      top: 4px;
      left: 20px;
    }

    & > .kakao {
      position: absolute;
      top: 8px;
      left: 24px;
      background-size: cover;
    }

    & > p {
      margin-left: 1.5em;
    }
  }

  & > span:last-child {
    background-color: #f9e000;
  }
`;

const GoRegist = styled.div`
  font-size: 16px;
  position: absolute;
  bottom: 25px;
  right: 33px;
  height: 45px;

  & > span {
    margin-right: 0.8em;
  }
`;

const EmailFormBtn = styled.button`
  border: 0.2px solid #66a6ff;
  border-radius: 25px;
  font-size: 1rem;
  color: #66a6ff;
  width: 103px;
  height: 40px;
`;
