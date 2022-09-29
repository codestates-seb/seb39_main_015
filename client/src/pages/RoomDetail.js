import { useState } from 'react';
import styled from 'styled-components';
// import { roomDetailData } from '../data/DummyData';

const BuildingStyle = styled.div`
  --total-floor: ${(props) => (props.totalFloor <= 2 ? 2 : props.totalFloor)};
  --item-height: min(90vw / 3 * (2 / 3), 90vh / (var(--total-floor) + 0.8));
  --item-width: calc(var(--item-height) * (3 / 2));
  --rooftop-height: calc(var(--item-height) * (3 / 5));
  --container-width: calc(var(--item-width) * 3);

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
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    outline: 5px solid #ccc;

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
    border: 5px solid pink;
    background-color: aliceblue;
    background-origin: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;

    height: var(--item-height);
    width: var(--item-width);
  }

  .rooftop {
    background-color: lightyellow;
    border-bottom: none;
    height: var(--rooftop-height);
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

  /* border 적용 로직 */
  .item:nth-child(3n + 1) {
    border-right: none;
  }
  .item:nth-child(3n + 2) {
    border-left: none;
    border-right: none;
  }
  .item:nth-child(3n) {
    border-left: none;
  }
  .item:nth-last-child(1) {
    border-right: 5px solid pink;
  }
  .item:nth-last-child(4) {
    border-right: 5px solid pink;
  }

  /* 1개 2개 일때 보더 처리 */
  .rooftop.onlyOne {
    border: 5px solid pink;
    border-bottom: none;
  }

  .rooftop.onlyTwo:nth-last-child(2) {
    border-right: 5px solid pink;
    border-left: none;
  }
  .rooftop.onlyTwo:nth-last-child(3) {
    border-left: 5px solid pink;
    border-right: none;
  }
`;

const RoomDetail = () => {
  const [dummyArr, setDummyArr] = useState(Array(4).fill(0));
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
    <div>
      <h1>룸 이름</h1>
      <BuildingStyle totalFloor={parseInt((dummyArr.length - 1) / 3) + 1}>
        <div className="wrapper">
          <ul
            className={`container ${isOne ? 'onlyOne' : ''} ${
              isTwo ? 'onlyTwo' : ''
            }`}
          >
            {dummyArr.map((el, i) => (
              <li
                key={i}
                className={`item ${isOne ? 'onlyOne' : ''} ${
                  isTwo ? 'onlyTwo' : ''
                }`}
              >
                {i + 1}
              </li>
            ))}
            <li
              className={`item rooftop ${isOne ? 'onlyOne' : ''} ${
                isTwo ? 'onlyTwo' : ''
              }`}
            >
              옥상
            </li>
            <li
              className={`item rooftop ${isOne ? 'onlyOne remove' : ''} ${
                isTwo ? 'onlyTwo' : ''
              }`}
            >
              옥상
            </li>
            <li
              className={`item rooftop ${isOne ? 'onlyOne remove' : ''} ${
                isTwo ? 'onlyTwo remove' : ''
              }`}
            >
              옥상
            </li>
          </ul>
        </div>
        <div className="btns">
          <button className="addBtn" onClick={handlePlusBtn}>
            유닛 추가 +
          </button>
          <button className="removeBtn" onClick={handleMinusBtn}>
            유닛 제거 -
          </button>
        </div>
      </BuildingStyle>
    </div>
  );
};

export default RoomDetail;
