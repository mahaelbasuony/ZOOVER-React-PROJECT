import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Accommodation from "./accommodation";
import "./PaginatedItems.css";
function PaginatedItems({ accomodationsPerPage, totalAccomodation, paginate }) {
  const pageNumbers = [];

  // const onPrevious = () => {
  //   onPageChange(paginate - 1);
  // };

  for (
    let i = 1;
    i <= Math.ceil(totalAccomodation / accomodationsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <div className="arrow right" />
      </ul>
    </nav>
  );
}

export default PaginatedItems;
