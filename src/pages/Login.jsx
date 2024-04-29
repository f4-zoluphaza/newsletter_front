import React from "react";
import {
  BodyDiv,
  WrapperDiv,
  LogoImg,
  Form,
  Input,
} from "../styles/Login/LoginSignUp.styled";
import Logo from "../images/Logo.svg";

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
        </Form>
      </WrapperDiv>
    </BodyDiv>
  );
}
