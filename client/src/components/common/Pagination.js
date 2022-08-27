import React from "react";
import PropTypes from "prop-types";
export default function Pagination({ cardsperPage, totalCards, paginate }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalCards / cardsperPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumber.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  cardsperPage: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
