import React from "react";
import { Li } from "../../styles/Mypage_s/Attendance.styled";

export default function UnregisterComment() {
  return (
    <div
      style={{
        height: "600px",
        width: "441px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        // backgroundColor: "blue",
        // marginBottom: "30px",
        marginTop: "50px",
      }}
    >
      <Li>아마추어: 기본 등급</Li>
      <Li>퓨쳐스: 월 7회 이상 출석</Li>
      <Li>프로: 월 14회 이상 출석</Li>
      <Li>메이저: 월 21회 이상 출석</Li>
      <div
        style={{
          // backgroundColor: "yellow",
          height: "80px",
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
        }}
      >
        <p>등급은 매월 초기화됩니다.</p>
      </div>
    </div>
  );
}
