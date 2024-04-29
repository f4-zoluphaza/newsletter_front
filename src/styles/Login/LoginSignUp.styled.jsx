import styled from "styled-components";
import { Link } from "react-router-dom";

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

  margin-bottom: 35px;
`;

export const Form = styled.form`
  width: 510px;
  height: auto;
  /* background-color: aqua; */
  ${flexCenter()}
  flex-direction: column;
  align-items: start;
  position: relative; //eyesImg 때문에 설정

`;

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  /* border-radius: 12px; */
  border: solid 2px #c0c0c0;
  margin-bottom: 10px;

  color: #767676;
  font-size: 17px;

  padding-left: 20px;
  box-sizing: border-box;
`;

export const Submit = styled.input`
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

  cursor: pointer;
`

// Login---------------------------------------------------------------------------------------------------------------

export const EyesImg = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 85px;
  right: 20px;

  cursor: pointer;
`

export const LoginStateDiv = styled.div`
  width: 200px;
  height: 20px;
  /* background-color: #b4ffb4; */
  display: flex;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 30px;
`

export const CheckImg = styled.img`
  width: 16px;
  height: 16px;

  cursor: pointer;
`
export const LoginStateP = styled.p`
  font-size: 16px;
  color: #767676;
  margin: 0 0 0 5px;
  padding: 0;
`

export const PWSearchSignUpDiv = styled.div`
  width: 250px;
  height: 20px;
  /* background-color: pink; */
  ${flexCenter()}
  justify-content: space-around;

  margin-top: 30px;
`

export const PWSearchSignUpP = styled.p`
  font-size: 16px;
  color: #767676;

  cursor: pointer;
`

export const SocialLoginDiv = styled.div`
  width: 180px;
  height: 90px;
  /* background-color: bisque; */
  ${flexCenter()}
  justify-content: space-between;

  margin-top: 50px;
`

export const SocialLoginImg = styled.img`
  width: 80px;
  height: 80px;

  cursor: pointer;
`

export const Links = styled(Link)`
  text-decoration: none;
  color: #767676;
  font-size: 16px;
`;

// SignUp---------------------------------------------------------------------------------------------------------------