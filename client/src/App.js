import './App.css';
import { Routes, Route } from 'react-router-dom';
import Join from './pages/Join.js';
import Login from './pages/Login.js';
import MyRoom from './pages/MyRoom.js';
import MainPage from './pages/MainPage.js';
import FindName from './pages/FindName.js';
import FindPw from './pages/FindPw.js';
import EditUser from './pages/EditUser';
import Header from './components/Header.js';
import /*useState, useEffect */ 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  // const [accessToken, setAccessToken] = useState('');
  // const [isLogin, setIsLogin] = useState('');
  // const authorizationCode = window.location.hash;

  // Google OAuth 로그인 AccessToken 요청
  // const getAccessToken = async (authorizationCode) => {
  //   try {
  //     const result = await axios.post(`${process.env.REACT_APP_API_URL}`, {
  //       authorizationCode,
  //     });
  //     const { accessToken } = result.data;
  //     setIsLogin(true);
  //     setAccessToken(accessToken);
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  // 아이디, 비밀번호에 대한 Auth 확인
  // const authHandler = () => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/user/auth`).then((res) => {
  //     setIsLogin(true);
  //     return res.data;
  //   });
  // };

  // useEffect(() => {
  //   const authorizationCode = window.location.hash;
  //   if (authorizationCode) {
  //     console.log(authorizationCode);
  //     getAccessToken(authorizationCode);
  //   }
  //   authHandler();
  // }, []);

  // 'key'에 맞는 쿠키 찾는 함수
  const getCookieValue = (key) => {
    let cookieKey = key + '=';
    let result = '';
    const cookieArr = document.cookie.split(';');

    for (let i = 0; i < cookieArr.length; i++) {
      if (cookieArr[i][0] === ' ') {
        cookieArr[i] = cookieArr[i].substring(1);
      }

      if (cookieArr[i].indexOf(cookieKey) === 0) {
        result = cookieArr[i].slice(cookieKey.length, cookieArr[i].length);
        return result;
      }
    }
    return result;
  };

  // 아이디, 비밀번호에 대한 Auth 확인
  const { data } = useQuery(
    'auth',
    // if (authorizationCode) {
    //   getAccessToken(authorizationCode);
    // }
    () =>
      axios
        .get(`${process.env.REACT_APP_API_URL}/user/auth`, {
          headers: {
            Authorization: `${getCookieValue('Authorization')}`,
          },
        })
        .then((res) => res.data),
    { staleTime: 1000 * 60 * 5 }
  );
  data;
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myroom" element={<MyRoom />} />
        <Route path="/findname" element={<FindName />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/edituser" element={<EditUser />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
