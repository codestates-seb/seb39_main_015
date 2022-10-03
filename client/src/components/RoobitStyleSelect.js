import catsImg from '../images/roomImg/03_cats_1x_w3200.png';
import styled from 'styled-components';
import { useMemo } from 'react';

const SelectStyle = styled.div`
  border: 1px solid blue;
  width: 342px;
  height: 170px;
  padding: 18px 24px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  button {
    border: 1px solid red;
    width: 60px;
    height: 60px;
    padding: 9px;
    cursor: pointer;
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

const RoobitStyleSelect = ({ setRoobitStyle }) => {
  const roobitStyles = useMemo(() => {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  }, []);
  return (
    <SelectStyle>
      {roobitStyles.map((style, i) => (
        <button type="button" key={style} onClick={() => setRoobitStyle(style)}>
          <RoobitImgStyle idx={i}>{style}</RoobitImgStyle>
        </button>
      ))}
    </SelectStyle>
  );
};

export default RoobitStyleSelect;
