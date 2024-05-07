import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Login-------------------------------------------------------------------
import Login from './pages/Login';
import SignUp from './pages/SignUp';

//mainPage
import MainPage from './pages/MainPage';

//detailPage
import DetailPage from './pages/detailPage/DetailPages';
import NoLoginDetailPages from './pages/detailPage/NoLoginDetailPages';

// mypage_s
import Attendance from './pages/myPage/Attendance';
import Unregister from './components/mypage/Unregister';
import Unsubscribe from './pages/myPage/Unsubscribe';

// mypage_j
import Scrap from './pages/myPage/Scrap';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/mainPage" element={<MainPage />} />
          <Route path="/detailPage" element={<DetailPage />} />
          <Route path="/NologindetailPage" element={<NoLoginDetailPages />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Mypage" element={<Attendance />} />
          <Route path="/Mypage/Unsubscribe" element={<Unsubscribe />} />
          <Route path="/Mypage/Scrap" element={<Scrap />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
