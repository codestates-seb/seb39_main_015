import Building from '../components/Building';
import CreateRoobitBtn from '../components/CreateRoobitBtn';
// import { roomDetailData } from '../data/DummyData';

const RoomDetail = () => {
  //쿼리로 룸 정보 받아와서 저장
  return (
    <div>
      <h1>룸 이름</h1>
      <Building />
      <CreateRoobitBtn />
    </div>
  );
};

export default RoomDetail;
