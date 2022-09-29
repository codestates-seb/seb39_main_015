import styled from 'styled-components';
import { Body, OrangeButton, WhiteButton } from '../styled/Style.js';
import { ShareIcon } from '../images/shareIcon.js';
import ReactTooltip from 'react-tooltip';
import { useState } from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const backData = {
  username: 'kimcoding',
  rooms: [
    {
      roomId: 1,
      roomName: '코드스테이츠 39기',
      dDay: '2022-10-19',
      restDay: 21,
      roomTheme: 'cats',
      url: 'https://github.com/Gwanghyun-Jeon',
    },
    {
      roomId: 2,
      roomName: '매주 피자 먹기 챌린지',
      dDay: '2022-10-24',
      restDay: 27,
      roomTheme: 'cats',
      url: 'https://github.com/Gwanghyun-Jeon',
    },
    {
      roomId: 3,
      roomName: 'javaScript 30일 뿌수기',
      dDay: '2022-10-27',
      restDay: 30,
      roomTheme: 'cats',
      url: 'https://github.com/Gwanghyun-Jeon',
    },
  ],
};

const MyRoomBody = styled(Body)`
  flex-direction: column;
`;

const MyRoomWrapper = styled.div`
  width: 1188px;
  height: 305px;
  display: flex;
  justify-content: space-between;
`;

const RoomBox = styled.div`
  background-color: white;
  width: 380px;
  height: 100%;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 5px 8px rgba(104, 104, 104, 0.04);
  border-radius: 14px;
  /* position: relative; */
  padding: 16px;
  /* :hover {
    box-shadow: 0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent,
      0px 6px 16px rgb(0 0 0 / 12%);
    transform: scale(1.01);
  } */
`;

const RoomTheme = styled.div`
  background-color: #d9d9d9;
  border-radius: 8px;
  width: 348px;
  height: 202px;
  /* position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0%);
  top: 16px; */
`;
const RoomTitle = styled.div`
  height: 22px;
  width: 348px;
  display: flex;
  font-size: 18px;
  margin-top: 14px;
  cursor: pointer;
`;
const RoomControlBar = styled.div`
  height: 26px;
  width: 348px;
  display: flex;
  margin-top: 12px;
`;
const RoomDday = styled.div`
  width: 184px;
  height: 22px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  /* identical to box height */
  display: flex;
  align-items: center;
  /* pointColor */
  color: #f58a5c;
  > p {
    font-size: 20px !important;
    pointer-events: auto !important;
    cursor: default;
    &:hover {
      visibility: visible !important;
      opacity: 1 !important;
    }
  }
`;
const ButtonSection = styled.div`
  width: 164px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`;
const WhiteButtonOrangeBorder = styled(WhiteButton)`
  border-color: #f58a5c;
  color: #f58a5c;
`;
const Space = styled.span`
  margin-left: ${(props) => props.space || '10px'};
`;
const ShareButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 30px;
  left: -30px;
  background-color: white;
`;

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

export default function MyRoom() {
  const [tooltip, showTooltip] = useState(true);

  const kakaoShare = (url) => {
    window.Kakao.Share.sendScrap({
      requestUrl: url,
    });
  };

  return (
    <div>
      <MyRoomBody>
        <MyRoomWrapper>
          {backData.rooms.map((ele) => (
            <RoomBox key={ele.roomId}>
              <RoomTheme>{ele.roomTheme}</RoomTheme>
              <RoomTitle>{ele.roomName}</RoomTitle>
              <RoomControlBar>
                <RoomDday>
                  <p
                    data-for="dday"
                    data-tip={`${ele.dDay}`}
                    // data-iscapture="true"
                    onMouseEnter={() => showTooltip(true)}
                    onMouseLeave={() => {
                      showTooltip(false);
                      // setTimeout(() => showTooltip(false), 1000);
                      setTimeout(() => showTooltip(true), 100);
                    }}
                  >
                    D-{ele.restDay}
                  </p>
                </RoomDday>
                <ButtonSection>
                  <ShareIcon />
                  <ShareButtonWrapper>
                    <Facebook_Twitter_Button>
                      <FacebookShareButton url={ele.url}>
                        <FacebookIcon
                          size={30}
                          round={true}
                          // borderRadius={99}
                        ></FacebookIcon>
                      </FacebookShareButton>
                    </Facebook_Twitter_Button>
                    <Facebook_Twitter_Button>
                      <TwitterShareButton url={ele.url}>
                        <TwitterIcon
                          size={30}
                          round={true}
                          // borderRadius={99}
                        ></TwitterIcon>
                      </TwitterShareButton>
                    </Facebook_Twitter_Button>
                    <KakaoButton
                      type="button"
                      onClick={() => kakaoShare(ele.url)}
                    >
                      <img
                        src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
                        alt="카카오톡 공유 버튼"
                        height={'30px'}
                        width={'30px'}
                      />
                    </KakaoButton>
                  </ShareButtonWrapper>
                  <Space space={'12px'} />
                  <WhiteButtonOrangeBorder width="53px" height="26px">
                    Edit
                  </WhiteButtonOrangeBorder>
                  <Space space={'8px'} />
                  <OrangeButton width="65px" height="26px">
                    Delete
                  </OrangeButton>
                </ButtonSection>
              </RoomControlBar>
            </RoomBox>
          ))}
        </MyRoomWrapper>
        <p>운영할 수 있는 최대 룸 개수는 3개 입니다.</p>
      </MyRoomBody>
      {tooltip && (
        <ReactTooltip id="dday" place="bottom" type="dark" effect="solid" />
      )}
    </div>
  );
}
