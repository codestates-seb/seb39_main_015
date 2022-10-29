import styled from 'styled-components';
import { ReactComponent as BackwardIcon } from '../images/backwardIcon.svg';
import { useNavigate } from 'react-router-dom';

const BackwardBtnStyle = styled.button`
  position: fixed;
  top: 20px;
  left: 100px;
  z-index: 100;

  width: 60px;
  height: 60px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  & > svg {
    fill: var(--point-color);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    left: 6%;
  }

  @media screen and (max-height: 480px) {
    top: 3%;
  }
`;

const BackwardBtn = ({ goToMyRoom }) => {
  const navigate = useNavigate();

  return (
    <BackwardBtnStyle
      onClick={() => {
        if (goToMyRoom) {
          navigate('/myroom');
        } else {
          navigate('/');
        }
      }}
    >
      <BackwardIcon />
    </BackwardBtnStyle>
  );
};

export default BackwardBtn;
