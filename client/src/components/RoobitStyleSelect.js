import catsImg from '../images/roomImg/03_cats_1x_w3200.png';
import styled from 'styled-components';
import { useMemo, useState } from 'react';

const SelectStyle = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid var(--input-border-color);
  width: 100%;
  max-width: 342px;
  height: 170px;
  padding: 18px 24px;
  background-color: var(--light-gray);
  border-radius: 8px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  button {
    border: 1px solid var(--input-border-color);
    width: 60px;
    height: 60px;
    padding: 9px;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;

    &:hover,
    &.select {
      border-color: var(--point-color);
    }
    &.select {
      outline: 1px solid var(--point-color);
    }
  }

  @media screen and (max-width: 480px) {
    max-width: 90%;
    padding: 10px 14px;
  }
`;

const RoobitImgStyle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0;
  background-image: url(${catsImg});
  background-size: calc(100% * 16);
  background-position: calc(100% / 15 * ${(props) => props.idx}) 100%;
`;

const RoobitStyleSelect = ({ setRoobitStyle, currentRoobitStyle }) => {
  const roobitStyles = useMemo(() => {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  }, []);
  const [select, setSelect] = useState(
    () => roobitStyles.findIndex((el) => el === currentRoobitStyle) || 0
  );
  return (
    <SelectStyle>
      {roobitStyles.map((style, i) => (
        <button
          className={select === i ? 'select' : ''}
          type="button"
          key={style}
          onClick={() => {
            setRoobitStyle(style);
            setSelect(i);
          }}
        >
          <RoobitImgStyle idx={i}>{style}</RoobitImgStyle>
        </button>
      ))}
    </SelectStyle>
  );
};

export default RoobitStyleSelect;
