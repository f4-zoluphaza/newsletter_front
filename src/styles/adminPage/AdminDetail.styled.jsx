import styled from "styled-components";
import { Link } from "react-router-dom";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 80%;
  height: 800px;
  margin: 20px auto;

  /* background-color: beige; */
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid black;
  box-sizing: border-box;
`;

export const TextareaWrapper = styled.div`
  width: 100%;
  height: 70%;
  ${flexCenter()}
  justify-content: space-between;
  /* margin-bottom: 10px; */

  /* background-color: pink; */
`;
export const TextareaDiv = styled.div`
  width: 30%;
  height: 95%;

  /* border: 1px solid black;
    box-sizing: border-box;
    resize: none; */

  /* background-color: azure; */
`;
export const Textarea = styled.textarea`
  width: 100%;
  height: 95%;

  box-sizing: border-box;
  resize: none;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  height: 40px;
  ${flexCenter()}
  justify-content: end;

  margin: 10px 0;

  /* background-color: aquamarine; */
`;

export const Button = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 10px;
  border: 0;

  margin-left: 15px;

  background-color: ${(props) => props.backgroundColor || "#C0C0C0"};
  color: #ffffff;

  cursor: pointer;
`;

export const Links = styled(Link)`
  text-decoration: none;
`;
