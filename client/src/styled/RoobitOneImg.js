import styled from 'styled-components';
import catsImg from '../images/roomImg/03_cats_1x_w3200.png';
import lettersImg from '../images/roomImg/04_letters_1x_w400.png';

/** 스타일코드에 따라 루빗 이미지를 보여주는 styled-components
 * <RoobitOneImg roobitCode={getRoobitType("1A")} className={haveTo("xxx") ? 'letter' : ''}/>
 */
const RoobitOneImg = styled.div`
  --type: ${(props) => String(props.roobitCode.type) || '0'};
  --style: ${(props) => String(props.roobitCode.style) || '0'};
  --roobit-style: calc(100% / 7 * var(--style)) calc(100% / 4.5 * var(--type));
  --roobit-width: 100%;

  display: block;
  width: var(--roobit-width);
  height: 0;
  padding-top: var(--roobit-width);
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
`;

export default RoobitOneImg;
