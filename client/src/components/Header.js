import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BlackButton, WhiteButton } from '../styled/Style';
import { MyInfo } from '../images/MyInfo.js';
import { getCookieValue } from '../hook/getCookieValue';
import { ReactComponent as LogoImg } from '../images/logo.svg';

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
  font-size: 0%;
  > svg {
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
  margin-right: 100px;
  justify-content: flex-end;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ProfiileWrapper = styled.div`
  margin-right: 10px;
  height: 42px;
  width: 42px;
  background-color: black;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  :active {
    box-shadow: none !important;
    transform: scale(1) !important;
  }
  :hover {
    box-shadow: 0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent,
      0px 6px 16px rgb(0 0 0 / 12%);
    transform: scale(1.02);
  }
`;

const Space = styled.span`
  margin-left: 10px;
`;

export default function Header() {
  // const navigate = useNavigate();
  const logoutHandler = () => {
    document.cookie =
      'Authorization' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.replace('/login');
    // navigate('/login');
  };

  const auth = getCookieValue('Authorization').length;

  return (
    <HeaderStyle>
      <Navigator>
        <Logo onClick={() => window.location.replace('/#sectionOne')}>
          <h1>
            Roobits
            <LogoImg />
          </h1>
        </Logo>
        <Button onClick={() => window.location.replace('/#sectionTwo')}>
          About
        </Button>
        <Button onClick={() => window.location.replace('/#sectionThree')}>
          Team
        </Button>
      </Navigator>
      <ButtonSection>
        {auth ? (
          <Link to="/edituser">
            <ProfiileWrapper>
              <MyInfo />
            </ProfiileWrapper>
          </Link>
        ) : (
          <Link to="/login">
            <WhiteButton width="95px" height="42px">
              로그인
            </WhiteButton>
            <Space />
          </Link>
        )}
        {auth ? (
          <WhiteButton width="95px" height="42px" onClick={logoutHandler}>
            로그아웃
          </WhiteButton>
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
