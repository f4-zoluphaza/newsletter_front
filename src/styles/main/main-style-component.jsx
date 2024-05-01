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
  ${flexCenter()}/* background-color: beige; */
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
  font-size: 15px;
  font-weight: bolder;
`;

export const SubscribeInput = styled.input`
  width: 430px;
  height: 45px;
  border-radius: 12px;
  border: solid 2px #588539;
  margin-bottom: 10px;
  margin-left: 10px;
  box-sizing: border-box;

  padding-left: 10px;

  font-size: 15px;
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

export const PersonalInformationSpan = styled.span`
  text-decoration: underline;
`;

// 검색 창
export const SearchDiv = styled.div`
  width: 1115px;
  height: 60px;
  margin-top: 30px;
  margin-left: 185px;
  margin-right: 180px;
  ${flexCenter()}/* background-color: lightcoral; */
`;

export const SearchBorderDiv = styled.div`
  width: 590px;
  height: 50px;
  margin-left: 185px;
  margin-right: 180px;
  border: solid 3px #588539;
  border-radius: 35px;
  ${flexCenter()}
`;

export const SearchInput = styled.input`
  width: 500px;
  height: 45px;
  border: none;
  margin-top: 1.5px;
  margin-left: 30px;
  outline: none;

  font-size: 18px;
`;

export const SearchButton = styled.input`
  width: 42px;
  height: 43px;
  border-radius: 12px;
  border: solid 0px;
  /* background-color: #588539; */
  box-sizing: border-box;

  margin-top: 3px;
  margin-left: 20px;
  margin-right: 20px;

  background-image: url('../images/MainPage/Search.svg');

  /* color: #000000;
  font-size: 16px;
  font-weight: 600; */

  cursor: pointer;
`;

export const rangeDiv = styled.div`
  width: 1232px;
  height: 45px;
  border-left: 110px;
  border-right: 110px;
  border-top: 30px;
  /* border: solid 1px; */
  ${flexCenter()}
  background-color: gray;
`;

export const rangeInput = styled.input`
  width: 197px;
  height: 45px;
  border-radius: 12px;
  border: solid 0px;
  box-sizing: border-box;

  background-color: #588539;

  cursor: pointer;
`;
