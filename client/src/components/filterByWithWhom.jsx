import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Accommodation from "./accommodation";
import "./filterByWithWhom.css";

function FilterByWithWhom({ memberType }) {
  const [withWhom, setWithWhom] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("reviewDate");
  const [accomodationsPerPage, setAccomodationsPerPage] = useState(10);

  const indexOfLastPost = currentPage * accomodationsPerPage;

  const indexOfFirstPost = indexOfLastPost - accomodationsPerPage;

  const currentAccomodations = withWhom?.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  console.log();
  const unique = Array.from(
    new Set(memberType?.map((item) => item.traveledWith))
  );
  useEffect(() => fetchFiltered(), []);
  // console.log(withWhom);
  //   if (e.target.value == "All") console.log("y");
  const fetchFiltered = (filter = "All", sort = "reviewDate") => {
    const filtered =
      // filter === "All"
      //   ? memberType
      //   : memberType.filter((data) => {
      //       return data.traveledWith.includes(filter);
      //     });
      filter === "All"
        ? memberType.sort((a, b) =>
            sort === "tripDate"
              ? new Date(a.travelDate) - new Date(b.travelDate)
              : new Date(a.entryDate) - new Date(b.entryDate)
          )
        : memberType
            .filter((data) => {
              return data.traveledWith.includes(filter);
            })
            .sort((a, b) =>
              sort === "tripDate"
                ? new Date(a.travelDate) - new Date(b.travelDate)
                : new Date(a.entryDate) - new Date(b.entryDate)
            );
    setWithWhom(filtered);

    setPageCount(Math.ceil(filtered.length / accomodationsPerPage));
  };
  const changePage = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  const handleFilterBy = (e) => {
    fetchFiltered(e.target.value);
  };

  const handeSortBy = (e) => {
    const value = e.target.value;
    fetchFiltered(undefined, value);
    setSortBy(value);
  };

  return (
    <div className="accommodations_list">
      <div className="filter_sort">
        <div className="filtter_title">
          Filter reviews by{" "}
          <span className="filter_subtitle">(with whom was the trip):</span>
        </div>
        <div className="filtter_sort_inputs">
          <div className="filtter_input">
            <select
              name="All"
              className="fillter_with_who"
              onChange={handleFilterBy}
            >
              <option value="All">All</option>
              {unique?.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="sort_input">
            <span>Sort by :</span>
            <label>
              <input
                type="radio"
                name="Date"
                checked={sortBy === "reviewDate"}
                value="reviewDate"
                onClick={handeSortBy}
              />{" "}
              Review date
            </label>
            <label>
              <input
                type="radio"
                name="Date"
                checked={sortBy === "tripDate"}
                value="tripDate"
                onClick={handeSortBy}
              />
              Trip date
            </label>
          </div>
        </div>
      </div>
      <div className="view_pagination">
        <div>
          {pageCount > 1 && (
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              nextLinkClassName={"nextBttn"}
              previousClassName={"previousBttn"}
              disabledClassName={"paginationDisable"}
              activeClassName={"paginationActive"}
            />
          )}
        </div>
        <div className="pagination_note">Show 1-5 out of 200 Reviews</div>
      </div>

      <div> {<Accommodation AllAccommodations={currentAccomodations} />}</div>
    </div>
  );
}

export default FilterByWithWhom;
