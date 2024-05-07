import styled from 'styled-components';
import { Link } from 'react-router-dom';

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Div = styled.div`
  /* width: 100vw; */
  height: auto;

  display: flex;
  justify-content: center;
`;

export const BodyDiv = styled.div`
  width: 90vw;
  height: auto;
  ${flexCenter()}
  flex-direction: column;

  /* background-color: beige; */
`;

export const WrapperDiv = styled.div`
  width: 515px;
  height: ${(props) => props.height || '100vh'};
  background-color: lightgray;

  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
`;

export const LeftDiv = styled.div`
  width: 100px;
  height: auto;
  /* background-color: gold; */
  ${flexCenter()}
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
`;

export const RightDiv = styled.div`
  width: 412px;
  height: auto;
  /* background-color: darkviolet; */
  ${flexCenter()}
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 47px;
  margin-bottom: 20px;

  /* background-color: pink; */
`;

export const TextDivForm = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: lightseagreen; */
`;

export const TextSpan = styled.span`
  font-size: ${(props) => props.fontsize || '15px'};
  font-weight: ${(props) => props.fontweight || '500'};
  display: inline-block;
  color: ${(props) => props.color || '#767676'};
`;

export const Form = styled.form`
  width: 412px;
  height: auto;
  /* background-color: aqua; */
  ${flexCenter()}
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
`;

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  /* border-radius: 12px; */
  border: solid 2px #c0c0c0;
  margin: 10px 0 10px 0;

  display: inline-block;

  color: #767676;
  font-size: 16px;

  padding-left: 20px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 83.16px;
  height: 35px;

  border-radius: 20px;
  border: solid 2px #c0c0c0;

  background-color: ${(props) => props.backgroundcolor || '#FFFFFF'};
  color: ${(props) => props.color || '#c0c0c0'};
  font-size: 13.7px;
  font-weight: 600;

  margin: 7px 0 7px 7px;

  cursor: pointer;
`;

export const UnderDiv = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 10px;
  /* background-color: #eea5a5; */

  ${flexCenter()}
  justify-content: ${(props) => props.justifyContent || 'start'};
  align-items: center;
`;

export const VaildP = styled.p`
  font-size: 16px;
  color: #e74f4f;

  margin: 0;
`;

export const SubmitButton = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 12px;
  border: solid 0px;
  background-color: #588539;
  box-sizing: border-box;

  ${flexCenter()}
  color: #FFFFFF;
  font-size: 21px;
  font-weight: 600;

  margin-top: ${(props) => props.marginTop};

  cursor: pointer;
`;
