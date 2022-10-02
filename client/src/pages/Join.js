import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
import {
  Input,
  Body,
  FormWrapper,
  OrangeButton,
  LogoWrapper,
  InputWrapper,
  StyledLink,
  GreenButton,
  // WhiteButton,
} from '../styled/Style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import signUpLogo from '../images/cat.png';
import styled from 'styled-components';
import { getCookieValue } from '../hook/getCookieValue.js';
import { Loading } from '../components/Loading.js';

// 디자인 컨셉 결정 후 일괄 적용할 예정이기 때문에 styled 폴더에서 가져온 요소는 모두 삭제.
// 추후 컨셉이 결정되면 필요한 스타일을 미리 만들어두고 사용할 것.

const ButtonPosition = styled.div`
  position: absolute;
  right: 10px;
  > button {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
  }
`;

const Join = () => {
  // 기존 displayName은 username으로 변경됨
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [usernameMsg, setUsernameMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [passwordCheckMsg, setPasswordCheckMsg] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [emailCodeSend, setEmailCodeSend] = useState(false);
  const [emailCode, setEmailCode] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  console.log(`nameValid: ${nameValid}`);
  console.log(`isValid: ${isValid}`);

  // dpRegex는 idRegex로 변경됨
  // 사용자 요구사항 정의서에서 결정한 기준에 맞게 유효성 검사 부분 수정 완료.
  const idRegex = /^[a-z0-9]{4,15}$/;
  const emailRegex = /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const pwRegex = /^[a-zA-Z0-9`~!@#$%^&*()-_=+]{8,20}$/;
  const navigate = useNavigate();

  // 아이디 작성시 유효성 검사
  const handleDN = (e) => {
    const iptDisplayName = e.target.value;
    setUsername(iptDisplayName);

    if (!idRegex.test(iptDisplayName)) {
      setUsernameMsg(
        '! 4자-15자 사이 영문(소문자), 숫자 조합으로 작성해주세요.'
      );
    } else {
      setUsernameMsg('');
    }
  };

  // 이메일 작성시 유효성 검사
  const handleEmail = (e) => {
    const iptEmail = e.target.value;
    setEmail(iptEmail);
    if (!emailRegex.test(iptEmail)) {
      setEmailMsg('! 이메일 형식에 맞춰서 작성해주세요.');
    } else {
      setEmailMsg('');
    }
  };

  // 패스워드 작성시 유효성 검사
  const handlePW = (e) => {
    const iptPassword = e.target.value;
    setPassword(iptPassword);
    if (!pwRegex.test(iptPassword)) {
      setPasswordMsg(
        '! 8자-20자 사이 영문(대소문자), 숫자, 특수문자{`~!@#$%^&*()-_=+) 조합으로 작성해주세요.'
      );
    } else {
      setPasswordMsg('');
    }
  };

  //패스워드 일치 여부
  const handlePwCheck = (e) => {
    const iptPasswordCheck = e.target.value;
    setPasswordCheck(iptPasswordCheck);
    if (iptPasswordCheck === password) {
      setPasswordCheckMsg('');
    } else {
      setPasswordCheckMsg('비밀번호가 같지 않습니다.');
    }
  };

  // 제출 버튼 클릭 : 모든 유효성 검사가 통과되었다면 isLoading 값을 true로 변경
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameValid) {
      alert('아이디 중복 체크를 진행해주세요!');
      return;
    }

    if (isValid && nameValid && emailValid) {
      // `${process.env.REACT_APP_API_URL}/user/join`
      setIsLoading(true);
      isLoading;

      axios
        .post(`${process.env.REACT_APP_API_URL}/user/join`, {
          username,
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          setIsLoading(false);
          navigate('/login');
        })
        .catch(() => {
          //더미 데이터 적용
          setIsLoading(false);
          navigate('/join');
        });
    }
  };

  // 아이디 중복체크 함수
  const usernameCheck = (e) => {
    e.preventDefault();

    if (username) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/usernamecheck`, {
          username,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.usernameCheck === true) {
            setNameValid(true);
          } else {
            alert('이미 존재하는 아이디입니다.');
          }
        })
        .catch((res) => {
          console.log(res.data);
        });
    }
  };

  // email 중복 방지, 유효성 체크 함수
  const emailCheck = (e) => {
    e.preventDefault();

    if (email) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/useremailcheck`, {
          email,
        })
        .then((res) => {
          if (res.data.emailCheck === true) {
            setIsLoading(true);
            axios
              .post(`${process.env.REACT_APP_API_URL}/user/auth/sendemail`, {
                email,
              })
              .then((res) => {
                document.cookie = `emailCode=${res.data.createKey}`;
                setIsLoading(false);
                setEmailCodeSend(true);
                // alert('이메일로 인증코드를 보내드렸습니다!');
              });
          } else {
            alert('이미 존재하는 이메일입니다.');
          }
        })
        .catch((res) => {
          console.log(res.data);
          setIsLoading(false);
        });
    }
  };

  const emailCodeCheck = (e) => {
    e.preventDefault();

    if (getCookieValue('emailCode') === emailCode) {
      setEmailValid(true);
    } else {
      alert('코드가 일치하지 않습니다!');
      setEmailCode('');
    }
  };

  // 유효성 검사 실행 useEffect
  useEffect(() => {
    setIsValid(false);
    if (
      idRegex.test(username) &&
      emailRegex.test(email) &&
      pwRegex.test(password) &&
      password === passwordCheck
    ) {
      setIsValid(true);
    }
  }, [username, email, password, passwordCheck]);

  return (
    <Body>
      {isLoading ? <Loading /> : ''}
      <FormWrapper height={'545px'} width={'476px'}>
        <img alt="회원가입 로고" src={signUpLogo}></img>
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <label htmlFor="username">ID</label> */}
          <InputWrapper>
            <Input
              id="username"
              name="username"
              value={username}
              height={'45px'}
              width={'314px'}
              onChange={handleDN}
              required
              placeholder="아이디"
            />
            <LogoWrapper>
              <FontAwesomeIcon icon={faUser} />
            </LogoWrapper>
            <ButtonPosition>
              {nameValid ? (
                <GreenButton width="65px" height="25px">
                  확인 완료
                </GreenButton>
              ) : (
                <OrangeButton
                  width="65px"
                  height="25px"
                  onClick={(e) => usernameCheck(e)}
                >
                  중복 체크
                </OrangeButton>
              )}
            </ButtonPosition>
            <p>{usernameMsg}</p>
          </InputWrapper>
          <InputWrapper>
            <Input
              type="email"
              id="email"
              name="email"
              value={email}
              height={'45px'}
              width={'314px'}
              onChange={(e) => {
                handleEmail(e);
                setEmailCodeSend(false);
              }}
              required
              placeholder="이메일"
            />
            <LogoWrapper>
              <FontAwesomeIcon icon={faEnvelope} />
            </LogoWrapper>
            <ButtonPosition>
              {emailCodeSend ? (
                <GreenButton
                  width="65px"
                  height="25px"
                  onClick={(e) => emailCheck(e)}
                >
                  다시 받기
                </GreenButton>
              ) : (
                <OrangeButton
                  width="65px"
                  height="25px"
                  onClick={(e) => emailCheck(e)}
                >
                  코드 받기
                </OrangeButton>
              )}
            </ButtonPosition>
            <p>{emailMsg}</p>
          </InputWrapper>
          <InputWrapper>
            <Input
              id="emailCode"
              name="emailCode"
              value={emailCode}
              height={'45px'}
              width={'314px'}
              onChange={(e) => setEmailCode(e.target.value)}
              required
              placeholder={
                emailCodeSend
                  ? '이메일로 받으신 인증코드를 기입해주세요'
                  : '이메일 작성 후 코드받기를 눌러주세요'
              }
              disabled={!emailCodeSend}
            />
            <LogoWrapper>
              <FontAwesomeIcon icon={faEnvelope} />
            </LogoWrapper>
            <ButtonPosition>
              {emailValid
                ? emailCodeSend && (
                    <GreenButton width="65px" height="25px">
                      인증 완료
                    </GreenButton>
                  )
                : emailCodeSend && (
                    <OrangeButton
                      width="65px"
                      height="25px"
                      onClick={(e) => emailCodeCheck(e)}
                    >
                      인증 받기
                    </OrangeButton>
                  )}
            </ButtonPosition>
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              height={'45px'}
              width={'314px'}
              onChange={handlePW}
              required
              placeholder="비밀번호"
            />
            <LogoWrapper>
              <FontAwesomeIcon icon={faLock} />
            </LogoWrapper>
            <p>{passwordMsg}</p>
          </InputWrapper>
          <InputWrapper>
            <Input
              type="password"
              id="password"
              name="password"
              value={passwordCheck}
              height={'45px'}
              width={'314px'}
              onChange={handlePwCheck}
              required
              placeholder="비밀번호 확인"
            />
            <LogoWrapper>
              <FontAwesomeIcon icon={faLock} />
            </LogoWrapper>
            <p>{passwordCheckMsg}</p>
          </InputWrapper>
          <div>
            <OrangeButton height={'45px'} width={'314px'} type="submit">
              회원가입
            </OrangeButton>
          </div>
        </form>
        <div>
          이미 회원이신가요? <StyledLink to="/login">로그인</StyledLink>
        </div>
      </FormWrapper>
    </Body>
  );
};

export default Join;
