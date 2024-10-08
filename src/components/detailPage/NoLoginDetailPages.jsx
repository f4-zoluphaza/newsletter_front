import React from 'react';
import {
  AllMessageDiv,
  Textspan,
  MessageDiv,
  ChatbotImg,
  SendspeechbubbleDiv,
  BotspeechbubbleDiv,
  AllChattingDiv,
  ChattingDiv,
  ChattingInput,
  NoLoginChatDiv,
  NoticeDiv,
} from '../../styles/Detailpage/DetailPages.styled.jsx';

import CircleImage from '../../images/DetailPage/Circle.svg';
import MessageSendImage from '../../images/DetailPage/MessageSend.svg';

export default function NoLoginDetailPage() {
  return (
    <>
      {/* 뉴스레터 & 챗봇 */}
      {/* 챗봇 영역 - 로그인하지 않았을 때 */}
      <NoLoginChatDiv>
        <NoticeDiv>
          <Textspan fontweight="600" textalign="center" marginbottom="0">
            로그인 후 챗봇을 이용해보세요!
          </Textspan>
        </NoticeDiv>
        <AllMessageDiv>
          <MessageDiv justifycontent="end">
            <SendspeechbubbleDiv height="33px">
              <Textspan fontsize="15px" marginbottom="0">
                장타력이 뭐야?
              </Textspan>
            </SendspeechbubbleDiv>
          </MessageDiv>
          <MessageDiv height="auto" margintop="10px" flexdirection="column">
            <ChatbotImg src={CircleImage} />
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

          <MessageDiv justifycontent="end">
            <SendspeechbubbleDiv height="33px">
              <Textspan fontsize="15px" marginbottom="0">
                타율 5할이면 평균 타율보다 높은 거야?
              </Textspan>
            </SendspeechbubbleDiv>
          </MessageDiv>
          <MessageDiv height="auto" margintop="10px" flexdirection="column">
            <ChatbotImg src={CircleImage} />
            <BotspeechbubbleDiv>
              <Textspan fontsize="15px" marginbottom="0">
                답변 생성 중입니다.
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
      </NoLoginChatDiv>
    </>
  );
}
