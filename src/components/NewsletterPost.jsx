import React from 'react';
import {
  PostWapperDiv,
  NewsImg,
  NewsTitleDiv,
  Line,
  NewsDateDiv,
  HeartSaveDiv,
  HeartImgScrap,
  HeartCountScrap,
} from '../styles/main/main-style-component.jsx';

import NewsImage from '../images/MainPage/News.svg';
import HeartImage from '../images/MainPage/Heart.svg';
import ScraptImage from '../images/MainPage/Scrapt.svg';

export default function NewsletterPost() {
  return (
    <PostWapperDiv>
      <NewsImg src={NewsImage} />
      <NewsTitleDiv>한화 또 져... 팬들 실망이 크다.</NewsTitleDiv>
      <Line />
      <NewsDateDiv>24.04.12</NewsDateDiv>
      <HeartSaveDiv>
        <HeartImgScrap src={HeartImage} />
        <HeartCountScrap>10</HeartCountScrap>
        <HeartImgScrap src={ScraptImage} />
        <HeartCountScrap>10</HeartCountScrap>
      </HeartSaveDiv>
    </PostWapperDiv>
  );
}
