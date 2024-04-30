import React from 'react';
import {
  BodyDiv,
  NavDiv,
  LogoImg,
  WrapperDiv,
  LoginLinkSignupP,
  Links,
  HeaderDiv,
  ExplainDiv,
} from '../styles/main/main-style-component.jsx';

import Logo from '../images/Logo.svg';

export default function MainPage(props) {
  return (
    <BodyDiv>
      <NavDiv>
        <LogoImg src={Logo} />
        <WrapperDiv>
          <Links>
            <LoginLinkSignupP>Login</LoginLinkSignupP>
          </Links>
          <LoginLinkSignupP> | </LoginLinkSignupP>
          <Links>
            <LoginLinkSignupP>Join</LoginLinkSignupP>
          </Links>
        </WrapperDiv>
      </NavDiv>

      <HeaderDiv>
        <explainDiv></explainDiv>
      </HeaderDiv>
    </BodyDiv>
  );
}
