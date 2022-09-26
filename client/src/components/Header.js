import styled from 'styled-components';
import catImage from '../images/cat.png';
import { Link } from 'react-router-dom';
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

const Navigator = styled.div`
  display: flex;
  margin-left: 100px;
  width: 291px;
  justify-content: space-between;
`;
const Logo = styled.div`
  height: 100%;
  > img {
    object-fit: cover;
    max-height: 80px;
    height: auto;
    width: auto;
  }
  cursor: pointer;
`;
const ButtonSection = styled.div`
  display: flex;
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin-right: 100px;
  justify-content: end;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export default function Header() {
  // const navigate = useNavigate();
  const logoutHandler = () => {
    document.cookie =
      'Authorization' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.replace('/login');
    // navigate('/login');
  };

  const queryClient = useQueryClient();
  const userInfo = queryClient.getQueryData('auth');

  return (
    <HeaderStyle>
      <Navigator>
        <Logo onClick={() => window.location.replace('/#sectionOne')}>
          <img alt="logo" src={catImage} />
        </Logo>
        <Button onClick={() => window.location.replace('/#sectionTwo')}>
          About
        </Button>
        <Button onClick={() => window.location.replace('/#sectionThree')}>
          Team
        </Button>
      </Navigator>
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
