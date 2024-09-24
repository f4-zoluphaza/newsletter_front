import React, { useState, useEffect } from 'react';
import api from '../../api/api.js';

import { useParams } from 'react-router-dom';

import {
  TitleDiv,
  Textspan,
  PostAllDiv,
} from '../../styles/Mypage_j/ScrapPage.styled.jsx';

import {
  Div,
  BodyDiv,
  Links,
} from '../../styles/main/main-style-component.jsx';

import Header from '../../components/Header.jsx';
import NewsletterPost from '../../components/NewsletterPost.jsx';

export default function Scrap() {
  const [data, setData] = useState({});

  const { id } = useParams();

  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  // 스크랩한 뉴스 목록 불러오기 api 함수
  const scrappedNewsAPI = async () => {
    try {
      const url = `api/v1/news/scrapped`;

      // 쿠키에서 'jwtToken' 값을 가져옴
      const token = getCookie('jwtToken');

      const response = await api.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data.items);

      const result = response.data.items;
      setData(result);
    } catch (error) {
      console.error(
        '스크랩한 뉴스 목록 불러오기 에러',
        error.response ? error.response.data : error
      );
    }
  };

  useEffect(() => {
    scrappedNewsAPI();
  }, [id]);

  return (
    <Div>
      <BodyDiv>
        {/* 네비게이션바 */}
        <Header></Header>

        <TitleDiv>
          <Textspan>내 스크랩 목록</Textspan>
        </TitleDiv>

        {/* 스크랩한 뉴스 목록*/}
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
      </BodyDiv>
    </Div>
  );
}
