import { forwardRef, useEffect, useState } from 'react';
import { FormWrapper } from '../styled/Style';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import { ReactComponent as CancelIcon } from '../images/cancel-icon.svg';
import { getCookieValue } from '../hook/getCookieValue';
import { useMutation, useQueryClient } from 'react-query';

const getTomorrowDate = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return tomorrow;
};

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

const RoomEditModal = ({ setEditOpen, roomData }) => {
  const [roomName, setRoomName] = useState(roomData.roomName);
  const [isValid, setIsValid] = useState(false);
  const [dDayDate, setDdayDate] = useState(new Date(roomData.dday)); //초기 렌더시에만 함수 실행
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
      mutate({ roomName, dDay });
    } else {
      alert('룸 이름을 확인해주세요!');
    }
  };

  const { mutate } = useMutation(
    (data) =>
      axios.patch(
        `${process.env.REACT_APP_API_URL}/rooms/${roomData.roomId}`,
        data,
        {
          headers: {
            Authorization: `${getCookieValue('Authorization')}`,
          },
        }
      ),
    {
      onMutate: (data) => {
        console.log('onMutate', data);
      },
      onSuccess: (data) => {
        alert('성공');
        console.log('onSuccess', data);
        queryClient.invalidateQueries('myRoom');
        setEditOpen('');
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
    <FormWrapper
      width="476px"
      height="634px"
      onClick={(e) => e.stopPropagation()}
    >
      <CancelIcon stroke="#aaa" onClick={() => setEditOpen('')} />
      <h2>Edit room</h2>
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
          <button onClick={handleOnSubmit}>룸 수정하기</button>
        </section>
      </form>
    </FormWrapper>
  );
};

export default RoomEditModal;
