import React, { useState, useEffect } from "react";
import api from "../../api/api.js";

import { useParams } from "react-router-dom";

import {
  // BodyDiv,
  WrapperDiv,
  LeftDiv,
  RightDiv,
  MainWrapper,
  MainPDiv,
  MainP,
  Links,
  PostMyPageDiv,
  NoScrapImg,
} from "../../styles/Mypage_s/Attendance.styled";

import { Div, BodyDiv } from "../../styles/main/main-style-component.jsx";

import Header from "../../components/Header";
import Unregister from "../../components/mypage/Unregister";
import NewsletterPost from "../../components/NewsletterPost.jsx";
import GradeList from "../../components/mypage/GradeList.jsx";
import NoScrap from "../../images/mypage/NoScrapPage.svg";

export default function Attendance() {
  const [unregisterBt, setUnregisterBt] = useState(false);
  const [gradeBt, setGradeBt] = useState(false);
  const [data, setData] = useState({});
  const [scrap, setScrap] = useState([]);

  const { id } = useParams();

  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const handleMypageMainApi = async () => {
    try {
      //API 요청 URL
      const url = `api/v1/mypage`;

      // 쿠키에서 'jwtToken' 값을 가져옴
      const token = getCookie("jwtToken");

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await api.get(url, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data.result);
      setData(response.data.result);
    } catch (error) {
      console.error(
        "마이페이지 메인 api 에러",
        error.response ? error.response.data : error
      );
    }
  };

  // 스크랩한 뉴스 목록 불러오기 api 함수
  const scrappedNewsAPI = async () => {
    try {
      const url = `api/v1/news/scrapped`;

      // 쿠키에서 'jwtToken' 값을 가져옴
      const token = getCookie("jwtToken");

      const response = await api.get(url, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data.items);

      const result = response.data.items;
      setScrap(result);
    } catch (error) {
      console.error(
        "스크랩한 뉴스 목록 불러오기 에러",
        error.response ? error.response.data : error
      );
    }
  };

  useEffect(() => {
    handleMypageMainApi();
    scrappedNewsAPI();
  }, []);

  return (
    <Div>
      <BodyDiv>
        <Header />

        <WrapperDiv>
          <LeftDiv>
            <MainWrapper borderBottom="solid 2px #c4c4c4">
              <MainPDiv>
                <MainP color="#4C8C5E" fontWeight="600">
                  {data.grade}
                </MainP>
                <MainP fontWeight="600" marginRight="0">
                  {data.nickname}
                </MainP>
                <MainP>님</MainP>
              </MainPDiv>

              <MainPDiv>
                <MainP>이번</MainP>
                <MainP>달</MainP>
                <MainP>누적</MainP>
                <MainP>출석</MainP>
                <MainP>{data.grade_count}번</MainP>
              </MainPDiv>

              <MainPDiv marginTop="30px">
                <MainP color="#4C8C5E" fontWeight="600" marginRight="0">
                  {data.next_grade}
                </MainP>
                <MainP>까지</MainP>
                <MainP>{data.remainingLogins}번</MainP>
                <MainP>남았어요!</MainP>
              </MainPDiv>

              <Links>
                <MainP
                  color="#424242"
                  fontWeight="600"
                  fontSize="20px"
                  margin="20px 0"
                  onClick={() => setGradeBt(true)}
                >
                  등급 자세히 보기 〉
                </MainP>
              </Links>
            </MainWrapper>

            <MainWrapper>
              <MainPDiv flexDirection="column">
                {/* <Links to="/Mypage/Scrap">
                  <MainP fontWeight="600" fontSize="30px" marginBottom="5px">
                    나의 스크랩 〉
                  </MainP>
                </Links> */}
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
                  width="150px"
                  marginBottom="8px"
                  onClick={() => setUnregisterBt(true)}
                >
                  회원 탈퇴
                </MainP>

                {data.role === "ADMIN" ? (
                  <Links to="/Admin">
                    <MainP fontWeight="600" fontSize="21px" marginBottom="15px">
                      관리자 페이지
                    </MainP>
                  </Links>
                ) : null}
              </MainPDiv>
            </MainWrapper>
          </LeftDiv>
          <RightDiv>
            <MainP fontWeight="700" fontSize="30px" margin="0 0 15px 25px">
              나의 스크랩
            </MainP>
            {/* 스크랩한 뉴스 목록*/}
            <PostMyPageDiv>
              {scrap.length > 0 ? (
                scrap.slice(0, 4).map((item, index) => (
                  <Links
                    to={{
                      pathname: `/detailPage/${item.id}`,
                    }}
                  >
                    <NewsletterPost
                      key={item.id}
                      title={item.title}
                      content={item.content}
                      publishDate={item.publishDate}
                      thumbnail={item.thumbnail}
                      likeCount={item.likeCount}
                  scrapCount={item.scrapCount}
                    ></NewsletterPost>
                  </Links>
                ))
              ) : (
                <NoScrapImg src={NoScrap} />
              )}
            </PostMyPageDiv>
            {scrap.length > 0 ? (
              <MainP fontWeight="600" fontSize="20px" margin="0 0 0 620px">
                <Links to="/Mypage/Scrap">더보기 〉</Links>
              </MainP>
            ) : null}
          </RightDiv>
        </WrapperDiv>

        {unregisterBt === true ? (
          <Unregister setUnregisterBt={setUnregisterBt} />
        ) : null}

        {gradeBt === true ? <GradeList setGradeBt={setGradeBt} /> : null}
      </BodyDiv>
    </Div>
  );
}
