import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
// import { joinResponse } from '../data/DummyData';

// 디자인 컨셉 결정 후 일괄 적용할 예정이기 때문에 styled 폴더에서 가져온 요소는 모두 삭제.
// 추후 컨셉이 결정되면 필요한 스타일을 미리 만들어두고 사용할 것.

const JoinFormWrapper = styled.div`
  padding-top: 5vh;
`;

const Join = () => {
  // 기존 displayName은 username으로 변경됨
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState('');
  const [usernameMsg, setUsernameMsg] = useState('');
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // email 선택적 수집을 위한 상태관리 (업데이트)
  const [selectEmail, setSelectEmail] = useState(false);

  // dpRegex는 idRegex로 변경됨
  // 사용자 요구사항 정의서에서 결정한 기준에 맞게 유효성 검사 부분 수정 완료.
  const idRegex = /^[a-z0-9]{4,15}$/;
  const emailRegex = /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const pwRegex = /^[a-zA-Z0-9`~!@#$%^&*()-_=+]{8,20}$/;

  const navigate = useNavigate();

  const handleDN = (e) => {
    const iptDisplayName = e.target.value;
    setUsername(iptDisplayName);

    if (!idRegex.test(iptDisplayName)) {
      setUsernameMsg('4자-15자 사이 영문(소문자), 숫자 조합으로 작성해주세요.');
    } else {
      setUsernameMsg('');
    }
  };

  const handleEmail = (e) => {
    const iptEmail = e.target.value;
    setEmail(iptEmail);
    if (!emailRegex.test(iptEmail)) {
      setEmailMsg('이메일 형식에 맞춰서 작성해주세요.');
    } else {
      setEmailMsg('');
    }
  };

  const handlePW = (e) => {
    const iptPassword = e.target.value;
    setPassword(iptPassword);
    if (!pwRegex.test(iptPassword)) {
      setPasswordMsg(
        '8자-20자 사이 영문(대소문자), 숫자, 특수문자{`~!@#$%^&*()-_=+) 조합으로 작성해주세요.'
      );
    } else {
      setPasswordMsg('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);

    if (isValid) {
      setIsLoading(true);
    }
  };

  const emailCheck = (e) => {
    setSelectEmail(e.target.checked);
  };

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

  useEffect(() => {
    if (isLoading && isValid) {
      // `${process.env.REACT_APP_API_URL}/users/join`
      axios
        .post('/fakeuri', {
          username,
          email,
          password,
        })
        .then((res) => {
          console.log(res.data);
          setIsLoading(false);
          navigate('/');
        })
        .catch(() => {
          //더미 데이터 적용
          setIsLoading(false);
          navigate('/login');
          //이 후 통신이 잘 되면 이 부분은 수정해야됩니다.
        });
    }
  }, [isLoading, isValid]);

  return (
    <JoinFormWrapper>
      <p>계정을 만들고 Roobits 룸을 만들어보세요.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">ID</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={handleDN}
          required
        />
        <p>{usernameMsg}</p>
        <label htmlFor="email">Email (선택)</label>
        <input type="checkbox" onChange={(e) => emailCheck(e)}></input>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmail}
          required
          disabled={!selectEmail}
        />
        <p>{emailMsg}</p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePW}
          required
        />
        <p>{passwordMsg}</p>
        <div>
          <button type="submit">Sign up</button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </JoinFormWrapper>
  );
};

export default Join;
