import React from 'react';
import {
    PostWapperDiv,
    NewsImg,
    NewsTitleDiv,
    Line,
    NewsDateDiv,
    HeartSaveDiv,
    HeartImgScript,
    HeartCountScript
} from '../styles/main/main-style-component.jsx';

import NewsImage from "../images/MainPage/News.svg"
import HeartImage from "../images/MainPage/Heart.svg"
import ScriptImage from "../images/MainPage/Script.svg"

export default function Header() {
    return (
        <PostWapperDiv>
            <NewsImg src={NewsImage} />
            <NewsTitleDiv>한화 또 져... 팬들 실망이 크다.</NewsTitleDiv>
            <Line />
            <NewsDateDiv>24.04.12</NewsDateDiv>
            <HeartSaveDiv>
                <HeartImgScript src={HeartImage}/>
                <HeartCountScript>10</HeartCountScript>
                <HeartImgScript src={ScriptImage}/>
                <HeartCountScript>10</HeartCountScript>
            </HeartSaveDiv>
        </PostWapperDiv>
    );
}