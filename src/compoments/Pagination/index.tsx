import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { selectFilter } from '../../redux/filter/selectors';
import { useSelector } from 'react-redux';

type PaginationProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
  const { pageCount } = useSelector(selectFilter);
  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(ev) => onPageChange(ev.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={pageCount ? pageCount : 2}
        forcePage={currentPage - 1}
        previousLabel="<"
      />
    </>
  );
};

export default Pagination;
