import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import googleButton from '../images/btn_google_signin_light_normal_web.png';
import googleButtonPressed from '../images/btn_google_signin_light_pressed_web.png';

const LoginFormWrapper = styled.div`
  padding-top: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffc75f;
`;

const ApiButton = styled.button`
  border: none;
  background-color: transparent;
`;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const [buttonLogo, setButtonLogo] = useState(googleButton);

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
    <LoginFormWrapper>
      <form onSubmit={hadleSubmit}>
        <label htmlFor="memberId">ID</label>
        <input type="text" id="memberId" name="ID" required />
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          name="password"
          minLength="3"
          maxLength="20"
          required
        />
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <ApiButton
            type="submit"
            onMouseDown={() => setButtonLogo(googleButtonPressed)}
            onClick={loginRequestHandler}
          >
            <img id="logo" alt="logo" src={buttonLogo} />
          </ApiButton>
        </div>
      </form>
      <p>
        계정이 없으신가요? <Link to="/join">가입하러 가기</Link>
      </p>
    </LoginFormWrapper>
  );
};

export default Login;
