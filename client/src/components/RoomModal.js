import { forwardRef, useState } from 'react';
import { FormWrapper } from '../styled/ModalStyle';
import Carousel from './Carousel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      type="button"
      className="example-custom-input"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </button>
  ));
  ExampleCustomInput.displayName = 'ExampleCustomInput';

  return (
    <DatePicker
      selected={startDate}
      disabledKeyboardNavigation //다른 월의 같은 날짜가 자동으로 selected 되는 현상 방지
      locale="ko"
      onChange={(date) => setStartDate(date)}
      customInput={<ExampleCustomInput />}
      minDate={new Date()}
      maxDate={new Date().setDate(new Date().getDate() + 30)}
      dateFormat="yyyy-MM-dd"
      placeholderText="30일 이내의 날짜만 D-day 로 설정할 수 있습니다."
    />
  );
};

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
          <label htmlFor="d-day">D-day</label>
          <DatePickerComponent />
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
