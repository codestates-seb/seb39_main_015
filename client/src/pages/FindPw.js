import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Body,
  FormWrapper,
  Input,
  InputWrapper,
  LogoWrapper,
  OrangeButton,
  StyledLink,
} from '../styled/Style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../components/Loading.js';
// import { useQueryClient } from 'react-query';

// const LoginFormWrapper = styled.div`
//   padding-top: 80px;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #ffc75f;
// `;

const FindName = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [username, setUsername] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const handleEmail = (e) => {
    const iptEmail = e.target.value;
    setEmail(iptEmail);
    if (!emailRegex.test(iptEmail)) {
      setEmailMsg('! 이메일 형식에 맞춰서 작성해주세요.');
    } else {
      setEmailMsg('');
    }
  };

  const hadleSubmit = (e) => {
    e.preventDefault();

    if (email !== '' && username !== '' && isValid) {
      //`${process.env.REACT_APP_API_URL}/users/login`
      setIsLoading(true);
      isLoading;
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/findpw/sendemail`, {
          username,
          email,
        })
        .then((res) => {
          //   dispatch(loginInfoActions.set(res.data));
          console.log(res.data);
          setIsLoading(false);
          setTimeout(() => {
            alert('등록된 이메일로 비밀번호를 보내드렸습니다!');
          }, 500);
          navigate('/login');
        })
        .catch((res) => {
          //더미 데이터 적용
          //   dispatch(loginInfoActions.set(loginResponse));
          console.log(res.data);
          setIsLoading(false);
          // navigate('/login');
        });
    }
  };

  useEffect(() => {
    setIsValid(false);
    if (emailRegex.test(email)) {
      setIsValid(true);
    }
  }, [email]);

  return (
    <Body>
      {isLoading ? <Loading /> : ''}
      <FormWrapper width={'476px'} height={'550px'}>
        <h2>Find PW</h2>
        <form onSubmit={(e) => hadleSubmit(e)}>
          <InputWrapper>
            <Input
              id="username"
              name="username"
              height={'45px'}
              width={'314px'}
              required
              placeholder="아이디"
              onChange={(e) => setUsername(e.target.value)}
            />
            <LogoWrapper>
              <FontAwesomeIcon icon={faUser} />
            </LogoWrapper>
          </InputWrapper>
          <InputWrapper>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              height={'45px'}
              width={'314px'}
              onChange={handleEmail}
              required
              placeholder="이메일"
            />
            <LogoWrapper>
              <FontAwesomeIcon icon={faEnvelope} />
            </LogoWrapper>
            <p>{emailMsg}</p>
          </InputWrapper>
          <div>
            <OrangeButton type="submit" height={'45px'} width={'314px'}>
              임시 비밀번호 받기
            </OrangeButton>
          </div>
        </form>
        <div>
          <StyledLink to="/findname">아이디 찾기</StyledLink>
        </div>
      </FormWrapper>
    </Body>
  );
};

export default FindName;
