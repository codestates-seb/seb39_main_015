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
`;

const BackwardBtn = () => {
  const navigate = useNavigate();

  return (
    <BackwardBtnStyle onClick={() => navigate('/myroom')}>
      <BackwardIcon />
    </BackwardBtnStyle>
  );
};

export default BackwardBtn;
