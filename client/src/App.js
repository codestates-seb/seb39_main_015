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
import { getCookieValue } from './hook/getCookieValue.js';

function App() {
  const location = useLocation();

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
        <Route path="/myroom" element={data ? <MyRoom /> : <Login />} />
        <Route path="/findname" element={<FindName />} />
        <Route path="/findpw" element={<FindPw />} />
        <Route path="/rooms/:roomId" element={<RoomDetail />} />
        <Route path="/edituser" element={data ? <EditUser /> : <Login />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
