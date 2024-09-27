import React, { useState, useEffect, useRef } from "react";
import api from "../../api/api.js";
import { useParams, useNavigate } from "react-router-dom";
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
import HeartImage from "../../images/MainPage/Heart.svg";
import ScrapImage from "../../images/MainPage/Scrapt.svg";

export default function DetailPage() {
  const navigate = useNavigate();
  const [validLogin, setValidLogin] = useState(null);
  const { id } = useParams();
  const [validLike, setValidLike] = useState(false);
  const [validScrap, setValidScrap] = useState(false);
  const prevIdRef = useRef(null);

  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const [data, setData] = useState({});

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

  // 상세조회 api
  const newsdetailPageApi = async () => {
    try {
      const url = `api/v1/news/${id}`;
      const token = getCookie("jwtToken");

      let response;

      if (validLogin) {
        response = await api.get(url, {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        response = await api.get(url, {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });
      }

      console.log(response.data.items);
      const publishDate = response.data.items[0].news.publishDate.split("T")[0];

      setData({
        title: response.data.items[0].news.title,
        link: response.data.items[0].news.link,
        original: response.data.items[0].news.source,
        content: response.data.items[0].news.content,
        publishDate: publishDate,
        thumbnail: response.data.items[0].news.thumbnail,
        id: response.data.items[0].news.id,
        published: response.data.items[0].news.published,
        likeCount: response.data.items[0].news.likeCount,
        scrapCount: response.data.items[0].news.scrapCount,
      });
      setValidLike(response.data.items[0].liked);
      setValidScrap(response.data.items[0].scrapped);
    } catch (error) {
      console.error(
        "detailPage 메인 뉴스 상세 조회 에러",
        error.response ? error.response.data : error
      );
    }
  };

  // 메인 뉴스 상세 이전 페이지
  const handlePreviousPostApi = async () => {
    try {
      const url = `api/v1/news/${id}/previous`;

      const response = await api.get(url, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      });

      console.log(response.data);

      if (response.data.isSuccess) {
        const previousId = response.data.items[0].id;
        navigate(`/detailPage/${previousId}`);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(
        "detailPage 이전 페이지 api 에러",
        error.response ? error.response.data : error
      );
    }
  };

  //메인 뉴스 상세 다음 페이지 api
  const handleNextPostApi = async () => {
    try {
      const url = `api/v1/news/${id}/next`;

      const response = await api.get(url, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      });

      console.log(response.data);
      if (response.data.isSuccess) {
        const nextId = response.data.items[0].id;
        navigate(`/detailPage/${nextId}`);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(
        "detailPage 다음 페이지 api 에러",
        error.response ? error.response.data : error
      );
    }
  };

  // 좋아요, 좋아요 취소 api
  const handleLikeApi = async () => {
    try {
      const url = `api/v1/news/${id}/like`;
      const token = getCookie("jwtToken");

      const response = await api.post(
        url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setValidLike(response.data.items[0].liked);
    } catch (error) {
      console.error(
        "detailPage 좋아요 api 에러",
        error.response ? error.response.data : error
      );
    }
  };

  // 스크랩, 스크랩 취소 api
  const handleScrapApi = async () => {
    try {
      const url = `api/v1/news/${id}/scrap`;
      const token = getCookie("jwtToken");

      const response = await api.post(
        url,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setValidScrap(response.data.items[0].scrapped);
    } catch (error) {
      console.error(
        "detailPage 스크랩 api 에러",
        error.response ? error.response.data : error
      );
    }
  };

  // 복사하는 함수
  const handleCopyLink = () => {
    const currentLink = window.location.href; // 현재 페이지의 URL 가져오기
    navigator.clipboard.writeText(currentLink); // 클립보드에 복사
    alert("링크가 복사되었습니다.");
  };

  useEffect(() => {
    // 이전 id와 현재 id를 비교하여 id가 변경된 경우에만 스크롤 이동
    if (prevIdRef.current !== id) {
      window.scrollTo(0, 0);
    }

    // id와 validLike가 변경될 때마다 API 호출
    validLoginFuntion();

    // useEffect가 실행될 때마다 이전 id 값을 업데이트
    prevIdRef.current = id;
  }, [id, validLike, validScrap]);

  useEffect(() => {
    if (validLogin !== null) {
      // validLogin 값이 null이 아닐 때만 API 호출
      newsdetailPageApi();
    }
  }, [validLogin, id, validLike, validScrap]); // validLogin이 변경될 때마다 실행

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
              <NewsWrapperDiv margintop="15px">
                <NewsImg
                  id="thumbnail"
                  src={api.defaults.imgBaseURL + data.thumbnail}
                ></NewsImg>
              </NewsWrapperDiv>

              {/* 뉴스레터 내용 */}
              <NewsWrapperDiv margintop="25px">
                <NewsContentDiv>
                  <Textspan id="content" marginbottom="15px">
                    {data.content ? (
                      data.content.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))
                    ) : (
                      <span>내용이 없습니다.</span>
                    )}
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
                <HeartDiv>
                  <OnClickImg
                    src={validScrap ? ScrapImage : ScrapBlackImage}
                    width="28px"
                    onClick={
                      validLogin
                        ? () => handleScrapApi()
                        : () => alert("로그인 후 이용해주세요.")
                    }
                  />
                  <Textspan fontsize="13px" textalign="center" marginbottom="0">
                    {data.scrapCount}
                  </Textspan>
                </HeartDiv>

                <HeartDiv>
                  <OnClickImg
                    src={validLike ? HeartImage : HeartBlackImage}
                    width="33px"
                    onClick={
                      validLogin
                        ? () => handleLikeApi()
                        : () => alert("로그인 후 이용해주세요.")
                    }
                  />
                  <Textspan fontsize="13px" textalign="center" marginbottom="0">
                    {data.likeCount}
                  </Textspan>
                </HeartDiv>
              </HeartDivScrap>
              <OnClickImg src={ShareImage} onClick={handleCopyLink} />
            </HeartScrapWrapperDivShare>
            {/* 이전글, 다음글 영역 */}
            <PreNextpostDiv>
              <OnClickTextspan onClick={() => handlePreviousPostApi()}>
                &lt; 이전 글 보기
              </OnClickTextspan>
              <OnClickTextspan onClick={() => handleNextPostApi()}>
                다음 글 보기 &gt;
              </OnClickTextspan>
            </PreNextpostDiv>
          </HeartScrapDivShare>
        </Form>
      </BodyDiv>
    </Div>
  );
}
