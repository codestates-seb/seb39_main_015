//import catsImg from '../images/roomImg/03_cats_1x_w3200.png';
//import lettersImg from '../images/roomImg/04_letters_1x_w400.png';
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

const RoobitsWrapper = styled.ul``;

const Roobits = ({ unitRoobits }) => {
  return (
    <RoobitsWrapper>
      {unitRoobits.map((roobit) => (
        <li key={roobit.roobitId}>
          <p>{roobit.nickname}</p>
        </li>
      ))}
    </RoobitsWrapper>
  );
};

export default Roobits;
