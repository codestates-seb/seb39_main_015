import { ShareIcon } from '../images/shareIcon.js';
// import { useEffect, useRef } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {
  ShareButtonWrapper,
  ShareButtonPopup,
  ShareButton,
  Facebook_Twitter_Button,
  KakaoButton,
  CopyLinkButton,
} from '../styled/ShereIconsStyle';
import { useState } from 'react';

// 상위 컴포넌트(MyRoom.js)에서 props 4개 받음
export const LinkShareButton = ({
  roomData,
  urlDropDown,
  setUrlDropDown,
  ComponentRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
      <ShareButton
        onClick={() => {
          setIsOpen((prev) => !prev);
          setUrlDropDown(roomData.roomId);
        }}
      >
        <ShareIcon />
      </ShareButton>
      {roomData.roomId === urlDropDown && isOpen ? (
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
