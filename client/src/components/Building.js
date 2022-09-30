import { useState } from 'react';
import styled from 'styled-components';
import rooftopImg from '../images/roomImg/02_rooftop_1x_w3000.png';
import unitsImg from '../images/roomImg/01_units_1x_w9000.png';
import Roobits from './Roobits';

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

  .wrapper {
    border: 1px solid red;

    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    /* outline: 5px solid #ccc; */

    height: auto;
    width: var(--container-width);
    display: flex;
    flex-wrap: wrap-reverse;
    align-content: flex-start;
    margin: 0 auto;
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

const Building = ({ roobits }) => {
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
  /**만약 유닛 개수 증가하는 테스트를 하고 싶으면 이걸 사용 */
  const unitTest = () => {
    const [dummyArr, setDummyArr] = useState(Array(4).fill(0));
    const handlePlusBtn = () => {
      const num = dummyArr.length;
      if (num < 30) {
        setDummyArr([...dummyArr, 0]);
        oneTwoUnit(num + 1);
      }
    };

    const handleMinusBtn = () => {
      const num = dummyArr.length;
      if (num > 1) {
        setDummyArr(dummyArr.slice(0, dummyArr.length - 1));
        oneTwoUnit(num - 1);
      }
    };
    return (
      <div className="btns">
        <button className="addBtn" onClick={handlePlusBtn}>
          유닛 추가 +
        </button>
        <button className="removeBtn" onClick={handleMinusBtn}>
          유닛 제거 -
        </button>
      </div>
    );
  };

  unitTest();

  return (
    <BuildingStyle totalFloor={parseInt((unitCount - 1) / 3) + 1}>
      {/* <img src="img/02_rooftop_1x_w3000.png" alt="rooftop" /> */}
      <div className="wrapper">
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
                <Roobits unitRoobits={roobits[i + 1]} />
              </li>
            ))}
          <li
            className={`item rooftop ${isOne ? 'onlyOne' : ''} ${
              isTwo ? 'onlyTwo' : ''
            }`}
          ></li>
          <li
            className={`item rooftop ${isOne ? 'onlyOne remove' : ''} ${
              isTwo ? 'onlyTwo' : ''
            }`}
          ></li>
          <li
            className={`item rooftop ${isOne ? 'onlyOne remove' : ''} ${
              isTwo ? 'onlyTwo remove' : ''
            }`}
          ></li>
        </ul>
      </div>
    </BuildingStyle>
  );
};

export default Building;
