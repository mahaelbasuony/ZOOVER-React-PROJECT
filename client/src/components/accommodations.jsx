import React, { useState, useEffect } from "react";
import "./accommodations.css";
import ReactPaginate from "react-paginate";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

import Accommodation from "./accommodation";
import PaginatedItems from "./PaginatedItems";
import Rate from "./rate";
import FilterByWithWhom from "./filterByWithWhom";
function Accommodations() {
  const [AllAccomodations, setAccomodations] = useState([]);
  const [AccomodationsList, setAccomodationsList] = useState(false);
  const [accommodationswithWhom, setAccommodationsWithWhom] = useState([]);
  const getData = () => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setAccomodations(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="accommodations">
      {AllAccomodations.filtered && (
        <FilterByWithWhom memberType={AllAccomodations.filtered} />
      )}
      {/* <PaginatedItems
        accomodationsPerPage={accomodationsPerPage}
        totalAccomodation={AllAccomodations.all?.length}
        paginate={paginate}
        onPageChange={changePage}
        containerClassName={"paginationBtn"}
        nextLinkClassName={"nextBtn"}
        previousClassName={"previousBtn"}
        disableClassName={"paginationDisable"}
        activeClassName={"paginationActive"}
      /> */}
    </div>
  );
}

export default Accommodations;
