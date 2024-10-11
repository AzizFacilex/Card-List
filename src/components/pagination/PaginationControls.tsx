import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  cardsPerPage: number;
  totalCards: number;
  paginate: (pageNumber: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  cardsPerPage,
  totalCards,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="m-6 flex justify-center">
      <ul className="inline-flex -space-x-px">
        <li>
          <button
            onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
            className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-blue-100 hover:text-blue-700"
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-2 leading-tight text-gray-500 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 ${
                number === currentPage ? "bg-blue-500 text-white" : "bg-white"
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() =>
              paginate(
                currentPage < pageNumbers.length ? currentPage + 1 : currentPage
              )
            }
            className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-blue-100 hover:text-blue-700"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationControls;
