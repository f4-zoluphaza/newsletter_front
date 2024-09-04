import React from "react";
import Header from "../../components/Header";
import { BodyDiv } from "../../styles/Mypage_s/Attendance.styled";
import {
  SearchDiv,
  SearchBorderDiv,
  SearchInput,
  SearchImg,
  PostNumberDiv,
  Links,
  TextSpan,
} from "../../styles/main/main-style-component.jsx";
import {
  WrapperBox,
  EachBox,
  CheckBox,
  NumBox,
  TitleBox,
  DateBox,
  CheckImg,
} from "../../styles/adminPage/Admin.styled.jsx";

import Searchsvg from "../../images/MainPage/Search.svg";
import emptyCheck from "../../images/AdminPage/emptyCheck.svg";
import fullCheck from "../../images/AdminPage/fullCheck.svg";

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

        <WrapperBox>
          <EachBox>
            <CheckBox>
              <CheckImg src={emptyCheck} />
            </CheckBox>
            <NumBox>1</NumBox>
            <TitleBox>키움, 개막 4연패 달성</TitleBox>
            <DateBox>2024.03.26</DateBox>
          </EachBox>

          <EachBox>
            <CheckBox>
              <CheckImg src={emptyCheck} />
            </CheckBox>
            <NumBox>1</NumBox>
            <TitleBox>키움, 개막 4연패 달성</TitleBox>
            <DateBox>2024.03.26</DateBox>
          </EachBox>
          <EachBox>
            <CheckBox>
              <CheckImg src={emptyCheck} />
            </CheckBox>
            <NumBox>1</NumBox>
            <TitleBox>키움, 개막 4연패 달성</TitleBox>
            <DateBox>2024.03.26</DateBox>
          </EachBox>
          <EachBox>
            <CheckBox>
              <CheckImg src={emptyCheck} />
            </CheckBox>
            <NumBox>1</NumBox>
            <TitleBox>키움, 개막 4연패 달성</TitleBox>
            <DateBox>2024.03.26</DateBox>
          </EachBox>
          <EachBox>
            <CheckBox>
              <CheckImg src={emptyCheck} />
            </CheckBox>
            <NumBox>1</NumBox>
            <TitleBox>키움, 개막 4연패 달성</TitleBox>
            <DateBox>2024.03.26</DateBox>
          </EachBox>
          <EachBox>
            <CheckBox>
              <CheckImg src={emptyCheck} />
            </CheckBox>
            <NumBox>1</NumBox>
            <TitleBox>키움, 개막 4연패 달성</TitleBox>
            <DateBox>2024.03.26</DateBox>
          </EachBox>
          <EachBox>
            <CheckBox>
              <CheckImg src={emptyCheck} />
            </CheckBox>
            <NumBox>1</NumBox>
            <TitleBox>키움, 개막 4연패 달성</TitleBox>
            <DateBox>2024.03.26</DateBox>
          </EachBox>
          <EachBox>
            <CheckBox>
              <CheckImg src={emptyCheck} />
            </CheckBox>
            <NumBox>1</NumBox>
            <TitleBox>키움, 개막 4연패 달성</TitleBox>
            <DateBox>2024.03.26</DateBox>
          </EachBox>
          <EachBox>
            <CheckBox>
              <CheckImg src={emptyCheck} />
            </CheckBox>
            <NumBox>1</NumBox>
            <TitleBox>키움, 개막 4연패 달성</TitleBox>
            <DateBox>2024.03.26</DateBox>
          </EachBox>
          <EachBox>
            <CheckBox>
              <CheckImg src={emptyCheck} />
            </CheckBox>
            <NumBox>1</NumBox>
            <TitleBox>키움, 개막 4연패 달성</TitleBox>
            <DateBox>2024.03.26</DateBox>
          </EachBox>
        </WrapperBox>

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
      </BodyDiv>
    </div>
  );
}
