import styled from 'styled-components';
import SignupModalContents from './SignupModalContents';

export default function SigupModal() {
  return (
    <Div>
      <div className="signup_modal">
        <ModalOverlay>
          <ModalContents>
            <ModalLogo>
              <img
                src="images/logos/logo_vertical.svg"
                alt="modal_logo"
                className="modal_logo"
              />
            </ModalLogo>
            <SignupModalContents />
          </ModalContents>
        </ModalOverlay>
      </div>
    </Div>
  );
}

const Div = styled.div`
  .signup_modal {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ModalOverlay = styled.div`
  background-color: rgba(249, 249, 249, 0.123);
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContents = styled.div`
  background-color: #fff;
  text-align: center;
  position: relative;
  top: 0px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  margin: 0 auto;
  width: 697px;
  height: 481px;
  background: #ffffff;
  z-index: 10;
  border-radius: 10px;
`;

const ModalLogo = styled.div`
  flex: 1 1 36%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #66a6ff 57.81%, #ffffff 100%);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  .modal_logo {
    padding-bottom: 10px;
    width: 130px;
  }
`;
