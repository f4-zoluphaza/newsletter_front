import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Div, BodyDiv } from "../../styles/main/main-style-component.jsx";
import {
  Form,
  Label,
  Input,
  Textarea,
  TextareaWrapper,
  TextareaDiv,
  Button,
  ButtonDiv,
  Links,
} from "../../styles/adminPage/AdminDetail.styled";

export default function Admin() {
  const [validCheck, setValidCheck] = useState(false);
  const [data, setData] = useState({
    title: "",
    link: "",
    original: "",
    fiveW1H: "",
    content: "",
  });

  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // console.log(name, value);
  };

  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  const handleAdminDetailApi = async () => {
    try {
      //API 요청 URL
      const url = `https://humble-commonly-goshawk.ngrok-free.app/api/v1/admin/${id}`;

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
      setData({
        title: response.data.items[0].title,
        link: response.data.items[0].link,
        original: response.data.items[0].source,
        fiveW1H: response.data.items[0].five_w_one_h,
        content: response.data.items[0].content,
      });
    } catch (error) {
      console.error(
        "adminPage 메인 api 에러",
        error.response ? error.response.data : error
      );
    }
  };

  useEffect(() => {
    handleAdminDetailApi();
  }, []);
  return (
    <Div>
      <BodyDiv>
        <Header />

        <Form>
          <Label for="title">제목</Label>
          <Input
            type="textarea"
            id="title"
            name="title"
            required
            value={data.title}
            onChange={handleChange}
          />

          <Label for="link">링크</Label>
          <Input
            type="textarea"
            id="link"
            name="link"
            value={data.link}
            readOnly
          />

          <TextareaWrapper>
            <TextareaDiv>
              <Label for="original">원본</Label>
              <Textarea
                id="original"
                name="original"
                value={data.original}
                readOnly
              ></Textarea>
            </TextareaDiv>

            <TextareaDiv>
              <Label for="fiveW1H">육하원칙</Label>
              <Textarea
                id="fiveW1H"
                name="fiveW1H"
                value={data.fiveW1H}
                readOnly
              ></Textarea>
            </TextareaDiv>

            <TextareaDiv>
              <Label for="content">내용</Label>
              <Textarea
                id="content"
                name="content"
                value={data.content}
                onChange={handleChange}
              ></Textarea>
            </TextareaDiv>
          </TextareaWrapper>

          <ButtonDiv>
            <Links to="/Admin">
              <Button type="button">취소</Button>
            </Links>

            <Button type="submit" backgroundColor="#588539">
              발행
            </Button>

            <Button type="submit" backgroundColor="#588539">
              저장
            </Button>
          </ButtonDiv>
        </Form>
      </BodyDiv>
    </Div>
  );
}
