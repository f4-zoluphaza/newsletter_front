import React from 'react';
import {
  Div,
  BodyDiv,
  TitleDiv,
  Textspan,
  PostAllDiv,
  PostDiv,
} from '../../styles/Mypage_j/ScrapPage.styled.jsx';

import Header from '../../components/Header.jsx';
import NewsletterPost from '../../components/NewsletterPost.jsx';

export default function Scrap() {
  return (
    <Div>
      <BodyDiv>
        {/* 네비게이션바 */}
        <Header></Header>

        <TitleDiv>
          <Textspan>내 스크랩 목록</Textspan>
        </TitleDiv>

        {/* 스크랩 게시물 */}
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
            <NewsletterPost></NewsletterPost>
            <NewsletterPost></NewsletterPost>
            <NewsletterPost></NewsletterPost>
          </PostDiv>
        </PostAllDiv>

        {/* <PostAllDiv>
          <PostDiv>
            <NewsletterPost></NewsletterPost>
            <NewsletterPost></NewsletterPost>
            <NewsletterPost></NewsletterPost>
            <NewsletterPost></NewsletterPost>
          </PostDiv>
        </PostAllDiv> */}
      </BodyDiv>
    </Div>
  );
}
