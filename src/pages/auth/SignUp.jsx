import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  BodyDiv,
  WrapperDiv,
  LogoImg,
  Form,
  Input,
  Submit,
  UnderDiv,
  Button,
  VaildP,
} from "../../styles/Login/LoginSignUp.styled";

import Logo from "../../images/Logo.svg";

export default function SignUp() {
  const navigate = useNavigate();

  //form 관리
  const [form, setForm] = useState({
    nickName: "",
    email: "",
    emailVerifyCode: "",
    password: "",
    passwordCheck: "",
  });

  const [validEmailVerification, setValidEmailVerification] = useState(null); //인증번호 요청 유효값
  const [validEmailDuplicate, setValidEmailDuplicate] = useState(null); // 이메일 중복 확인 유효값
  const [validEmailCheck, setValidEmailCheck] = useState(null); //인증번호 확인 유효값
  const [validEmail, setValidEmail] = useState(null); // 이메일 유효값
  const [validPW, setValidPW] = useState(null);
  const [validPWCheck, setValidPWCheck] = useState(null);
  const [validNickName, setValidNickName] = useState(null);

  // 비밀번호 유효성 함수
  const handlePW = (e) => {
    const password = e.target.value;
    setForm({ ...form, password });

    if (password.trim() === "") {
      setValidPW(null);
    } else {
      const isValidPassword =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&^#()])[A-Za-z\d@$!%*?&^#()]{8,12}$/.test(
          password
        );
      setValidPW(isValidPassword);
    }
  };

  // 비밀번호 확인 유효성 함수
  const hadlePWCheck = (e) => {
    const passwordCheck = e.target.value;
    setForm((prevForm) => ({ ...prevForm, passwordCheck }));

    if (passwordCheck.trim() === "") {
      setValidPWCheck(null);
    } else if (passwordCheck === form.password) {
      setValidPWCheck(true);
    } else {
      setValidPWCheck(false);
    }
  };

  // form input값 바뀔 때 저장하는 코드?
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setForm({ ...form, email });
    setValidEmail(true);

    if (email.trim() === "") {
      setValidEmail(null);
    }
  };

  const handleEmailVerifyCode = (e) => {
    const emailVerifyCode = e.target.value;
    setForm({ ...form, emailVerifyCode });

    if (emailVerifyCode.trim() === "") {
      setValidEmailVerification(null);
    }
  };

  const handleNickNameChange = (e) => {
    const nickName = e.target.value;
    setForm({ ...form, nickName });
    setValidNickName(true);

    if (nickName.trim() === "") {
      setValidNickName(null);
    }
  };

  // 화면 새로고침 막는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 이메일 중복 확인 함수
  const isEmailDuplicateAPI = async () => {
    try {
      //API 요청 URL
      const url =
        "https://humble-commonly-goshawk.ngrok-free.app/api/v1/duplicateCheck";

      const data = {
        email: form.email,
      };

      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setValidEmailDuplicate(true);
      console.log(response.data.result);

      // alert("사용 가능한 이메일입니다.");
    } catch (error) {
      console.error(
        "이메일 중복 확인 에러",
        error.response ? error.response.data : error
      );
      setValidEmailDuplicate(false);
    }
  };

  // 이메일 인증 요청 함수
  const requestEmailVerificationAPI = async () => {
    try {
      //API 요청 URL
      const url =
        "https://humble-commonly-goshawk.ngrok-free.app/api/v1/email/send";

      const data = {
        email: form.email,
      };

      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = response.data.result;
      console.log(result);
      setValidEmailVerification(true);

      alert("인증번호를 발송했습니다.");
    } catch (error) {
      console.error(
        "인증번호 발송 에러",
        error.response ? error.response.data : error
      );
      setValidEmailVerification(false);
    }
  };

  // 이메일 인증 확인 함수
  const confirmEmailVerificationAPI = async () => {
    try {
      //API 요청 URL
      const url =
        "https://humble-commonly-goshawk.ngrok-free.app/api/v1/email/verify";

      const data = {
        email: form.email,
        verifyCode: form.emailVerifyCode,
      };

      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = response.data.result;
      console.log(result);
      setValidEmailCheck(true);

      alert("인증이 완료되었습니다.");
    } catch (error) {
      console.error(
        "인증번호 확인 에러",
        error.response ? error.response.data : error
      );
      setValidEmailCheck(false);
      alert("인증번호가 올바르지 않습니다.");
    }
  };

  // 회원가입 함수
  const signUpAPI = async () => {
    try {
      //API 요청 URL
      const url = "https://humble-commonly-goshawk.ngrok-free.app/api/v1/join";

      const data = {
        email: form.email,
        passwd: form.password,
        passwdCheck: form.passwordCheck,
        nickname: form.nickName,
      };

      const response = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = response.data.result;
      console.log(result);

      alert("회원가입 되었습니다!");
      navigate("/Login");
    } catch (error) {
      console.error(
        "회원가입 에러",
        error.response ? error.response.data : error
      );
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <BodyDiv>
      <WrapperDiv>
        <LogoImg src={Logo} marginBottom="20px" />

        <Form onSubmit={handleSubmit}>
          <Input
            id="nickName"
            type="text"
            placeholder="닉네임"
            width="410.975px"
            height="53.82px"
            borderRadius="9.78px"
            onChange={handleNickNameChange}
          />

          <Input
            id="email"
            type="email"
            placeholder="이메일"
            width="410.975px"
            height="53.82px"
            borderRadius="9.78px"
            onChange={handleEmailChange}
          />
          <UnderDiv justifyContent="end">
            {validEmailDuplicate === null ? null : validEmailDuplicate ? (
              <VaildP color="#588539" width="230px">
                사용 가능한 이메일입니다.
              </VaildP>
            ) : (
              <VaildP width="230px">사용 불가능한 이메일입니다.</VaildP>
            )}

            {validEmailDuplicate ? (
              <Button
                backgroundColor="#588539"
                color="#FFFFFF"
                borderColor="#588539"
              >
                중복 확인
              </Button>
            ) : (
              <Button
                onClick={() => {
                  isEmailDuplicateAPI();
                }}
              >
                중복 확인
              </Button>
            )}

            {validEmailVerification ? (
              <Button
                backgroundColor="#588539"
                color="#FFFFFF"
                borderColor="#588539"
                onClick={() => {
                  requestEmailVerificationAPI();
                }}
              >
                재전송
              </Button>
            ) : (
              <Button
                onClick={() => {
                  requestEmailVerificationAPI();
                }}
              >
                인증 요청
              </Button>
            )}
          </UnderDiv>

          <Input
            id="emailVerifyCode"
            type="text"
            placeholder="이메일 인증번호"
            width="410.975px"
            height="53.82px"
            borderRadius="9.78px"
            onChange={handleEmailVerifyCode}
          />

          <UnderDiv justifyContent="space-between">
            {validEmailCheck === null ? null : validEmailCheck ? (
              <VaildP color="#588539">인증되었습니다.</VaildP>
            ) : (
              <VaildP>인증번호가 올바르지 않습니다.</VaildP>
            )}

            {validEmailCheck ? (
              <Button
                backgroundColor="#588539"
                color="#FFFFFF"
                borderColor="#588539"
              >
                인증 확인
              </Button>
            ) : (
              <Button
                onClick={() => {
                  confirmEmailVerificationAPI();
                }}
              >
                인증 확인
              </Button>
            )}
          </UnderDiv>

          <Input
            id="password"
            type="password"
            onChange={handlePW}
            placeholder="비밀번호 (숫자, 영문 8~12자리)"
            width="410.975px"
            height="53.82px"
            borderRadius="9.78px"
          />

          {validPW === false ? (
            <UnderDiv>
              <VaildP>
                비밀번호를 영문, 숫자, 특수문자 포함 8~12자리로 설정해주세요.
              </VaildP>
            </UnderDiv>
          ) : null}

          <Input
            id="passwordCheck"
            type="password"
            onChange={hadlePWCheck}
            placeholder="비밀번호 확인"
            width="410.975px"
            height="53.82px"
            borderRadius="9.78px"
          />

          {validPWCheck === false ? (
            <UnderDiv>
              <VaildP>비밀번호가 일치하지 않습니다.</VaildP>
            </UnderDiv>
          ) : null}

          {validNickName &&
          validEmailCheck &&
          validEmailDuplicate &&
          validEmailVerification &&
          validPW &&
          validPWCheck ? (
            <Submit
              value="회원가입"
              type="submit"
              width="410.975px"
              height="53.82px"
              marginTop="60px"
              onClick={() => {
                signUpAPI();
              }}
            />
          ) : (
            <Submit
              value="회원가입"
              type="submit"
              width="410.975px"
              height="53.82px"
              marginTop="60px"
              backgroundColor="#C0C0C0"
            />
          )}
        </Form>
      </WrapperDiv>
    </BodyDiv>
  );
}
