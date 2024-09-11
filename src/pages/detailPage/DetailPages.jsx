import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Div,
  BodyDiv,
  Form,
  NewsDivChat,
  NewsDiv,
  ChatbotDiv,
  AllMessageDiv,
  NewsWrapperDiv,
  NewsTitleWrapperDivDate,
  Textspan,
  NewsImg,
  NewsContentDiv,
  MessageDiv,
  ChatbotImg,
  SendspeechbubbleDiv,
  BotspeechbubbleDiv,
  AllChattingDiv,
  ChattingDiv,
  ChattingInput,
  HeartScrapDivShare,
  HeartScrapWrapperDivShare,
  HeartDivScrap,
  OnClickImg,
  HeartDiv,
  PreNextpostDiv,
  OnClickTextspan,
} from "../../styles/Detailpage/DetailPages.styled.jsx";

import Header from "../../components/Header.jsx";
import NewsImage from "../../images/MainPage/News.svg";
import CircleImage from "../../images/DetailPage/Circle.svg";
import MessageSendImage from "../../images/DetailPage/MessageSend.svg";
import ScrapBlackImage from "../../images/DetailPage/ScrapBlank.svg";
import HeartBlackImage from "../../images/DetailPage/HeartBlank.svg";
import ShareImage from "../../images/DetailPage/Share.svg";

export default function DetailPage() {
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
  }, []);

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
            <ChatbotDiv>
              <AllMessageDiv>
                <MessageDiv>
                  <ChatbotImg src={CircleImage}></ChatbotImg>
                  <SendspeechbubbleDiv height="33px">
                    <Textspan fontsize="15px" marginbottom="0">
                      장타력이 뭐야?
                    </Textspan>
                  </SendspeechbubbleDiv>
                </MessageDiv>
                <MessageDiv height="auto" margintop="10px">
                  <BotspeechbubbleDiv>
                    <Textspan fontsize="15px" marginbottom="0">
                      야구에서 장타력은 타자가 타구를 멀리 치는 능력을 말합니다.
                      이는 단순히 홈런을 치는 능력만을 의미하지 않으며, 2루타와
                      3루타를 포함한 장타의 비율을 나타내는 장타율로도
                      측정됩니다. 장타율은 선수가 친 안타의 총 베이스 수를 타석
                      수로 나눈 값으로 계산되며, 더 높은 장타율은 선수가
                      평균적으로 더 많은 베이스를 얻는다는 것을 의미합니다. 이는
                      팀의 득점 기회를 증가시키는 중요한 요소 중 하나입니다.
                    </Textspan>
                  </BotspeechbubbleDiv>
                </MessageDiv>

                <MessageDiv>
                  <ChatbotImg src={CircleImage}></ChatbotImg>
                  <SendspeechbubbleDiv height="33px">
                    <Textspan fontsize="15px" marginbottom="0">
                      타율 5할이면 평균 타율보다 높은 거야?
                    </Textspan>
                  </SendspeechbubbleDiv>
                </MessageDiv>
                <MessageDiv height="auto" margintop="10px">
                  <BotspeechbubbleDiv>
                    <Textspan fontsize="15px" marginbottom="0">
                      타율 .500(5할)은 야구에서 매우 높은 타율로 간주됩니다.
                      일반적으로 전문 야구 리그에서 선수들의 평균 타율은 대략
                      .250에서 .300 사이입니다. 타율이 .300을 넘으면 그 선수를
                      우수한 타자로 여기며, .400 이상의 타율은 역사적으로 매우
                      드문 성취로 간주되며, 대부분의 경우 단기간 동안만
                      유지됩니다.
                    </Textspan>
                  </BotspeechbubbleDiv>
                </MessageDiv>

                {/* 답변 생성 중일 경우 */}
                <MessageDiv>
                  <ChatbotImg src={CircleImage}></ChatbotImg>
                  <SendspeechbubbleDiv height="33px">
                    <Textspan fontsize="15px" marginbottom="0">
                      홈런이 뭐야?
                    </Textspan>
                  </SendspeechbubbleDiv>
                </MessageDiv>
                <MessageDiv height="auto" margintop="10px">
                  <BotspeechbubbleDiv>
                    <Textspan fontsize="15px" marginbottom="0">
                      답변 생성 중입니다.
                    </Textspan>
                  </BotspeechbubbleDiv>
                </MessageDiv>

                {/* 스크롤 예 */}
                <MessageDiv>
                  <ChatbotImg src={CircleImage}></ChatbotImg>
                  <SendspeechbubbleDiv height="33px">
                    <Textspan fontsize="15px" marginbottom="0">
                      홈런이 뭐야?
                    </Textspan>
                  </SendspeechbubbleDiv>
                </MessageDiv>
                <MessageDiv height="auto" margintop="10px">
                  <BotspeechbubbleDiv>
                    <Textspan fontsize="15px" marginbottom="0">
                      타율 .500(5할)은 야구에서 매우 높은 타율로 간주됩니다.
                      일반적으로 전문 야구 리그에서 선수들의 평균 타율은 대략
                      .250에서 .300 사이입니다. 타율이 .300을 넘으면 그 선수를
                      우수한 타자로 여기며, .400 이상의 타율은 역사적으로 매우
                      드문 성취로 간주되며, 대부분의 경우 단기간 동안만
                      유지됩니다. 타율 .500(5할)은 야구에서 매우 높은 타율로
                      간주됩니다. 일반적으로 전문 야구 리그에서 선수들의 평균
                      타율은 대략 .250에서 .300 사이입니다. 타율이 .300을 넘으면
                      그 선수를 우수한 타자로 여기며, .400 이상의 타율은
                      역사적으로 매우 드문 성취로 간주되며, 대부분의 경우 단기간
                      동안만 유지됩니다. 타율 .500(5할)은 야구에서 매우 높은
                      타율로 간주됩니다. 일반적으로 전문 야구 리그에서 선수들의
                      평균 타율은 대략 .250에서 .300 사이입니다. 타율이 .300을
                      넘으면 그 선수를 우수한 타자로 여기며, .400 이상의 타율은
                      역사적으로 매우 드문 성취로 간주되며, 대부분의 경우 단기간
                      동안만 유지됩니다. 타율 .500(5할)은 야구에서 매우 높은
                      타율로 간주됩니다. 일반적으로 전문 야구 리그에서 선수들의
                      평균 타율은 대략 .250에서 .300 사이입니다. 타율이 .300을
                      넘으면 그 선수를 우수한 타자로 여기며, .400 이상의 타율은
                      역사적으로 매우 드문 성취로 간주되며, 대부분의 경우 단기간
                      동안만 유지됩니다. 타율 .500(5할)은 야구에서 매우 높은
                      타율로 간주됩니다. 일반적으로 전문 야구 리그에서 선수들의
                      평균 타율은 대략 .250에서 .300 사이입니다. 타율이 .300을
                      넘으면 그 선수를 우수한 타자로 여기며, .400 이상의 타율은
                      역사적으로 매우 드문 성취로 간주되며, 대부분의 경우 단기간
                      동안만 유지됩니다.
                    </Textspan>
                  </BotspeechbubbleDiv>
                </MessageDiv>
              </AllMessageDiv>

              {/* 채팅 영역 */}
              <AllChattingDiv>
                <ChattingDiv>
                  <ChattingInput
                    type="text"
                    placeholder="질문을 입력해보세요."
                  ></ChattingInput>
                  <ChatbotImg
                    width="27px"
                    height="23px"
                    src={MessageSendImage}
                    cursor="pointer"
                  />
                </ChattingDiv>
              </AllChattingDiv>
            </ChatbotDiv>
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
