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
import { Links } from "../../styles/main/main-style-component.jsx";
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
  // const [prompt, setPrompt] = useState("");

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
      //API 요청 URL
      const url = `api/v1/news/${id}`;

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

      console.log(response.data.items);

      setData({
        title: response.data.items[0].news.title,
        link: response.data.items[0].news.link,
        original: response.data.items[0].news.source,
        content: response.data.items[0].news.content,
        publishDate: response.data.items[0].news.publishDate,
        thumbnail: response.data.items[0].news.thumbnail,
        id: response.data.items[0].news.id,
        published: response.data.items[0].news.published,
        likeCount: response.data.items[0].news.likeCount,
      });
      setValidLike(response.data.items[0].liked);
      setValidScrap(response.data.items[0].scrapped);

      // window.location.reload();
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
      //API 요청 URL
      const url = `api/v1/news/${id}/previous`;

      //axios.get 메소드를 사용하여 요청을 보냄
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
      //API 요청 URL
      const url = `api/v1/news/${id}/next`;

      //axios.get 메소드를 사용하여 요청을 보냄
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
      //API 요청 URL
      const url = `api/v1/news/${id}/like`;

      // 쿠키에서 'jwtToken' 값을 가져옴
      const token = getCookie("jwtToken");

      //axios.post 메소드를 사용하여 요청을 보냄
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

  // 스크랩, 스크랩 취소 취소 api
  const handleScrapApi = async () => {
    try {
      //API 요청 URL
      const url = `api/v1/news/${id}/scrap`;

      // 쿠키에서 'jwtToken' 값을 가져옴
      const token = getCookie("jwtToken");

      //axios.post 메소드를 사용하여 요청을 보냄
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

  // //챗봇  api
  // const handleChatApi = async () => {
  //   try {
  //     const url = "api/v1/chat/send";
  //     const data = {
  //       prompt: prompt
  //     };

  //     const response = await api.post(url, data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       }
  //     });

  //     console.log(response.data)
  //   } catch (error) {
  //     console.error(
  //       "Chatbot error",
  //       error.response ? error.response.data : error
  //     );
  //     setValidLogin(false);
  //   }
  // };

  useEffect(() => {
    // 이전 id와 현재 id를 비교하여 id가 변경된 경우에만 스크롤 이동
    if (prevIdRef.current !== id) {
      window.scrollTo(0, 0);
    }

    // id와 validLike가 변경될 때마다 API 호출
    newsdetailPageApi();
    validLoginFuntion();

    // useEffect가 실행될 때마다 이전 id 값을 업데이트
    prevIdRef.current = id;
  }, [id, validLike]);

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
                <NewsImg
                  id="thumbnail"
                  src={api.defaults.imgBaseURL + data.thumbnail}
                ></NewsImg>
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
                <OnClickImg
                  src={validScrap ? ScrapImage : ScrapBlackImage}
                  width="28px"
                  onClick={() => handleScrapApi()}
                />

                <HeartDiv>
                  <OnClickImg
                    src={validLike ? HeartImage : HeartBlackImage}
                    width="33px"
                    onClick={() => handleLikeApi()}
                  />
                  <Textspan fontsize="13px" textalign="center" marginbottom="0">
                    {data.likeCount}
                  </Textspan>
                </HeartDiv>
              </HeartDivScrap>
              <OnClickImg src={ShareImage} />
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
