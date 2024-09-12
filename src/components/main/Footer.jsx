import React from 'react';
import {
  TextSpan,
  PostNumberDiv,
  BoldLine,
  FooterDiv,
  MakerDivContact,
  FooterWrapperDiv,
} from '../../styles/main/main-style-component.jsx';

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
        <MakerDivContact>
          <TextSpan fontsize="18px" textalign="right">
            CONTACT
          </TextSpan>
          <TextSpan fontsize="18px" textalign="right">
            대표자 이메일 12345@naver.com
          </TextSpan>
          <TextSpan fontsize="18px" textalign="right">
            02-901-2004
          </TextSpan>
        </MakerDivContact>
      </FooterWrapperDiv>
    </FooterDiv>
  );
}
