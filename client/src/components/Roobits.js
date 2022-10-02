import catsImg from '../images/roomImg/03_cats_1x_w3200.png';
import lettersImg from '../images/roomImg/04_letters_1x_w400.png';
import styled from 'styled-components';

/*
{
  roobitId: 1,
  nickname: '4자바중독',
  body: '루빗을 140자까지 작성해보세요.', //null
  reception: 'to everyone',
  style: '5C',
}
*/

const RoobitsWrapper = styled.ul`
  width: 100%;
  height: 100%;

  padding: 15% 5% 3% 5%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);

  grid-template-areas:
    'a b c d e f'
    'g h i j k l'
    'm n o p q r';

  /* 첫번째 방 배치 */
  > li:nth-child(1) {
    grid-area: j;
  }
  > li:nth-child(2) {
    grid-area: h;
  }
  > li:nth-child(3) {
    grid-area: o;
  }
  > li:nth-child(4) {
    grid-area: q;
  }
  > li:nth-child(5) {
    grid-area: l;
  }
  > li:nth-child(6) {
    grid-area: m;
  }
  > li:nth-child(7) {
    grid-area: a;
  }
  > li:nth-child(8) {
    grid-area: c;
  }
  > li:nth-child(9) {
    grid-area: e;
  }
  > li:nth-child(10) {
    grid-area: f;
  }
`;

/** 개별 루빗(고양이) 배치 */
const RoobitLi = styled.li`
  --type: ${(props) => String(props.roobitType.type)};
  --style: ${(props) => String(props.roobitType.style)};
  --roobit-style: calc(100% / 7 * var(--style)) calc(100% / 4.5 * var(--type));

  --roobit-width: calc(100%);
  --font-shadow-color: rgba(255, 255, 255, 0.6);
  --font-shadow: -1px 0 var(--font-shadow-color), 0 1px var(--font-shadow-color),
    1px 0 var(--font-shadow-color), 0 -1px var(--font-shadow-color);

  display: inline-block;
  width: var(--roobit-width);
  height: 0;
  padding-top: var(--roobit-width);
  outline: none;
  border: none;
  position: relative;

  background-image: url(${catsImg});
  background-repeat: no-repeat;
  background-size: calc(100% * 8);
  background-position: var(--roobit-style);

  &.letter::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: calc(25% * var(--type));
    background-image: url(${lettersImg});
  }

  .nickname {
    white-space: nowrap;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.8rem;
    text-shadow: var(--font-shadow);
    line-height: 1.2;
    font-weight: 600;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%);
  }

  .reception {
    white-space: nowrap;
    color: rgba(0, 0, 0, 0.8);
    font-size: 0.8rem;
    text-shadow: var(--font-shadow);
    line-height: 1.2;
    font-weight: 600;

    position: absolute;
    top: -20%;
    left: 50%;
    transform: translate(-50%);
  }
`;

/** 스타일 코드에 따라 루빗 스타일 값을 숫자로 변환하는 함수 : type-자세 style-무늬 */
const getRoobitType = (typeStr) => {
  let [all, type, style] = typeStr.match(/^([\d]+)([\D]+)$/);
  type = Number(type) - 1;
  style = style.toUpperCase().charCodeAt(0) - 65;
  //각 코드를 숫자로 변경
  return { all, type, style };
};

const haveTo = (reception) => {
  if (reception !== 'to everyone') {
    return true;
  }
  return false;
};

const Roobits = ({ unitRoobits }) => {
  return (
    <RoobitsWrapper>
      {unitRoobits.map((roobit) => (
        <RoobitLi
          key={roobit.roobitId}
          roobitType={getRoobitType(roobit.style)}
          className={haveTo(roobit.reception) && 'letter'}
        >
          {haveTo(roobit.reception) && (
            <p className="reception">{roobit.reception}</p>
          )}
          <p className="nickname">{roobit.nickname}</p>
        </RoobitLi>
      ))}
    </RoobitsWrapper>
  );
};

export default Roobits;
