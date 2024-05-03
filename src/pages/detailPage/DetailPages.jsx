import React from 'react';
import {
  Div,
  BodyDiv,
  NewsDivChat,
  NewsDiv,
  ChatbotDiv,
  NewsWrapperDiv,
  NewsTitleWrapperDivDate,
  Textspan,
  NewsImg,
  NewsContentDiv,
} from '../../styles/Detailpage/DetailPages.styled.jsx';

import Header from '../../components/Header.jsx';
import NewsImage from '../../images/MainPage/News.svg';

export default function DetailPage() {
  return (
    <Div>
      <BodyDiv>
        {/* 네비게이션바 */}
        <Header></Header>

        {/* 뉴스레터 & 챗봇 */}
        <NewsDivChat>
          <NewsDiv>
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
            <NewsWrapperDiv height="250px" margintop="15px">
              <NewsImg src={NewsImage}></NewsImg>
            </NewsWrapperDiv>
            <NewsWrapperDiv height="auto" margintop="25px">
              <NewsContentDiv>
                <Textspan fontweight="600">
                  이정후, 메이저리그 첫 홈런으로 주목 받다
                </Textspan>
                <Textspan>
                  샌프란시스코 자이언츠의 새내기, 이정후 선수가 시범경기에서
                  대포알 같은 홈런을 쏘아 올리며 메이저리그 데뷔전부터 화려한
                  임팩트를 남겼습니다.
                </Textspan>
                <Textspan fontweight="600">
                  시범경기 두 번째 출전, 홈런으로 존재감 과시
                </Textspan>
                <Textspan>
                  이정후 선수는 두 번째 시범경기에서 1번 타자 중견수로 나서 첫
                  타석에서 2루타를 치며 좋은 출발을 보였습니다. 이어 3회 자신의
                  진가를 발휘, 시속 152km의 빠른 공을 맞아 우측 담장을 넘기는
                  홈런을 기록했습니다.
                </Textspan>
                <Textspan fontweight="600">홈런의 인상적인 기록들</Textspan>
                <Textspan>
                  이 홈런은 발사각 18도, 타구 속도 시속 177km로 측정되어
                  127미터를 ...
                </Textspan>
                {/* <Textspan fontweight="600">
                  이정후, 메이저리그 첫 홈런으로 주목 받다
                </Textspan>
                <Textspan>
                  샌프란시스코 자이언츠의 새내기, 이정후 선수가 시범경기에서
                  대포알 같은 홈런을 쏘아 올리며 메이저리그 데뷔전부터 화려한
                  임팩트를 남겼습니다.
                </Textspan> */}
              </NewsContentDiv>
            </NewsWrapperDiv>
          </NewsDiv>
          <ChatbotDiv></ChatbotDiv>
        </NewsDivChat>
      </BodyDiv>
    </Div>
  );
}
