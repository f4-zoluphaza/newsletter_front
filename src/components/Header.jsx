import React, { useState, useEffect } from "react";

import {
  BodyDiv,
  NavDiv,
  LogoImg,
  WrapperDiv,
  LoginLinkSignupP,
  Links,
} from "../styles/main/main-style-component.jsx";

import Logo from "../images/Logo.svg";

export default function Header() {
  const [validLogin, setValidLogin] = useState(null);
  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const handleHeaderFont = () => {
    const isLogin = getCookie("jwtToken");
    if (isLogin == null) {
      setValidLogin(false);
    } else {
      setValidLogin(true);
    }
  };

  const LogoutButton = () => {
    //쿠키 삭제
    document.cookie =
      "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    alert("로그아웃 되었습니다.");
    window.location.reload();
  };

  useEffect(() => {
    handleHeaderFont();
  }, []);

  return (
    <NavDiv>
      <Links to="/">
        <LogoImg src={Logo} />
      </Links>

      <WrapperDiv>
        <Links to={validLogin ? "/" : "/Login"}>
          <LoginLinkSignupP onClick={validLogin ? () => LogoutButton() : null}>
            {validLogin ? "Logout" : "Login"}
          </LoginLinkSignupP>
        </Links>
        <LoginLinkSignupP> | </LoginLinkSignupP>
        <Links to={validLogin ? "/Mypage" : "/Signup"}>
          <LoginLinkSignupP>{validLogin ? "Mypage" : "Join"}</LoginLinkSignupP>
        </Links>
      </WrapperDiv>
    </NavDiv>
  );
}
