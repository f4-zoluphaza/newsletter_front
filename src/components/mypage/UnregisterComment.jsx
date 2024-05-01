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
        
      <Li>매일 응원하는 구단 <LiP>뉴스레터</LiP>를 보내드려요!</Li>
      <Li>처음 접하는 분들을 위해 야구 룰과 용어를 쉽게 정리한 <LiP>한 입 야구</LiP>를 제공해드려요!</Li>
      <Li>뉴스 내용을 질문하면 쉽고 자세히 알려주는 <LiP>챗봇</LiP>이 있어요!</Li>
    </div>
  )
}
