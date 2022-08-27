import React, { useState } from "react";
import ConsultantCard from "../../common/ConsultantCard";
import PropTypes from "prop-types";
import Pagination from "../../common/Pagination";
export default function BusinessSecondRow({ values, onCardClick }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(5);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = values.slice(indexOfFirstCard, indexOfLastCard);
  const content = currentCards.map((card) => (
    <ConsultantCard key={card.id} value={card} onCardClick={onCardClick} />
  ));
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      {content}
      <Pagination
        cardsperPage={cardsPerPage}
        paginate={paginate}
        totalCards={values.length}
      />
    </>
  );
}
BusinessSecondRow.propTypes = {
  values: PropTypes.array,
  onCardClick: PropTypes.func,
};
