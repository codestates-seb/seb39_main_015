import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
import { Input, Body, FormWrapper, OrangeButton } from '../styled/Style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// 디자인 컨셉 결정 후 일괄 적용할 예정이기 때문에 styled 폴더에서 가져온 요소는 모두 삭제.
// 추후 컨셉이 결정되면 필요한 스타일을 미리 만들어두고 사용할 것.

const Join = () => {
  // 기존 displayName은 username으로 변경됨
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameMsg, setUsernameMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

    if (isValid) {
      setIsLoading(true);
    }

    if (isLoading && isValid) {
      // `${process.env.REACT_APP_API_URL}/users/join`
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
      <FormWrapper>
        <p>계정을 만들고 Roobits 룸을 만들어보세요.</p>
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="username">ID</label> */}
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
          <FontAwesomeIcon icon={faUser} />
          <p>{usernameMsg}</p>
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            height={'45px'}
            width={'314px'}
            onChange={handleEmail}
            required
          />
          <p>{emailMsg}</p>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            height={'45px'}
            width={'314px'}
            onChange={handlePW}
            required
          />
          <p>{passwordMsg}</p>
          <div>
            <OrangeButton height={'45px'} width={'314px'} type="submit">
              회원가입
            </OrangeButton>
          </div>
        </form>
        <p>
          이미 회원이신가요? <Link to="/login">로그인하러 가기</Link>
        </p>
      </FormWrapper>
    </Body>
  );
};

export default Join;
