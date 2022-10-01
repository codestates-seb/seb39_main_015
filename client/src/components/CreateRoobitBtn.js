import CreateRoobitModal from './CreateRoobitModal';
import styled from 'styled-components';
import { useState } from 'react';

const MakeRoomBtnStyle = styled.button`
  position: fixed;
  bottom: 60px;
  right: 100px;
`;
const ModalWrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CreateRoobitBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <MakeRoomBtnStyle type="button" onClick={handleOnClick}>
        루빗 만들기
      </MakeRoomBtnStyle>
      {isOpen && (
        <ModalWrapper onClick={handleOnClick}>
          <CreateRoobitModal handleOpenModal={handleOnClick} />
        </ModalWrapper>
      )}
    </>
  );
};

export default CreateRoobitBtn;
