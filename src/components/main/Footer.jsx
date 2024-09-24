import React from 'react';
import {
  TextSpan,
  PostNumberDiv,
  BoldLine,
  Links,
  FooterDiv,
  MakerDivContact,
  MakerWrapperDivContact,
  FooterWrapperDiv,
  GithubLogoImg,
} from '../../styles/main/main-style-component.jsx';
import GithubImg from '../../images/MainPage/GithubLogo.svg';


import GithubLogo from '../../images/MainPage/Github.svg';

export default function Footer() {
  return (
    <FooterDiv>
      <FooterWrapperDiv>
        <MakerDivContact>
          <TextSpan fontsize="18px" fontweight="700">
            만든이들
          </TextSpan>
          <TextSpan fontsize="18px">조시은 인다운</TextSpan>
          <TextSpan fontsize="18px">김나영 임지아</TextSpan>
        </MakerDivContact>
        <MakerDivContact alignitems="center">
          <TextSpan fontsize="13px">
            Copyright ⓒ Newstrike. All rights reserved.
          </TextSpan>
        </MakerDivContact>
        <MakerDivContact alignitems="end" justifycontent="first">
          <TextSpan fontsize="18px" textalign="right" margintop="5px">
            CONTACT
          </TextSpan>
          <MakerWrapperDivContact>
            <GithubLogoImg src={GithubLogo} />
            <Links to={'https://github.com/f4-zoluphaza'} target="_blank">
              f4-zoluphaza
            </Links>
          </MakerWrapperDivContact>
        </MakerDivContact>
      </FooterWrapperDiv>
    </FooterDiv>
  );
}
