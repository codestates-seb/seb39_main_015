import { FormWrapper } from '../styled/Style';
import Carousel from './Carousel';
import RoobitStyleSelect from './RoobitStyleSelect';
import { ReactComponent as CancelIcon } from '../images/cancel-icon.svg';
import { useMemo, useState } from 'react';
import RoobitOneImg from '../styled/RoobitOneImg';
import { getRoobitType } from '../hook/getRoobitType';
import styled from 'styled-components';

const RoobitImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid red;
`;

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
              roobitType={roobitType}
              roobitStyle={roobitStyle}
            />
            <RoobitStyleSelect setRoobitStyle={setRoobitStyle} />
            <button onClick={() => setIsPhaseOne(false)}>
              글 작성하러 가기
            </button>
          </section>
        ) : (
          <section>
            <RoobitImgWrapper>
              <RoobitOneImg
                roobitCode={getRoobitType(roobitType + roobitStyle)}
              />
            </RoobitImgWrapper>
            <button onClick={() => setIsPhaseOne(true)}>
              루빗 디자인 수정
            </button>
            <div>
              <label htmlFor="from">from.</label>
              <input id="from" placeholder="닉네임 (최대 10자)" required />
            </div>
            <div>
              <textarea placeholder="140자까지 작성 가능합니다." required />
            </div>
            <div>
              <label htmlFor="to">to.</label>
              <input id="to" defaultValue="everyone" required />
            </div>
            <button type="reset">초기화</button>
            <button type="submit">작성 완료</button>
          </section>
        )}
      </form>
    </FormWrapper>
  );
};

export default CreateRoobitModal;
