import { useEffect } from "react";
import { getSeries, getMovies } from "services/moviesAndSeriesService";
import { useDispatch } from "react-redux";
import { setMovieCatalog } from "application/redux/moviesSlice";
import { setSerieCatalog } from "application/redux/seriesSlice";
import { SearchBar } from "ui/components/SearchBar";
import { Selector } from "ui/components/Selector";

import "./Shows.scss";

interface ShowsProps {
  programType: "movies" | "series";
}

export function Shows({ programType }: ShowsProps): JSX.Element {
  const dispatch = useDispatch();

  /* 
  Fetch corresponding show info from API and dispatch to Redux store
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = programType === "movies" ? await getMovies() : await getSeries();
        programType === "movies" ? dispatch(setMovieCatalog(response)) : dispatch(setSerieCatalog(response));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [programType]);

  return (
    <div className="shows" data-testid="header-div">
      <SearchBar programType={programType} />
      <Selector programType={programType} />
    </div>
  );
};
