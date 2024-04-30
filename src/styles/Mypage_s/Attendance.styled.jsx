import styled from "styled-components";
import { Link } from "react-router-dom";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 지아가 nav 공유하기 전 예비 NAV
export const Navdiv = styled.div`
  width: 100vh;
  height: 170px;
`

export const BodyDiv = styled.div`
  width: 100vw;
  height: 82vh;

  display: flex;
  justify-content: center;

  background-color: bisque;
`

// 전체 레이아웃
export const LeftDiv = styled.div`
  width: 36%;
  height: 100%;

  background-color: #cacaf3;
`

export const RightDiv = styled.div`
  width: 50%;
  height: 100%;

  background-color: #f5d5d5;
`

// 메인 p
export const MainPDiv = styled.div`
  width: auto;
  height: auto;

  display: flex;
  margin-top: ${(props) => props.marginTop || "0"};

  /* background-color: aqua; */
`

export const MainP = styled.div`
  color: ${(props) => props.color || "#000000"};
  font-size: ${(props) => props.fontSize || "36px"};
  font-weight: ${(props) => props.fontWeight || "500"};

  margin-right: ${(props) => props.marginRight || "10px"};
`

// 등급 자세히 보기
export const RankLink = styled(Link)`
  text-decoration: none;
  color: #424242;
  font-size: 20px;
  font-weight: 600;

  display: inline-block;
  margin: 15px 0;
`;