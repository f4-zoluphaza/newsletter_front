import React, {useState} from "react";
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
  VaildP
} from "../styles/Login/LoginSignUp.styled";

import Logo from "../images/Logo.svg";
import Check from "../images/Login/Check.svg"
import CheckO from "../images/Login/CheckO.svg"
import PWOpen from "../images/Login/PWOpen.svg"
import KaTalk from "../images/Login/KaTalk.svg"
import Naver from "../images/Login/Naver.svg"

export default function Login() {
  const [validCheck, setValidCheck] = useState(null);
  const [validLogin, setValidLogin] = useState(null);

  return (
    <BodyDiv>
      <WrapperDiv>
        <LogoImg src={Logo} top="150px" />
        <Form
          alignItems="start">
          <Input 
            id="email" 
            type="email"
            placeholder="이메일" 
            width="508.48px"
            height="60px"
            borderRadius="12px"
            />
          <Input
            id="password"
            type="password"
            placeholder="비밀번호"
            width="508.48px"
            height="60px"
            borderRadius="12px"
          />

          <EyesImg src={PWOpen}/>
          <div style={{display:"flex",  alignItems:"start", margin:"2px 0 30px 0"}}>
            <LoginStateDiv>
              {validCheck && true ? (<CheckImg src={CheckO} onClick={()=>{setValidCheck(!validCheck)}}/>):(<CheckImg src={Check} onClick={()=>{setValidCheck(!validCheck)}}/>)}
              
              <LoginStateP>로그인 상태 유지</LoginStateP>
            </LoginStateDiv>

            {validLogin && false ? (<VaildP>아이디 또는 비밀번호를 잘못 입력했습니다.</VaildP>) : null}
            
          </div>
          
          <Submit 
            value="로그인" 
            type="submit" 
            width="508.48px"
            height="60px"/>
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
