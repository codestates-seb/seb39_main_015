import CreateRoobitModal from './CreateRoobitModal';
import { CreaterFloatingBtnStyle, ModalWrapper } from '../styled/FloatingBtn';
import { useState } from 'react';

const CreateRoobitBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CreaterFloatingBtnStyle type="button" onClick={handleOnClick}>
        루빗 만들기
      </CreaterFloatingBtnStyle>
      {isOpen && (
        <ModalWrapper onClick={handleOnClick}>
          <CreateRoobitModal handleOpenModal={handleOnClick} />
        </ModalWrapper>
      )}
    </>
  );
};

export default CreateRoobitBtn;
