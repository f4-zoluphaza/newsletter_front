import React, { useState } from 'react';
import axios from 'axios';
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
  PostNumberDiv,
  BoldLine,
  FooterDiv,
  MakerDivContact,
} from '../styles/main/main-style-component.jsx';

import Logo from '../images/Logo.svg';
import Searchsvg from '../images/MainPage/Search.svg';
import NewsImage from '../images/MainPage/News.svg';
import HeartImage from '../images/MainPage/Heart.svg';
import ScriptImage from '../images/MainPage/Script.svg';
import Header from '../components/Header.jsx';
import NewsletterPost from '../components/NewsletterPost.jsx';
import Footer from '../components/main/Footer.jsx';

export default function MainPage(props) {
  //form 관리
  const [form, setForm] = useState({
    nickName: '',
    email: '',
  });

  const [validEmailDuplicate, setValidEmailDuplicate] = useState(null);
  const [validNickName, setValidNickName] = useState(null);

  // 화면 새로고침 막는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 뉴스레터 신청하기 함수
  const subscribeAPI = async () => {
    try {
      //API 요청 URL
      const url =
        'https://humble-commonly-goshawk.ngrok-free.app/api/v1/subscribe';

      const data = {
        email: form.email,
        nickname: form.nickName,
      };
      console.log(form.email);
      console.log(form.nickName);

      const response = await axios.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data.result);

      // alert("사용 가능한 이메일입니다.");
    } catch (error) {
      console.error(
        '이메일 중복 확인 에러',
        error.response ? error.response.data : error
      );
      //오류났을때
      // alert("사용 불가능한 이메일입니다.");
    }
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setForm({ ...form, email });

    // if (email.trim() === "") {
    //   setValidEmail(null);
    // }
  };

  const handleNickNameChange = (e) => {
    const nickName = e.target.value;
    setForm({ ...form, nickName });

    if (nickName.trim() === '') {
      setValidNickName(null);
    }

    // console.log(nickName);
  };

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
            <Form onSubmit={handleSubmit}>
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
                  onChange={handleEmailChange}
                ></SubscribeInput>
              </Label>
              <Label>
                <TextSpan textalign="center" fontweight="600">
                  닉네임
                </TextSpan>
                <SubscribeInput
                  type="text"
                  onChange={handleNickNameChange}
                ></SubscribeInput>
              </Label>
              <ButtonDiv>
                <Button
                  value="뉴스레터 신청하기"
                  type="submit"
                  onClick={() => {
                    subscribeAPI();
                  }}
                />
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
