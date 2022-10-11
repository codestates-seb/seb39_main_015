import { useEffect, useState } from 'react';
import styled from 'styled-components';
import rooftopImg from '../images/roomImg/02_rooftop_1x_w3000.png';
import unitsImg from '../images/roomImg/01_units_with_window_1x_w9000.png';
import Roobits from './Roobits';
import catMeow from '../audios/cat_meow.wav';
import zoomInBigIcon from '../images/zoomInBigIcon.svg';

const BuildingStyle = styled.div`
  /* display: none; */
  --total-floor: ${(props) => (props.totalFloor <= 2 ? 2 : props.totalFloor)};
  --item-height: min(90vw / 3 * (2 / 3), 90vh / (var(--total-floor) + 0.8));
  --item-width: calc(var(--item-height) * (3 / 2));
  --rooftop-height: calc(var(--item-height) * (3 / 5));
  --container-width: calc(var(--item-width) * 3);
  --unit-border-width: calc(var(--item-height) * 0.05);
  --unit-border: var(--unit-border-width) solid #715844;

  /** 유닛이 1개, 2개 일 때 사이즈 분기 처리 */
  --one-item-height: min(var(--item-height) * 2, 80vh * (5 / 8));
  --one-item-width: calc(var(--one-item-height) * (3 / 2));
  --two-item-height: min(var(--item-height) * (3 / 2), 80vh * (5 / 8));
  --two-item-width: calc(var(--two-item-height) * (3 / 2));
  --one-rooftop-height: calc(var(--one-item-height) * (3 / 5));
  --two-rooftop-height: calc(var(--two-item-height) * (3 / 5));

  /** 줌 인 줌 아웃 구현을 위한 변수 */
  --floor: ${(props) => parseInt(props.idx / 3) || 0};
  --nth: ${(props) => props.idx % 3 || 0};
  --zoom-translate-x: calc(
    50% - (var(--item-width) * var(--nth)) - (var(--item-width) / 2)
  );
  --zoom-translate-y: calc(
    -50% + (var(--item-height) * var(--floor)) + (var(--item-height) / 2)
  );
  --zoom-transform-origin: calc(
      var(--item-width) * var(--nth) + (var(--item-width) / 2)
    )
    calc(100% - (var(--item-height) * var(--floor)) - (var(--item-height) / 2));
  --zoom-scale: calc(100 / (90 / (var(--total-floor) + 0.1)));

  /**scale은 number(단위 없는 정수나 소수) 만 받기 때문에 length(px, vh, rem 등) 자료형을 넣으면 작동이 안 된다. */

  /** 줌 인 줌 아웃 - 유닛이 한 개인 경우 */
  --one-zoom-translate-x: 0;
  --one-zoom-translate-y: calc(-50% + (var(--one-item-height) / 2));
  --one-zoom-transform-origin: 50% calc(100% - (var(--one-item-height) / 2));
  --one-zoom-scale: calc(100 / (90 / (var(--total-floor) - 0.5)));

  /** 줌 인 줌 아웃 - 유닛이 두 개인 경우 */
  --two-zoom-translate-x: calc(25% - (50% * var(--nth)));
  --two-zoom-translate-y: calc(-50% + (var(--two-item-height) / 2));
  --two-zoom-transform-origin: calc(
      var(--two-item-width) * var(--nth) + (var(--two-item-width) / 2)
    )
    calc(100% - (var(--two-item-height) / 2));
  --two-zoom-scale: calc(100 / (90 / (var(--total-floor) - 0.5)));

  .wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    position: absolute;
    height: auto;
    width: var(--container-width);
    display: flex;
    flex-wrap: wrap-reverse;
    align-content: flex-start;
    margin: 0 auto;
    transition: transform 0.6s, transform-origin 0.6s ease;
  }

  /** 줌 인 줌 아웃 처리 */
  .wrapper.zoom-in-mode > .container:not(.onlyOne),
  .wrapper.zoom-in-mode > .container:not(.onlyTwo) {
    transform-origin: var(--zoom-transform-origin);
    transform: translate(var(--zoom-translate-x), var(--zoom-translate-y))
      scale(var(--zoom-scale));
  }

  .wrapper.zoom-in-mode > .container.onlyOne {
    transform-origin: var(--one-zoom-transform-origin);
    transform: translate(
        var(--one-zoom-translate-x),
        var(--one-zoom-translate-y)
      )
      scale(var(--one-zoom-scale));
  }

  .wrapper.zoom-in-mode > .container.onlyTwo {
    transform-origin: var(--two-zoom-transform-origin);
    transform: translate(
        var(--two-zoom-translate-x),
        var(--two-zoom-translate-y)
      )
      scale(var(--two-zoom-scale));
  }

  .container.onlyOne {
    width: calc(var(--one-item-width));
  }
  .container.onlyTwo {
    width: calc(var(--two-item-width) * 2);
  }

  .item {
    background-origin: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-size: cover;

    height: var(--item-height);
    width: var(--item-width);
  }

  .room {
    border: var(--unit-border);
    background-image: url(${unitsImg});
    position: relative;
  }

  .rooftop {
    height: var(--rooftop-height);

    background-image: url(${rooftopImg});
    background-size: 100% 100%;
  }

  .btns {
    text-align: right;
    padding-right: 20px;
  }

  button {
    height: 40px;
    width: 70px;
    margin-left: 10px;
    cursor: pointer;
  }

  /* arrangement */
  .remove {
    display: none;
  }

  .item.onlyOne {
    height: var(--one-item-height);
    width: var(--one-item-width);
  }

  .item.onlyTwo {
    height: var(--two-item-height);
    width: var(--two-item-width);
  }

  .rooftop.onlyOne {
    height: var(--one-rooftop-height);
  }
  .rooftop.onlyTwo {
    height: var(--two-rooftop-height);
  }

  /* border + 배경 적용 로직 */
  .room:nth-child(3n + 1) {
    border-right: none;
  }
  .room:nth-child(3n + 2) {
    border-left: none;
    border-right: none;

    background-position: 50%;
  }
  .room:nth-child(3n) {
    border-left: none;

    background-position: 100%;
  }
  .room:nth-last-child(1) {
    border-right: var(--unit-border);
  }
  .room:nth-last-child(4) {
    border-right: var(--unit-border);
  }

  /** 호버시 줌 인 아이콘 등장 */
  button.zoomIn {
    margin: 0;
    padding: 0;
    display: block;
    background-color: transparent;
    cursor: default;

    border: none;
    width: 100%;
    height: 100%;
  }

  .wrapper.zoom-out-mode button.zoomIn::after {
    content: '';
    position: absolute;
    opacity: 1;
    top: calc(-1 * var(--unit-border-width));
    bottom: calc(-1 * var(--unit-border-width));
    left: calc(-1 * var(--unit-border-width));
    right: calc(-1 * var(--unit-border-width));
    background: url(${zoomInBigIcon}) no-repeat center rgba(0, 0, 0, 0.4);
    background-size: 40%;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .wrapper.zoom-out-mode button.zoomIn:hover::after {
    cursor: zoom-in;
    opacity: 1;
  }

  /** zoom-in-mode이고 msg-on 인 경우 메시지 박스 다 보여주기 */
  .wrapper.zoom-in-mode.msg-on .msg-box {
    visibility: visible;
    opacity: 0.9;
  }

  /** 루빗 호버시 해당 메시지를 선명하게 */
  .wrapper.zoom-in-mode .item ul li:hover .msg-box {
    visibility: visible;
    opacity: 1;
  }

  /** scale 조절 시 글자 크기 오류 수정 */
  .wrapper.zoom-in-mode .nickname {
    transform-origin: top center;
  }
  .wrapper.zoom-in-mode .msg-box {
    transform-origin: top center;
  }

  .wrapper.zoom-in-mode .item:not(.onlyOne) .nickname,
  .wrapper.zoom-in-mode .room:not(.onlyTwo) .nickname {
    transform: translate(-50%) scale(calc(1 / var(--zoom-scale)));
  }
  .wrapper.zoom-in-mode .room:not(.onlyOne) .msg-box,
  .wrapper.zoom-in-mode .room:not(.onlyTwo) .msg-box {
    transform: translate(-50%, calc(-100% / var(--zoom-scale)))
      scale(calc(1 / var(--zoom-scale)));
    transform-origin: top center;
  }

  .wrapper.zoom-in-mode .room.onlyOne .nickname {
    transform: translate(-50%) scale(calc(1 / var(--one-zoom-scale)));
  }
  .wrapper.zoom-in-mode .room.onlyOne .msg-box {
    & p {
      font-size: 1.4rem;
    }
  }

  .wrapper.zoom-in-mode .room.onlyTwo .nickname {
    transform: translate(-50%) scale(calc(1 / var(--two-zoom-scale)));
  }
  .wrapper.zoom-in-mode .room.onlyTwo .msg-box {
    & p {
      font-size: 1.4rem;
    }
  }

  .wrapper.zoom-out-mode .nickname,
  .wrapper.zoom-out-mode .msg-box {
    display: none;
  }
`;

const ArrowBtn = styled.button`
  position: fixed;
  font-size: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 50;

  svg {
    fill: #999;
    opacity: 0.5;
    stroke: #fff;
    stroke-width: 0.2em;
  }

  &:hover {
    & svg {
      fill: var(--point-color);
      opacity: 0.8;
    }
  }

  &.up {
    top: 3vh;
    left: 50%;
    transform: translateX(-50%);
  }

  &.down {
    bottom: 3vh;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
  }

  &.left {
    left: 2vw;
    top: 50%;
    transform-origin: top left;
    transform: translateY(100%) rotate(-90deg);
  }

  &.right {
    right: 2vw;
    top: 50%;
    transform-origin: top right;
    transform: translateY(100%) rotate(90deg);
  }
`;

const ArrowSvg = () => {
  return (
    <svg
      width="99"
      height="49"
      viewBox="0 0 99 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M46.8239 1.40878C48.3452 0.0394391 50.6548 0.0394391 52.1761 1.40878L96.7459 41.527C99.4705 43.9795 97.7356 48.5 94.0698 48.5H4.93016C1.26436 48.5 -0.470487 43.9795 2.25412 41.527L46.8239 1.40878Z"
        fill="current"
      />
    </svg>
  );
};

const Building = ({ roobits, isZoomIn, setIsZoomIn, showMsg }) => {
  const unitCount = roobits.length;
  const [isOne, setIsOne] = useState(false);
  const [isTwo, setIsTwo] = useState(false);
  const [idx, setIdx] = useState(unitCount - 1 < 0 ? 0 : unitCount - 1);

  const oneTwoUnit = (num) => {
    if (num <= 1) {
      setIsOne(true);
      setIsTwo(false);
    } else if (num === 2) {
      setIsOne(false);
      setIsTwo(true);
    } else {
      setIsOne(false);
      setIsTwo(false);
    }
  };

  const handleUnitClick = (i) => () => {
    setIdx(i);
    setIsZoomIn(true);
  };

  useEffect(() => {
    oneTwoUnit(roobits.length);
  }, []);

  return (
    <>
      {isZoomIn && (
        <>
          {idx + 3 < unitCount && (
            <ArrowBtn className="up" onClick={() => setIdx((prev) => prev + 3)}>
              위<ArrowSvg />
            </ArrowBtn>
          )}
          {idx - 3 >= 0 && (
            <ArrowBtn
              className="down"
              onClick={() => setIdx((prev) => prev - 3)}
            >
              아래
              <ArrowSvg />
            </ArrowBtn>
          )}
          {idx - 1 >= 0 && (
            <ArrowBtn
              className="left"
              onClick={() => setIdx((prev) => prev - 1)}
            >
              왼쪽
              <ArrowSvg />
            </ArrowBtn>
          )}
          {idx + 1 < unitCount && (
            <ArrowBtn
              className="right"
              onClick={() => setIdx((prev) => prev + 1)}
            >
              오른쪽
              <ArrowSvg />
            </ArrowBtn>
          )}
        </>
      )}
      <BuildingStyle totalFloor={parseInt((unitCount - 1) / 3) + 1} idx={idx}>
        <div
          className={`wrapper ${isZoomIn ? 'zoom-in-mode' : 'zoom-out-mode'} ${
            showMsg ? 'msg-on' : 'msg-off'
          }`}
        >
          <ul
            className={`container ${isOne ? 'onlyOne' : ''} ${
              isTwo ? 'onlyTwo' : ''
            }`}
          >
            {Array(unitCount || 1)
              .fill(0)
              .map((el, i) => (
                <li
                  key={i}
                  className={`item room ${isOne ? 'onlyOne' : ''} ${
                    isTwo ? 'onlyTwo' : ''
                  }`}
                >
                  <button className="zoomIn" onClick={handleUnitClick(i)}>
                    <Roobits unitRoobits={roobits[i]} audioUrl={catMeow} />
                  </button>
                </li>
              ))}
            <li
              className={`item rooftop ${isOne ? 'onlyOne' : ''} ${
                isTwo ? 'onlyTwo' : ''
              }`}
            ></li>
            <li
              className={`item rooftop ${isOne ? 'remove' : ''} ${
                isTwo ? 'onlyTwo' : ''
              }`}
            ></li>
            <li
              className={`item rooftop ${isOne ? 'remove' : ''} ${
                isTwo ? 'remove' : ''
              }`}
            ></li>
          </ul>
        </div>
      </BuildingStyle>
    </>
  );
};

export default Building;
