import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  PageWrapper,
  FormWrapper,
  InputForm,
  InputBox,
  BlueBtn,
  ParaLink,
} from '../styled/LoginStyledComp';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const hadleSubmit = (e) => {
    e.preventDefault();

    const memberId = e.target.memberId.value;
    const password = e.target.password.value;

    setMemberId(memberId);
    setPassword(password);
    setIsLoading(true);
  };

  useEffect(() => {
    if (isLoading && memberId !== '' && password !== '') {
      //`${process.env.REACT_APP_API_URL}/users/login`
      axios
        .post('/fakeuri', {
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
          navigate('/');
          //이후 통신이 잘 되면 이 부분은 수정해야 됩니다.
        });
    }
  }, [isLoading]);
  return (
    <PageWrapper>
      <FormWrapper>
        <InputForm>
          <form onSubmit={hadleSubmit}>
            <InputBox>
              <label htmlFor="memberId">ID</label>
              <input type="text" id="memberId" name="ID" required />
            </InputBox>
            <InputBox>
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                name="password"
                minLength="3"
                maxLength="20"
                required
              />
            </InputBox>
            <div>
              <BlueBtn type="submit">Log in</BlueBtn>
            </div>
          </form>
        </InputForm>
        <ParaLink>
          <p>
            계정이 없으신가요? <Link to="/join">가입하러 가기</Link>
          </p>
        </ParaLink>
      </FormWrapper>
    </PageWrapper>
  );
};

export default Login;
