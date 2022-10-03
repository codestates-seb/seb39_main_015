import styled from 'styled-components';
import { ReactComponent as BackwardIcon } from '../images/backwardIcon.svg';
import { useNavigate } from 'react-router-dom';

const BackwardBtnStyle = styled.button`
  position: fixed;
  top: 30px;
  left: 100px;

  width: 60px;
  height: 60px;
  border: none;
  background-color: transparent;

  cursor: pointer;
  svg {
    fill: var(--point-color);
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
