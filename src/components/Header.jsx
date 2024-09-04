import React from 'react';
import {
  BodyDiv,
  NavDiv,
  LogoImg,
  WrapperDiv,
  LoginLinkSignupP,
  Links,
} from '../styles/main/main-style-component.jsx';

import Logo from '../images/Logo.svg';

export default function Header() {
  return (
    <NavDiv>
      <LogoImg src={Logo} />
      <WrapperDiv>
        <Links to="/Login">
          <LoginLinkSignupP>Login</LoginLinkSignupP>
        </Links>
        <LoginLinkSignupP> | </LoginLinkSignupP>
        <Links to="/Signup">
          <LoginLinkSignupP>Join</LoginLinkSignupP>
        </Links>
      </WrapperDiv>
    </NavDiv>
  );
}
