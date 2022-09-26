import { FormWrapper } from '../styled/ModalStyle';
import Carousel from './Carousel';

const RoomModal = () => {
  const getDate = () => {
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);

    const setDateFomat = (dateObj) => {
      return `${dateObj.getFullYear()}-${
        dateObj.getMonth() + 1 < 10
          ? '0' + String(dateObj.getMonth() + 1)
          : dateObj.getMonth() + 1
      }-${
        dateObj.getDate() < 10
          ? '0' + String(dateObj.getDate())
          : dateObj.getDate()
      }`;
    };

    return {
      startDateStr: setDateFomat(startDate),
      endDateStr: setDateFomat(endDate),
    };
  };

  return (
    <FormWrapper width="476px" height="634px">
      <h2>Make a room</h2>
      <form>
        <section>
          <label htmlFor="room-name">룸 이름</label>
          <input id="room-name" type="text" />
        </section>
        <section>
          <label htmlFor="d-day">D-day</label>
          <input
            id="d-day"
            type="date"
            defaultValue={getDate().startDateStr}
            min={getDate().startDateStr}
            max={getDate().endDateStr}
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
        <section>
          <button type="reset">초기화</button>
          <button type="button">룸 만들기</button>
        </section>
      </form>
    </FormWrapper>
  );
};

export default RoomModal;
