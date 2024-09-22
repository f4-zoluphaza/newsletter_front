import React, { useState, useEffect } from 'react';
import api from '../../api/api.js';
import {
  NewsDivChat,
  ChatbotDiv,
  AllMessageDiv,
  Textspan,
  MessageDiv,
  ChatbotImg,
  SendspeechbubbleDiv,
  BotspeechbubbleDiv,
  AllChattingDiv,
  ChattingDiv,
  ChattingInput,
} from '../../styles/Detailpage/DetailPages.styled.jsx';
import CircleImage from '../../images/DetailPage/Circle.svg';
import MessageSendImage from '../../images/DetailPage/MessageSend.svg';

export default function DetailPage() {
  const [prompt, setPrompt] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  // 쿠키 값 읽는 함수
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  // 사용자 입력값 바꾸는 함수
  const handleMessageChange = (e) => {
    const message = e.target.value;
    setPrompt(message);
  };

  //챗봇  api
  const handleChatApi = async () => {
    if (!prompt.trim()) return; // 입력이 없으면 아무 작업도 하지 않음

    // 질문을 먼저 채팅 창에 추가
    const newQuestion = { type: 'question', content: prompt };
    setChatHistory((prevHistory) => [...prevHistory, newQuestion]);

    try {
      const url = 'api/v1/chat/send';
      const data = {
        prompt: prompt,
      };

      // 쿠키에서 'jwtToken' 값을 가져옴
      const token = getCookie('jwtToken');

      const response = await api.post(url, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      // API 응답을 채팅창에 추가
      // const newAnswer = {
      //   type: 'answer',
      //   content: response.data.result[1].split('Bot: ')[1],
      // };
      // setChatHistory((prevHistory) => [...prevHistory, newAnswer]);

      // Bot의 응답을 찾음
      const botResponse = response.data
        .reverse()
        .find((item) => item.startsWith('Bot:'));
      const botContent = botResponse
        ? botResponse.replace('Bot: ', '')
        : 'No response from bot.';

      // API 응답을 채팅창에 추가
      const newAnswer = {
        type: 'answer',
        content: botContent, // Bot 응답의 내용만을 추가
      };
      setChatHistory((prevHistory) => [...prevHistory, newAnswer]);

      // 입력 필드 초기화
      setPrompt('');

      console.log(response.data);
    } catch (error) {
      console.error(
        'Chatbot error',
        error.response ? error.response.data : error
      );
    }
  };

  return (
    <>
      {/* 챗봇 영역 */}
      <ChatbotDiv>
        <AllMessageDiv>
          {chatHistory.map((message, index) => (
            <>
              {message.type === 'question' ? (
                <MessageDiv key={index}>
                  <ChatbotImg src={CircleImage} />
                  <SendspeechbubbleDiv height="33px">
                    <Textspan fontsize="15px" marginbottom="0">
                      {message.content}
                    </Textspan>
                  </SendspeechbubbleDiv>
                </MessageDiv>
              ) : (
                <MessageDiv key={index} margintop="10px">
                  <BotspeechbubbleDiv>
                    <Textspan fontsize="15px" marginbottom="0">
                      {message.content}
                    </Textspan>
                  </BotspeechbubbleDiv>
                </MessageDiv>
              )}
            </>
          ))}
        </AllMessageDiv>

        {/* 채팅 영역 */}
        <AllChattingDiv>
          <ChattingDiv>
            <ChattingInput
              type="text"
              placeholder="질문을 입력해보세요."
              value={prompt}
              onChange={handleMessageChange}
              // 엔터 누르면 질문 전송
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleChatApi();
                  setPrompt(''); // 입력값 초기화
                }
              }}
            ></ChattingInput>
            <ChatbotImg
              width="27px"
              height="23px"
              src={MessageSendImage}
              cursor="pointer"
              onClick={() => {
                handleChatApi();
                setPrompt('');
              }}
            />
          </ChattingDiv>
        </AllChattingDiv>
      </ChatbotDiv>
    </>
  );
}
