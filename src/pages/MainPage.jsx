import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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
  SearchDiv,
  SearchBorderDiv,
  SearchInput,
  SearchImg,
  RangeDiv,
  RangeCenterDiv,
  RangeWapperDiv,
  RangeButton,
  PostAllDiv,
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
} from "../styles/main/main-style-component.jsx";

import Logo from "../images/Logo.svg";
import Searchsvg from "../images/MainPage/Search.svg";
import NewsImage from "../images/MainPage/News.svg";
import Header from "../components/Header.jsx";
import NewsletterPost from "../components/NewsletterPost.jsx";
import Footer from "../components/main/Footer.jsx";
import Pagination from "../components/Pagination.jsx";

export default function MainPage(props) {
  //form 관리
  const [form, setForm] = useState({
    nickName: "",
    email: "",
  });

  const [validEmailDuplicate, setValidEmailDuplicate] = useState(null);
  const [validNickName, setValidNickName] = useState(null);
  const [paginationNum, setPaginationNum] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [data, setData] = useState({});

  const { id } = useParams();

  // 화면 새로고침 막는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 뉴스레터 구독하기 함수
  const subscribeAPI = async () => {
    try {
      //API 요청 URL
      const url =
        "https://humble-commonly-goshawk.ngrok-free.app/api/v1/subscribe";

      const data = {
        email: form.email,
        nickname: form.nickName,
      };
      // console.log(form.email);
      // console.log(form.nickName);

      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data.result);

      alert("뉴스레터 신청 완료!");
    } catch (error) {
      console.error(
        "이메일 중복 확인 에러",
        error.response ? error.response.data : error
      );
      //이메일 중복일 때
      alert("사용 불가능한 이메일입니다.");
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

    if (nickName.trim() === "") {
      setValidNickName(null);
    }

    // console.log(nickName);
  };

  // 뉴스 리스트 불러오기 api 함수
  const newsmainPageAPI = async () => {
    try {
      //API 요청 URL
      const url = `https://humble-commonly-goshawk.ngrok-free.app/api/v1/news?page=${paginationNum}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
        },
      });

      console.log(response.data.items);

      const result = response.data.items;
      setData(result);
      const totalPages = response.data.totalPages;
      setTotalPages(totalPages);
    } catch (error) {
      console.error(
        "mainPage 뉴스 리스트 불러오기 에러",
        error.response ? error.response.data : error
      );
    }
  };

  useEffect(() => {
    newsmainPageAPI();
  }, [paginationNum]);

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
                <Links to="/Signup">
                  <Button value="가입 먼저하기" type="submit" />
                </Links>
              </ButtonDiv>
            </Form>
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
            {/* <RangeWapperDiv>
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
            </RangeWapperDiv> */}
            <RangeButton
              value="인기순"
              type="button"
              backgroundcolor="#CDDFAB"
            />
          </RangeCenterDiv>
        </RangeDiv>

        {/* 뉴스레터 게시물 */}
        <PostAllDiv>
          {data.length > 0 &&
            data.map((item, index) => (
              <Links
                to={{
                  pathname: `/detailPage/${item.id}`,
                }}
              >
                <NewsletterPost
                  key={item.id}
                  title={item.title}
                  content={item.content}
                  publishDate={item.publishDate}
                  thumbnail={item.thumbnail}
                ></NewsletterPost>
              </Links>
            ))}
        </PostAllDiv>

        {/* 게시물 페이지 번호 */}
        <Pagination
          totalPage={totalPages}
          setPaginationNum={setPaginationNum}
        />

        {/* footer 구분 선 */}
        <BoldLine></BoldLine>

        {/* footer 영역 */}
        <Footer></Footer>
      </BodyDiv>
    </Div>
  );
}
