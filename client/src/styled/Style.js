import styled from 'styled-components';
import { Link } from 'react-router-dom';
import selectArrowImg from '../images/selectArrow.svg';

export const Body = styled.div`
  padding-top: 80px;
  height: 100vh;
  background-color: #fff9f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.div`
  position: relative;
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid #d9d9d9;
  box-shadow: 0px 5px 8px rgba(104, 104, 104, 0.04);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 101;
  padding-bottom: 50px;

  .cancel {
    position: absolute;
    top: 16px;
    right: 16px;
    cursor: pointer;
  }

  h2 {
    padding-top: 48px;
    padding-bottom: 28px;
  }

  > img {
    max-width: 124px;
    height: auto;
    width: auto;
    /* width: 124px;
    height: 40px; */
    margin-bottom: 33px;
  }
  > p {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  > div {
    margin-top: 25px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 34px;
  > p {
    position: absolute;
    left: 5px;
    top: 50px;
    font-size: 12px;
    color: #dd5858;
  }
`;

export const Input = styled.input`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  background-color: #fbfbfb;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding-left: 40px;
  font-size: 16px;
  :focus {
    border: 1px solid #f58a5c;
    outline: none;
    background-color: white;
  }
`;

export const LogoWrapper = styled.div`
  color: gray;
  position: absolute;
  left: 15px;
`;

export const WhiteButton = styled.button`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || 'auto'};
  border-radius: 9999px;
  border: 1px solid rgba(25, 25, 25, 0.9);
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
  /* margin-bottom: 24px; */
  :active {
    box-shadow: none !important;
    transform: scale(1) !important;
  }
  :hover {
    box-shadow: 0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent,
      0px 6px 16px rgb(0 0 0 / 12%);
    transform: scale(1.02);
  }

  @media screen and (max-width: 480px) {
    margin: 0 auto;
    max-width: 90%;
  }
`;

export const WhiteButtonOrangeBorder = styled(WhiteButton)`
  border-color: #f58a5c;
  color: #f58a5c;
`;

export const OrangeButton = styled(WhiteButton)`
  background-color: #f58a5c;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;

  .createRoom {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    width: 112px;
  }
  .crosshair {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .cross {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 24px;
      height: 24px;
    }
  }
`;

export const BlackButton = styled(WhiteButton)`
  background-color: black;
  color: white;
`;

export const GreenButton = styled(WhiteButton)`
  background-color: transparent;
  color: #60a84e;
  border: 1px solid #60a84e;
  :hover {
    box-shadow: none !important;
    transform: none !important;
  }
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
`;

export const StyledLink = styled(Link)`
  color: #f58a5c;
`;

export const ModalFormWrapper = styled(FormWrapper)`
  padding: 0 67px 28px 67px;
  box-shadow: var(--modal-shadow);

  section {
    margin-bottom: 16px;
    width: 342px;
  }

  label {
    display: block;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .err-msg {
    left: 5px;
    top: 50px;
    font-size: 12px;
    color: #dd5858;
  }

  .two-divide {
    display: flex;
    justify-content: space-between;
    & > * {
      width: 48%;
    }
  }

  .max-roobits-box {
    & select {
      height: 45px;
      background-color: #fff;
      border: 1px solid #dcdcdc;
      border-radius: 8px;
      padding-left: 13px;
      padding-right: 13px;
      font-size: 16px;
      width: 100%;
      appearance: none;
      background: url(${selectArrowImg}) no-repeat 93% center;
    }
  }

  @media screen and (max-width: 480px) {
    height: 100vh;
    border-radius: 0;
    border: none;
    padding: 0 3% 0 3%;

    h2 {
      padding-top: 18px;
    }
    form > section {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }

    .two-divide {
      width: 90%;
      margin-left: auto;
      margin-right: auto;

      & > button,
      & > section {
        width: 48%;
      }
    }
  }
`;

export const ModalInput = styled(Input)`
  padding-left: 5px;
  max-width: 342px;
  height: 45px;
  padding: 0 14px;
  margin-bottom: 4px;

  &#room-name {
    width: 100%;
  }
`;
