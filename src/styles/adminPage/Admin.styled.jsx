import styled from "styled-components";
import { Link } from "react-router-dom";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  /* background-color: beige; */

  margin-bottom: 30px;
`;

export const WrapperBox = styled.div`
  /* background-color: #96cdfc; */
  width: 80%;
  height: 100%;
  border-top: 2px solid #588539;
`;

export const EachBox = styled.div`
  /* background-color: darkgoldenrod; */
  width: 100%;
  height: 8.5%;
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
  color: ${(props) => props.color || "#588539"};
  font-size: 18px;
  font-weight: ${(props) => props.fontWeight};
  ${flexCenter()};
`;

export const TitleLinks = styled(Link)`
  text-decoration: none;
  width: 80%;
  color: black;

  /* background-color: aliceblue; */
`;

export const TitleBox = styled.div`
  width: ${(props) => props.width || "100%"};
  height: 100%;
  font-size: 20px;
  font-weight: 600;
  ${flexCenter()};
  justify-content: ${(props) => props.justifycontent || "start"};

  padding-left: 20px;
  /* background-color: antiquewhite; */
`;

export const DateBox = styled.div`
  width: 12%;
  height: 100%;
  border-right: 2px solid #588539;
  border-left: ${(props) => props.borderLeft || "2px solid #588539"};
  color: ${(props) => props.color || "#588539"};
  font-weight: ${(props) => props.fontWeight};
  font-size: 18px;
  ${flexCenter()};

  /* background-color: bisque; */
`;

export const CheckImg = styled.img`
  width: 25px;
  height: 25px;

  cursor: pointer;
`;

export const DeleteDiv = styled.div`
  margin: auto;
  width: 80%;
  display: flex;
  justify-content: end;

  /* background-color: bisque; */
`;
export const DeleteBt = styled.button`
  font-size: 16px;
  background-color: #ffffff;
  border: 0;

  margin: 10px 0;
  cursor: pointer;
`;
