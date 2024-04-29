import React from "react";
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
  Links
} from "../styles/Login/LoginSignUp.styled";

import Logo from "../images/Logo.svg";
import Check from "../images/Login/Check.svg"
import PWOpen from "../images/Login/PWOpen.svg"
import KaTalk from "../images/Login/KaTalk.svg"
import Naver from "../images/Login/Naver.svg"

export default function Login() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <LogoImg src={Logo} />
        <Form>
          <Input id="email" placeholder="이메일"></Input>
          <Input
            id="password"
            placeholder="비밀번호 (숫자, 영문 8~12자리)"
          ></Input>

          <EyesImg src={PWOpen}/>

          <LoginStateDiv>
            <CheckImg src={Check}/>
            <LoginStateP>로그인 상태 유지</LoginStateP>
          </LoginStateDiv>
          <Submit value="로그인" type="submit"/>
        </Form>

        <PWSearchSignUpDiv>
          <Links to="/">
            <PWSearchSignUpP>비밀번호 찾기</PWSearchSignUpP>
          </Links>
          
          <PWSearchSignUpP>|</PWSearchSignUpP>
          <Links to="SignUp">
            <PWSearchSignUpP>회원가입</PWSearchSignUpP>
          </Links>
          
        </PWSearchSignUpDiv>

        <SocialLoginDiv>
          <SocialLoginImg src={KaTalk}/>
          <SocialLoginImg src={Naver}/>
        </SocialLoginDiv>
      </WrapperDiv>
    </BodyDiv>
  );
}
