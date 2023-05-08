import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, Show } from "interfaces";
import { Card } from "ui/components/Card";
import leftArrow from "assets/left arrow.svg";
import rigthArrow from "assets/right arrow.svg";

import "./Selector.scss";

interface ShowsSelectorProps {
  programType: "movies" | "series";
}

export function Selector({programType}: ShowsSelectorProps): JSX.Element {
  const { filteredCatalog } = useSelector((state: RootState) =>
  (programType === "movies" ? state.movies : state.series)
);
  const [selectedCard, setSelectedCard] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 10;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const cardsToShow = filteredCatalog.slice(startIndex, endIndex);

  /* 
  When there is a change in the filtered catalog,
  the page will be set to 1 and no card will be selected
  */
  useEffect(() => {
    setCurrentPage(1);
    setSelectedCard("");
  }, [filteredCatalog]);

  const pages = Array.from({ length: Math.ceil(filteredCatalog.length / cardsPerPage) }, (_, i) => i + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = endIndex >= filteredCatalog.length;

  function handleSelectCard(cardTitle) {
    setSelectedCard(cardTitle);
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    setSelectedCard("");
  }

  function handlePrevPage(): void {
    setCurrentPage((prevPage) => prevPage - 1);
    setSelectedCard("");
  }

  function handleNextPage(): void {
    setCurrentPage((prevPage) => prevPage + 1);
    setSelectedCard("");
  }

  return (
    <div className="show-selector-container" >
      <h1>{programType === "movies" ? "Popular Movies" : "Popular Series"}</h1>
      <div className="card-list-container">
        {cardsToShow.map((show: Show) => {
          return (
            <Card
              key={show.title}
              title={show.title}
              releaseYear={show.releaseYear}
              description={show.description}
              image={show.images.posterArt.url}
              handleSelectCard={handleSelectCard}
              isSelected={selectedCard === show.title} />
          )
        })}
      </div>
      <div className="pagination-container">
        <img
          className={`pagination-left-arrow ${isFirstPage ? "disabled" : ""}`}
          onClick={() => !isFirstPage && handlePrevPage()}
          width={24}
          src={leftArrow}
          alt="left arrow icon" />
        {pages.map(pageNumber =>
          <button
            key={pageNumber}
            className={`pagination-button ${currentPage === pageNumber ? "active" : ""}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        )}
        <img
          className={`pagination-right-arrow ${isLastPage ? "disabled" : ""}`}
          onClick={() => !isLastPage && handleNextPage()}
          width={24}
          src={rigthArrow}
          alt="rigth arrow icon" />
      </div>
    </div>
  );
}
