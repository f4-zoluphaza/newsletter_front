import styled from "styled-components";
import { Link } from "react-router-dom";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyDiv = styled.div`
  width: 100vw;
  height: 70vh;

  display: flex;
  justify-content: center;
  margin-top: 70px;

  /* background-color: bisque; */
`

// 전체 레이아웃
export const LeftDiv = styled.div`
  width: 36%;
  height: 100%;

  /* background-color: #cacaf3; */
`

export const RightDiv = styled.div`
  width: 50%;
  height: 100%;

  background-color: #f5d5d5;
`

// 메인 p

export const MainWrapper = styled.div`
  width: 95%;
  height: auto;

  border-bottom: ${(props) => props.borderBottom};

  padding: 15px 0 10px 0;
  box-sizing: border-box;

  /* background-color: #ffff45; */
`

export const MainPDiv = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  margin-top: ${(props) => props.marginTop || "0"};

  /* background-color: aqua; */
`

export const MainP = styled.div`
  color: ${(props) => props.color || "#000000"};
  font-size: ${(props) => props.fontSize || "36px"};
  font-weight: ${(props) => props.fontWeight || "500"};

  margin-right: ${(props) => props.marginRight || "10px"};
  margin-bottom: ${(props) => props.marginBottom};
  margin: ${(props) => props.margin}; 

  cursor: ${(props) => props.cursor}; ;

`

// 등급 자세히 보기
export const Links = styled(Link)`
  text-decoration: none;
  /* color: #424242; */
  /* font-size: 20px; */
  /* font-weight: 600; */

  display: block;
  /* margin: 20px 0; */
`;
