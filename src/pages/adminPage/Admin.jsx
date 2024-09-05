import React, { useState } from "react";
import Header from "../../components/Header";
import {
  Div,
  BodyDiv,
  SearchDiv,
  SearchBorderDiv,
  SearchInput,
  SearchImg,
  PostNumberDiv,
  Links,
  TextSpan,
} from "../../styles/main/main-style-component.jsx";
import {
  WrapperDiv,
  WrapperBox,
  EachBox,
  CheckBox,
  NumBox,
  TitleBox,
  DateBox,
  CheckImg,
  DeleteBt,
  DeleteDiv
} from "../../styles/adminPage/Admin.styled.jsx";

import Searchsvg from "../../images/MainPage/Search.svg";
import emptyCheck from "../../images/AdminPage/emptyCheck.svg";
import fullCheck from "../../images/AdminPage/fullCheck.svg";

export default function Admin() {
  const [validCheck, setValidCheck] = useState(false);

  const data = [,
    { id: 2, title: "키움, 개막 5연패 달성", date: "2024.03.27" },
    { id: 3, title: "키움, 개막 6연패 달성", date: "2024.03.28" },
    { id: 4, title: "키움, 개막 7연패 달성", date: "2024.03.29" },
    { id: 5, title: "키움, 개막 8연패 달성", date: "2024.03.30" },
    { id: 6, title: "키움, 개막 9연패 달성", date: "2024.03.31" },
    { id: 7, title: "키움, 개막 10연패 달성", date: "2024.04.01" },
    { id: 8, title: "키움, 개막 11연패 달성", date: "2024.04.02" },
    { id: 9, title: "키움, 개막 12연패 달성", date: "2024.04.03" },
    { id: 10, title: "키움, 개막 13연패 달성", date: "2024.04.04" }
  ];

  return (
    <Div>
      <BodyDiv>
          <Header />

        {/* 검색 창 */}
        <SearchDiv>
          <SearchBorderDiv width="900px">
            <SearchInput type="text" width="800px"></SearchInput>
            <SearchImg id="search" src={Searchsvg} />
          </SearchBorderDiv>
        </SearchDiv>

        <DeleteDiv>
          <DeleteBt>삭제</DeleteBt>
          <DeleteBt>발행</DeleteBt>
        </DeleteDiv>
        
        <WrapperDiv>

          <WrapperBox>
          {/* <EachBox>
            <CheckBox>
              {validCheck && true ? (
                <CheckImg
                  src={fullCheck}
                  onClick={() => {
                    setValidCheck(!validCheck);
                  }}
                />
              ) : (
                <CheckImg
                  src={emptyCheck}
                  onClick={() => {
                    setValidCheck(!validCheck);
                  }}
                />
              )}
            </CheckBox>
            <NumBox>1</NumBox>
            <TitleBox>키움, 개막 4연패 달성</TitleBox>
            <DateBox>2024.03.26</DateBox>
            <DateBox>2024.03.26</DateBox>

          </EachBox> */}

          <EachBox>
            <CheckBox>
              {validCheck && true ? (
                <CheckImg
                  src={fullCheck}
                  onClick={() => {
                    setValidCheck(!validCheck);
                  }}
                />
              ) : (
                <CheckImg
                  src={emptyCheck}
                  onClick={() => {
                    setValidCheck(!validCheck);
                  }}
                />
              )}
            </CheckBox>
            <NumBox color="black" fontWeight="600">번호</NumBox>
            <TitleBox justifycontent="center">제목</TitleBox>
            <DateBox color="black" fontWeight="600">생성일</DateBox>
            <DateBox color="black" fontWeight="600">발행일</DateBox>

          </EachBox> 

{data.map((item) => (
        <EachBox key={item.id}>
          <CheckBox>
            {validCheck && true ? (
              <CheckImg
                src={fullCheck}
                onClick={() => {
                  setValidCheck(!validCheck);
                }}
              />
            ) : (
              <CheckImg
                src={emptyCheck}
                onClick={() => {
                  setValidCheck(!validCheck);
                }}
              />
            )}
          </CheckBox>
          <NumBox>{item.id}</NumBox>
          <TitleBox>{item.title}</TitleBox>
          <DateBox>{item.date}</DateBox>
          <DateBox>{item.date}</DateBox>
        </EachBox>
      ))}

        
        </WrapperBox>
        </WrapperDiv>
        

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
    </Div>
  );
}
