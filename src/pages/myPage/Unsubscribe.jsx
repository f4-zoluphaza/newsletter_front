import React from "react";
import axios from "axios";

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
  const handleUnsubscribeAPI = async () => {
    try {
      const url =
        "https://humble-commonly-goshawk.ngrok-free.app/api/v1/mypage/unsubscribe";

      const response = await axios.post(url, {
        withCredentials: true, // 쿠키를 자동으로 포함하도록 설정
      });

      console.log(response.data);
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
