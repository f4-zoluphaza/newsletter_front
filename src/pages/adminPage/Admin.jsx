import React from "react";
import Header from "../../components/Header";
import { BodyDiv } from "../../styles/Mypage_s/Attendance.styled";
import {
  SearchDiv,
  SearchBorderDiv,
  SearchInput,
  SearchImg,
} from "../../styles/main/main-style-component.jsx";

import Searchsvg from "../../images/MainPage/Search.svg";

export default function Admin() {
  return (
    <div>
      <BodyDiv>
        <div style={{ width: "90vw" }}>
          <Header />
        </div>

        {/* 검색 창 */}
        <SearchDiv>
          <SearchBorderDiv width="900px">
            <SearchInput type="text" width="800px"></SearchInput>
            <SearchImg id="search" src={Searchsvg} />
          </SearchBorderDiv>
        </SearchDiv>
      </BodyDiv>
    </div>
  );
}
