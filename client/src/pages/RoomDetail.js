import Building from '../components/Building';
import CreateRoobitBtn from '../components/CreateRoobitBtn';
import BackwardBtn from '../components/BackwardBtn';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import {
  //roomDetailData,
  //roomDetailData_1,
  //roomDetailData_2,
  // roomDetailData_3,
  //roomDetailData_4,
  roomDetailData_12,
} from '../data/DummyData';
import { getCookieValue } from '../hook/getCookieValue';

const RoomDetail = () => {
  const { roomId } = useParams();
  const auth = getCookieValue('Authorization').length;

  const { data, isLoading } = useQuery(
    'roobits',
    () =>
      axios
        .get(`${process.env.REACT_APP_API_URL}/rooms/${roomId}`)
        .catch(() => roomDetailData_12 /* 실패할 경우 더미 데이터 표시 */),
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
          <Building roobits={roobits} />
          <CreateRoobitBtn />
        </>
      )}
    </div>
  );
};

export default RoomDetail;
