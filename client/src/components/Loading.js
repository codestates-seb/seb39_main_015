import styled from 'styled-components';
import { ReactComponent as LoadingAnimation } from '../images/LoadingAnimation.svg';

const LoadingBody = styled.div`
  background-color: rgba(251, 251, 250, 0.7);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 102;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <LoadingBody>
      <LoadingAnimation />
    </LoadingBody>
  );
};
