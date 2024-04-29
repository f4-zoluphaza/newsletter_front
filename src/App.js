import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Login-------------------------------------------------------------------
import Login from "./pages/Login";
import SignUp from "./pages/SignUp"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
