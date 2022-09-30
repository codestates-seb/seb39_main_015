import { forwardRef, useEffect, useMemo, useState } from 'react';
import { FormWrapper } from '../styled/Style';
import Carousel from './Carousel';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CancelIcon } from '../images/cancel-icon.svg';
import { getCookieValue } from '../hook/getCookieValue';

const DatePickerComponent = ({ dDayDate, setDdayDate }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <button
        type="button"
        className="custom-input"
        onClick={onClick}
        ref={ref}
      >
        {value}
      </button>
    );
  });
  CustomInput.displayName = 'CustomInput';

  return (
    <DatePicker
      selected={dDayDate}
      disabledKeyboardNavigation //다른 월의 같은 날짜가 자동으로 selected 되는 현상 방지
      onChange={(date) => setDdayDate(date)}
      customInput={<CustomInput />}
      minDate={new Date().setDate(new Date().getDate() + 1)}
      maxDate={new Date().setDate(new Date().getDate() + 30)}
      dateFormat="yyyy-MM-dd"
      placeholderText="30일 이내의 날짜만 D-day 로 설정할 수 있습니다."
    />
  );
};

const RoomModal = ({ handleOpenModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [dDayDate, setDdayDate] = useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const [roobitAmount, setRoobitAmount] = useState(300);
  const [roomTheme, setRoomTheme] = useState('CATS');
  const [roomNameMsg, setRoomNameMsg] = useState('');

  const setDateStr = (dateObj) => {
    return (
      dateObj.getFullYear() +
      '-' +
      (dateObj.getMonth() + 1 < 9
        ? '0' + (dateObj.getMonth() + 1)
        : dateObj.getMonth() + 1) +
      '-' +
      (dateObj.getDate() < 9 ? '0' + dateObj.getDate() : dateObj.getDate())
    );
  };

  const handleOnReset = () => {
    setDdayDate(new Date());
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setIsLoading(true);
    } else {
      alert('룸 이름을 확인해주세요!');
    }
  };

  const themes = useMemo(() => {
    return [
      {
        type: 'theme',
        number: 1,
        roomTheme: 'CATS',
        src: 'https://picsum.photos/id/100/100/100',
        title: '🐈 고양이와 개발자의 방 🧑‍💻',
      },
      {
        type: 'theme',
        number: -1,
        roomTheme: 'COMING_SOON',
        src: 'https://picsum.photos/id/19/100/100',
        title: 'Coming Soon 💌',
      },
    ];
  }, []);

  const postRoom = (reqData) => {
    console.log(reqData);
    //${process.env.REACT_APP_API_URL}
    axios
      .post(`${process.env.REACT_APP_API_URL}/rooms`, reqData, {
        headers: {
          Authorization: `${getCookieValue('Authorization')}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert('룸 만들기 성공!');
        setIsLoading(false);
        //navigate('/myroom');
      })
      .catch((res) => {
        console.log(res.data);
        alert('룸 만들기 실패...');
        setIsLoading(false);
        //navigate('/login');
      });
  };

  useEffect(() => {
    if (/^.{2,20}$/.test(roomName)) {
      setIsValid(true);
      setRoomNameMsg('');
    } else {
      setIsValid(false);
      setRoomNameMsg('2 ~ 20자 이내로 입력해주세요.');
    }
  }, [roomName]);

  useEffect(() => {
    if (isLoading) {
      const dDay = setDateStr(dDayDate);
      postRoom({ roomName, dDay, roomTheme, roobitAmount });
    }
  }, [isLoading]);

  return (
    <FormWrapper
      width="476px"
      height="634px"
      onClick={(e) => e.stopPropagation()}
    >
      <CancelIcon stroke="#aaa" onClick={handleOpenModal} />
      <h2>Make a room</h2>
      <form onReset={handleOnReset}>
        <section>
          <label htmlFor="room-name">룸 이름</label>
          <input
            id="room-name"
            type="text"
            placeholder="최대 20자까지 작성 가능합니다."
            minLength={2}
            maxLength={20}
            name="roomName"
            required
            onChange={(e) => setRoomName(e.target.value.trim())}
          />
          <p>{roomNameMsg}</p>
        </section>
        <section>
          <label htmlFor="d-day">D-day</label>
          <DatePickerComponent dDayDate={dDayDate} setDdayDate={setDdayDate} />
        </section>
        <section>
          <label htmlFor="max-roobits">최대 루빗 개수</label>
          <select
            id="roobits-num"
            name="roobitAmount"
            onChange={(e) => setRoobitAmount(Number(e.target.value))}
          >
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
          <Carousel cards={themes} setRoomTheme={setRoomTheme} />
        </section>
        <section>
          <button type="reset">초기화</button>
          <button onClick={handleOnSubmit}>룸 만들기</button>
        </section>
      </form>
    </FormWrapper>
  );
};

export default RoomModal;
