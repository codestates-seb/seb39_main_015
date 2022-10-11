import styled from 'styled-components';

export const CreaterFloatingBtnStyle = styled.button`
  position: fixed;
  bottom: 60px;
  right: 100px;
  z-index: 100;

  height: 60px;
  border: none;
  border-radius: 30px;
  line-height: 60px;
  padding: 0 70px 3px 31px;
  background-color: var(--point-color);
  box-shadow: inset -19px -6px 15px 0 rgba(99, 51, 51, 0.09),
    var(--floating-btn-shadow);

  color: var(--white-font-color);
  font-weight: 500;
  cursor: pointer;

  ::before {
    content: '+';
    position: absolute;
    right: 0;
    color: var(--point-color);
    background-color: var(--white-font-color);
    width: 60px;
    height: 60px;
    font-size: 44px;
    font-weight: 700;
    box-sizing: border-box;
    border-radius: 30px;
    border: 1px solid var(--point-color);
    line-height: 53px;
    box-shadow: inset -4px -4px 9px 0 rgba(204, 128, 58, 0.25);
  }

  @media screen and (max-width: 1024px) {
    right: 6%;
  }
  @media screen and (max-height: 480px) {
    bottom: 7%;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
