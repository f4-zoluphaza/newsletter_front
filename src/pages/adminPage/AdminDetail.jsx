import React, { useState } from "react";
import Header from "../../components/Header";
import { BodyDiv } from "../../styles/Mypage_s/Attendance.styled";
import {Form, Label, Input, Textarea, Button, ButtonDiv, Links} from "../../styles/adminPage/AdminDetail.styled"



export default function Admin() {
  const [validCheck, setValidCheck] = useState(false);
  return (
    <div>
      <BodyDiv>
        <div style={{ width: "90vw" }}>
          <Header />
        </div>

      <Form>
        <Label for="title">제목*</Label>
        <Input type="text" id="title" name="title" required></Input>

        <Label for="title">내용*</Label>
        <Textarea></Textarea>

        <ButtonDiv>
          <Links to="/Admin">
            <Button type="button">취소</Button>
          </Links>
          
          <Button type="submit" backgroundColor="#588539">저장</Button>
        </ButtonDiv>
        
      </Form>
      </BodyDiv>
    </div>
  );
}
