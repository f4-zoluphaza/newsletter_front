import styled from 'styled-components';
import { Link } from 'react-router-dom';

const flexCenter = () => `
  display: flex;
  justify-content: center;
`;

export const Div = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
`;

export const BodyDiv = styled.div`
  width: 90vw;
  height: 100vh;
  /* background-color: beige; */
`;

export const NavDiv = styled.div`
  width: 100%;
  height: 116px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* background-color: skyblue; */
`;

export const LogoImg = styled.img`
  width: 148px;
  height: 116px;
  padding-top: 7px;
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
  width: 100%;
  height: 200px;
  margin-top: 10px;
  /* background-color: lightcyan; */
  ${flexCenter()}
`;

export const ExplainDiv = styled.div`
  width: 40%;
  height: 107px;
  color: black;
  margin-right: 4%;
  margin-top: 60px;
  text-align: right;

  /* background-color: blue; */
`;

export const TitleSpan = styled.span`
  display: block;
  font-size: 30px;
  font-weight: bold;
`;

export const TextSpan = styled.span`
  display: block;
  font-size: ${(props) => props.fontsize || '20px'};
  font-weight: ${(props) => props.fontweight || '500'};
  text-align: ${(props) => props.textalign || 'left'};

  margin-left: ${(props) => props.marginleft || '0'};
`;

export const SubscribeDiv = styled.div`
  width: 40%;
  height: 210px;
  /* background-color: orange; */
`;

export const Form = styled.form`
  width: 90%;
  height: 170px;
  /* margin-bottom: 3px; */
  ${flexCenter()}
  flex-direction: column;
  align-items: start;
  /* background-color: purple; */
`;

export const Label = styled.label`
  width: 100%;
  height: 47px;
  margin-bottom: 9px;
  display: flex;
  align-items: center;
  /* background-color: blue; */
`;

export const SubscribeInput = styled.input`
  width: 80%;
  height: 45px;
  border-radius: 12px;
  border: solid 2px #588539;
  margin-left: 12px;
  /* margin-bottom: 10px; */
  box-sizing: border-box;

  padding-left: 15px;

  font-size: 15px;
`;

export const ButtonDiv = styled.div`
  width: 95%;
  height: 45px;

  display: flex;
  justify-content: space-evenly; //디자인1번
  /* justify-content: right; //디자인2번 */

  /* background-color: yellow; */
`;

export const Button = styled.input`
  width: 227px;
  height: 45px;
  border-radius: 12px;
  border: solid 0px;
  background-color: #588539;
  box-sizing: border-box;

  margin-left: 3px; //디자인1번
  /* margin-left: 12px; //디자인2번 */
  /* margin-right: 3px; //디자인2번 */

  color: #000000;
  font-size: 17px;
  font-weight: 600;
  text-align: center;

  cursor: pointer;
`;

export const SmallTextSpan = styled.span`
  font-size: 17px;
  font-weight: 500;

  padding-left: ${(props) => props.paddingleft || '7px'};
`;

export const PersonalInformationSpan = styled.span`
  text-decoration: underline;
  font-size: 17px;
  font-weight: bold;
  margin: 0;
`;

// 검색 창
export const SearchDiv = styled.div`
  width: 100%;
  height: 55px;
  margin-top: 30px;
  margin-bottom: 30px;
  /* background-color: lightcoral; */
  ${flexCenter()}
`;

export const SearchBorderDiv = styled.div`
  width: 600px;
  height: 50px;
  border: solid 3px #588539;
  border-radius: 35px;
  /* background-color: beige; */
  ${flexCenter()}
`;

export const SearchInput = styled.input`
  width: 500px;
  height: 45px;
  border: none;
  margin-top: 1.5px;
  margin-left: 30px;
  outline: none;

  font-size: 20px;
`;

export const SearchImg = styled.img`
  width: 42px;
  height: 43px;

  margin-top: 3px;
  margin-left: 20px;
  margin-right: 15px;

  background-image: url('../images/MainPage/Search.svg');

  cursor: pointer;
`;

export const RangeDiv = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 20px;
  margin-bottom: 25px;

  display: flex;
  justify-content: center;

  /* background-color: lightgray; */
`;

export const RangeCenterDiv = styled.div`
  width: 80%;
  height: 45px;

  display: flex;
  justify-content: space-between;

  /* background-color: #2a5dba; */
`;

export const RangeWapperDiv = styled.div`
  width: 400px;
  height: 45px;
  border: solid 0px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;

  /* background-color: lavender; */
`;

export const RangeButton = styled.input`
  width: 197px;
  height: 45px;
  border-radius: 20px;
  border: solid 0px;
  box-sizing: border-box;

  background-color: ${(props) => props.backgroundcolor || '#000000'};

  cursor: pointer;
`;

// 뉴스레터 컴포넌트

export const PostAllDiv = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 50px;

  display: flex;
  justify-content: center;

  /* background-color: lightslategrey; */
`;

export const PostDiv = styled.div`
  width: 85%;
  height: 353px;

  display: flex;
  justify-content: space-evenly;

  /* background-color: lightyellow; */
`;

export const PostWapperDiv = styled.div`
  width: 310px;
  height: 353px;
  border-radius: 18px;
  border: solid 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #cddfab;
`;

export const NewsImg = styled.img`
  width: 90%;
  height: 170px;
  border: solid 0;
  border-radius: 5px;
`;

export const NewsTitleDiv = styled.div`
  width: 260px;
  height: 60px;
  margin-top: 5px;
  /* padding-left: 5px; */

  font-size: 20px;
  font-weight: 900;

  /* background-color: lightcyan; */
`;

export const Line = styled.hr`
  width: 250px;
  border-top: 0.5px;
  /* height: 0; */
  border-style: solid;

  align-self: center;
  border-color: gray;
`;

export const NewsDateDiv = styled.div`
  width: 260px;
  height: 20px;

  font-size: 20px;

  display: flex;
  align-items: center;

  /* background-color: limegreen; */
`;

export const HeartSaveDiv = styled.div`
  width: 260px;
  height: 40px;
  /* margin-top: 3px; */

  display: flex;
  justify-content: end;
  align-items: center;

  /* background-color: white; */
`;

export const HeartImgScript = styled.img`
  width: 30px;
  height: 30px;
`;

export const HeartCountScript = styled.span`
  font-size: 28px;
  /* background-color: red; */
`;

// 포스터 페이지 순서
export const PostNumberDiv = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  justify-content: ${(props) => props.justifycontent || 'center'};
  /* align-items: center; //간격 조정 시*/

  /* background-color: lightgreen; */
`;

export const BoldLine = styled.hr`
  width: 90%;
  border-top: 7px;
  border-style: solid;
  height: 0;

  align-self: center;
  border-color: #588539;
`;

// footer
export const FooterDiv = styled.div`
  width: 100%;
  height: 90px;

  display: flex;
  justify-content: space-around;

  /* background-color: blue; */
`;

export const MakerDivContact = styled.div`
  width: 22%;
  height: 80px;
  margin-top: 10px;

  display: ${(props) => props.display || 'block'};
  justify-content: ${(props) => props.justifycontent || 'center'};
  align-items: center;

  /* background-color: pink; */
`;
