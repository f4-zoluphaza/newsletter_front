import React, { useState, useEffect } from "react";
import axios from "axios";
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
  TitleLinks,
  TitleBox,
  DateBox,
  CheckImg,
  DeleteBt,
  DeleteDiv,
} from "../../styles/adminPage/Admin.styled.jsx";

import Searchsvg from "../../images/MainPage/Search.svg";
import emptyCheck from "../../images/AdminPage/emptyCheck.svg";
import fullCheck from "../../images/AdminPage/fullCheck.svg";

export default function Admin() {
  const [checkStates, setCheckStates] = useState(Array(10).fill(false));
  const [Data, setData] = useState([]);

  const data = [
    ,
    { id: 2, title: "키움, 개막 5연패 달성", date: "2024.03.27" },
    { id: 3, title: "키움, 개막 6연패 달성", date: "2024.03.28" },
    { id: 4, title: "키움, 개막 7연패 달성", date: "2024.03.29" },
    { id: 5, title: "키움, 개막 8연패 달성", date: "2024.03.30" },
    { id: 6, title: "키움, 개막 9연패 달성", date: "2024.03.31" },
    { id: 7, title: "키움, 개막 10연패 달성", date: "2024.04.01" },
    { id: 8, title: "키움, 개막 11연패 달성", date: "2024.04.02" },
    { id: 9, title: "키움, 개막 12연패 달성", date: "2024.04.03" },
    { id: 10, title: "키움, 개막 13연패 달성", date: "2024.04.04" },
  ];

  // 체크박스의 상테를 개별적으로 업데이트하는 함수
  const handleCheckToggle = (index) => {
    const newCheckStates = [...checkStates];
    newCheckStates[index] = !newCheckStates[index];
    if (index === 0) {
      for (var i = 1; i < 11; i++) {
        newCheckStates[i] = newCheckStates[0];
      }
    }
    setCheckStates(newCheckStates);
  };

  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const handleAdminPageMainApi = async () => {
    try {
      //API 요청 URL
      const url = `https://humble-commonly-goshawk.ngrok-free.app/api/v1/admin?page=2`;

      // 쿠키에서 'jwtToken' 값을 가져옴
      const token = getCookie("jwtToken");

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "69420",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data.items);
      setData(response.data.items);
    } catch (error) {
      console.error(
        "adminPage 메인 api 에러",
        error.response ? error.response.data : error
      );
    }
  };

  useEffect(() => {
    handleAdminPageMainApi();
  }, []);

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
            <EachBox>
              <CheckBox>
                <CheckImg
                  src={checkStates[0] ? fullCheck : emptyCheck}
                  onClick={() => handleCheckToggle(0)}
                />
              </CheckBox>
              <NumBox color="black" fontWeight="600">
                번호
              </NumBox>
              <TitleLinks>
                <TitleBox justifycontent="center">제목</TitleBox>
              </TitleLinks>

              <DateBox color="black" fontWeight="600">
                생성일
              </DateBox>
              <DateBox color="black" fontWeight="600" borderLeft="0px">
                발행일
              </DateBox>
            </EachBox>

            {Data.map((item, index) => (
              <EachBox key={item.id}>
                <CheckBox>
                  <CheckImg
                    src={checkStates[index + 1] ? fullCheck : emptyCheck}
                    onClick={() => handleCheckToggle(index + 1)}
                  />
                </CheckBox>
                <NumBox>{item.id}</NumBox>
                <TitleLinks to={`/Admin/${item.id}`}>
                  <TitleBox>{item.title}</TitleBox>
                </TitleLinks>
                <DateBox>{item.createDate}</DateBox>
                <DateBox borderLeft="0">{item.publishDate}</DateBox>
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
