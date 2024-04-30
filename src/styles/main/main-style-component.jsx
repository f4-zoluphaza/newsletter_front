import styled from 'styled-components';
import { Link } from 'react-router-dom';

const flexCenter = () => `
  display: flex;
  justify-content: center;
`;

export const BodyDiv = styled.div`
  height: 100vh;
  /* background-color: beige; */
`;
export const NavDiv = styled.div`
  width: 1300px;
  height: 116px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 110px;
  margin-right: 110px;
  /* color: black; */
  /* background-color: skyblue; */
`;

export const LogoImg = styled.img`
  width: 148px;
  height: 116px;
`;

export const WrapperDiv = styled.div`
  width: 130px;
  height: 30px;
  color: black;
  ${flexCenter()}/* background-color: pink; */
`;

export const LoginLinkSignupP = styled.p`
  color: black;
  font-size: 22px;
  margin: 3px;

  cursor: pointer;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const HeaderDiv = styled.div`
  width: 1115px;
  height: 211px;
  margin-left: 185px;
  margin-right: 180px;
  ${flexCenter()}
  background-color: beige;
`;

export const ExplainDiv = styled.div`
  width: 555px;
  height: 107px;
  color: black;
  margin-left: 190px;
  margin-right: 190px;
  margin-top: 20px;
  background-color: blue;
`;
