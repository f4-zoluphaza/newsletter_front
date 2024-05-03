import styled from 'styled-components';
import { Link } from 'react-router-dom';

const flexCenter = () => `
  display: flex;
  justify-content: center;
`;

export const Div = styled.div`
  width: 100vw;
  height: 100vh;

  ${flexCenter()}
`;

export const BodyDiv = styled.div`
  width: 90vw;
  height: 100vh;
  /* background-color: beige; */
`;

export const NewsDivChat = styled.div`
  width: 100%;
  height: 780px;
  margin-top: 10px;

  display: flex;
  justify-content: space-evenly;

  /* background-color: lightgrey; */
`;

export const NewsDiv = styled.div`
  width: 45%;
  height: auto;
  border-radius: 12px;

  /* display: flex; */
  /* justify-content: center;
  align-items: center;
  flex-direction: column; */

  background-color: #cddfab; //고정
`;

export const ChatbotDiv = styled.div`
  width: 45%;
  height: 780px;
  ${flexCenter()}
  border-radius: 12px;
  /* background-color: lightcoral; */
`;

export const NewsWrapperDiv = styled.div`
  width: 100%;
  height: ${(props) => props.height || '48px'};
  margin-top: ${(props) => props.margintop || '80px'};
  ${flexCenter()}/* background-color: lightyellow; */
`;

export const NewsTitleWrapperDivDate = styled.div`
  width: 80%;
  height: 48px;

  /* background-color: lightseagreen; */
`;

export const Textspan = styled.span`
  display: block;
  font-size: ${(props) => props.fontsize || '17px'};
  font-weight: ${(props) => props.fontweight || '500'};
  text-align: ${(props) => props.textalign || 'left'};

  margin-bottom: ${(props) => props.marginbottom || '10px'};

  /* background-color: green; */
`;

export const NewsImg = styled.img`
  width: 85%;
  height: 250px;
  border: solid 0;
`;

export const NewsContentDiv = styled.div`
  width: 80%;
  height: auto;

  /* background-color: lightsalmon; */
`;
