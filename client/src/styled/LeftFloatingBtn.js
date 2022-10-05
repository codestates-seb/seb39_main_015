import floatingIconImg from '../images/floatingIcon.svg';
import zoomInIconImg from '../images/zoomInIcon.svg';
import zoomOutIconImg from '../images/zoomOutIcon.svg';
import shareFloatingIconImg from '../images/shareFloatingIcon.svg';

import styled from 'styled-components';

/** className="zoom-in", "zoom-out", "share"(default) */
const LeftFloatingBtn = styled.button`
  z-index: 100;
  position: fixed;
  bottom: 60px;
  left: 100px;
  width: 60px;
  height: 60px;
  background-color: transparent;
  background-image: url(${floatingIconImg});
  background-size: contain;

  border: none;
  cursor: pointer;

  ::after {
    content: '';
    background: url(${shareFloatingIconImg}) no-repeat 40% 40%;
    background-size: 60%;
    width: 100%;
    height: 100%;
    display: block;
  }

  &.zoom-in,
  &.zoom-out {
    bottom: 124px;
    &::after {
      background-position: 35% 40%;
    }
  }

  &.zoom-in {
    &::after {
      background-image: url(${zoomInIconImg});
    }
  }
  &.zoom-out {
    &::after {
      background-image: url(${zoomOutIconImg});
    }
  }
`;

export default LeftFloatingBtn;
