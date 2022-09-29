import { FormWrapper } from '../styled/Style';
//import Carousel from './Carousel';
import { ReactComponent as CancelIcon } from '../images/cancel-icon.svg';

const CreateRoobitModal = ({ handleOpenModal }) => {
  return (
    <FormWrapper
      width="476px"
      height="634px"
      onClick={(e) => e.stopPropagation()}
    >
      <CancelIcon stroke="#aaa" onClick={handleOpenModal} />
      <h2>Create a Roobits</h2>
      <form></form>
      {/* <form onReset={handleOnReset}>
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
      </form>*/}
    </FormWrapper>
  );
};

export default CreateRoobitModal;
