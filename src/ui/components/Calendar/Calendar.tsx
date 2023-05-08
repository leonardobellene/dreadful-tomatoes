import { useEffect, useState, useRef } from "react";
import leftArrow from "assets/left arrow.svg";
import rigthArrow from "assets/right arrow.svg";

import './Calendar.scss';

interface CalendarProps {
  allYears: number[];
  selectedYear: number | undefined | null;
  handleYearChange: (year: number) => void;
  handleClickOutside: (event: MouseEvent) => void;
}

export function Calendar({ allYears, selectedYear, handleYearChange, handleClickOutside }: CalendarProps): JSX.Element {
  const calendarRef = useRef<HTMLDivElement>(null);
  /* 
  Handles click outside the modal. Parent component through handleClickOutside()
  decides corresponding action
  */
  useEffect(() => {
    const onOutsideClick = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        handleClickOutside(event);
      }
    };
    document.addEventListener("mousedown", onOutsideClick);
    return () => {
      document.removeEventListener("mousedown", onOutsideClick);
    };
  }, [calendarRef]);

  const [currentPage, setCurrentPage] = useState(1);
  const yearsPerPage = 12;
  const startIndex = (currentPage - 1) * yearsPerPage;
  const endIndex = startIndex + yearsPerPage;
  const yearsToShow = allYears.slice(startIndex, endIndex);

  function handlePrevPage(): void {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function handleNextPage(): void {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  const isFirstPage = currentPage === 1;
  const isLastPage = endIndex >= allYears.length;

  return (
    <div className="calendar-container" ref={calendarRef}>
      <div className="calendar-arrow"></div>
      <div className="calendar-display">
        <p>{selectedYear || "Year"}</p>
        <img className={`calendar-left-arrow ${isFirstPage ? 'disabled' : ''}`} onClick={() => !isFirstPage && handlePrevPage()} width={24} src={leftArrow} alt="left arrow icon" />
        <img className={`calendar-right-arrow ${isLastPage ? 'disabled' : ''}`} onClick={() => !isLastPage && handleNextPage()} width={24} src={rigthArrow} alt="right arrow icon" />
      </div>
      <div className="calendar-selector">
        {yearsToShow.map((year: number) => (
          <button className="calendar-button" key={year} onClick={() => handleYearChange(year)}>
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}