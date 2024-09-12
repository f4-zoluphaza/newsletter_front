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
  width: 1400px;
  height: auto;
  ${flexCenter()}
  flex-direction: column;

  /* background-color: beige; */
`;

export const WrapperDiv = styled.div`
  width: 580px;
  /* height: ${(props) => props.height || '100vh'}; */
  height: auto;
  margin-top: 20px;
  margin-bottom: 50px;
  /* background-color: lightgray; */

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const TextDivForm = styled.div`
  width: 100%;
  height: 60px;
  margin-top: ${(props) => props.margintop || '20px'};

  display: flex;
  justify-content: ${(props) => props.justifycontent || 'space-between'};
  align-items: center;

  /* background-color: lightseagreen; */
`;

export const RightDiv = styled.div`
  width: 100%;
  height: auto;
  /* background-color: darkviolet; */
  ${flexCenter()}
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent};
`;

export const TitleDiv = styled.div`
  width: 70%;
  height: 40px;
  margin-bottom: 20px;

  align-self: end;
  /* ${flexCenter()} */
  /* background-color: pink; */
`;

export const TextDiv = styled.div`
  width: 140px;
  height: 53.82px;

  display: flex;
  justify-content: end;
  align-items: center;

  /* background-color: darkgray; */
`;

export const TextSpan = styled.span`
  font-size: ${(props) => props.fontsize || '18px'};
  font-weight: ${(props) => props.fontweight || '500'};
  color: ${(props) => props.color || '#767676'};

  margin-top: ${(props) => props.margintop};
`;

export const Form = styled.form`
  width: 100%;
  height: auto;
  /* background-color: lightblue; */
  ${flexCenter()}
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  position: relative; //eyesImg 때문에 설정
`;

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  border: solid 2px #c0c0c0;
  margin: 10px 0 10px 0;

  display: inline-block;

  color: #767676;
  font-size: 16px;

  padding-left: 20px;
  box-sizing: border-box;
`;

export const EyesImg1 = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 195px;
  right: 20px;

  cursor: pointer;
`;

export const EyesImg2 = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 275px;
  right: 20px;

  cursor: pointer;
`;

export const EyesImg3 = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  /* top: 355px; */
  top: ${(props) => props.top || '355px'};
  right: 20px;

  cursor: pointer;
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
  width: 70%;
  height: 40px;
  margin-top: ${(props) => props.margintop};
  /* background-color: #eea5a5; */

  align-self: end;
  ${flexCenter()}
  justify-content: ${(props) => props.justifyContent || 'start'};
  align-items: center;
`;

export const VaildP = styled.p`
  font-size: 16px;
  color: ${(props) => props.color || '#e74f4f'};

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
  font-size: 22px;
  font-weight: 600;

  margin-top: ${(props) => props.marginTop};
  /* margin-right: 30px; */

  cursor: pointer;
`;
