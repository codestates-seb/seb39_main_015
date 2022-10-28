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
import { getCookieValue } from '../hook/getCookieValue';
import { useEffect, useRef, useState } from 'react';
import RoomPageLinkShareBtn from '../components/RoomPageLinkShareBtn';

/** 줌인 줌아웃 구현을 위한 styled-components */

const RoomDetail = () => {
  const [isZoomIn, setIsZoomIn] = useState(true);
  const [showMsg, setShowMsg] = useState(false);
  const [errPageOpen, setErrPageOpen] = useState(false);
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
      setUrlDropDown('');
    }
  };

  //`${process.env.REACT_APP_API_URL}/rooms/${roomId}`
  const { data, isLoading } = useQuery(
    ['roobits', roomId],
    () =>
      axios
        .get(`${process.env.REACT_APP_API_URL}/rooms/${roomId}`)
        .then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 10,
      retry: 1,
      onError: () => {
        setErrPageOpen(true);
      }, //state 처리
    }
  );
  //onError 로 처리하면 isError false 된다.
  let roomStatus, roomData, roobits;

  if (!isLoading && !errPageOpen) {
    ({ roomStatus, roomData, roobits } = data);
  }

  return (
    <div>
      {auth > 0 && <BackwardBtn />}
      {isLoading ? (
        <Loading />
      ) : errPageOpen ||
        roomStatus === 'ROOM_CLOSED' ||
        roomStatus === 'ROOM_DELETED' ||
        roobits === undefined ||
        data === undefined ? (
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
