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
  width: 460px;
  height: 107px;
  color: black;
  margin-left: 90px;
  margin-right: 50px;
  margin-top: 60px;
  /* background-color: blue; */
  text-align: right;
`;

export const TitleSpan = styled.span`
  display: block;
  font-size: 30px;
  font-weight: bold;
`;

export const TextSpan = styled.span`
  display: block;
  font-size: 20px;
`;

export const SubscribeDiv = styled.div`
  width: 500px;
  height: 210px;
  padding-left: 3px;
  /* background-color: lightblue; */
`;

export const Form = styled.form`
  width: 500px;
  height: 170px;
  margin-bottom: 10px;
  ${flexCenter()}
  flex-direction: column;
  align-items: start;
  /* background-color: purple; */
`;

export const SmallTextSpan = styled.span`
  display: block;
  font-size: 15px;
  font-weight: bolder;
  display: inline;
`;

export const SubscribeInput = styled.input`
  width: 430px;
  height: 45px;
  border-radius: 12px;
  border: solid 2px #588539;
  margin-bottom: 10px;
  margin-left: 10px;

  box-sizing: border-box;
`;

export const ButtonDiv = styled.div`
  width: 500px;
  height: 45px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: blue; */
`;

export const Button = styled.input`
  width: 220px;
  height: 45px;
  border-radius: 12px;
  border: solid 0px;
  background-color: #588539;
  box-sizing: border-box;

  margin-left: 20px;
  margin-right: 15px;

  color: #000000;
  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
`;
