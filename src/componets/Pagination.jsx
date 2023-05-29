import React from 'react';
import { Pagination } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const PaginationComp = () => {
  const dispatch = useDispatch();
  const { currentPage, pageCount } = useSelector((state) => state.search);
  const setCurrentPage = (currentPage) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: currentPage });
    window.scrollTo(0, 0);
  };
  let paginationItems = [];
  for (let number = 1; number <= pageCount; number++) {
    paginationItems.push(
      <Pagination.Item
        onClick={() => {
          setCurrentPage(number);
        }}
        key={number}
        className="paginationItemStyle"
        active={number === currentPage}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <Pagination>
      <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
      {paginationItems}
      <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
    </Pagination>
  );
};

export default PaginationComp;
