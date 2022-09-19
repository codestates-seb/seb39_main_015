import './App.css';
import { Routes, Route } from 'react-router-dom';
import Join from './pages/Join.js';
import Login from './pages/Login.js';
import MyRoom from './pages/MyRoom.js';
import MainPage from './pages/MainPage.js';
import Header from './components/Header.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [accessToken, setAccessToken] = useState('');
  const [isLogin, setIsLogin] = useState('');
  const getAccessToken = async (authorizationCode) => {
    // 받아온 Authorization Code로 다시 OAuth App에 요청해서 Access Token을 받을 수 있습니다.
    // Access Token은 보안 유지가 필요하기 때문에 클라이언트에서 직접 OAuth App에 요청을 하는 방법은 보안에 취약할 수 있습니다.
    // Authorization Code를 서버로 보내주고 서버에서 Access Token 요청을 하는 것이 적절합니다.
    // TODO: 서버의 /callback 엔드포인트로 Authorization Code를 보내주고 Access Token을 받아옵니다.
    // Access Token을 받아온 후 state에 Access Token을 저장하세요
    try {
      const result = await axios.post(`${process.env.REACT_APP_API_URL}`, {
        authorizationCode,
      });
      const { accessToken } = result.data;
      setIsLogin(true);
      setAccessToken(accessToken);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    // ex) http://localhost:3000/mypage?code=5e52fb85d6a1ed46a51f
    const authorizationCode = window.location.hash;
    if (authorizationCode) {
      console.log(authorizationCode);
      getAccessToken(authorizationCode);
    }
  }, []);
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              accessToken={accessToken}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          }
        />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myroom" element={<MyRoom />} />
      </Routes>
    </div>
  );
}

export default App;
