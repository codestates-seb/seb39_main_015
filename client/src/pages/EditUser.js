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

export const UserInfoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  > p {
    position: absolute;
    left: 5px;
    top: 50px;
    font-size: 12px;
    color: #dd5858;
  }
`;

const UserInfoUnit = styled.div`
  height: 45px;
  width: 314px;
  background-color: white;
  border: none;
  padding-left: 40px;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

const Space = styled.span`
  margin-left: 10px;
`;

const EditUser = ({ getCookieValue }) => {
  const queryClient = useQueryClient();
  const userInfo = queryClient.getQueryData('auth');
  // 기존 displayName은 username으로 변경됨
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [passwordCheckMsg, setPasswordCheckMsg] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const username = userInfo.username; //queryClient.getQuerysData('auth')
  const email = userInfo.email; //queryClient.getQueryData('auth')

  // dpRegex는 idRegex로 변경됨
  // 사용자 요구사항 정의서에서 결정한 기준에 맞게 유효성 검사 부분 수정 완료.
  const pwRegex = /^[a-zA-Z0-9`~!@#$%^&*()-_=+]{8,20}$/;
  const navigate = useNavigate();

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

    if (isValid) {
      // `${process.env.REACT_APP_API_URL}/user/join`
      setIsLoading(true);
      isLoading;
      axios
        .patch(
          `${process.env.REACT_APP_API_URL}/user/patch`,
          { password },
          {
            headers: {
              Authorization: `${getCookieValue('Authorization')}`,
            },
          }
        )
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

  // 회원 탈퇴
  const deleteUser = () => {
    const confirmMsg = confirm('정말 탈퇴하시겠습니까?');
    if (confirmMsg) {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/user/delete`)
        .then((res) => {
          console.log(res.data);
          navigate('/#sectionOne');
        });
    }
  };

  // 유효성 검사 실행 useEffect
  useEffect(() => {
    setIsValid(false);
    if (pwRegex.test(password) && password === passwordCheck) {
      setIsValid(true);
    }
  }, [password, passwordCheck]);

  return (
    <Body>
      <FormWrapper height={'545px'} width={'476px'}>
        <img alt="회원가입 로고" src={signUpLogo}></img>
        <form onSubmit={(e) => handleSubmit(e)}>
          <UserInfoWrapper>
            <UserInfoUnit>{username}</UserInfoUnit>
            <LogoWrapper>
              <FontAwesomeIcon icon={faUser} />
            </LogoWrapper>
          </UserInfoWrapper>
          <UserInfoWrapper>
            <UserInfoUnit>{email}</UserInfoUnit>
            <LogoWrapper>
              <FontAwesomeIcon icon={faEnvelope} />
            </LogoWrapper>
          </UserInfoWrapper>
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
          회원 탈퇴 하실건가요?{' '}
          <StyledLink to="/#sectionOne" onClick={deleteUser}>
            회원 탈퇴
          </StyledLink>
        </div>
      </FormWrapper>
    </Body>
  );
};

export default EditUser;
