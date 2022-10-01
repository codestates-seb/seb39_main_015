import { FormWrapper } from '../styled/Style';
import Carousel from './Carousel';
import { ReactComponent as CancelIcon } from '../images/cancel-icon.svg';
import { useMemo } from 'react';

const CreateRoobitModal = ({ handleOpenModal }) => {
  const roobitTypes = useMemo(() => {
    return [
      {
        type: 'roobit',
        number: 1,
      },
      {
        type: 'roobit',
        number: 2,
      },
      {
        type: 'roobit',
        number: 2,
      },
      {
        type: 'roobit',
        number: 2,
      },
      {
        type: 'roobit',
        number: 2,
      },
    ];
  }, []);
  return (
    <FormWrapper
      width="476px"
      height="634px"
      onClick={(e) => e.stopPropagation()}
    >
      <CancelIcon stroke="#aaa" onClick={handleOpenModal} />
      <h2>Create a Roobits</h2>
      <form>
        <section>
          <p>고양이 선택</p>
          <Carousel cards={roobitTypes} />
        </section>
        <section>
          <p>글 작성하기</p>
        </section>
      </form>
    </FormWrapper>
  );
};

export default CreateRoobitModal;
