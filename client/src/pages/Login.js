import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Body,
  FormWrapper,
  Input,
  InputWrapper,
  LogoWrapper,
  OrangeButton,
  WhiteButton,
  StyledLink,
} from '../styled/Style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';

const InputWrapperLogin = styled(InputWrapper)`
  padding-bottom: 0px;
`;

const InputLoginUp = styled(Input)`
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom: none;
`;
const InputLoginDn = styled(Input)`
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const hadleSubmit = (e) => {
    e.preventDefault();

    // const usernameInput = e.target.username.value;
    // const passwordInput = e.target.password.value;

    // setUsername(usernameInput);
    // setPassword(passwordInput);

    if (username !== '' && password !== '') {
      //`${process.env.REACT_APP_API_URL}/users/login`
      setIsLoading(true);
      isLoading;

      axios
        .post(`${process.env.REACT_APP_API_URL}/user/login`, {
          username,
          password,
        })
        .then((res) => {
          setIsLoading(false);
          if (res.headers.authorization) {
            // const date = new Date();
            // date.setTime(date.getTime() + 60 * 60 * 1000);
            // console.log(date);
            document.cookie = `Authorization=${res.headers.authorization};max-age=3600;`;
            window.location.replace('/#sectionOne');
          } else {
            alert('아이디 혹은 비밀번호가 일치하지 않습니다.');
          }
        })
        .catch((res) => {
          //더미 데이터 적용
          //   dispatch(loginInfoActions.set(loginResponse));
          console.log(res);
          console.log('login-dummydata: ', username, password);
          setIsLoading(false);
          navigate('/login');
          //이후 통신이 잘 되면 이 부분은 수정해야 됩니다.
        });
    }
  };

  const loginRequestHandler = () => {
    setIsLoading(true);
    window.location.assign(
      `${process.env.REACT_APP_API_URL}/oauth2/authorization/google`
    );
  };

  return (
    <Body>
      <FormWrapper width={'476px'} height={'550px'}>
        <h2>Log in</h2>
        <form onSubmit={(e) => hadleSubmit(e)}>
          {/* <label htmlFor="username">ID</label> */}
          <InputWrapperLogin>
            <InputLoginUp
              type="text"
              id="username"
              name="ID"
              height={'45px'}
              width={'314px'}
              required
              placeholder="아이디"
              onChange={(e) => setUsername(e.target.value)}
            />
            <LogoWrapper>
              <FontAwesomeIcon icon={faUser} />
            </LogoWrapper>
          </InputWrapperLogin>
          {/* <label htmlFor="login-password">Password</label> */}
          <InputWrapper>
            <InputLoginDn
              type="password"
              id="login-password"
              name="password"
              height={'45px'}
              width={'314px'}
              required
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LogoWrapper>
              <FontAwesomeIcon icon={faLock} />
            </LogoWrapper>
          </InputWrapper>
          <div>
            <OrangeButton type="submit" height={'45px'} width={'314px'}>
              로그인
            </OrangeButton>
          </div>
        </form>
        <p>or</p>
        <WhiteButton
          height={'45px'}
          width={'314px'}
          onClick={loginRequestHandler}
        >
          <FontAwesomeIcon icon={faGooglePlusG} />
          <span> </span>
          구글 계정으로 로그인
        </WhiteButton>
        <div>
          <StyledLink to="/findname">아이디 찾기</StyledLink>
          <span> </span>
          <StyledLink to="/findpw">비밀번호 찾기</StyledLink>
        </div>
        <div>
          아직 회원이 아니신가요? <StyledLink to="/join">회원가입</StyledLink>
        </div>
      </FormWrapper>
    </Body>
  );
};

export default Login;
