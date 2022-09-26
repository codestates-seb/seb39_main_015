import { FormWrapper } from '../styled/ModalStyle';
import Carousel from './Carousel';

const RoomModal = () => {
  return (
    <FormWrapper width="476px" height="634px">
      <h2>Make a room</h2>
      <form>
        <section>
          <label htmlFor="room-name">룸 이름</label>
          <input id="room-name" type="text" />
        </section>
        <section>
          <label htmlFor="d-day">룸 이름</label>
          <input
            id="d-day"
            type="date"
            value="2022-09-22"
            min="2022-09-22"
            max="2022-10-22"
          />
        </section>
        <section>
          <label htmlFor="max-roobits">최대 루빗 개수</label>
          <select id="roobits-num">
            <option value="300">300 (max)</option>
            <option value="250">250</option>
            <option value="200">200</option>
            <option value="150">150</option>
            <option value="100">100</option>
            <option value="50">50</option>
          </select>
        </section>
        <section id="theme">
          <label htmlFor="theme">테마 선택</label>
          <Carousel />
        </section>
      </form>
    </FormWrapper>
  );
};

export default RoomModal;