import styled from 'styled-components';
import { getRoobitType } from '../hook/getRoobitType';
import { haveTo } from '../hook/haveTo';
import RoobitOneImg from '../styled/RoobitOneImg';
import catMeow from '../audios/cat_meow.wav';

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

const RoobitLi = styled.li`
  --font-shadow-color: rgba(255, 255, 255, 0.6);
  --font-shadow: -1px 0 var(--font-shadow-color), 0 1px var(--font-shadow-color),
    1px 0 var(--font-shadow-color), 0 -1px var(--font-shadow-color);
  position: relative;

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

const Roobits = ({ unitRoobits }) => {
  const audio = new Audio(catMeow);
  return (
    <RoobitsWrapper>
      {unitRoobits.map((roobit) => (
        <RoobitLi key={roobit.roobitId}>
          <RoobitOneImg
            onClick={() => audio.play()}
            roobitCode={getRoobitType(roobit.style)}
            className={haveTo(roobit.reception) && 'letter'}
          />
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
