import { atom } from 'recoil';

// Signup Modal

export const modalActive = atom({
  key: 'modal_active',
  default: false,
});

export const signupUserSubmit = atom({
  key: 'signup_user_submit',
  default: false,
});

export const signupModalTitle = atom({
  key: 'signup_modal_title',
  default: '반갑습니다!',
});

export const signupModalState = atom({
  key: 'signup_modal_state',
  default: '',
});

export const changeModalState = atom({
  key: 'change_modal_state',
  default: '',
});

export const isLoginOrRegist = atom({
  key: 'is_login_or_regist',
  default: '',
});

export const oppositeIsLoginOrRegist = atom({
  key: 'opposite_is_login_or_regist',
  default: '',
});

export const signupModalMessage = atom({
  key: 'signup_modal_message',
  default: '',
});

// Community

// export const communityName = atom({
//   key: 'community_name',

//   default: '전체 게시판',
// });

// export const oppositeCommunityName = atom({
//   key: 'opposite_community_name',
//   default: '질문게시판',
// });
