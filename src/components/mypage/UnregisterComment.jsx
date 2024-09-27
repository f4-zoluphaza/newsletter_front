import React from 'react'
import {
  MainP, 
  Li,
  LiP,
} from "../../styles/Mypage_s/Attendance.styled"

export default function UnregisterComment() {
  return (
    <div style={{height:"240px", width:"441px", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
      <MainP color="#414141" fontWeight="600" fontSize= "28px" margin= "0px 0 5px 7px">Newstrike는 ...</MainP>
        
      <Li>매일 야구 <LiP>뉴스레터</LiP>를 보내드려요!</Li>
      <Li>뉴스 내용을 질문하면 쉽고 자세히 알려주는 <LiP>챗봇</LiP>이 있어요!</Li>
      <Li>우리.. 계속 함께 하면 안될까요..?</Li>
    </div>
  )
}
