import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';

// Login-------------------------------------------------------------------
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import ChangePW from "./pages/auth/ChangePW";

//mainPage
import MainPage from "./pages/MainPage";

//detailPage
import DetailPage from "./pages/detailPage/DetailPages";
import NoLoginDetailPages from "./components/detailPage/NoLoginDetailPages";

// mypage_s
import Attendance from "./pages/myPage/Attendance";
import Unsubscribe from "./pages/myPage/Unsubscribe";

//adminPage
import Admin from "./pages/adminPage/Admin";
import AdminDetail from "./pages/adminPage/AdminDetail";

// mypage_j
import Scrap from "./pages/myPage/Scrap";
import ChangeInfo from "./pages/myPage/ChangeInfo";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Noto Sans KR", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;  // 기본 weight는 400으로 설정
    font-style: normal;
  }
  
`;



function App() {
  return (
    <div>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/detailPage/:id" element={<DetailPage />} />
          <Route path="/NologindetailPage" element={<NoLoginDetailPages />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Mypage" element={<Attendance />} />
          <Route path="/Mypage/Unsubscribe" element={<Unsubscribe />} />
          <Route path="/Mypage/Scrap" element={<Scrap />} />
          <Route path="/Mypage/ChangeInfo" element={<ChangeInfo />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/:id" element={<AdminDetail />} />
          <Route path="/ChangePW" element={<ChangePW />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
