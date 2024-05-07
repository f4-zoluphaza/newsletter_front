import React from 'react';
import { Div, BodyDiv } from '../../styles/Mypage_j/ScrapPage.styled.jsx';

import Header from '../../components/Header.jsx';

export default function Scrap() {
  return (
    <Div>
      <BodyDiv>
        {/* 네비게이션바 */}
        <Header></Header>
      </BodyDiv>
    </Div>
  );
}
