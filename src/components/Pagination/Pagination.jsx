import React from 'react'
import usePagination from './usePagination';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { PaginationContainer, PaginationItem, Arrow, DotsDiv } from './Style';
const DOTS = '...';

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || (paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <PaginationContainer>
      <PaginationItem onClick={onPrevious}>
        <Arrow >
          <BsArrowLeft />
          <p>Previous</p>
        </Arrow>
      </PaginationItem>

      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return (<PaginationItem><DotsDiv >...</DotsDiv></PaginationItem>);
        }

        return (
          <PaginationItem key={pageNumber}
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem  >
        <Arrow onClick={onNext}>
          <p>Next</p>
          <BsArrowRight />
        </Arrow>          
      </PaginationItem>

    </PaginationContainer>
  )
}

export default Pagination;

