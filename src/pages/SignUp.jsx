import React from "react";
import {
  BodyDiv,
  WrapperDiv,
  LogoImg,
  Form,
  Input,
  Submit,
  EmailButtonDiv,
  Button,
} from "../styles/Login/LoginSignUp.styled";

import Logo from "../images/Logo.svg";


export default function SignUp() {
  return (
    <BodyDiv>
      <WrapperDiv>
        <LogoImg src={Logo} />

        <Form>
          <Input
            id="nickName"
            placeholder="닉네임"
            width="410.975px"
            height="53.82px"
            borderRadius="9.78px"
          />

          <Input
            id="email"
            placeholder="이메일"
            width="410.975px"
            height="53.82px"
            borderRadius="9.78px"
          />
          <EmailButtonDiv>
            <Button>중복 확인</Button>
            <Button>인증 요청</Button>
          </EmailButtonDiv>
          

          <Input
            id="emailCheck"
            placeholder="이메일 인증번호"
            width="410.975px"
            height="53.82px"
            borderRadius="9.78px"
          />
          <EmailButtonDiv>
            <Button>인증 확인</Button>
          </EmailButtonDiv>

          <Input
            id="password"
            placeholder="비밀번호 (숫자, 영문 8~12자리)"
            width="410.975px"
            height="53.82px"
            borderRadius="9.78px"
          />

          <Input
            id="password"
            placeholder="비밀번호 확인"
            width="410.975px"
            height="53.82px"
            borderRadius="9.78px"
          />

          <Submit 
            value="회원가입" 
            type="submit" 
            width="410.975px"
            height="53.82px"/>
        </Form>
        
          
      </WrapperDiv>
    </BodyDiv>
  );
}
