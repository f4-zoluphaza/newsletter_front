import React, { useState, useEffect } from 'react';
import api from '../../api/api.js';
import { useNavigate } from 'react-router-dom';
import {
  Div,
  BodyDiv,
  WrapperDiv,
  TextDivForm,
  RightDiv,
  Form,
  Input,
  TitleDiv,
  TextDiv,
  TextSpan,
  EyesImg1,
  EyesImg2,
  EyesImg3,
  Button,
  UnderDiv,
  VaildP,
  SubmitButton,
} from '../../styles/Mypage_j/ChangeInfo.styled.jsx';

import Header from '../../components/Header.jsx';
import PWOpen from '../../images/Login/PWOpen.svg';
import PWClose from '../../images/Login/PWClose.svg';

export default function ChangeInfo() {
  const [validPWState, setValidPWState] = useState(false);
  const [validNewPWState, setValidNewPWState] = useState(false);
  const [validRepeatNewPWState, setValidRepeatNewPWState] = useState(false);

  //form 관리
  const [form, setForm] = useState({
    nickName: '',
    email: '',
    emailCheck: '',
    password: '',
    passwordCheck: '',
    newPassword: '',
    newPasswordCheck: '',
  });

  const [validNickName, setValidNickName] = useState(null);
  const [validPW, setValidPW] = useState(null);
  const [validPWCheck, setValidPWCheck] = useState(null);
  const [data, setData] = useState({});

  const navigate = useNavigate();

  // 화면 새로고침 막는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleMypageMainApi = async () => {
    try {
      //API 요청 URL
      const url = `api/v1/mypage`;

      // 쿠키에서 'jwtToken' 값을 가져옴
      const token = getCookie('jwtToken');

      //axios.get 메소드를 사용하여 요청을 보냄
      const response = await api.get(url, {
        headers: {
          'Content-Type': 'application/json',
          'ngrok-skip-browser-warning': '69420',
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data.result);
      setData(response.data.result);
    } catch (error) {
      console.error(
        '마이페이지 메인 api 에러',
        error.response ? error.response.data : error
      );
    }
  };

  // 새 비밀번호 유효성 함수
  const handlePW = (e) => {
    const password = e.target.value;
    setForm({ ...form, password });

    if (password.trim() === '') {
      setValidPW(null);
    } else {
      const isValidPassword =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&^#()])[A-Za-z\d@$!%*?&^#()]{8,12}$/.test(
          password
        );
      setValidPW(isValidPassword);
    }
  };

  // 새 비밀번호 확인 유효성 함수
  const hadlePWCheck = (e) => {
    const passwordCheck = e.target.value;
    setForm((prevForm) => ({ ...prevForm, passwordCheck }));

    if (passwordCheck.trim() === '') {
      setValidPWCheck(null);
    } else if (passwordCheck === form.password) {
      setValidPWCheck(true);
    } else {
      setValidPWCheck(false);
    }
  };

  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  // 내 정보 수정 함수
  const changeinfoAPI = async () => {
    try {
      //API 요청 URL
      const url = 'api/v1/mypage/change';

      // 쿠키에서 'jwtToken' 값을 가져옴
      const token = getCookie('jwtToken');

      const data = {
        nickname: form.nickName,
        passwd: form.password,
        newPasswd: form.newPassword,
        newPasswdCheck: form.newPasswordCheck,
      };

      const response = await api.put(url, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      const result = response.data.result;
      console.log(result);

      //쿠키 삭제
      document.cookie =
        'jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

      navigate('/Login');
      // alert('정보가 성공적으로 수정되었습니다.');
    } catch (error) {
      console.error(
        '내 정보 수정 에러',
        error.response ? error.response.data : error
      );
      alert(error.response.data.message);
    }
  };

  const handleNickNameChange = (e) => {
    const nickName = e.target.value;
    setForm({ ...form, nickName });

    if (nickName.trim() === '') {
      setValidNickName(null);
    }
  };

  const handlePasswdChange = (e) => {
    const password = e.target.value;
    setForm({ ...form, password });
  };

  useEffect(() => {
    handleMypageMainApi();
  }, []);

  return (
    <Div>
      <BodyDiv>
        {/* 네비게이션바 */}
        <Header></Header>

        <WrapperDiv>
          <TitleDiv>
            <TextSpan fontsize="30px" fontweight="600" color="#000000">
              정보 수정
            </TextSpan>
          </TitleDiv>
          <RightDiv>
            <Form alignItems="flex-start" onSubmit={handleSubmit}>
              <TextDivForm>
                <TextDiv>
                  <TextSpan>닉네임</TextSpan>
                </TextDiv>
                <Input
                  id="nickName"
                  type="text"
                  onChange={handleNickNameChange}
                  placeholder={data.nickname}
                  width="410.975px"
                  height="53.82px"
                  borderRadius="9.78px"
                />
              </TextDivForm>

              <TextDivForm>
                <TextDiv>
                  <TextSpan>이메일</TextSpan>
                </TextDiv>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  width="410.975px"
                  height="53.82px"
                  borderRadius="9.78px"
                  readOnly
                />
              </TextDivForm>

              <TextDivForm>
                <TextDiv>
                  <TextSpan>기존 비밀번호</TextSpan>
                </TextDiv>
                <Input
                  id="currentPW"
                  type={validPWState ? 'text' : 'password'}
                  onChange={handlePasswdChange}
                  placeholder="기존 비밀번호"
                  width="410.975px"
                  height="53.82px"
                  borderRadius="9.78px"
                />
              </TextDivForm>

              {validPWState ? (
                <EyesImg1
                  src={PWClose}
                  onClick={() => {
                    setValidPWState();
                  }}
                />
              ) : (
                <EyesImg1
                  src={PWOpen}
                  onClick={() => {
                    setValidPWState(true);
                  }}
                />
              )}

              <TextDivForm>
                <TextDiv>
                  <TextSpan>새 비밀번호</TextSpan>
                </TextDiv>
                <Input
                  id="password"
                  type={validNewPWState ? 'text' : 'password'}
                  onChange={(e) => {
                    handlePW(e);
                  }}
                  placeholder="비밀번호 (숫자, 영문 8~12자리)"
                  width="410.975px"
                  height="53.82px"
                  borderRadius="9.78px"
                />
                {validNewPWState ? (
                  <EyesImg2
                    src={PWClose}
                    onClick={() => {
                      setValidNewPWState();
                    }}
                  />
                ) : (
                  <EyesImg2
                    src={PWOpen}
                    onClick={() => {
                      setValidNewPWState(true);
                    }}
                  />
                )}
              </TextDivForm>
              {validPW === false ? (
                <UnderDiv>
                  <VaildP>
                    비밀번호를 영문, 숫자, 특수문자 포함 8~12자리로
                    설정해주세요.
                  </VaildP>
                </UnderDiv>
              ) : null}

              <TextDivForm>
                <TextDiv>
                  <TextSpan>새 비밀번호 확인</TextSpan>
                </TextDiv>
                <Input
                  id="passwordCheck"
                  type={validRepeatNewPWState ? 'text' : 'password'}
                  onChange={(e) => {
                    hadlePWCheck(e);
                  }}
                  placeholder="비밀번호 확인"
                  width="410.975px"
                  height="53.82px"
                  borderRadius="9.78px"
                />
                {validRepeatNewPWState ? (
                  <EyesImg3
                    src={PWClose}
                    onClick={() => {
                      setValidRepeatNewPWState();
                    }}
                  />
                ) : (
                  <EyesImg3
                    src={PWOpen}
                    top={validPW === false ? '395px' : null}
                    onClick={() => {
                      setValidRepeatNewPWState(true);
                    }}
                  />
                )}
              </TextDivForm>

              {validPWCheck === false ? (
                <UnderDiv>
                  <VaildP>비밀번호가 일치하지 않습니다.</VaildP>
                </UnderDiv>
              ) : null}

              <TextDivForm margintop="60px" justifycontent="end">
                <SubmitButton
                  value="수정"
                  type="submit"
                  width="410.975px"
                  height="53.82px"
                  onClick={() => {
                    changeinfoAPI();
                  }}
                />
              </TextDivForm>
            </Form>
          </RightDiv>
        </WrapperDiv>
      </BodyDiv>
    </Div>
  );
}
