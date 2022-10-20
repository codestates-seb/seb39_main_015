import styled from 'styled-components';

export const ShareButtonWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;
export const ShareButtonPopup = styled.div`
  display: flex;
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: transparent;
  flex-direction: column;

  animation-name: fadein;
  animation-duration: 1s;
  animation-direction: alternate;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeout {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const ShareButton = styled.div``;

export const Facebook_Twitter_Button = styled.div`
  :active {
    box-shadow: none !important;
    transform: scale(1) !important;
  }
  :hover {
    transform: scale(1.02);
  }
`;

export const KakaoButton = styled.button`
  border: 0;
  width: 30px;
  height: 33.5px;
  outline: 0;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
  :active {
    box-shadow: none !important;
    transform: scale(1) !important;
  }
  :hover {
    transform: scale(1.02);
  }
  > img {
    border-radius: 99px;
  }
`;
export const CopyLinkButton = styled(KakaoButton)`
  height: 30px;
  width: 30px;
  margin-bottom: 3px;
  div {
    border: 1px solid #d9d9d9;
    /* box-shadow: 0px 5px 8px rgb(104 104 104 / 4%); */
    background-color: white;
    border-radius: 99px;
    height: 30px;
    width: 30px;
  }
`;
