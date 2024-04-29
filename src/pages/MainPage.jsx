import React from 'react';
import {
  NavDiv,
  LogoImg,
  WrapperDiv,
} from '../styles/main/main-style-component.jsx';

import Logo from '../images/Logo.svg';

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
