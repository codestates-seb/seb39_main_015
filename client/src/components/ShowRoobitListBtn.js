import { RoobitsList } from './RoobitsList';
import {
  CreaterFloatingBtnStyle,
  ModalWrapper,
} from '../styled/RightFloatingBtn';
import { useState } from 'react';
import styled from 'styled-components';

const ShowListBtnStyle = styled(CreaterFloatingBtnStyle)`
  ::before {
    content: '≡' !important;
    font-size: 36px;
  }
`;

const ShowRoobitListBtn = ({ roomId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <ShowListBtnStyle type="button" onClick={handleOnClick}>
        루빗 리스트 보기
      </ShowListBtnStyle>
      {isOpen && (
        <ModalWrapper onClick={handleOnClick}>
          <RoobitsList handleOpenModal={handleOnClick} roomId={roomId} />
        </ModalWrapper>
      )}
    </>
  );
};

export default ShowRoobitListBtn;
