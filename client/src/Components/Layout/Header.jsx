import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalActive, signupModalState } from '../../Store/atom';
import SignupModal from '../../Modals/signUp/SignupModal';

export default function Header() {
  const history = useHistory();
  const [isModalActive, setModalActive] = useRecoilState(modalActive);
  const setModalState = useSetRecoilState(signupModalState);

  useEffect(() => {
    setModalActive(false);
  }, []);

  const goToCommunityPage = () => {
    history.push({
      pathname: '/Community',
    });
  };

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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button onClick={goToCommunityPage}>Go to Community</button>
        <div style={{ display: 'flex' }}>
          <button onClick={() => onModalActive('login')}>로그인</button>
          <button onClick={() => onModalActive('regist')}>회원가입</button>
        </div>
      </div>
      <div>{isModalActive && <SignupModal />}</div>
    </>
  );
}
