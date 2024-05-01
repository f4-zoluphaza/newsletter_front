import React from 'react';
import {
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
  SubscribeInput,
  SmallTextSpan,
  ButtonDiv,
  Button,
  PersonalInformationSpan,
  SearchDiv,
  SearchBorderDiv,
  SearchInput,
  SearchButton,
  rangeButton,
} from '../styles/main/main-style-component.jsx';

import Logo from '../images/Logo.svg';
import Searchsvg from '../images/MainPage/Search.svg';
// import Searchpng from '../images/MainPage/SearchTest.png';
import Header from '../components/Header.jsx';

export default function MainPage(props) {
  return (
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
            <label for="Email">
              <SmallTextSpan>이메일</SmallTextSpan>
              <SubscribeInput
                id="Email"
                type="email"
                placeholder="ex) abcd@naver.com"
              ></SubscribeInput>
            </label>
            <label for="Nickname">
              <SmallTextSpan>닉네임</SmallTextSpan>
              <SubscribeInput id="Nickname" type="text"></SubscribeInput>
            </label>
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
          <label for="search">
            <SearchButton id="search" type="button" />
          </label>
        </SearchBorderDiv>
      </SearchDiv>

      {/* 정렬 */}
      <SearchDiv>
        <rangeButton id="search" type="button" />
      </SearchDiv>
    </BodyDiv>
  );
}
