import React from 'react'

import {
  BodyDiv,
  WrapperDiv,
  LogoImg
} from "../../styles/Login/LoginSignUp.styled";

import {
  MainP, 
  Links,
  ButtonDiv,
  Button,
  ModuleDiv
} from "../../styles/Mypage_s/Attendance.styled"

import Comment from "../../components/mypage/UnregisterComment"
import Logo from "../../images/Logo.svg";

export default function Unsubscribe() {
  return (
    <BodyDiv>
      <WrapperDiv height="67vh" justifyContent="start">
        <LogoImg src={Logo} marginBottom="20px"/>
        <MainP color="#588539" fontWeight="600" fontSize= "33px" margin= "0">뉴스레터 구독해지</MainP>
        <ModuleDiv paddingTop="30px" height="450px">
          <Comment/>
          <MainP color="#E74F4F" fontWeight="600" fontSize= "17px" margin= "0 0 20px 10px">구독 해지하시겠어요?</MainP>
          <ButtonDiv>
            <Links to="/Mypage">
              <Button backgroudColor="#588539" color="#FFFFFF" textDecoration="underline">구독 유지하기</Button>
            </Links>
            <Button>구독 해지하기</Button>
          </ButtonDiv>
        </ModuleDiv>
        
        

        
      </WrapperDiv>
    </BodyDiv>
  )
}
