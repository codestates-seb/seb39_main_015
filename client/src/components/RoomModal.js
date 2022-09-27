import { forwardRef, useMemo, useState } from 'react';
import { FormWrapper } from '../styled/Style';
import Carousel from './Carousel';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CancelIcon } from '../images/cancel-icon.svg';

const DatePickerComponent = ({ dDayDate, setDdayDate }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button type="button" className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  CustomInput.displayName = 'CustomInput';

  return (
    <DatePicker
      selected={dDayDate}
      disabledKeyboardNavigation //다른 월의 같은 날짜가 자동으로 selected 되는 현상 방지
      onChange={(date) => setDdayDate(date)}
      customInput={<CustomInput />}
      minDate={new Date()}
      maxDate={new Date().setDate(new Date().getDate() + 30)}
      dateFormat="yyyy-MM-dd"
      placeholderText="30일 이내의 날짜만 D-day 로 설정할 수 있습니다."
    />
  );
};

const postRoom = () => {
  /** 보낼 데이터 양식
  {
    roomName:’room’
    dDay: ‘2022-09-15’,
    roomTheme: {number: 1, description: ‘cats’}, roobitAmount: 300
  } 
  */
  axios
    .post(`${process.env.REACT_APP_API_URL}/rooms/post`, {})
    .then((res) => {
      console.log(res.data);
      // setIsLoading(false);
      // navigate('/');
    })
    .catch((res) => {
      console.log(res.data);
      // setIsLoading(false);
      // navigate('/login');
    });
};

const RoomModal = ({ handleOpenModal }) => {
  const [dDayDate, setDdayDate] = useState(new Date());

  const handleOnSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    postRoom();
  };

  const handleOnReset = () => {
    setDdayDate(new Date());
  };

  const themes = useMemo(() => {
    return [
      {
        src: 'https://picsum.photos/id/100/100/100',
        title: '🐈 고양이와 개발자의 방 🧑‍💻',
      },
      { src: 'https://picsum.photos/id/19/100/100', title: 'Coming Soon 💌' },
    ];
  }, []);

  return (
    <FormWrapper
      width="476px"
      height="634px"
      onClick={(e) => e.stopPropagation()}
    >
      <CancelIcon stroke="#aaa" onClick={handleOpenModal} />
      <h2>Make a room</h2>
      <form onSubmit={handleOnSubmit} onReset={handleOnReset}>
        <section>
          <label htmlFor="room-name">룸 이름</label>
          <input
            id="room-name"
            type="text"
            placeholder="최대 20자까지 작성 가능합니다."
            minLength={2}
            maxLength={20}
          />
        </section>
        <section>
          <label htmlFor="d-day">D-day</label>
          <DatePickerComponent dDayDate={dDayDate} setDdayDate={setDdayDate} />
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
          <Carousel cards={themes} />
        </section>
        <section>
          <button type="reset">초기화</button>
          <button type="submit">룸 만들기</button>
        </section>
      </form>
    </FormWrapper>
  );
};

export default RoomModal;
