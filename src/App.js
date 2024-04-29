import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Login-------------------------------------------------------------------
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
