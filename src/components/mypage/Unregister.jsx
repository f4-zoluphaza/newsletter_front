import React from 'react'
import {
  BkackScreenDiv,
  ModuleDiv,
  Ximg,
  MainP, 
  ButtonDiv,
  Button
} from "../../styles/Mypage_s/Attendance.styled"

import X from "../../images/mypage/X.svg"
import Comment from "./UnregisterComment"

export default function Unregister({setUnregisterBt}) {
  return (
    <BkackScreenDiv>
      <ModuleDiv>
        <Ximg onClick={()=>setUnregisterBt(false)} src={X}/>
        <MainP color="#D33030" fontWeight="600" fontSize= "34px" margin= "0">정말 탈퇴 하시겠어요?</MainP>
        <Comment/>
        <ButtonDiv>
          <Button backgroudColor="#588539" color="#FFFFFF" textDecoration="underline" onClick={()=>setUnregisterBt(false)}>회원 유지하기</Button>
          <Button>회원 탈퇴하기</Button>
        </ButtonDiv>
      </ModuleDiv>
    </BkackScreenDiv>
  )
}
