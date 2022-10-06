import { useMemo } from 'react';
import styled from 'styled-components';
import { getRoobitType } from '../hook/getRoobitType';
import { haveTo } from '../hook/haveTo';
import RoobitOneImg from '../styled/RoobitOneImg';

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
  grid-template-rows: repeat(3, 33%);

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
    color: black;
    text-shadow: var(--font-shadow);
    line-height: 1.2;
    font-weight: 600;

    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%);

    font-size: 1rem;
  }

  .msg-box {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    max-height: fit-content;
    width: max-content;
    max-width: 30vw;
    background-color: #fff;
    border: 1px solid var(--point-color);
    border-radius: 10px;

    padding: 20%;
    z-index: 10;

    visibility: hidden;
    opacity: 0;

    & p {
      word-break: break-all;
      color: rgba(0, 0, 0, 0.8);
      font-size: 1rem;
      line-height: 1.6;
      text-align: left;
      font-weight: 500;
    }

    & .reception {
      font-weight: 400;
      text-align: right;
      font-size: 0.8rem;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 97%);
      border: 4px solid #fff;
      border-top-width: 7px;
      border-color: #fff transparent transparent;
    }
  }
  &:hover {
    cursor: pointer;
  }

  &:hover .msg-box {
    visibility: visible;
    opacity: 1;
    transition: all 0.3s ease;
  }
`;

const Roobits = ({ unitRoobits = [], audioUrl }) => {
  const audio = useMemo(() => new Audio(audioUrl));
  return (
    <RoobitsWrapper>
      {unitRoobits.map((roobit) => (
        <RoobitLi key={roobit.roobitId}>
          <RoobitOneImg
            onClick={() => audio.play()}
            roobitCode={getRoobitType(roobit.style)}
            className={haveTo(roobit.reception) && 'letter'}
          />
          {!haveTo(roobit.reception) && roobit.body === undefined ? null : (
            <div className="msg-box">
              <p className="body">{roobit.body}</p>
              {haveTo(roobit.reception) && (
                <p className="reception">{'to. ' + roobit.reception}</p>
              )}
            </div>
          )}

          <p className="nickname">{roobit.nickname}</p>
        </RoobitLi>
      ))}
    </RoobitsWrapper>
  );
};

export default Roobits;
