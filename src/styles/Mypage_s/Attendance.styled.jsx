import styled from "styled-components";
import { Link } from "react-router-dom";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const WrapperDiv = styled.div`
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

// 회원 탈퇴
export const BkackScreenDiv = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${flexCenter()}

  background-color: #4f4f4f75;
`

export const ModuleDiv = styled.div`
  width: 541px;
  height: ${(props) => props.height || "528px"};

  border-radius: 47px;
  background-color: #ffffff;
  /* background-color: azure; */

  padding: 70px 50px 50px 50px;
  padding-top: ${(props) => props.paddingTop};
  box-sizing: border-box;

  ${flexCenter()}
  flex-direction: column;
  align-items: start;
  justify-content: space-between;

  position: relative;
`

export const Ximg = styled.img`
  width: 45px;
  height: 45px;

  position: absolute;
  top: 20px;
  right: 25px;

  cursor: pointer;
`

export const Li = styled.li`
  font-size: 21px;
  color: #414141;
  font-weight: 600;

  list-style-position: outside; 
  text-indent: -1.4em;  
  padding-left: 1.4em;  
`

export const LiP = styled.span`
  color: #699BF7;
  text-decoration: underline;
`

export const ButtonDiv = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-around;

  /* margin-top: 30px; */

  /* background-color: #d3d3ff; */
`

export const Button = styled.button`
  width: 176px;
  height: 52px;

  background-color: ${(props) => props.backgroudColor || "#D9D9D9"};
  border-radius: 19px;
  border: 0px;

  font-size:19px;
  font-weight: 600;
  color: ${(props) => props.color};
  text-decoration: ${(props) => props.textDecoration};

  cursor: pointer;
`