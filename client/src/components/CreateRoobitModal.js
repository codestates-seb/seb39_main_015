import { FormWrapper } from '../styled/Style';
import Carousel from './Carousel';
import RoobitStyleSelect from './RoobitStyleSelect';
import { ReactComponent as CancelIcon } from '../images/cancel-icon.svg';
import { useMemo, useState } from 'react';

const CreateRoobitModal = ({ handleOpenModal }) => {
  const [roobitType, setRoobitType] = useState('1');
  const [roobitStyle, setRoobitStyle] = useState('A');
  const [isPhaseOne, setIsPhaseOne] = useState(true);
  const roobitTypesArr = useMemo(() => {
    return [
      {
        type: 'roobit',
        number: 1,
        value: '1',
      },
      {
        type: 'roobit',
        number: 2,
        value: '2',
      },
      {
        type: 'roobit',
        number: 3,
        value: '3',
      },
      {
        type: 'roobit',
        number: 4,
        value: '4',
      },
      {
        type: 'roobit',
        number: 5,
        value: '5',
      },
    ];
  }, []);
  //axios 만들기
  console.log(roobitType, roobitStyle);

  return (
    <FormWrapper
      width="476px"
      height="634px"
      onClick={(e) => e.stopPropagation()}
    >
      <CancelIcon stroke="#aaa" onClick={handleOpenModal} />
      <h2>Create a Roobits</h2>
      <form>
        {isPhaseOne ? (
          <section>
            <Carousel
              cards={roobitTypesArr}
              setData={setRoobitType}
              roobitStyle={roobitStyle}
            />
            <RoobitStyleSelect setRoobitStyle={setRoobitStyle} />
            <button onClick={() => setIsPhaseOne(false)}>
              글 작성하러 가기
            </button>
          </section>
        ) : (
          <section>
            <div>고양이</div>
            <button onClick={() => setIsPhaseOne(true)}>
              고양이 디자인 수정
            </button>
            <div>
              <label htmlFor="from">from.</label>
              <input id="from" />
            </div>
            <textarea />
            <div>
              <label htmlFor="to">to.</label>
              <input id="to" />
            </div>
            <button type="reset">초기화</button>
            <button type="button">작성 완료</button>
          </section>
        )}
      </form>
    </FormWrapper>
  );
};

export default CreateRoobitModal;
