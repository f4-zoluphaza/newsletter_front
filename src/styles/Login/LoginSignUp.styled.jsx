import styled from "styled-components";

const flexCenter = () => `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyDiv = styled.div`
  height: 100vh;
  ${flexCenter()}
`;

export const WrapperDiv = styled.div`
  width: 510px;
  height: 100vh;
  background-color: #fff8ec;
  ${flexCenter()}
  flex-direction: column;
`;

export const LogoImg = styled.img`
  width: 256px;
  height: 200px;
`;

export const Form = styled.form`
  width: 510px;
  height: auto;
  background-color: aqua;
  ${flexCenter()}
  flex-direction: column;
`;

export const Input = styled.input`
  width: 508.48px;
  height: 60px;
  border-radius: 12px;
  border: solid 2px #c0c0c0;
  margin-bottom: 10px;

  color: #767676;
  font-size: 17px;

  padding-left: 20px;
  box-sizing: border-box;
`;
