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
  HeartImgScript,
  HeartCountScript,
} from '../styles/main/main-style-component.jsx';

import Logo from '../images/Logo.svg';
import Searchsvg from '../images/MainPage/Search.svg';
import NewsImage from '../images/MainPage/News.svg';
import HeartImage from '../images/MainPage/Heart.svg';
import ScriptImage from '../images/MainPage/Script.svg';
import Header from '../components/Header.jsx';
import NewsPost from '../components/NewsletterPost.jsx';

export default function MainPage(props) {
  return (
    <Div>
      <BodyDiv>
        {/* 네비게이션바 */}
        <Header></Header>

        {/* 구독 헤더 */}
        <HeaderDiv>
          <ExplainDiv>
            <TitleSpan>오늘의 최신 기사를 가장 빠르게</TitleSpan>
            <TextSpan>매일 야구 기사를 메일로 보내드립니다.</TextSpan>
            <TextSpan>무료 야구 뉴스를 받아보세요!</TextSpan>
          </ExplainDiv>
          <SubscribeDiv>
            <Form>
              <SubscribeInput
                type="email"
                placeholder="이메일"
              ></SubscribeInput>
              <SubscribeInput type="text" placeholder="닉네임"></SubscribeInput>

              <ButtonDiv>
                <Button value="뉴스레터 신청하기" type="submit" />
                <Button value="가입 먼저하기" type="submit" />
              </ButtonDiv>
            </Form>

            {/* 정보동의 */}
            <SmallTextSpan>구독 시, </SmallTextSpan>
            <Links>
              <PersonalInformationSpan>
                정보성 수신 어쩌구
              </PersonalInformationSpan>
            </Links>
            <SmallTextSpan>에 동의하게 됩니다.</SmallTextSpan>
          </SubscribeDiv>
        </HeaderDiv>

        {/* 검색창 */}
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
                value="목록"
                type="button"
                backgroundcolor="#588539"
              />
              <RangeButton
                value="목록"
                type="button"
                backgroundcolor="#FAF3E5"
              />
            </RangeWapperDiv>
            <RangeButton value="목록" type="button" backgroundcolor="#CDDFAB" />
          </RangeCenterDiv>
        </RangeDiv>

        {/* 뉴스레터 게시물 */}
        <PostAllDiv>
          <PostDiv>
            <NewsPost></NewsPost>
            <NewsPost></NewsPost>
            <NewsPost></NewsPost>
            <NewsPost></NewsPost>
          </PostDiv>
        </PostAllDiv>
        <PostAllDiv>
          <PostDiv>
            <NewsPost></NewsPost>
            <PostWapperDiv></PostWapperDiv>
            <PostWapperDiv></PostWapperDiv>
            <PostWapperDiv></PostWapperDiv>
          </PostDiv>
        </PostAllDiv>
        <PostAllDiv>
          <PostDiv>
            <NewsPost></NewsPost>
            <PostWapperDiv></PostWapperDiv>
            <PostWapperDiv></PostWapperDiv>
            <PostWapperDiv></PostWapperDiv>
          </PostDiv>
        </PostAllDiv>
        {/* <PostAllDiv>
        <PostDiv>
          <NewsPost></NewsPost>
          <PostWapperDiv></PostWapperDiv>
          <PostWapperDiv></PostWapperDiv>
          <PostWapperDiv></PostWapperDiv>
        </PostDiv>
      </PostAllDiv> */}
      </BodyDiv>
    </Div>
  );
}
