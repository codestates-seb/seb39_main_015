import Building from '../components/Building';
import CreateRoobitBtn from '../components/CreateRoobitBtn';
import BackwardBtn from '../components/BackwardBtn';
import Weather from '../components/Weather';
import RoomDataBox from '../components/RoomDataBox';
import ShowRoobitListBtn from '../components/ShowRoobitListBtn';
import LeftFloatingBtn from '../styled/LeftFloatingBtn';
import RoomEnd from './RoomEnd';
import { Loading } from '../components/Loading';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  roomDetailData_1,
  //roomDetailData_2,
  //roomDetailData_3,
  //roomDetailData_4,
  //roomDetailData_7,
  //roomDetailData_16,
  //roomDetailData_30,
} from '../data/DummyData';
import { getCookieValue } from '../hook/getCookieValue';
import { useEffect, useRef, useState } from 'react';
import RoomPageLinkShareBtn from '../components/RoomPageLinkShareBtn';

/** 줌인 줌아웃 구현을 위한 styled-components */

const RoomDetail = () => {
  const [isZoomIn, setIsZoomIn] = useState(true);
  const [showMsg, setShowMsg] = useState(false);
  const { roomId } = useParams();
  const auth = getCookieValue('Authorization').length;
  const [urlDropDown, setUrlDropDown] = useState('');
  const ref = useRef();

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
  };

  //`${process.env.REACT_APP_API_URL}/rooms/${roomId}`
  const { data, isLoading, isError } = useQuery(
    ['roobits', roomId],
    () =>
      axios
        .get(`${process.env.REACT_APP_API_URL}/rooms/${roomId}`)
        .then((res) => res.data)
        .catch(() => roomDetailData_1),
    {
      refetchOnWindowFocus: false,
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

  // if (isError) {
  //   console.dir('에러남!');
  //   return <p>유효하지 않은 페이지</p>;
  // }

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
        <RoomEnd data={data} />
      ) : (
        <>
          <Weather weather={roomData.weather || 'clear'} />

          <RoomDataBox roomData={roomData} isZoomIn={isZoomIn} />
          <Building
            roobits={roobits}
            isZoomIn={isZoomIn}
            setIsZoomIn={setIsZoomIn}
            showMsg={showMsg}
          />

          <LeftFloatingBtn
            className={isZoomIn ? 'zoom-out' : 'zoom-in'}
            onClick={() => setIsZoomIn((prev) => !prev)}
          />
          <LeftFloatingBtn
            className={showMsg ? 'msg-on' : 'msg-off'}
            onClick={() => setShowMsg((prev) => !prev)}
          />
          <RoomPageLinkShareBtn
            roomData={roomData}
            urlDropDown={urlDropDown}
            setUrlDropDown={setUrlDropDown}
            ComponentRef={ref}
          />
          {roomData.restDay !== 0 ? <CreateRoobitBtn /> : <ShowRoobitListBtn roomId={roomId}/>}

        </>
      )}
    </div>
  );
};

export default RoomDetail;
