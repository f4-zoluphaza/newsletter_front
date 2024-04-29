import React from 'react';
import {
  NavDiv,
  LogoImg,
  WrapperDiv,
} from '../styles/main/main-style-component.jsx';

import Logo from '../image/logo.png';

export default function MainPage(props) {
  return (
    <NavDiv>
      <LogoImg src={Logo} />
      <WrapperDiv>
        <a href="">Login</a>|<a href="">Join</a>
      </WrapperDiv>
    </NavDiv>
  );
}
