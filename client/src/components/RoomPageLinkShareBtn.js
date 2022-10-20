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
  Facebook_Twitter_Button,
  KakaoButton,
  CopyLinkButton,
} from '../styled/ShereIconsStyle';
import LeftFloatingBtn from '../styled/LeftFloatingBtn';
import styled from 'styled-components';
import { useState } from 'react';

const RoomPageShareButtonPopup = styled(ShareButtonPopup)`
  flex-direction: row;
  left: 100%;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);

  > button,
  > div {
    margin-right: 10px;
  }
`;

// 상위 컴포넌트(MyRoom.js)에서 props 4개 받음
const RoomPageLinkShareBtn = ({
  roomData,
  urlDropDown,
  setUrlDropDown,
  ComponentRef,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const kakaoShare = (url) => {
    const path = url.slice(url.indexOf('rooms'));
    window.Kakao.Share.sendScrap({
      requestUrl: url,
      templateId: 84072,
      templateArgs: { path: path },
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
      <LeftFloatingBtn
        className="share"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setUrlDropDown(roomData.roomId);
        }}
      >
        {roomData.roomId === urlDropDown && isOpen ? (
          <RoomPageShareButtonPopup ref={ComponentRef}>
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
          </RoomPageShareButtonPopup>
        ) : (
          ''
        )}
      </LeftFloatingBtn>
    </ShareButtonWrapper>
  );
};

export default RoomPageLinkShareBtn;
