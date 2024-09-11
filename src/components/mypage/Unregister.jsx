import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  BkackScreenDiv,
  ModuleDiv,
  Ximg,
  MainP,
  ButtonDiv,
  Button,
} from "../../styles/Mypage_s/Attendance.styled";

import X from "../../images/mypage/X.svg";
import Comment from "./UnregisterComment";

export default function Unregister({ setUnregisterBt }) {
  const navigate = useNavigate();

  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const handleUnregisterApi = async () => {
    try {
      //API 요청 URL
      const url = `https://humble-commonly-goshawk.ngrok-free.app/api/v1/mypage/delete`;

      // 쿠키에서 'jwtToken' 값을 가져옴
      const token = getCookie("jwtToken");

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.delete(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data);
      alert("회원 탈퇴되었습니다.");

      //쿠키 삭제
      document.cookie =
        "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

      // 탈퇴하고 Login 페이지로 이동
      navigate("/");
    } catch (error) {
      console.error(
        "마이페이지 회원 탈퇴 api 에러",
        error.response ? error.response.data : error
      );
    }
  };

  return (
    <BkackScreenDiv>
      <ModuleDiv>
        <Ximg onClick={() => setUnregisterBt(false)} src={X} />
        <MainP color="#D33030" fontWeight="600" fontSize="34px" margin="0">
          정말 탈퇴 하시겠어요?
        </MainP>
        <Comment />
        <ButtonDiv>
          <Button
            backgroudColor="#588539"
            color="#FFFFFF"
            textDecoration="underline"
            onClick={() => setUnregisterBt(false)}
          >
            회원 유지하기
          </Button>
          <Button onClick={() => handleUnregisterApi()}>회원 탈퇴하기</Button>
        </ButtonDiv>
      </ModuleDiv>
    </BkackScreenDiv>
  );
}
