import React, { useEffect } from "react";

const Pagination = ({
  nPages,
  currentPage,
  setCurrentPage,
}: {
  nPages: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  return (
    <nav>
      <ul className="mb-10 mt-10 flex justify-center">
        <li>
          <a
            className="p-2 rounded border border-white mr-10 font-poppins text-white"
            href="#"
            onClick={prevPage}
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pagenumber, index) => (
          <li key={index}>
            <a
              className="border-b mr-10 font-poppins text-white"
              href="#"
              onClick={() => setCurrentPage(pagenumber)}
            >
              {pagenumber}
            </a>
          </li>
        ))}
        <li>
          <a
            className="p-2 rounded border border-white font-poppins text-white"
            href="#"
            onClick={nextPage}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
