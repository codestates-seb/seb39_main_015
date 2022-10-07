import { forwardRef, useEffect, useMemo, useState } from 'react';
import {
  ModalFormWrapper,
  ModalInput,
  WhiteButton,
  OrangeButton,
} from '../styled/Style';
import Carousel from './Carousel';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CancelIcon } from '../images/cancel-icon.svg';
import { getCookieValue } from '../hook/getCookieValue';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';

import calendarIcon from '../images/calendarIcon.svg';

const DatePickerWrapper = styled.section`
  .react-datepicker {
    border-color: var(--point-color);
  }
  .react-datepicker__header {
    background-color: var(--point-color);
    border-bottom-color: var(--point-color);
  }
  .react-datepicker__current-month {
    color: var(--white-font-color);
  }
  .react-datepicker__navigation-icon::before {
    border-color: var(--white-font-color);
  }
  .react-datepicker__day-name {
    color: var(--white-font-color);
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::before,
  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle::after {
    border-bottom-color: var(--point-color);
  }
  .react-datepicker__day--selected {
    background-color: var(--point-color);
  }
`;

const DatePickBtnStyle = styled.button`
  background-color: #fbfbfb;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  font-size: 16px;
  height: 45px;
  width: 100%;
  color: var(--black-font-color);
  background: url(${calendarIcon}) no-repeat 13px center;
  text-align: left;
  padding-left: 39px;
  cursor: pointer;

  :focus {
    border: 1px solid #f58a5c;
    outline: none;
    background-color: white;
  }
`;

const getTomorrowDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow;
};

const DatePickerComponent = ({ dDayDate, setDdayDate }) => {
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <DatePickBtnStyle
        type="button"
        className="custom-input"
        onClick={onClick}
        ref={ref}
      >
        {value}
      </DatePickBtnStyle>
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
      dateFormat="yyyy. MM. dd."
      placeholderText="30일 이내의 날짜만 D-day 로 설정할 수 있습니다."
    />
  );
};

const RoomModal = ({ handleOpenModal }) => {
  const [roomName, setRoomName] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [dDayDate, setDdayDate] = useState(() => getTomorrowDate()); //초기 렌더시에만 함수 실행
  const [roobitAmount, setRoobitAmount] = useState(300);
  const [roomTheme, setRoomTheme] = useState('CATS');
  const [roomNameMsg, setRoomNameMsg] = useState('');
  const queryClient = useQueryClient();

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
    setDdayDate(getTomorrowDate());
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const dDay = setDateStr(dDayDate);
      mutate({ roomName, dDay, roomTheme, roobitAmount });
    } else {
      alert('룸 이름을 확인해주세요!');
    }
  };

  const themesArr = useMemo(() => {
    return [
      {
        type: 'theme',
        number: 1,
        value: 'CATS',
        title: '🐈 고양이와 개발자의 방 🧑‍💻',
      },
      {
        type: 'theme',
        number: -1,
        value: 'COMING_SOON',
        title: 'Coming Soon 💌',
      },
    ];
  }, []);

  const { mutate } = useMutation(
    (data) =>
      axios.post(`${process.env.REACT_APP_API_URL}/rooms`, data, {
        headers: {
          Authorization: `${getCookieValue('Authorization')}`,
        },
      }),
    {
      onMutate: (data) => {
        console.log('onMutate', data);
      },
      onSuccess: (data) => {
        alert('성공');
        console.log('onSuccess', data);
        queryClient.invalidateQueries('myRoom');
        handleOpenModal();
      },
      onError: (err) => {
        alert('실패');
        console.log(err);
      },
    }
  );

  useEffect(() => {
    if (/^.{2,20}$/.test(roomName)) {
      setIsValid(true);
      setRoomNameMsg('');
    } else {
      setIsValid(false);
      setRoomNameMsg('2 ~ 20자 이내로 입력해주세요.');
    }
  }, [roomName]);

  return (
    <ModalFormWrapper width="476px" onClick={(e) => e.stopPropagation()}>
      <CancelIcon className="cancel" stroke="#aaa" onClick={handleOpenModal} />
      <h2>Make a room</h2>
      <form onReset={handleOnReset}>
        <section>
          <label htmlFor="room-name">룸 이름</label>
          <ModalInput
            id="room-name"
            type="text"
            placeholder="최대 20자까지 작성 가능합니다."
            minLength={2}
            maxLength={20}
            name="roomName"
            required
            onChange={(e) => setRoomName(e.target.value.trim())}
          />
          <p className="err-msg">{roomNameMsg}</p>
        </section>
        <div className="two-divide">
          <DatePickerWrapper className="dday-box">
            <label htmlFor="d-day">D-day</label>
            <DatePickerComponent
              dDayDate={dDayDate}
              setDdayDate={setDdayDate}
            />
          </DatePickerWrapper>
          <section className="max-roobits-box">
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
        </div>

        <section id="theme">
          <label htmlFor="theme">테마 선택</label>
          <Carousel cards={themesArr} setData={setRoomTheme} />
        </section>
        <section className="two-divide">
          <WhiteButton height="45px" type="reset">
            초기화
          </WhiteButton>
          <OrangeButton height="45px" onClick={handleOnSubmit}>
            룸 만들기
          </OrangeButton>
        </section>
      </form>
    </ModalFormWrapper>
  );
};

export default RoomModal;
