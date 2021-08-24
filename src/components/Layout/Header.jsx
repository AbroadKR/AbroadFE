import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalActive, signupModalState } from '../../store/atom';
import SignupModal from '../../Modals/signUp/SignupModal';

export default function Header() {
  const [isModalActive, setModalActive] = useRecoilState(modalActive);
  const setModalState = useSetRecoilState(signupModalState);

  useEffect(() => {
    setModalActive(false);
  }, []);

  const onModalActive = (index) => {
    if (index == 'login') {
      setModalState('login');
    } else if (index == 'regist') {
      setModalState('regist');
    }
    setModalActive(true);
  };

  return (
    <>
      <div>
        <h1>hi im header</h1>
        <button onClick={() => onModalActive('login')}>로그인</button>
        <button onClick={() => onModalActive('regist')}>회원가입</button>
      </div>
      <div>{isModalActive && <SignupModal />}</div>
    </>
  );
}
