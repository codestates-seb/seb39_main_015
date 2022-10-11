import floatingIconImg from '../images/floatingIcon.svg';
import zoomInIconImg from '../images/zoomInIcon.svg';
import zoomOutIconImg from '../images/zoomOutIcon.svg';
import shareFloatingIconImg from '../images/shareFloatingIcon.svg';
import msgOnIconImg from '../images/msgOnIcon.svg';
import msgOffIcOffImg from '../images/msgOffIcon.svg';

import styled from 'styled-components';

/** className="zoom-in", "zoom-out", "share"(default), "msg-on", "msg-off" */
const LeftFloatingBtn = styled.button`
  --bottom-position: 60px;
  z-index: 100;
  position: fixed;
  bottom: var(--bottom-position);
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
    bottom: calc(var(--bottom-position) + 120px);

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
  &.msg-on,
  &.msg-off {
    bottom: calc(var(--bottom-position) + 60px);
  }

  &.msg-on {
    &::after {
      background-image: url(${msgOffIcOffImg});
    }
  }

  &.msg-off {
    &::after {
      background-image: url(${msgOnIconImg});
    }
  }

  @media screen and (max-width: 1024px) {
    left: 6%;
  }
  @media screen and (max-height: 420px) {
    --bottom-position: 4%;
  }
`;

export default LeftFloatingBtn;
