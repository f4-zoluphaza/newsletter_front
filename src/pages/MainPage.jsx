import React, { useState, useEffect } from 'react';
import api from '../api/api.js';

import { useParams } from 'react-router-dom';

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
} from '../styles/main/main-style-component.jsx';

import Searchsvg from '../images/MainPage/Search.svg';
import Header from '../components/Header.jsx';
import NewsletterPost from '../components/NewsletterPost.jsx';
import Footer from '../components/main/Footer.jsx';
import Pagination from '../components/Pagination.jsx';

export default function MainPage(props) {
  //form 관리
  const [form, setForm] = useState({
    nickName: '',
    email: '',
  });

  const [validNickName, setValidNickName] = useState(null);
  const [paginationNum, setPaginationNum] = useState(1);
  const [searchString, setSearchString] = useState('latest');
  const [sortChoice, setSortChoice] = useState();
  const [totalPages, setTotalPages] = useState();
  const [data, setData] = useState({});

  const { id } = useParams();

  // 쿠키 설정 함수
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(';').shift(); // 쿠키 값 반환
    }
    return null; // 쿠키가 없으면 null 반환
  }

  // 화면 새로고침 막는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 뉴스레터 구독하기 함수
  const subscribeAPI = async () => {
    try {
      //API 요청 URL
      const url = 'api/v1/subscribe';

      const data = {
        email: form.email,
        nickname: form.nickName,
      };
      // console.log(form.email);
      // console.log(form.nickName);

      const response = await api.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data.result);

      alert('뉴스레터 신청 완료!');
    } catch (error) {
      console.error(
        '이메일 중복 확인 에러',
        error.response ? error.response.data : error
      );
      //이메일 중복일 때
      alert('사용 불가능한 이메일입니다.');
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

  // 뉴스 리스트 불러오기 api 함수
  const newsmainPageAPI = async () => {
    try {
      //API 요청 URL
      const url = `api/v1/news?page=${paginationNum}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await api.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
        },
      });

      console.log(response.data.items);

      const result = response.data.items;
      setData(result);
      const totalPages = response.data.totalPages;
      setTotalPages(totalPages);
    } catch (error) {
      console.error(
        'mainPage 뉴스 리스트 불러오기 에러',
        error.response ? error.response.data : error
      );
    }
  };

  useEffect(() => {
    newsmainPageAPI();
  }, [paginationNum]);

  useEffect(() => {
    const cookieSortChoice = getCookie("sortChoice"); // 쿠키에서 값을 읽어옴
    if (cookieSortChoice) {
      setSortChoice(cookieSortChoice); // 쿠키 값이 있으면 그 값으로 설정
    } else {
      setSortChoice("latest"); // 쿠키 값이 없으면 기본 값인 "최신순"으로 설정
      setCookie("sortChoice", "latest", 0); // "최신순"을 쿠키에 저장 (7일 유지)
    }
  }, []); // 컴포넌트가 처음 로드될 때만 실행
  
  useEffect(() => {
    if (sortChoice) {
      setCookie("sortChoice", sortChoice, 0); // 쿠키에 7일 동안 유지되도록 저장
    }
  }, [sortChoice]);

  // 검색창 api 함수
  const searchAPI = async () => {
    try {
      //API 요청 URL
      const url = `api/v1/news?searchTerm=${searchString}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await api.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
        },
      });

      console.log(response.data.items);

      const result = response.data.items;
      setData(result);
      setTotalPages(response.data.totalPages); // 총 페이지 수 업데이트
    } catch (error) {
      console.error(
        'mainPage 검색창 에러',
        error.response ? error.response.data : error
      );
    }
  };

  // 정렬 api 함수
  const sortAPI = async (sortChoice) => {
    try {
      //API 요청 URL
      const url = `api/v1/news?sortType=${sortChoice}`;

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await api.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
        },
      });

      console.log(response.data.items);

      const result = response.data.items;
      setData(result);
      setTotalPages(response.data.totalPages); // 총 페이지 수 업데이트
    } catch (error) {
      console.error(
        'mainPage 정렬 에러',
        error.response ? error.response.data : error
      );
    }
  };

  // 버튼 클릭 시 최신순/인기순 토글 및 API 호출
  const handleSortToggle = () => {
    const newSortChoice = sortChoice === 'latest' ? 'popular' : 'latest';
    setSortChoice(newSortChoice);
    sortAPI(newSortChoice); // 토글된 값으로 API 호출
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
            <SearchInput
              type="text"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              // onChange={handleInputChange} // 검색어 변경 시 호출
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  searchAPI();
                }
              }}
            ></SearchInput>
            <SearchImg
              id="search"
              src={Searchsvg}
              onClick={() => {
                searchAPI();
              }}
            />
          </SearchBorderDiv>
        </SearchDiv>

        {/* 정렬 */}
        <RangeDiv>
          <RangeCenterDiv>
            <RangeButton
              value={sortChoice === 'latest' ? '최신순' : '인기순'}
              type="button"
              onClick={handleSortToggle}
              backgroundcolor="#CDDFAB"
            >
              {/* {sortChoice === 'latest' ? '최신순' : '인기순'} */}
            </RangeButton>
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
                  likeCount={item.likeCount}
                  scrapCount={item.scrapCount}
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
