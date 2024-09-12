import React, { useState, useEffect } from "react";
import {
  NewsDivChat,
  ChatbotDiv,
  AllMessageDiv,
  Textspan,
  MessageDiv,
  ChatbotImg,
  SendspeechbubbleDiv,
  BotspeechbubbleDiv,
  AllChattingDiv,
  ChattingDiv,
  ChattingInput,
} from "../../styles/Detailpage/DetailPages.styled.jsx";
import CircleImage from "../../images/DetailPage/Circle.svg";
import MessageSendImage from "../../images/DetailPage/MessageSend.svg";

export default function DetailPage() {
  return (
    <>
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
                야구에서 장타력은 타자가 타구를 멀리 치는 능력을 말합니다. 이는
                단순히 홈런을 치는 능력만을 의미하지 않으며, 2루타와 3루타를
                포함한 장타의 비율을 나타내는 장타율로도 측정됩니다. 장타율은
                선수가 친 안타의 총 베이스 수를 타석 수로 나눈 값으로 계산되며,
                더 높은 장타율은 선수가 평균적으로 더 많은 베이스를 얻는다는
                것을 의미합니다. 이는 팀의 득점 기회를 증가시키는 중요한 요소 중
                하나입니다.
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
                일반적으로 전문 야구 리그에서 선수들의 평균 타율은 대략 .250에서
                .300 사이입니다. 타율이 .300을 넘으면 그 선수를 우수한 타자로
                여기며, .400 이상의 타율은 역사적으로 매우 드문 성취로 간주되며,
                대부분의 경우 단기간 동안만 유지됩니다.
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
                일반적으로 전문 야구 리그에서 선수들의 평균 타율은 대략 .250에서
                .300 사이입니다. 타율이 .300을 넘으면 그 선수를 우수한 타자로
                여기며, .400 이상의 타율은 역사적으로 매우 드문 성취로 간주되며,
                대부분의 경우 단기간 동안만 유지됩니다. 타율 .500(5할)은
                야구에서 매우 높은 타율로 간주됩니다. 일반적으로 전문 야구
                리그에서 선수들의 평균 타율은 대략 .250에서 .300 사이입니다.
                타율이 .300을 넘으면 그 선수를 우수한 타자로 여기며, .400 이상의
                타율은 역사적으로 매우 드문 성취로 간주되며, 대부분의 경우
                단기간 동안만 유지됩니다. 타율 .500(5할)은 야구에서 매우 높은
                타율로 간주됩니다. 일반적으로 전문 야구 리그에서 선수들의 평균
                타율은 대략 .250에서 .300 사이입니다. 타율이 .300을 넘으면 그
                선수를 우수한 타자로 여기며, .400 이상의 타율은 역사적으로 매우
                드문 성취로 간주되며, 대부분의 경우 단기간 동안만 유지됩니다.
                타율 .500(5할)은 야구에서 매우 높은 타율로 간주됩니다.
                일반적으로 전문 야구 리그에서 선수들의 평균 타율은 대략 .250에서
                .300 사이입니다. 타율이 .300을 넘으면 그 선수를 우수한 타자로
                여기며, .400 이상의 타율은 역사적으로 매우 드문 성취로 간주되며,
                대부분의 경우 단기간 동안만 유지됩니다. 타율 .500(5할)은
                야구에서 매우 높은 타율로 간주됩니다. 일반적으로 전문 야구
                리그에서 선수들의 평균 타율은 대략 .250에서 .300 사이입니다.
                타율이 .300을 넘으면 그 선수를 우수한 타자로 여기며, .400 이상의
                타율은 역사적으로 매우 드문 성취로 간주되며, 대부분의 경우
                단기간 동안만 유지됩니다.
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
    </>
  );
}
