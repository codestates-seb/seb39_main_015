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
  WhiteButton,
} from '../styled/Style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import signUpLogo from '../images/cat.png';
import styled from 'styled-components';
import { useQueryClient } from 'react-query';

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

const Space = styled.span`
  margin-left: 10px;
`;

const EditUser = ({ getCookieValue }) => {
  const queryClient = useQueryClient();
  const userInfo = queryClient.getQueryData('auth');
  // 기존 displayName은 username으로 변경됨
  const [username, setUsername] = useState(userInfo.username); //queryClient.getQuerysData('auth')
  const [email, setEmail] = useState(userInfo.email); //queryClient.getQueryData('auth')
  const [password, setPassword] = useState('');
  const [usernameMsg, setUsernameMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nameValid, setNameValid] = useState(false);

  console.log(userInfo);

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

  // 제출 버튼 클릭 : 모든 유효성 검사가 통과되었다면 isLoading 값을 true로 변경
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameValid) {
      alert('아이디 중복 체크를 진행해주세요!');
      return;
    }

    if (isValid && nameValid) {
      // `${process.env.REACT_APP_API_URL}/user/join`
      setIsLoading(true);
      isLoading;

      const updateInfo = { password };
      if (username !== userInfo.username) {
        updateInfo.username = username;
      }
      if (email !== userInfo.email) {
        updateInfo.email = email;
      }

      axios
        .patch(`${process.env.REACT_APP_API_URL}/user/patch`, updateInfo, {
          headers: {
            Authorization: `${getCookieValue('Authorization')}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setIsLoading(false);
          navigate('/');
        })
        .catch(() => {
          setIsLoading(false);
          navigate('/edituser');
        });
    }
  };

  // 아이디 중복체크 함수
  const usernameCheck = (e) => {
    e.preventDefault();

    setIsLoading(true);
    if (username) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/usernamecheck`, {
          username,
        })
        .then((res) => {
          console.log(res.data);
          setIsLoading(false);
          if (res.data.usernameCheck === true) {
            setNameValid(true);
          } else {
            alert('이미 존재하는 아이디입니다.');
          }
        })
        .catch((res) => {
          console.log(res.data);
          setIsLoading(false);
        });
    }
  };

  // 유효성 검사 실행 useEffect
  useEffect(() => {
    setIsValid(false);
    if (
      idRegex.test(username) &&
      emailRegex.test(email) &&
      pwRegex.test(password)
    ) {
      setIsValid(true);
    }
  }, [username, email, password]);

  // isLoading과 isValid 를 상시 확인 => 둘다 true일 경우 axios 요청 송부
  // useEffect(() => {
  //   if (isLoading && isValid) {
  //     // `${process.env.REACT_APP_API_URL}/users/join`
  //     axios
  //       .post('/fakeuri', {
  //         username,
  //         email,
  //         password,
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //         setIsLoading(false);
  //         navigate('/login');
  //       })
  //       .catch(() => {
  //         //더미 데이터 적용
  //         setIsLoading(false);
  //         navigate('/join');
  //         //이 후 통신이 잘 되면 이 부분은 수정해야됩니다.
  //       });
  //   }
  // }, [isLoading, isValid]);

  return (
    <Body>
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
          {/* <label htmlFor="email">Email</label> */}
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
          {/* <label htmlFor="password">Password</label> */}
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
          <div>
            <WhiteButton
              height={'45px'}
              width={'150px'}
              onClick={() => navigate('/')}
            >
              취소
            </WhiteButton>
            <Space />
            <OrangeButton height={'45px'} width={'150px'} type="submit">
              수정 완료
            </OrangeButton>
          </div>
        </form>
        <div>
          회원 탈퇴 하실건가요? <StyledLink to="/login">회원 탈퇴</StyledLink>
        </div>
      </FormWrapper>
    </Body>
  );
};

export default EditUser;
