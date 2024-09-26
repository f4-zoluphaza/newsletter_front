import React, { useState } from "react";
import api from "../api/api.js";
import {
  PostWapperDiv,
  NewsImg,
  NewsTitleDiv,
  Line,
  NewsDateDiv,
  HeartSaveDiv,
  HeartImgScrap,
  HeartCountScrap,
} from "../styles/main/main-style-component.jsx";

import HeartImage from "../images/MainPage/Heart.svg";
import ScraptImage from "../images/MainPage/Scrapt.svg";

export default function NewsletterPost({
  title,
  publishDate,
  thumbnail,
  likeCount,
  scrapCount,
}) {
  return (
    <PostWapperDiv>
      <NewsImg src={api.defaults.imgBaseURL + thumbnail} />
      <NewsTitleDiv>{title}</NewsTitleDiv>
      <Line />
      <NewsDateDiv>{publishDate}</NewsDateDiv>
      <HeartSaveDiv>
        <HeartImgScrap src={HeartImage} />
        <HeartCountScrap>{likeCount}</HeartCountScrap>
        <HeartImgScrap src={ScraptImage} />
        <HeartCountScrap>{scrapCount}</HeartCountScrap>
      </HeartSaveDiv>
    </PostWapperDiv>
  );
}
