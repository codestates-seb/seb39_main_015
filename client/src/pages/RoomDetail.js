import Building from '../components/Building';
import CreateRoobitBtn from '../components/CreateRoobitBtn';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { roomDetailData } from '../data/DummyData';

const RoomDetail = () => {
  const { roomId = 1 } = useParams();
  //useLocation 으로 경로에서 roomId 받아오기
  //쿼리로 룸 정보 받아와서 저장
  roomId;
  const { data, isLoading } = useQuery(
    'roobits',
    () =>
      //`${process.env.REACT_APP_API_URL}/rooms/${roomId}`
      axios
        .get(`/fakeurl`)
        .then((res) => res.data)
        .catch(() => roomDetailData),
    { staleTime: 1000 * 60 * 5, retry: 0 }
  );

  let roomStatus, roomData, roobits;
  if (!isLoading) {
    ({ roomStatus, roomData, roobits } = data);
  } else {
    return <p>로딩 컴포넌트</p>;
  }

  return (
    <div>
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
