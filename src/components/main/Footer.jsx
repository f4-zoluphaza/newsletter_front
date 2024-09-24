import React from 'react';
import {
  TextSpan,
  PostNumberDiv,
  BoldLine,
  FooterDiv,
  MakerDivContact,
  FooterWrapperDiv,
} from '../../styles/main/main-style-component.jsx';
import GithubImg from '../../images/MainPage/GithubLogo.svg';


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
        <MakerDivContact display="flex">
          <TextSpan fontsize="15px">
            Copyright ⓒ Newstrike. All rights reserved.
          </TextSpan>
        </MakerDivContact>
        <MakerDivContact display="flex" justifycontent="end">
          <TextSpan fontsize="18px" textalign="right" style={{display:"flex", justifyContent:"end", alignItems:"center"}}>
            <img src={GithubImg} style={{ width: "30px", height: "30px",  marginRight:"5px"}}/>
            <a href="https://github.com/f4-zoluphaza/newsletter_front" target="_blank" rel="noopener noreferrer" style={{ textDecoration:"none", fontSize:"18px"
            }}>GitHub</a>
          </TextSpan>
        </MakerDivContact>
      </FooterWrapperDiv>
    </FooterDiv>
  );
}
