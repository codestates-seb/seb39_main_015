import { useEffect, useState } from 'react';
import styled from 'styled-components';
import rooftopImg from '../images/roomImg/02_rooftop_1x_w3000.png';
import unitsImg from '../images/roomImg/01_units_1x_w9000.png';
import Roobits from './Roobits';
import catMeow from '../audios/cat_meow.wav';

const BuildingStyle = styled.div`
  --total-floor: ${(props) => (props.totalFloor <= 2 ? 2 : props.totalFloor)};
  --item-height: min(90vw / 3 * (2 / 3), 90vh / (var(--total-floor) + 0.8));
  --item-width: calc(var(--item-height) * (3 / 2));
  --rooftop-height: calc(var(--item-height) * (3 / 5));
  --container-width: calc(var(--item-width) * 3);
  --unit-border: calc(var(--item-height) * 0.05) solid #715844;

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
    border: 1px solid red;

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
    outline: 5px solid #ccc;
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
`;

// const convertCSSLenghtToNum = (lengthStr) => {
//   return lengthStr.match(/^(.*\d+)(\w*)$/)[1];
// };

const Building = ({ roobits, isZoomIn }) => {
  const unitCount = Object.keys(roobits).length;
  const [isOne, setIsOne] = useState(false);
  const [isTwo, setIsTwo] = useState(false);

  const oneTwoUnit = (num) => {
    if (num === 1) {
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

  useEffect(() => {
    oneTwoUnit(Object.keys(roobits).length);
  }, []);

  return (
    <BuildingStyle totalFloor={parseInt((unitCount - 1) / 3) + 1} idx={0}>
      {/* <img src="img/02_rooftop_1x_w3000.png" alt="rooftop" /> */}
      <div className={`wrapper ${isZoomIn ? 'zoom-in-mode' : 'zoom-out-mode'}`}>
        <ul
          className={`container ${isOne ? 'onlyOne' : ''} ${
            isTwo ? 'onlyTwo' : ''
          }`}
        >
          {Array(unitCount)
            .fill(0)
            .map((el, i) => (
              <li
                key={i}
                className={`item room ${isOne ? 'onlyOne' : ''} ${
                  isTwo ? 'onlyTwo' : ''
                }`}
              >
                <Roobits unitRoobits={roobits[i + 1]} audioUrl={catMeow} />
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
  );
};

export default Building;
