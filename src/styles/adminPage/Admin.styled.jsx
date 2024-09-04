import styled from "styled-components";
import { Link } from "react-router-dom";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperDiv = styled.div`
  width: 1220px;
  height: auto;
  background-color: beige;
`;

export const WrapperBox = styled.div`
  /* background-color: #96cdfc; */
  width: 80%;
  height: 60vh;
  border-top: 2px solid #588539;

  margin-bottom: 40px;
`;

export const EachBox = styled.div`
  /* background-color: darkgoldenrod; */
  width: 100%;
  height: 9.5%;
  border-bottom: 2px solid #588539;
  display: flex;
`;

export const CheckBox = styled.div`
  width: 4%;
  height: 100%;
  border-right: 2px solid #588539;
  border-left: 2px solid #588539;
  /* background-color: azure; */
  ${flexCenter()}
`;

export const NumBox = styled.div`
  width: 4%;
  height: 100%;
  border-right: 2px solid #588539;
  /* background-color: aquamarine; */
  color: #588539;
  font-size: 18px;
  ${flexCenter()};
`;

export const TitleBox = styled.div`
  width: 80%;
  height: 100%;
  border-right: 2px solid #588539;
  font-size: 20px;
  ${flexCenter()};
  justify-content: start;

  padding-left: 20px;
`;

export const DateBox = styled.div`
  width: 12%;
  height: 100%;
  border-right: 2px solid #588539;
  /* background-color: bisque; */
  color: #588539;
  font-size: 18px;
  ${flexCenter()};
`;

export const CheckImg = styled.img`
  width: 25px;
  height: 25px;

  cursor: pointer;
`;

export const DeleteDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
`
export const DeleteBt = styled.button`
  background-color: #ffffff;
  border: 0;

  margin: 10px;
  cursor: pointer;
`
