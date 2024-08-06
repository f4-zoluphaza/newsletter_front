import React from 'react';
import {
  Div,
  BodyDiv,
  NavDiv,
  LogoImg,
  WrapperDiv,
  LoginLinkSignupP,
  Links,
  HeaderDiv,
  ExplainDiv,
  TitleSpan,
  TextSpan,
  SubscribeDiv,
  Form,
  Label,
  SubscribeInput,
  SmallTextSpan,
  ButtonDiv,
  Button,
  PersonalInformationSpan,
  SearchDiv,
  SearchBorderDiv,
  SearchInput,
  SearchImg,
  RangeDiv,
  RangeCenterDiv,
  RangeWapperDiv,
  RangeButton,
  PostAllDiv,
  PostDiv,
  PostWapperDiv,
  NewsImg,
  NewsTitleDiv,
  Line,
  NewsDateDiv,
  HeartSaveDiv,
  HeartImgScrap,
  HeartCountScrap,
  PostNumberDiv,
  BoldLine,
  FooterDiv,
  MakerDivContact,
} from '../styles/main/main-style-component.jsx';

import Logo from '../images/Logo.svg';
import Searchsvg from '../images/MainPage/Search.svg';
import NewsImage from '../images/MainPage/News.svg';
import HeartImage from '../images/MainPage/Heart.svg';
import ScraptImage from '../images/MainPage/Scrapt.svg';
import Header from '../components/Header.jsx';
import NewsletterPost from '../components/NewsletterPost.jsx';
import Footer from '../components/main/Footer.jsx';

export default function MainPage(props) {
  return (
    <Div>
      <BodyDiv>
        {/* 네비게이션바 */}
        <Header></Header>

        {/* 구독 Header */}
        <HeaderDiv>
          <ExplainDiv>
            <TitleSpan>오늘의 최신 기사를 가장 빠르게</TitleSpan>
            <TextSpan textalign="right">
              매일 야구 기사를 메일로 보내드립니다.
            </TextSpan>
            <TextSpan textalign="right">무료 야구 뉴스를 받아보세요!</TextSpan>
          </ExplainDiv>
          <SubscribeDiv>
            <Form>
              {/* //placeholder에 설명 글자
              <SubscribeInput
                type="email"
                placeholder="이메일"
              ></SubscribeInput>
              <SubscribeInput type="text" placeholder="닉네임"></SubscribeInput>
              <ButtonDiv>
                <Button value="뉴스레터 신청하기" type="submit" />
                <Button value="가입 먼저하기" type="submit" />
              </ButtonDiv>{' '}
              */}
              <Label>
                <TextSpan textalign="center" fontweight="600">
                  이메일
                </TextSpan>
                <SubscribeInput
                  type="email"
                  placeholder="1234abc@naver.com"
                ></SubscribeInput>
              </Label>
              <Label>
                <TextSpan textalign="center" fontweight="600">
                  닉네임
                </TextSpan>
                <SubscribeInput type="text"></SubscribeInput>
              </Label>
              <ButtonDiv>
                <Button value="뉴스레터 신청하기" type="submit" />
                <Button value="가입 먼저하기" type="submit" />
              </ButtonDiv>
            </Form>

            {/* 정보동의 */}
            <SmallTextSpan>구독 시, </SmallTextSpan>
            <Links>
              <PersonalInformationSpan>
                개인정보 수집 및 이용
              </PersonalInformationSpan>
            </Links>
            <SmallTextSpan paddingleft="0">에 동의하게 됩니다.</SmallTextSpan>
          </SubscribeDiv>
        </HeaderDiv>

        {/* 검색 창 */}
        <SearchDiv>
          <SearchBorderDiv>
            <SearchInput type="text"></SearchInput>
            <SearchImg id="search" src={Searchsvg} />
          </SearchBorderDiv>
        </SearchDiv>

        {/* 정렬 */}
        <RangeDiv>
          <RangeCenterDiv>
            <RangeWapperDiv>
              <RangeButton
                value="오늘의 뉴스"
                type="button"
                backgroundcolor="#588539"
              />
              <RangeButton
                value="한입뉴스"
                type="button"
                backgroundcolor="#FAF3E5"
              />
            </RangeWapperDiv>
            <RangeButton
              value="추천순"
              type="button"
              backgroundcolor="#CDDFAB"
            />
          </RangeCenterDiv>
        </RangeDiv>

        {/* 뉴스레터 게시물 */}
        <PostAllDiv>
          <PostDiv>
            <NewsletterPost></NewsletterPost>
            <NewsletterPost></NewsletterPost>
            <NewsletterPost></NewsletterPost>
            <NewsletterPost></NewsletterPost>
          </PostDiv>
        </PostAllDiv>
        <PostAllDiv>
          <PostDiv>
            <NewsletterPost></NewsletterPost>
            <PostWapperDiv></PostWapperDiv>
            <PostWapperDiv></PostWapperDiv>
            <PostWapperDiv></PostWapperDiv>
          </PostDiv>
        </PostAllDiv>
        <PostAllDiv>
          <PostDiv>
            <NewsletterPost></NewsletterPost>
            <PostWapperDiv></PostWapperDiv>
            <PostWapperDiv></PostWapperDiv>
            <PostWapperDiv></PostWapperDiv>
          </PostDiv>
        </PostAllDiv>
        {/* <PostAllDiv>
          <PostDiv>
          <NewsletterPost></NewsletterPost>
          <PostWapperDiv></PostWapperDiv>
          <PostWapperDiv></PostWapperDiv>
          <PostWapperDiv></PostWapperDiv>
          </PostDiv>
        </PostAllDiv> */}

        {/* 게시물 페이지 번호 */}
        <PostNumberDiv>
          <Links>
            <TextSpan fontsize="23px" fontweight="400">
              1
            </TextSpan>
          </Links>
          <TextSpan fontsize="23px" marginleft="5px" fontweight="400">
            |
          </TextSpan>
          <Links>
            <TextSpan fontsize="23px" marginleft="5px" fontweight="400">
              2
            </TextSpan>
          </Links>
          <TextSpan fontsize="23px" marginleft="5px" fontweight="400">
            |
          </TextSpan>
          <Links>
            <TextSpan fontsize="23px" marginleft="5px" fontweight="400">
              3
            </TextSpan>
          </Links>
          <TextSpan fontsize="23px" marginleft="5px" fontweight="400">
            |
          </TextSpan>
          <Links>
            <TextSpan fontsize="23px" marginleft="5px" fontweight="400">
              4
            </TextSpan>
          </Links>
          <TextSpan fontsize="23px" marginleft="5px" fontweight="400">
            |
          </TextSpan>
          <Links>
            <TextSpan fontsize="23px" marginleft="5px" fontweight="400">
              5
            </TextSpan>
          </Links>
          <Links>
            <TextSpan fontsize="23px" marginleft="10px">
              &gt;
            </TextSpan>
          </Links>
        </PostNumberDiv>

        {/* footer 구분 선 */}
        <BoldLine></BoldLine>

        {/* footer 영역 */}
        <Footer></Footer>
      </BodyDiv>
    </Div>
  );
}
