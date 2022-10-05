import Building from '../components/Building';
import CreateRoobitBtn from '../components/CreateRoobitBtn';
import BackwardBtn from '../components/BackwardBtn';
import LeftFloatingBtn from '../styled/LeftFloatingBtn';
import { Loading } from '../components/Loading';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
// import {
//   //roomDetailData,
//   //roomDetailData_1,
//   //roomDetailData_2,
//   //roomDetailData_3,
//   //roomDetailData_4,
//   roomDetailData_16,
//   //roomDetailData_30,
// } from '../data/DummyData';
import { getCookieValue } from '../hook/getCookieValue';
import { useState } from 'react';

/** 줌인 줌아웃 구현을 위한 styled-components */

const RoomDetail = () => {
  const [isZoomIn, setIsZoomIn] = useState(true);
  setIsZoomIn;
  const { roomId } = useParams();
  const auth = getCookieValue('Authorization').length;
  roomId;

  const { data, isLoading, isError } = useQuery(
    'roobits',
    () =>
      axios
        .get(`/fa`)
        .then((res) => res.data)
        .catch(() => '유효하지 않은 페이지'),
    {
      staleTime: 1000 * 60 * 30,
      retry: 1,
      onError: () => {
        console.log('요청 에러');
      },
    }
  );

  let roomStatus, roomData, roobits;
  if (!isLoading && !isError) {
    ({ roomStatus, roomData, roobits } = data);
  } else {
    return <Loading />;
  }

  if (isError) return <p>유효하지 않은 페이지</p>;

  return (
    <div>
      {auth > 0 && <BackwardBtn />}
      {roomStatus === 'ROOM_CLOSED' ||
      roomStatus === 'ROOM_DELETED' ||
      roobits === undefined ? (
        <p>룸 종료 페이지 컴포넌트</p>
      ) : (
        <>
          <h1>{roomData.roomName}</h1>
          <p>{roomData.restDay}</p>
          <p>{roomData.dday}</p>
          <Building
            roobits={roobits}
            isZoomIn={isZoomIn}
            setIsZoomIn={setIsZoomIn}
          />

          <LeftFloatingBtn
            className={isZoomIn ? 'zoom-out' : 'zoom-in'}
            onClick={() => setIsZoomIn((prev) => !prev)}
          />
          <LeftFloatingBtn className="share" />
          <CreateRoobitBtn />
        </>
      )}
    </div>
  );
};

export default RoomDetail;
