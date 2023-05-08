import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilteredMovies } from "application/redux/moviesSlice";
import { setFilteredSeries } from "application/redux/seriesSlice";
import { RootState, Show } from "interfaces";
import { Calendar } from "ui/components/Calendar";
import searchIcon from "assets/search icon.svg";
import calendarIcon from "assets/calendar icon.svg";

import "./SearchBar.scss";

interface SearchBarProps {
  programType: "movies" | "series";
}

export function SearchBar({ programType }: SearchBarProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedYear, setSelectedYear] = useState<number | null>();
  const { fullCatalog } = useSelector((state: RootState) =>
    programType === "movies" ? state.movies : state.series
  );
  const dispatch = useDispatch();
  const yearPickerButtonRef = useRef<HTMLButtonElement>(null);

  /* 
  Restarts searchTerm and selectedYear when user changes program type
  */
  useEffect(() => {
    searchTerm != "" && setSearchTerm("");
    typeof selectedYear == "number" && setSelectedYear(null);
  }, [programType]);

  /* 
  Filters the full catalog according to searchTerm and selectedYear
  and dispatches the filtered list updating redux store
  */
  useEffect(() => {
    const results: Show[] = fullCatalog
      ? fullCatalog.filter((show: Show) =>
        show.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedYear === undefined || selectedYear === null || show.releaseYear === selectedYear)
      )
      : [];
    programType === "movies"
      ? dispatch(setFilteredMovies(results))
      : dispatch(setFilteredSeries(results));
  }, [searchTerm, selectedYear, fullCatalog, dispatch, programType]);

  function handleClickOutside(event: MouseEvent) {
    if (!(yearPickerButtonRef?.current?.contains(event.target as Node))) {
      setShowCalendar(false);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  };

  function handleYearChange(year: number) {
    setSelectedYear(year);
    setShowCalendar(false);
  }

  return (
    <div className="search-bar" data-testid="search-bar-div">
      <img className="search-icon" width={24} src={searchIcon} alt="search icon" />
      <input
        className="search-bar-input"
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Title"
      />
      <button
        ref={yearPickerButtonRef}
        className="year-picker-button-container"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <img width={24} src={calendarIcon} alt="calendar icon" />
        <p>{selectedYear || "Year"}</p>
      </button>
      {showCalendar &&
        <Calendar
          selectedYear={selectedYear}
          handleYearChange={handleYearChange}
          handleClickOutside={handleClickOutside}
          allYears={Array.from({ length: 96 }, (_, i) => 2023 - i)}
        />}
    </div>
  );
}



