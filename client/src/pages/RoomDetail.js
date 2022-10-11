import Building from '../components/Building';
import CreateRoobitBtn from '../components/CreateRoobitBtn';
import BackwardBtn from '../components/BackwardBtn';
import LeftFloatingBtn from '../styled/LeftFloatingBtn';
import Weather from '../components/Weather';
import RoomDataBox from '../components/RoomDataBox';
import ShowRoobitListBtn from '../components/ShowRoobitListBtn';
import { Loading } from '../components/Loading';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  //roomDetailData,
  //roomDetailData_1,
  //roomDetailData_2,
  //roomDetailData_3,
  roomDetailData_4,
  //roomDetailData_16,
  //roomDetailData_30,
} from '../data/DummyData';
import { getCookieValue } from '../hook/getCookieValue';
import { useState } from 'react';

/** 줌인 줌아웃 구현을 위한 styled-components */

const RoomDetail = () => {
  const [isZoomIn, setIsZoomIn] = useState(true);
  setIsZoomIn;
  const { roomId } = useParams();
  const auth = getCookieValue('Authorization').length;
  roomId;

  //`${process.env.REACT_APP_API_URL}/rooms/${roomId}`
  const { data, isLoading, isError } = useQuery(
    ['roobits', roomId],
    () =>
      axios
        .get(`${process.env.REACT_APP_API_URL}/rooms/${roomId}`)
        .then((res) => res.data)
        .catch(() => roomDetailData_4),
    {
      staleTime: 1000 * 60 * 10,
      retry: 1,
      // onError: (err) => {
      //   console.log('요청 err', err);
      //   console.log('요청 error', error);
      //   // return roomDetailData_30;
      // }, //state 처리
    }
  );

  //onError 로 처리하면 isError false 된다.

  if (isError) {
    console.dir('에러남!');
    return <p>유효하지 않은 페이지</p>;
  }

  let roomStatus, roomData, roobits;
  if (!isLoading && !isError) {
    ({ roomStatus, roomData, roobits } = data);
  } else {
    return <Loading />;
  }

  return (
    <div>
      {auth > 0 && <BackwardBtn />}
      {roomStatus === 'ROOM_CLOSED' ||
      roomStatus === 'ROOM_DELETED' ||
      roobits === undefined ? (
        <p>룸 종료 페이지 컴포넌트</p>
      ) : (
        <>
          <Weather weather={roomData.weather} />

          <RoomDataBox roomData={roomData} isZoomIn={isZoomIn} />
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
          {roomData.restDay !== 0 ? (
            <CreateRoobitBtn />
          ) : (
            <ShowRoobitListBtn roomId={roomId} />
          )}
        </>
      )}
    </div>
  );
};

export default RoomDetail;
