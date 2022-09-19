import styled from 'styled-components';
import catImage from '../images/cat.png';
import { Link } from 'react-router-dom';

export const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5vh;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #4bbc8e;
`;
const Logo = styled.div`
  height: 100%;
  > img {
    object-fit: cover;
    max-height: 5vh;
    height: auto;
    width: auto;
  }
`;
const ButtonSection = styled.div`
  display: flex;
`;

export default function Header() {
  return (
    <HeaderStyle>
      <Link to="/">
        <Logo>
          <img alt="logo" src={catImage} />
        </Logo>
      </Link>
      <ButtonSection>
        <Link to="/login">
          <button>로그인</button>
        </Link>
        <Link to="/join">
          <button>가입하기</button>
        </Link>
      </ButtonSection>
    </HeaderStyle>
  );
}
