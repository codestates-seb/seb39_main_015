import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Join from './pages/Join.js';
import Login from './pages/Login.js';
import MyRoom from './pages/MyRoom.js';
import MainPage from './pages/MainPage.js';
import FindName from './pages/FindName.js';
import FindPw from './pages/FindPw.js';
import EditUser from './pages/EditUser';
import Header from './components/Header.js';
import { useEffect } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import RoomDetail from './pages/RoomDetail';

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

  const location = useLocation();

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

  useEffect(() => {
    // query를 객체 형태로 가져오는 함수
    function get_query() {
      var url = document.location.href;
      var qs = url.substring(url.indexOf('?') + 1).split('&');
      for (var i = 0, result = {}; i < qs.length; i++) {
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
      }
      return result;
    }
    const googleAccessToken = get_query();
    if (googleAccessToken.access_token) {
      document.cookie = `Authorization=Bearer ${googleAccessToken.access_token}`;
      window.location.replace('/#sectionOne');
    }
  }, []);

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
    { staleTime: 1000 * 60 * 5, retry: false }
  );
  return (
    <div>
      {!/^\/rooms\/+/.test(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myroom" element={<MyRoom />} />
        <Route path="/findname" element={<FindName />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/rooms/:roomId" element={<RoomDetail />} />
        <Route
          path="/edituser"
          element={
            data ? <EditUser getCookieValue={getCookieValue} /> : <Login />
          }
        />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;

// http://localhost:3000/token?access_token=eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJIT1NUIl0sInVzZXJuYW1lIjoiR3dhbmdIeXVuIEplb24iLCJzdWIiOiJHd2FuZ0h5dW4gSmVvbiIsImlhdCI6MTY2NDM0NjIyMiwiZXhwIjoxNjY0MzQ5ODIyfQ.iz4QUTLoYrRQxBhhWdMZnAmp0QLdWh3Ylu5mbfZLuDM&refresh_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJHd2FuZ0h5dW4gSmVvbiIsImlhdCI6MTY2NDM0NjIyMiwiZXhwIjoxNjY0MzQ5ODIyfQ.NZeBGUpg0a4xae69eaIXhHuw6dNXnHmCTE4_Rm28Djk
