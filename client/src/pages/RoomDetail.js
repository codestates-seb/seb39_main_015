import Building from '../components/Building';
import CreateRoobitBtn from '../components/CreateRoobitBtn';
import BackwardBtn from '../components/BackwardBtn';
import LeftFloatingBtn from '../styled/LeftFloatingBtn';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  roomDetailData,
  //roomDetailData_1,
  //roomDetailData_2,
  //roomDetailData_3,
  //roomDetailData_4,
  //roomDetailData_12,
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
  const { data, isLoading } = useQuery(
    'roobits',
    () =>
      axios
        .get(`/fake`)
        .catch(() => roomDetailData /* 실패할 경우 더미 데이터 표시 */),
    {
      staleTime: 1000 * 60 * 30,
      retry: 1,
      onError: (err) => {
        console.log(err);
      },
    }
  );

  let roomStatus, roomData, roobits;
  if (!isLoading) {
    ({ roomStatus, roomData, roobits } = data);
  } else {
    return <p>로딩 컴포넌트</p>;
  }

  return (
    <div>
      {auth > 0 && <BackwardBtn />}
      {roomStatus === 'closed' || roobits === undefined ? (
        <p>룸 종료 페이지 컴포넌트</p>
      ) : (
        <>
          <h1>{roomData.roomName}</h1>
          <p>{roomData.restDay}</p>
          <p>{roomData.dDay}</p>
          <Building roobits={roobits} isZoomIn={isZoomIn} />

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
