import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header";
import {
  BodyDiv,
  WrapperDiv,
  LeftDiv,
  RightDiv,
  MainWrapper,
  MainPDiv,
  MainP,
  Links,
} from "../../styles/Mypage_s/Attendance.styled";

import Unregister from "../../components/mypage/Unregister";

export default function Attendance() {
  const [unregisterBt, setUnregisterBt] = useState(false);
  const [data, setData] = useState(null);

  const handleMypageMainApi = async () => {
    try {
      //API 요청 URL
      const url = `https://humble-commonly-goshawk.ngrok-free.app/api/v1/mypage`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.get(url);

      console.log(response.data.result);
      setData(response.data.result);
    } catch (error) {
      console.error(
        "마이페이지 메인 api 에러",
        error.response ? error.response.data : error
      );
    }
  };

  useEffect(() => {
    handleMypageMainApi();
  }, []);

  return (
    <div>
      <BodyDiv>
        <div style={{ width: "90vw" }}>
          <Header />
        </div>

        <WrapperDiv>
          <LeftDiv>
            <MainWrapper borderBottom="solid 2px #c4c4c4">
              <MainPDiv>
                <MainP color="#4C8C5E" fontWeight="600">
                  안타왕
                </MainP>
                <MainP fontWeight="600" marginRight="0">
                  홍길동
                </MainP>
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
                <MainP color="#4C8C5E" fontWeight="600" marginRight="0">
                  홈런왕
                </MainP>
                <MainP>까지</MainP>
                <MainP>2번</MainP>
                <MainP>남았어요!</MainP>
              </MainPDiv>

              <Links>
                <MainP
                  color="#424242"
                  fontWeight="600"
                  fontSize="20px"
                  margin="20px 0"
                >
                  등급 자세히 보기 〉
                </MainP>
              </Links>
            </MainWrapper>

            <MainWrapper>
              <MainPDiv flexDirection="column">
                <Links to="/Mypage/Scrap">
                  <MainP fontWeight="600" fontSize="30px" marginBottom="5px">
                    나의 스크랩 〉
                  </MainP>
                </Links>
                <Links to="/Mypage/ChangeInfo">
                  <MainP fontWeight="600" fontSize="30px" marginBottom="15px">
                    정보 수정 〉
                  </MainP>
                </Links>
              </MainPDiv>

              <MainPDiv flexDirection="column">
                <Links to="/Mypage/Unsubscribe">
                  <MainP fontWeight="600" fontSize="21px" marginBottom="5px">
                    구독 해지
                  </MainP>
                </Links>
                <MainP
                  fontWeight="600"
                  fontSize="21px"
                  cursor="pointer"
                  onClick={() => setUnregisterBt(true)}
                >
                  회원 탈퇴
                </MainP>
              </MainPDiv>
            </MainWrapper>
          </LeftDiv>
          <RightDiv></RightDiv>
        </WrapperDiv>

        {unregisterBt === true ? (
          <Unregister setUnregisterBt={setUnregisterBt} />
        ) : null}
      </BodyDiv>
    </div>
  );
}
