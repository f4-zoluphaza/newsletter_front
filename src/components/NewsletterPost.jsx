import React, { useState } from 'react';
import api from '../api/api.js'
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

export default function NewsletterPost({ title, content, publishDate, thumbnail, heartCount, scrapCount }) {
  return (
    <PostWapperDiv>
      <NewsImg src={api.defaults.imgBaseURL + thumbnail} />
      <NewsTitleDiv>{title}</NewsTitleDiv>
      <Line />
      <NewsDateDiv>{publishDate}</NewsDateDiv>
      <HeartSaveDiv>
        <HeartImgScrap src={HeartImage} />
        <HeartCountScrap>10</HeartCountScrap>
        <HeartImgScrap src={ScraptImage} />
        <HeartCountScrap>10</HeartCountScrap>
      </HeartSaveDiv>
    </PostWapperDiv>
  );
}
