import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Div,
  BodyDiv,
  Form,
  NewsDivChat,
  NewsDiv,
  NewsWrapperDiv,
  NewsTitleWrapperDivDate,
  Textspan,
  NewsImg,
  NewsContentDiv,
  HeartScrapDivShare,
  HeartScrapWrapperDivShare,
  HeartDivScrap,
  OnClickImg,
  HeartDiv,
  PreNextpostDiv,
  OnClickTextspan,
} from "../../styles/Detailpage/DetailPages.styled.jsx";
import NoLoginChat from "../../components/detailPage/NoLoginDetailPages.jsx";
import LoginChat from "../../components/detailPage/LoginDetailPages.jsx";

import Header from "../../components/Header.jsx";
import ScrapBlackImage from "../../images/DetailPage/ScrapBlank.svg";
import HeartBlackImage from "../../images/DetailPage/HeartBlank.svg";
import ShareImage from "../../images/DetailPage/Share.svg";

export default function DetailPage() {
  const [validLogin, setValidLogin] = useState(null);

  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const [data, setData] = useState({
    title: "",
    link: "",
    original: "",
    content: "",
    publishDate: "",
    thumbnail: "",
    id: null,
    published: null,
  });

  const { id } = useParams();

  const validLoginFuntion = () => {
    const isLogin = getCookie("jwtToken");
    if (isLogin == null) {
      setValidLogin(false);
    } else {
      setValidLogin(true);
    }
  };

  // 화면 새로고침 막는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 뉴스 발행 api
  const newsdetailPageApi = async () => {
    try {
      //API 요청 URL
      const url = `https://humble-commonly-goshawk.ngrok-free.app/api/v1/news/${id}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      });

      console.log(response.data.items);

      setData({
        title: response.data.items[0].title,
        link: response.data.items[0].link,
        original: response.data.items[0].source,
        content: response.data.items[0].content,
        publishDate: response.data.items[0].publishDate,
        thumbnail: response.data.items[0].thumbnail,
        id: response.data.items[0].id,
        published: response.data.items[0].published,
      });

      // window.location.reload();
    } catch (error) {
      console.error(
        "detailPage 메인 뉴스 상세 조회 에러",
        error.response ? error.response.data : error
      );
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지의 맨 위로 스크롤
    newsdetailPageApi();
    validLoginFuntion();
  }, [id]);

  return (
    <Div>
      <BodyDiv>
        <Form onSubmit={handleSubmit}>
          {/* Header 영역 */}
          <Header></Header>

          {/* 뉴스레터 & 챗봇 */}
          <NewsDivChat>
            <NewsDiv onSubmit={handleSubmit}>
              {/* 뉴스레터타이틀, 날짜 */}
              <NewsWrapperDiv>
                <NewsTitleWrapperDivDate>
                  <Textspan
                    id="title"
                    name="title"
                    fontsize="23px"
                    fontweight="600"
                    textalign="center"
                    marginbottom="5px"
                  >
                    {data.title}
                  </Textspan>
                  <Textspan
                    id="publishDate"
                    name="publishDate"
                    fontsize="12px"
                    fontweight="600"
                    textalign="right"
                    marginbottom="0"
                  >
                    {data.publishDate}
                  </Textspan>
                </NewsTitleWrapperDivDate>
              </NewsWrapperDiv>

              {/* 뉴스레터 이미지 */}
              <NewsWrapperDiv height="240px" margintop="15px">
                <NewsImg id="thumbnail" src={data.thumbnail}></NewsImg>
              </NewsWrapperDiv>

              {/* 뉴스레터 내용 */}
              <NewsWrapperDiv height="auto" margintop="25px">
                <NewsContentDiv>
                  <Textspan id="content" marginbottom="15px">
                    {data.content}
                  </Textspan>
                </NewsContentDiv>
              </NewsWrapperDiv>
            </NewsDiv>

            {/* 챗봇 영역 */}
            {validLogin ? <LoginChat /> : <NoLoginChat />}
          </NewsDivChat>

          {/* 좋아요, 저장, 공유 영역 */}
          <HeartScrapDivShare>
            <HeartScrapWrapperDivShare>
              <HeartDivScrap>
                <OnClickImg src={ScrapBlackImage} width="28px" />
                <HeartDiv>
                  <OnClickImg src={HeartBlackImage} width="33px" />
                  <Textspan fontsize="13px" textalign="center" marginbottom="0">
                    2
                  </Textspan>
                </HeartDiv>
              </HeartDivScrap>
              <OnClickImg src={ShareImage} />
            </HeartScrapWrapperDivShare>
            {/* 이전글, 다음글 영역 */}
            <PreNextpostDiv>
              <OnClickTextspan>&lt; 이전 글 보기</OnClickTextspan>
              <OnClickTextspan>다음 글 보기 &gt;</OnClickTextspan>
            </PreNextpostDiv>
          </HeartScrapDivShare>
        </Form>
      </BodyDiv>
    </Div>
  );
}
