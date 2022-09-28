import { useState } from 'react';
import styled from 'styled-components';
// import { roomDetailData } from '../data/DummyData';

const BuildingStyle = styled.div`
  .wrapper {
    border: 1px solid red;

    width: 40%;
    height: 90vh;
    margin: 0 auto 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container {
    border: 5px solid #ccc;

    height: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap-reverse;
    margin: 0 auto;
  }

  .item {
    border: 5px solid pink;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

    flex: 0 1 33.33%;
    height: 0;
    max-height: 20px;
    padding: calc(33.33% * 0.5 * 0.6) 0;
  }

  .rooftop {
    background-color: lightyellow;
    border-bottom: none;

    padding: calc(33.33% * 0.5 * 0.3) 0;
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

  .onlyOne {
    flex-basis: 100%;
    padding: calc(100% * 0.5 * 0.6) 0;
  }

  .onlyTwo {
    flex-basis: 50%;
    padding: calc(50% * 0.5 * 0.6) 0;
  }

  .rooftop.onlyOne {
    padding: calc(100% * 0.5 * 0.3) 0;
    /* 유닛 너비 : rooftop = 10 : 3 */
  }
  .rooftop.onlyTwo {
    padding: calc(50% * 0.5 * 0.3) 0;
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
      <BuildingStyle>
        <div className="wrapper">
          <ul className="container">
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
