import { ShareIcon } from '../images/shareIcon.js';
// import { useEffect, useRef } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ShareButtonWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;
const ShareButtonPopup = styled.div`
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

const ShareButton = styled.div``;

const Facebook_Twitter_Button = styled.div`
  :active {
    box-shadow: none !important;
    transform: scale(1) !important;
  }
  :hover {
    transform: scale(1.02);
  }
`;

const KakaoButton = styled.button`
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
const CopyLinkButton = styled(KakaoButton)`
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

// 상위 컴포넌트(MyRoom.js)에서 props 4개 받음
export const LinkShareButton = ({
  roomData,
  urlDropDown,
  setUrlDropDown,
  ComponentRef,
}) => {
  const kakaoShare = (url) => {
    window.Kakao.Share.sendScrap({
      requestUrl: url,
    });
  };

  const linkClipboard = () => {
    const someData = roomData.url;
    let tempInput = document.createElement('input');
    tempInput.value = someData;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('클립보드에 복사되었습니다.');
    setUrlDropDown('');
  };

  return (
    <ShareButtonWrapper>
      <ShareButton onClick={() => setUrlDropDown(roomData.roomId)}>
        <ShareIcon />
      </ShareButton>
      {roomData.roomId === urlDropDown ? (
        <ShareButtonPopup ref={ComponentRef}>
          <CopyLinkButton onClick={() => linkClipboard()}>
            <div>
              <FontAwesomeIcon icon={faLink} />
            </div>
          </CopyLinkButton>
          <KakaoButton type="button" onClick={() => kakaoShare(roomData.url)}>
            <img
              src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
              alt="카카오톡 공유 버튼"
              height={'30px'}
              width={'30px'}
            />
          </KakaoButton>
          <Facebook_Twitter_Button>
            <FacebookShareButton url={roomData.url}>
              <FacebookIcon size={30} round={true}></FacebookIcon>
            </FacebookShareButton>
          </Facebook_Twitter_Button>
          <Facebook_Twitter_Button>
            <TwitterShareButton url={roomData.url}>
              <TwitterIcon size={30} round={true}></TwitterIcon>
            </TwitterShareButton>
          </Facebook_Twitter_Button>
        </ShareButtonPopup>
      ) : (
        ''
      )}
    </ShareButtonWrapper>
  );
};
