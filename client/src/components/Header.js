import styled from 'styled-components';
import catImage from '../images/cat.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
// React query devtools
import { ReactQueryDevtools } from 'react-query/devtools';

export const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fbfbfa;
`;
const Logo = styled.div`
  height: 100%;
  > img {
    object-fit: cover;
    max-height: 80px;
    height: auto;
    width: auto;
  }
`;
const ButtonSection = styled.div`
  display: flex;
`;

export default function Header({ isLogin, setIsLogin, accessToken }) {
  const logoutHandler = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/logout`, { accessToken })
      .then((res) => {
        console.log(res.data);
        setIsLogin(false);
      })
      .catch((res) => console.log(res.data));
  };
  return (
    <HeaderStyle>
      <Link to="/">
        <Logo>
          <img alt="logo" src={catImage} />
        </Logo>
      </Link>
      <ReactQueryDevtools initialIsOpen={false} />
      <ButtonSection>
        {isLogin ? (
          ''
        ) : (
          <Link to="/login">
            <button>로그인</button>{' '}
          </Link>
        )}

        {isLogin ? (
          <button onClick={logoutHandler}>로그아웃</button>
        ) : (
          <Link to="/join">
            <button>회원가입</button>
          </Link>
        )}
      </ButtonSection>
    </HeaderStyle>
  );
}
