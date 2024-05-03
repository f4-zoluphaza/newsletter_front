import React from 'react';
import { Div, BodyDiv } from '../../styles/main/main-style-component.jsx';

import Header from '../../components/Header.jsx';

export default function DetailPage() {
  return (
    <Div>
      <BodyDiv>
        {/* 네비게이션바 */}
        <Header></Header>
      </BodyDiv>
    </Div>
  );
}
