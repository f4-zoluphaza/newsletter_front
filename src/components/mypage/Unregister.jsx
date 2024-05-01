import React from 'react'
import {
  BkackScreenDiv,
  ModuleDiv,
  Ximg,
  MainP, 
  Li,
  LiP,
  ButtonDiv,
  Button
} from "../../styles/Mypage_s/Attendance.styled"

import X from "../../images/mypage/X.svg"

export default function Unregister({setUnregisterBt}) {
  return (
    <BkackScreenDiv>
      <ModuleDiv>
        <Ximg onClick={()=>setUnregisterBt(false)} src={X}/>
        <div>
          <MainP color="#D33030" fontWeight="600" fontSize= "34px" margin= "0">정말 탈퇴 하시겠어요?</MainP>
          <MainP color="#414141" fontWeight="600" fontSize= "28px" margin= "15px 0 5px 7px">Newstrike는 ...</MainP>
        </div>
        
        <Li>매일 응원하는 구단 <LiP>뉴스레터</LiP>를 보내드려요!</Li>
        <Li>처음 접하는 분들을 위해 야구 룰과 용어를 쉽게 정리한 <LiP>한 입 야구</LiP>를 제공해드려요!</Li>
        <Li>뉴스 내용을 질문하면 쉽고 자세히 알려주는 <LiP>챗봇</LiP>이 있어요!</Li>
        <ButtonDiv>
          <Button backgroudColor="#588539" color="#FFFFFF" textDecoration="underline" onClick={()=>setUnregisterBt(false)}>회원 유지하기</Button>
          <Button>회원 탈퇴하기</Button>
        </ButtonDiv>
      </ModuleDiv>
    </BkackScreenDiv>
  )
}
