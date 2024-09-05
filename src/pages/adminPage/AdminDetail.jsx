import React, { useState } from "react";
import Header from "../../components/Header";
// import { BodyDiv } from "../../styles/Mypage_s/Attendance.styled";
import {
  Div,
  BodyDiv
} from "../../styles/main/main-style-component.jsx";
import {Form, Label, Input, Textarea, TextareaWrapper,TextareaDiv, FixTextarea, Button, ButtonDiv, Links} from "../../styles/adminPage/AdminDetail.styled"



export default function Admin() {
  const [validCheck, setValidCheck] = useState(false);
  return (
    <Div>
      <BodyDiv>
          <Header />

      <Form>
        <Label for="title">제목</Label>
        <Input type="text" id="title" name="title" required></Input>

        <Label for="title">링크</Label>
        <Input type="text" id="title" name="title" value=""></Input>

        <TextareaWrapper>
          <TextareaDiv>
              <Label for="title">원본</Label>
              <Textarea value=""></Textarea> 
          </TextareaDiv>

          <TextareaDiv>
              <Label for="title">육하원칙</Label>
              <Textarea value=""></Textarea> 
          </TextareaDiv>

          <TextareaDiv>
              <Label for="title">내용</Label>
              <Textarea></Textarea> 
          </TextareaDiv>

        </TextareaWrapper>
        
        <ButtonDiv>
          <Links to="/Admin">
            <Button type="button">취소</Button>
          </Links>

          <Button type="submit" backgroundColor="#588539">발행</Button>
          
          <Button type="submit" backgroundColor="#588539">저장</Button>
        </ButtonDiv>
        
      </Form>
      </BodyDiv>
    </Div>
  );
}
