import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  BodyDiv,
  WrapperDiv,
  LogoImg,
} from "../../styles/Login/LoginSignUp.styled";

import {
  MainP,
  Links,
  ButtonDiv,
  Button,
  ModuleDiv,
} from "../../styles/Mypage_s/Attendance.styled";

import Comment from "../../components/mypage/UnregisterComment";
import Logo from "../../images/Logo.svg";

export default function Unsubscribe() {
  const navigate = useNavigate();

  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const handleUnsubscribeAPI = async () => {
    try {
      const url =
        "https://humble-commonly-goshawk.ngrok-free.app/api/v1/mypage/unsubscribe";
      
        // 쿠키에서 'jwtToken' 값을 가져옴
      const token = getCookie("jwtToken");
      const response = await axios.delete(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/Mypage");
      // console.log(response.data);
    } catch (error) {
      console.error(
        "구독해지 error",
        error.response ? error.response.data : error
      );
    }
  };
  return (
    <BodyDiv>
      <WrapperDiv height="67vh" justifyContent="start">
        <LogoImg src={Logo} marginBottom="20px" />
        <MainP color="#588539" fontWeight="600" fontSize="33px" margin="0">
          뉴스레터 구독해지
        </MainP>
        <ModuleDiv paddingTop="30px" height="450px">
          <Comment />
          <MainP
            color="#E74F4F"
            fontWeight="600"
            fontSize="17px"
            margin="0 0 20px 10px"
          >
            구독 해지하시겠어요?
          </MainP>
          <ButtonDiv>
            <Links to="/Mypage">
              <Button backgroudColor="#588539" color="#FFFFFF" textDecoration="underline">구독 유지하기</Button>
            </Links>
            <Button
              onClick={() => {
                handleUnsubscribeAPI();
              }}
            >
              구독 해지하기
            </Button>
          </ButtonDiv>
        </ModuleDiv>
      </WrapperDiv>
    </BodyDiv>
  );
}
