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

  // Google OAuth 로그인 AccessToken 요청
  const getAccessToken = async (authorizationCode) => {
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

  // 아이디, 비밀번호에 대한 Auth 확인
  const authHandler = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}`)
      .then((res) => {
        setIsLogin(true);
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          console.log(err.response.data);
        }
      });
  };

  useEffect(() => {
    const authorizationCode = window.location.hash;
    if (authorizationCode) {
      console.log(authorizationCode);
      getAccessToken(authorizationCode);
    }
    authHandler();
  }, []);
  return (
    <div>
      <Header
        accessToken={accessToken}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myroom" element={<MyRoom />} />
      </Routes>
    </div>
  );
}

export default App;
