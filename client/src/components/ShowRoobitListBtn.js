import { RoobitsList } from './RoobitsList';
import {
  CreaterFloatingBtnStyle,
  ModalWrapper,
} from '../styled/RightFloatingBtn';
import { useState } from 'react';

const ShowRoobitListBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CreaterFloatingBtnStyle type="button" onClick={handleOnClick}>
        루빗 리스트 보기
      </CreaterFloatingBtnStyle>
      {isOpen && (
        <ModalWrapper onClick={handleOnClick}>
          <RoobitsList handleOpenModal={handleOnClick} />
        </ModalWrapper>
      )}
    </>
  );
};

export default ShowRoobitListBtn;
