import React from 'react';
import {
  Div,
  BodyDiv,
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
} from '../../styles/Detailpage/DetailPages.styled.jsx';

import Header from '../../components/Header.jsx';
import NewsImage from '../../images/MainPage/News.svg';
import CircleImage from '../../images/DetailPage/Circle.svg';
import MessageSendImage from '../../images/DetailPage/MessageSend.svg';
import ScrapBlackImage from '../../images/DetailPage/ScrapBlank.svg';
import HeartBlackImage from '../../images/DetailPage/HeartBlank.svg';
import ShareImage from '../../images/DetailPage/Share.svg';

export default function DetailPage() {
  return (
    <Div>
      <BodyDiv>
        {/* Header 영역 */}
        <Header></Header>

        {/* 뉴스레터 & 챗봇 */}
        <NewsDivChat>
          <NewsDiv>
            {/* 뉴스레터타이틀, 날짜 */}
            <NewsWrapperDiv>
              <NewsTitleWrapperDivDate>
                <Textspan
                  fontsize="23px"
                  fontweight="600"
                  textalign="center"
                  marginbottom="5px"
                >
                  메이저리그 시범경기에서 빛난 이정후
                </Textspan>
                <Textspan
                  fontsize="12px"
                  fontweight="600"
                  textalign="right"
                  marginbottom="0"
                >
                  2024.04.12 오후 3:00
                </Textspan>
              </NewsTitleWrapperDivDate>
            </NewsWrapperDiv>

            {/* 뉴스레터 이미지 */}
            <NewsWrapperDiv height="240px" margintop="15px">
              <NewsImg src={NewsImage}></NewsImg>
            </NewsWrapperDiv>

            {/* 뉴스레터 내용 */}
            <NewsWrapperDiv height="auto" margintop="25px">
              <NewsContentDiv>
                <Textspan fontweight="600">
                  이정후, 메이저리그 첫 홈런으로 주목 받다
                </Textspan>
                {/* Figma 예 */}
                {/* <Textspan marginbottom="15px">
                  샌프란시스코 자이언츠의 새내기, 이정후 선수가 시범경기에서
                  대포알 같은 홈런을 쏘아 올리며 메이저리그 데뷔전부터 화려한
                  임팩트를 남겼습니다.
                </Textspan> */}
                {/* <Textspan fontweight="600">
                  시범경기 두 번째 출전, 홈런으로 존재감 과시
                </Textspan>
                <Textspan marginbottom="15px">
                  이정후 선수는 두 번째 시범경기에서 1번 타자 중견수로 나서 첫
                  타석에서 2루타를 치며 좋은 출발을 보였습니다. 이어 3회 자신의
                  진가를 발휘, 시속 152km의 빠른 공을 맞아 우측 담장을 넘기는
                  홈런을 기록했습니다.
                </Textspan>
                <Textspan fontweight="600">홈런의 인상적인 기록들</Textspan>
                <Textspan marginbottom="15px">
                  이 홈런은 발사각 18도, 타구 속도 시속 177km로 측정되어
                  127미터를 ...
                </Textspan> */}

                {/* 700자 예시 */}
                <Textspan marginbottom="15px">
                  샌프란시스코 자이언츠의 새내기, 이정후 선수가 시범경기에서
                  임팩트를 남겼습니다. 샌프란시스코 자이언츠의 새내기, 이정후
                  선수가 시범경기에서 대포알 같은 홈런을 쏘아 올리며 메이저리그
                  데뷔전부터 화려한 임팩트를 남겼습니다. 샌프란시스코 자이언츠의
                  새내기, 이 정후 선수가 시범경기에서 대포알 같은 홈런을 쏘아
                  올리며 메이저리그 데뷔전부터 화려한 임팩트를 남겼습니다.
                  <br></br>
                  샌프란시스코 자이언츠의 새내기, 이정후 선수가 시범경기에서
                  대포알 같은 홈런을 쏘아 올리며 메이저리그 데뷔전부터 화려한
                  임팩트를 남겼습니다. 샌프란시스코 자이언츠의 새내기, 이정후
                  선수가 시범경기에서 대포알 같은 홈런을 쏘아 올리며 메이저리그
                  데뷔전부터 화려한 임팩트를 남겼습니다. 샌프란시스코 자이언츠의
                  새내기, 이정후 선수가 시범경기에서 임팩트를 남겼습니다.
                  <br></br>
                  샌프란시스코 자이언츠의 새내기, 이정후 선수가 시범경기에서
                  대포알 같은 홈런을 쏘아 올리며 메이저리그 데뷔전부터 화려한
                  임팩트를 남겼습니다. 샌프란시스코 자이언츠의 새내기, 이 정후
                  선수가 시범경기에서 대포알 같은 홈런을 쏘아 올리며 메이저리그
                  데뷔전부터 화려한 임팩트를 남겼습니다. 샌프란시스코 자이언츠의
                  새내기, 이정후 선수가 시범경기에서 대포알 같은 홈런을 쏘아
                  올리며 메이저리그 데뷔전부터 화려한 임팩트를 남겼습니다.
                  <br></br>
                  샌프란시스코 자이언츠의 새내기, 이정후 선수가 시범경기에서
                  대포알 같은 홈런을 쏘아 올리며 메이저리
                </Textspan>
                {/* 1000자 예시 */}
                <Textspan>
                  샌프란시스코 자이언츠의 새내기, 이정후 선수가 시범경기에서
                  임팩트를 남겼습니다. 샌프란시스코 자이언츠의 새내기, 이정후
                  선수가 시범경기에서 대포알 같은 홈런을 쏘아 올리며 메이저리그
                  데뷔전부터 화려한 임팩트를 남겼습니다. 샌프란시스코 자이언츠의
                  새내기, 이정후 선수가 시범경기에서 임팩트를 남겼습니다.
                  샌프란시스코 자이언츠의 새내기, 이정후 선수가 시범경기에서
                  대포알 같은 홈런을 쏘아 올리며 메이저리그 데뷔전부터 화려한
                  임팩트를 남겼습니다. 이정후 선수가 시범경기에서 임팩트를
                  남겼습니다. 이정후 선수가 시범경기에서 임팩트를 남겼습니다
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
                    3루타를 포함한 장타의 비율을 나타내는 장타율로도 측정됩니다.
                    장타율은 선수가 친 안타의 총 베이스 수를 타석 수로 나눈
                    값으로 계산되며, 더 높은 장타율은 선수가 평균적으로 더 많은
                    베이스를 얻는다는 것을 의미합니다. 이는 팀의 득점 기회를
                    증가시키는 중요한 요소 중 하나입니다.
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
              {/* <MessageDiv>
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
              </MessageDiv> */}
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
      </BodyDiv>
    </Div>
  );
}
