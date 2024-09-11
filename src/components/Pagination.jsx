import React, { useState } from "react";
import {
  Links,
  TextSpan,
  PostNumberDiv,
} from "../styles/main/main-style-component.jsx";

const Pagination = ({ totalPage, setPaginationNum }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState(0);

  // 한 페이지 그룹의 크기
  const pageGroupSize = 5;
  const totalPageGroups = Math.ceil(totalPage / pageGroupSize);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPaginationNum(pageNumber);
  };

  const handleNextGroup = () => {
    if (pageGroup < totalPageGroups - 1) {
      setPageGroup(pageGroup + 1);
      setCurrentPage(pageGroup * pageGroupSize + pageGroupSize + 1);
    }
  };

  const handlePrevGroup = () => {
    if (pageGroup > 0) {
      setPageGroup(pageGroup - 1);
      setCurrentPage(pageGroup * pageGroupSize - pageGroupSize + 1);
    }
  };

  const pageNumbers = [];
  for (let i = 0; i < pageGroupSize; i++) {
    const pageNumber = pageGroup * pageGroupSize + i + 1;
    if (pageNumber <= totalPage) {
      pageNumbers.push(pageNumber);
    }
  }

  return (
    <PostNumberDiv>
      {pageGroup > 0 && (
        <Links onClick={handlePrevGroup}>
          <TextSpan fontsize="23px" marginleft="10px">
            &lt;
          </TextSpan>
        </Links>
      )}
      {pageNumbers.map((number) => (
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
          {number < totalPage && (
            <TextSpan fontsize="23px" marginleft="5px" fontweight="400">
              |
            </TextSpan>
          )}
        </React.Fragment>
      ))}
      {pageGroup < totalPageGroups - 1 && (
        <Links onClick={handleNextGroup}>
          <TextSpan fontsize="23px" marginleft="10px">
            &gt;
          </TextSpan>
        </Links>
      )}
    </PostNumberDiv>
  );
};
export default Pagination;
