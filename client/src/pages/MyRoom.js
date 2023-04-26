import styled from 'styled-components';
import {
  Body,
  OrangeButton,
  WhiteButtonOrangeBorder,
} from '../styled/Style.js';
// import { ShareIcon } from '../images/shareIcon.js';
import ReactTooltip from 'react-tooltip';
import { useState, useEffect, useRef } from 'react';
import RoomMoalBtn from '../components/RoomModalBtn';
// import {
//   FacebookShareButton,
//   FacebookIcon,
//   TwitterShareButton,
//   TwitterIcon,
// } from 'react-share';
import { LinkShareButton } from '../components/LinkShareButton.js';
// import RoomModal from '../components/RoomModal.js';
import axios from 'axios';
import { getCookieValue } from '../hook/getCookieValue.js';
import { useQueryClient, useQuery } from 'react-query';
import RoomEditModal from '../components/RoomEditModal.js';
import { ModalWrapper } from '../styled/RightFloatingBtn';
import themeThmbnailImg from '../images/thumbnail_01.png';
import { useNavigate } from 'react-router-dom';

const MyRoomBody = styled(Body)`
  flex-direction: column;
  min-height: 100vh;
  height: auto;
  > p {
    margin-top: 90px;
    margin-bottom: 60px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 32px;
    /* identical to box height */
    color: #aaaaaa;
    display: flex;
    align-items: center;
    text-align: center;
    z-index: 1;
  }

  /** 768px 이 맞으나, 이 경우 룸 박스 콘텐츠 크기 때문에 임의 조절 */
  @media screen and (max-width: 900px) {
    padding-top: 110px;
    > p {
      margin-top: 20px;
      margin-bottom: 160px;
    }
  }

  @media screen and (max-width: 480px) {
    > p {
      width: 80%;
      word-break: keep-all;
    }
  }
`;

const MyRoomWrapper = styled.div`
  width: 1180px;
  height: 305px;
  display: flex;
  justify-content: flex-start;

  > div {
    margin-right: 20px;
  }
  > div:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1380px) {
    width: 80%;
    margin: 0 20px;
  }
  /** 768px 이 맞으나, 이 경우 룸 박스 콘텐츠 크기 때문에 임의 조절 */
  @media screen and (max-width: 900px) {
    width: auto;
    height: auto;
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
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

  @media screen and (max-width: 1380px) {
    flex: 1;
    width: 33%;
  }
  /** 768px 이 맞으나, 이 경우 룸 박스 콘텐츠 크기 때문에 임의 조절 */
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const RoomTheme = styled.div`
  background-color: #d9d9d9;
  border-radius: 8px;
  width: 100%;
  height: 202px;
  cursor: pointer;
  /* position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0%);
  top: 16px; */

  /** 임시로 배경 넣겠습니다. */
  font-size: 0;
  background-image: url(${themeThmbnailImg});
  background-size: cover;
  background-position: center;
`;
const RoomTitle = styled.div`
  height: 22px;
  width: 100%;
  display: flex;
  font-size: 18px;
  margin-top: 14px;
  cursor: pointer;
`;
const RoomControlBar = styled.div`
  height: 26px;
  width: 100%;
  display: flex;
  margin-top: 12px;
  justify-content: space-between;
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
  /* position: relative; */
`;
const Space = styled.span`
  margin-left: ${(props) => props.space || '10px'};
`;

export default function MyRoom() {
  const [tooltip, showTooltip] = useState(true);
  // urlShare Button 필요 부분 (시작)
  const [urlDropDown, setUrlDropDown] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editOpen, setEditOpen] = useState('');
  const ref = useRef();
  const modalRef = useRef();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data } = useQuery(
    'myRoom',
    () =>
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/myroom`, {
          headers: {
            Authorization: `${getCookieValue('Authorization')}`,
          },
        })
        .then((res) => res.data),
    { staleTime: 1000 * 60 * 5 }
  );

  useEffect(() => {
    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  });

  const clickOutside = (event) => {
    if (urlDropDown && !ref.current.contains(event.target)) {
      console.log(event.target);
      setUrlDropDown('');
    }
    if (modalOpen && !modalRef.current.contains(event.target)) {
      setModalOpen(false);
    }
  };
  // urlShare Button 필요 부분 (끝)

  const gotoRoomPage = (roomId) => {
    navigate(`/rooms/${roomId}`);
  };

  return (
    <div>
      <MyRoomBody>
        <MyRoomWrapper>
          {data &&
            data.rooms.map((ele) => {
              return (
                <RoomBox key={ele.roomId}>
                  <RoomTheme
                    onClick={() => {
                      gotoRoomPage(ele.roomId);
                      // window.location.assign(ele.url);
                    }}
                  >
                    {ele.roomTheme}
                  </RoomTheme>
                  <RoomTitle
                    onClick={() => {
                      gotoRoomPage(ele.roomId);
                      // window.location.assign(ele.url);
                    }}
                  >
                    {ele.roomName}
                  </RoomTitle>
                  <RoomControlBar>
                    <RoomDday>
                      <p
                        data-for="dday"
                        data-tip={`${ele.dday}`}
                        onMouseEnter={() => showTooltip(true)}
                        onMouseLeave={() => {
                          showTooltip(false);
                          setTimeout(() => showTooltip(true), 100);
                        }}
                      >
                        {ele.restDay === 0 ? 'D-Day' : `D-${ele.restDay}`}
                      </p>
                    </RoomDday>
                    <ButtonSection>
                      {/* urlShare Button 컴포넌트 */}
                      <LinkShareButton
                        roomData={ele}
                        urlDropDown={urlDropDown}
                        setUrlDropDown={setUrlDropDown}
                        ComponentRef={ref}
                      />
                      <Space space={'12px'} />
                      <WhiteButtonOrangeBorder
                        width="53px"
                        height="26px"
                        onClick={() => {
                          setEditOpen(ele.roomId);
                        }}
                      >
                        Edit
                      </WhiteButtonOrangeBorder>
                      <Space space={'8px'} />
                      <OrangeButton
                        width="65px"
                        height="26px"
                        onClick={() => {
                          let answer = confirm('정말 삭제 하시겠습니까?');
                          if (answer) {
                            axios
                              .delete(
                                `${process.env.REACT_APP_API_URL}/rooms/${ele.roomId}`,
                                {
                                  headers: {
                                    Authorization: `${getCookieValue(
                                      'Authorization'
                                    )}`,
                                  },
                                }
                              )
                              .then((res) => {
                                console.log(res.data);
                                queryClient.invalidateQueries('myRoom');
                              });
                          }
                        }}
                      >
                        Delete
                      </OrangeButton>
                    </ButtonSection>
                  </RoomControlBar>
                </RoomBox>
              );
            })}
        </MyRoomWrapper>
        <p>
          운영할&nbsp;수&nbsp;있는 최대&nbsp;룸&nbsp;개수는 3개&nbsp;입니다.
        </p>
      </MyRoomBody>
      <RoomMoalBtn />
      {tooltip && (
        <ReactTooltip id="dday" place="bottom" type="dark" effect="solid" />
      )}
      {editOpen ? (
        <ModalWrapper>
          <RoomEditModal
            setEditOpen={setEditOpen}
            roomData={data.rooms.filter((ele) => ele.roomId === editOpen)[0]}
          />
        </ModalWrapper>
      ) : (
        ''
      )}
    </div>
  );
}
