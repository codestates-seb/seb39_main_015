import RoomModal from './RoomModal';
import { useState } from 'react';
import { CreaterFloatingBtnStyle, ModalWrapper } from '../styled/FloatingBtn';

const RoomModalBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CreaterFloatingBtnStyle type="button" onClick={handleOnClick}>
        룸 만들기
      </CreaterFloatingBtnStyle>
      {isOpen && (
        <ModalWrapper onClick={handleOnClick}>
          <RoomModal handleOpenModal={handleOnClick} />
        </ModalWrapper>
      )}
    </>
  );
};

export default RoomModalBtn;
