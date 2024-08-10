import React, { useState } from "react";
import axios from "axios";
import {
  BodyDiv,
  WrapperDiv,
  LogoImg,
  Form,
  Input,
  LoginStateDiv,
  CheckImg,
  LoginStateP,
  EyesImg,
  Submit,
  PWSearchSignUpDiv,
  PWSearchSignUpP,
  SocialLoginDiv,
  SocialLoginImg,
  Links,
  VaildP,
} from "../styles/Login/LoginSignUp.styled";

import Logo from "../images/Logo.svg";
import Check from "../images/Login/Check.svg";
import CheckO from "../images/Login/CheckO.svg";
import PWOpen from "../images/Login/PWOpen.svg";
import PWClose from "../images/Login/PWClose.svg";
import KaTalk from "../images/Login/KaTalk.svg";
import Naver from "../images/Login/Naver.svg";

export default function Login() {
  const [validCheck, setValidCheck] = useState(null);
  const [validLogin, setValidLogin] = useState(null);

  const [validPWState, setValidPWState] = useState(false);

  const [vaildPassword, setVaildPassword] = useState(null);
  const [vaildEmail, setVaildEmail] = useState(null);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setForm({ ...form, password });

    if (password.trim() === "") {
      setVaildPassword(null);
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setForm({ ...form, email });

    if (email.trim() === "") {
      setVaildEmail(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogin = async () => {
    try {
      const url = "https://humble-commonly-goshawk.ngrok-free.app/api/v1/login";
      const data = {
        email: form.email,
        passwd: form.password,
      };

      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const token = response.data.result;
      setValidLogin(true);
      console.log(response.data);
    } catch (error) {
      console.error(
        "Login error",
        error.response ? error.response.data : error
      );
      setValidLogin(false);
      console.log(form.email);
      console.log(form.password);
    }
  };

  return (
    <BodyDiv>
      <WrapperDiv>
        <LogoImg src={Logo} top="150px" />
        <Form alignItems="flex-start" onSubmit={handleSubmit}>
          <Input
            id="email"
            type="email"
            placeholder="이메일"
            width="508.48px"
            height="60px"
            borderRadius="12px"
            value={form.email}
            onChange={handleEmailChange}
          />
          <Input
            id="password"
            // type="password"
            type={validPWState ? "text" : "password"}
            placeholder="비밀번호"
            width="508.48px"
            height="60px"
            borderRadius="12px"
            value={form.password}
            onChange={handlePasswordChange}
          />

          {validPWState ? (
            <EyesImg
              src={PWClose}
              onClick={() => {
                setValidPWState();
              }}
            />
          ) : (
            <EyesImg
              src={PWOpen}
              onClick={() => {
                setValidPWState(true);
              }}
            />
          )}

          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              margin: "2px 0 30px 0",
            }}
          >
            <LoginStateDiv>
              {validCheck && true ? (
                <CheckImg
                  src={CheckO}
                  onClick={() => {
                    setValidCheck(!validCheck);
                  }}
                />
              ) : (
                <CheckImg
                  src={Check}
                  onClick={() => {
                    setValidCheck(!validCheck);
                  }}
                />
              )}

              <LoginStateP>로그인 상태 유지</LoginStateP>
            </LoginStateDiv>

            {validLogin === false ? (
              <VaildP>아이디 또는 비밀번호를 잘못 입력했습니다.</VaildP>
            ) : null}
          </div>

          <Submit value="로그인" type="submit" width="508.48px" height="60px" />
        </Form>

        <PWSearchSignUpDiv>
          <Links to="/">
            <PWSearchSignUpP>비밀번호 찾기</PWSearchSignUpP>
          </Links>

          <PWSearchSignUpP>|</PWSearchSignUpP>
          <Links to="/SignUp">
            <PWSearchSignUpP>회원가입</PWSearchSignUpP>
          </Links>
        </PWSearchSignUpDiv>

        <SocialLoginDiv>
          <SocialLoginImg src={KaTalk} />
          <SocialLoginImg src={Naver} />
        </SocialLoginDiv>
      </WrapperDiv>
    </BodyDiv>
  );
}
