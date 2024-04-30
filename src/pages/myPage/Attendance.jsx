import React, {useState} from "react";

import {Navdiv, BodyDiv, LeftDiv, RightDiv, MainPDiv, MainP, RankLink} from "../../styles/Mypage_s/Attendance.styled"

export default function Attendance() {


  return (
    <div>
      <Navdiv></Navdiv>
      <BodyDiv>
        <LeftDiv>
          <MainPDiv>
            <MainP color="#4C8C5E" fontWeight="600">안타왕</MainP>
            <MainP fontWeight="600" marginRight="0">홍길동</MainP>
            <MainP>님</MainP>
          </MainPDiv>

          <MainPDiv>
            <MainP>이번</MainP>
            <MainP>달</MainP>
            <MainP>누적</MainP>
            <MainP>출석</MainP>
            <MainP>13번</MainP>
          </MainPDiv>

          <MainPDiv marginTop="30px">
            <MainP color="#4C8C5E" fontWeight="600" marginRight="0">홈런왕</MainP>
            <MainP>까지</MainP>
            <MainP>2번</MainP>
            <MainP>남았어요!</MainP>
          </MainPDiv>

          <RankLink>등급 자세히 보기 </RankLink>

        </LeftDiv>
        <RightDiv></RightDiv>
      </BodyDiv>
    </div>
    
  );
}
