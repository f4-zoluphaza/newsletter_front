import React from "react";
import {
  BkackScreenDiv,
  ModuleDiv,
  Ximg,
  MainP,
} from "../../styles/Mypage_s/Attendance.styled";

import X from "../../images/mypage/X.svg";
import Comment from "./GradeListComment.jsx";

export default function Unregister({ setGradeBt }) {
  return (
    <BkackScreenDiv>
      <ModuleDiv>
        <Ximg onClick={() => setGradeBt(false)} src={X} />
        <MainP fontWeight="600" fontSize="34px" margin="0">
          등급 선정 기준
        </MainP>
        <Comment />
      </ModuleDiv>
    </BkackScreenDiv>
  );
}
