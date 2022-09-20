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
import logInLogo from '../images/cat.png';

// const LoginFormWrapper = styled.div`
//   padding-top: 80px;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #ffc75f;
// `;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const hadleSubmit = (e) => {
    e.preventDefault();

    const memberIdInput = e.target.memberId.value;
    const passwordInput = e.target.password.value;

    setMemberId(memberIdInput);
    setPassword(passwordInput);
    setIsLoading(true);

    if (isLoading && memberId !== '' && password !== '') {
      //`${process.env.REACT_APP_API_URL}/users/login`
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/login`, {
          memberId,
          password,
        })
        .then((res) => {
          //   dispatch(loginInfoActions.set(res.data));
          console.log(res.data);
          setIsLoading(false);
          navigate('/');
        })
        .catch(() => {
          //더미 데이터 적용
          //   dispatch(loginInfoActions.set(loginResponse));
          console.log('login-dummydata: ', memberId, password);
          setIsLoading(false);
          navigate('/login');
          //이후 통신이 잘 되면 이 부분은 수정해야 됩니다.
        });
    }
  };

  const CLIENT_ID =
    '178592033254-71vmmah4pd1rqor42idk7m9nma4vme9t.apps.googleusercontent.com';

  const loginRequestHandler = () => {
    return window.location.assign(
      `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&response_type=token&redirect_uri=http://localhost:3000&client_id=${CLIENT_ID}`
    );
  };

  // useEffect(() => {
  //   if (isLoading && memberId !== '' && password !== '') {
  //     //`${process.env.REACT_APP_API_URL}/users/login`
  //     axios
  //       .post(`${process.env.REACT_APP_API_URL}/user/login`, {
  //         memberId,
  //         password,
  //       })
  //       .then((res) => {
  //         //   dispatch(loginInfoActions.set(res.data));
  //         console.log(res.data);
  //         setIsLoading(false);
  //         navigate('/');
  //       })
  //       .catch(() => {
  //         //더미 데이터 적용
  //         //   dispatch(loginInfoActions.set(loginResponse));
  //         console.log('login-dummydata: ', memberId, password);
  //         setIsLoading(false);
  //         navigate('/login');
  //         //이후 통신이 잘 되면 이 부분은 수정해야 됩니다.
  //       });
  //   }
  // }, [isLoading]);
  return (
    <Body>
      <FormWrapper width={'476px'} height={'545px'}>
        <img alt="login logo" src={logInLogo} />
        <form onSubmit={hadleSubmit}>
          {/* <label htmlFor="memberId">ID</label> */}
          <InputWrapper>
            <Input
              type="text"
              id="memberId"
              name="ID"
              height={'45px'}
              width={'314px'}
              required
              placeholder="아이디"
            />
            <LogoWrapper>
              <FontAwesomeIcon icon={faUser} />
            </LogoWrapper>
          </InputWrapper>
          {/* <label htmlFor="login-password">Password</label> */}
          <InputWrapper>
            <Input
              type="password"
              id="login-password"
              name="password"
              height={'45px'}
              width={'314px'}
              required
              placeholder="비밀번호"
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
          <StyledLink>아이디 찾기</StyledLink>
          <StyledLink>비밀번호 찾기</StyledLink>
        </div>
        <div>
          아직 회원이 아니신가요? <StyledLink to="/join">회원가입</StyledLink>
        </div>
      </FormWrapper>
    </Body>
  );
};

export default Login;
