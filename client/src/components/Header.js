import styled from 'styled-components';
import catImage from '../images/cat.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
// React query devtools
import { BlackButton, WhiteButton } from '../styled/Style';
import { useQueryClient } from 'react-query';

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
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-right: 100px;
`;

export default function Header() {
  const logoutHandler = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/user/logout`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((res) => console.log(res.data));
  };

  const queryClient = useQueryClient();
  const userInfo = queryClient.getQueryData('auth');

  return (
    <HeaderStyle>
      <Link to="/">
        <Logo>
          <img alt="logo" src={catImage} />
        </Logo>
      </Link>
      <ButtonSection>
        {userInfo ? (
          ''
        ) : (
          <Link to="/login">
            <WhiteButton width="95px" height="42px">
              로그인
            </WhiteButton>{' '}
          </Link>
        )}
        {userInfo ? (
          <BlackButton width="95px" height="42px" onClick={logoutHandler}>
            로그아웃
          </BlackButton>
        ) : (
          <Link to="/join">
            <BlackButton width="95px" height="42px">
              회원가입
            </BlackButton>
          </Link>
        )}
      </ButtonSection>
    </HeaderStyle>
  );
}
