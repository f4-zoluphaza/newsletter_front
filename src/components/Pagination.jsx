import React from 'react';
import { Links, TextSpan, PostNumberDiv } from '../styles/main/main-style-component.jsx';

const Pagination = ({ totalPage, currentPage, setPaginationNum, margin }) => {
  const pageGroupSize = 5;  // 페이지 그룹 크기 설정
  const totalPageGroups = Math.ceil(totalPage / pageGroupSize);
  const currentGroup = Math.floor((currentPage - 1) / pageGroupSize);

  const handlePageClick = (pageNumber) => {
    setPaginationNum(pageNumber);  // 부모 컴포넌트에서 페이지 번호 변경
  };

  const handleNextGroup = () => {
    if (currentGroup < totalPageGroups - 1) {
      setPaginationNum(currentGroup * pageGroupSize + pageGroupSize + 1);
    }
  };

  const handlePrevGroup = () => {
    if (currentGroup > 0) {
      setPaginationNum(currentGroup * pageGroupSize);
    }
  };

  const pageNumbers = [];
  for (let i = 0; i < pageGroupSize; i++) {
    const pageNumber = currentGroup * pageGroupSize + i + 1;
    if (pageNumber <= totalPage) {
      pageNumbers.push(pageNumber);
    }
  }

  return (
    <PostNumberDiv marginTop={margin}>
      {currentGroup > 0 && (
        <Links onClick={handlePrevGroup}>
          <TextSpan fontsize="23px" marginleft="10px">&lt;</TextSpan>
        </Links>
      )}
      {pageNumbers.map((number, index) => (
        <React.Fragment key={number}>
          <Links onClick={() => handlePageClick(number)}>
            <TextSpan
              fontsize="23px"
              marginleft="5px"
              fontweight={number === currentPage ? "700" : "400"}
            >
              {number}
            </TextSpan>
          </Links>
          {/* 마지막 페이지가 아니면 | 표시 */}
          {index < pageNumbers.length - 1 && (
            <TextSpan fontsize="23px" marginleft="5px" fontweight="400">|</TextSpan>
          )}
        </React.Fragment>
      ))}
      {currentGroup < totalPageGroups - 1 && (
        <Links onClick={handleNextGroup}>
          <TextSpan fontsize="23px" marginleft="10px">&gt;</TextSpan>
        </Links>
      )}
    </PostNumberDiv>
  );
};

export default Pagination;
